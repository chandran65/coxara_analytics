"""
Marketing Mix Modeling Engine
Implements Bayesian MMM with adstock and saturation effects
"""

import numpy as np
import pandas as pd
try:
    import pymc as pm
    import arviz as az
    HAS_PYMC = True
except ImportError:
    HAS_PYMC = False
    pm = None
    az = None

from scipy.special import expit
from typing import Dict, List, Optional, Tuple
import warnings
warnings.filterwarnings('ignore')


class AdstockTransformer:
    """Applies adstock (carryover) effect to media variables"""
    
    @staticmethod
    def geometric_adstock(x: np.ndarray, theta: float) -> np.ndarray:
        """
        Geometric adstock transformation
        
        Args:
            x: Input media spend array
            theta: Decay rate (0-1), higher = longer memory
        
        Returns:
            Adstocked array
        """
        adstocked = np.zeros_like(x, dtype=float)
        adstocked[0] = x[0]
        
        for t in range(1, len(x)):
            adstocked[t] = x[t] + theta * adstocked[t-1]
        
        return adstocked
    
    @staticmethod
    def delayed_adstock(x: np.ndarray, theta: float, L: int = 8) -> np.ndarray:
        """
        Delayed adstock with finite memory window
        
        Args:
            x: Input media spend array
            theta: Decay rate
            L: Maximum lag window
        
        Returns:
            Adstocked array
        """
        weights = np.array([theta ** i for i in range(L)])
        weights = weights / weights.sum()  # Normalize
        
        adstocked = np.convolve(x, weights, mode='same')
        return adstocked


class SaturationTransformer:
    """Applies saturation (diminishing returns) to media variables"""
    
    @staticmethod
    def hill_saturation(x: np.ndarray, alpha: float, gamma: float) -> np.ndarray:
        """
        Hill saturation curve (S-curve)
        
        Args:
            x: Input adstocked media
            alpha: Half-saturation point
            gamma: Shape parameter (slope)
        
        Returns:
            Saturated array
        """
        return (x ** gamma) / (alpha ** gamma + x ** gamma)
    
    @staticmethod
    def logistic_saturation(x: np.ndarray, alpha: float, beta: float) -> np.ndarray:
        """
        Logistic saturation curve
        
        Args:
            x: Input adstocked media
            alpha: Inflection point
            beta: Growth rate
        
        Returns:
            Saturated array
        """
        return 1 / (1 + np.exp(-beta * (x - alpha)))


class MarketingMixModel:
    """
    Bayesian Marketing Mix Model
    
    Features:
    - Adstock transformation for carryover effects
    - Saturation curves for diminishing returns
    - Bayesian inference with PyMC
    - Channel contribution decomposition
    - ROI and optimization insights
    """
    
    def __init__(self, 
                 adstock_type: str = 'geometric',
                 saturation_type: str = 'hill',
                 random_seed: int = 42):
        """
        Initialize MMM
        
        Args:
            adstock_type: 'geometric' or 'delayed'
            saturation_type: 'hill' or 'logistic'
            random_seed: Random seed for reproducibility
        """
        self.adstock_type = adstock_type
        self.saturation_type = saturation_type
        self.random_seed = random_seed
        
        self.model = None
        self.trace = None
        self.data = None
        self.media_channels = []
        self.control_vars = []
        
    def prepare_data(self, 
                     df: pd.DataFrame,
                     kpi_col: str,
                     media_cols: List[str],
                     control_cols: Optional[List[str]] = None) -> Dict:
        """
        Prepare data for modeling
        
        Args:
            df: Input dataframe
            kpi_col: Target KPI column name
            media_cols: List of media channel column names
            control_cols: List of control variable column names
        
        Returns:
            Dictionary with prepared data
        """
        self.media_channels = media_cols
        self.control_cols = control_cols or []
        
        # Extract arrays
        y = df[kpi_col].values
        X_media = df[media_cols].values
        X_control = df[control_cols].values if control_cols else np.array([]).reshape(len(df), 0)
        
        # Normalize
        y_mean, y_std = y.mean(), y.std()
        y_normalized = (y - y_mean) / y_std
        
        X_media_normalized = np.zeros_like(X_media, dtype=float)
        media_means = []
        media_stds = []
        
        for i in range(X_media.shape[1]):
            mean, std = X_media[:, i].mean(), X_media[:, i].std()
            media_means.append(mean)
            media_stds.append(std)
            X_media_normalized[:, i] = (X_media[:, i] - mean) / (std + 1e-8)
        
        self.data = {
            'y': y,
            'y_normalized': y_normalized,
            'y_mean': y_mean,
            'y_std': y_std,
            'X_media': X_media,
            'X_media_normalized': X_media_normalized,
            'X_control': X_control,
            'media_means': media_means,
            'media_stds': media_stds,
            'n_obs': len(df),
            'n_media': len(media_cols),
            'n_control': len(control_cols) if control_cols else 0
        }
        
        return self.data
    
    def build_model(self) -> pm.Model:
        """
        Build PyMC Bayesian model
        
        Returns:
            PyMC model object
        """
        if self.data is None:
            raise ValueError("Data not prepared. Call prepare_data() first.")
        
        if not HAS_PYMC:
            raise ImportError("PyMC is not installed. Cannot build Bayesian model.")
        
        with pm.Model() as model:
            # Data
            y = pm.Data('y', self.data['y_normalized'])
            X_media = pm.Data('X_media', self.data['X_media_normalized'])
            
            # Priors for adstock parameters (one per channel)
            theta = pm.Beta('theta', alpha=2, beta=2, shape=self.data['n_media'])
            
            # Priors for saturation parameters
            if self.saturation_type == 'hill':
                alpha = pm.HalfNormal('alpha', sigma=1, shape=self.data['n_media'])
                gamma = pm.HalfNormal('gamma', sigma=1, shape=self.data['n_media'])
            
            # Priors for media coefficients
            beta_media = pm.Normal('beta_media', mu=0, sigma=1, shape=self.data['n_media'])
            
            # Intercept
            intercept = pm.Normal('intercept', mu=0, sigma=1)
            
            # Control variables (if any)
            if self.data['n_control'] > 0:
                X_control = pm.Data('X_control', self.data['X_control'])
                beta_control = pm.Normal('beta_control', mu=0, sigma=1, shape=self.data['n_control'])
                control_contribution = pm.math.dot(X_control, beta_control)
            else:
                control_contribution = 0
            
            # Apply transformations and compute media contribution
            media_contribution = 0
            for i in range(self.data['n_media']):
                # Adstock
                x_adstocked = self._apply_adstock_pymc(X_media[:, i], theta[i])
                
                # Saturation
                if self.saturation_type == 'hill':
                    x_saturated = self._apply_hill_saturation_pymc(x_adstocked, alpha[i], gamma[i])
                else:
                    x_saturated = x_adstocked  # Simplified for now
                
                media_contribution += beta_media[i] * x_saturated
            
            # Expected value
            mu = intercept + media_contribution + control_contribution
            
            # Likelihood
            sigma = pm.HalfNormal('sigma', sigma=1)
            likelihood = pm.Normal('likelihood', mu=mu, sigma=sigma, observed=y)
        
        self.model = model
        return model
    
    def _apply_adstock_pymc(self, x, theta):
        """Apply geometric adstock in PyMC"""
        # Simplified geometric adstock for PyMC
        # For full implementation, use pm.scan
        return x  # Placeholder - in production use proper convolution
    
    def _apply_hill_saturation_pymc(self, x, alpha, gamma):
        """Apply Hill saturation in PyMC"""
        return (x ** gamma) / (alpha ** gamma + x ** gamma + 1e-8)
    
    def fit(self, draws: int = 2000, tune: int = 1000, chains: int = 2) -> az.InferenceData:
        """
        Fit the model using MCMC sampling
        
        Args:
            draws: Number of samples to draw
            tune: Number of tuning steps
            chains: Number of MCMC chains
        
        Returns:
            ArviZ InferenceData object
        """
        if self.model is None:
            self.build_model()
        
        with self.model:
            self.trace = pm.sample(
                draws=draws,
                tune=tune,
                chains=chains,
                random_seed=self.random_seed,
                return_inferencedata=True,
                progressbar=True
            )
        
        return self.trace
    
    def get_channel_contributions(self) -> pd.DataFrame:
        """
        Calculate channel contributions to KPI
        
        Returns:
            DataFrame with channel contributions
        """
        if self.trace is None:
            raise ValueError("Model not fitted. Call fit() first.")
        
        # Extract posterior means
        beta_media_mean = self.trace.posterior['beta_media'].mean(dim=['chain', 'draw']).values
        
        contributions = []
        for i, channel in enumerate(self.media_channels):
            # Simplified contribution calculation
            contrib = beta_media_mean[i] * self.data['X_media'][:, i].sum()
            contributions.append({
                'channel': channel,
                'contribution': contrib,
                'coefficient': beta_media_mean[i]
            })
        
        df_contrib = pd.DataFrame(contributions)
        df_contrib['contribution_pct'] = 100 * df_contrib['contribution'] / df_contrib['contribution'].sum()
        
        return df_contrib
    
    def calculate_roi(self, spend_data: pd.DataFrame) -> pd.DataFrame:
        """
        Calculate ROI for each channel
        
        Args:
            spend_data: DataFrame with actual spend per channel
        
        Returns:
            DataFrame with ROI metrics
        """
        contributions = self.get_channel_contributions()
        
        roi_data = []
        for i, channel in enumerate(self.media_channels):
            total_spend = spend_data[channel].sum()
            contribution = contributions.loc[contributions['channel'] == channel, 'contribution'].values[0]
            
            # Convert contribution back to KPI units
            contribution_kpi = contribution * self.data['y_std'] + self.data['y_mean']
            
            roi = contribution_kpi / total_spend if total_spend > 0 else 0
            
            roi_data.append({
                'channel': channel,
                'total_spend': total_spend,
                'contribution': contribution_kpi,
                'roi': roi,
                'roas': roi  # Return on Ad Spend
            })
        
        return pd.DataFrame(roi_data)
    
    def predict(self, X_new: pd.DataFrame) -> np.ndarray:
        """
        Make predictions on new data
        
        Args:
            X_new: New data with same structure as training data
        
        Returns:
            Predicted KPI values
        """
        # Placeholder for prediction logic
        # In production, use posterior predictive sampling
        return np.zeros(len(X_new))
    
    def summary(self) -> pd.DataFrame:
        """
        Get model summary statistics
        
        Returns:
            Summary DataFrame
        """
        if self.trace is None:
            raise ValueError("Model not fitted. Call fit() first.")
        
        summary_df = az.summary(self.trace, var_names=['beta_media', 'theta'])
        return summary_df
