"""
Simplified MMM Engine for Quick Demo
Uses scikit-learn for faster execution without full Bayesian inference
"""

import numpy as np
import pandas as pd
from sklearn.linear_model import Ridge
from sklearn.preprocessing import StandardScaler
from typing import Dict, List, Optional
import warnings
warnings.filterwarnings('ignore')


class SimplifiedMMM:
    """
    Simplified Marketing Mix Model using Ridge Regression
    Faster than full Bayesian model, suitable for demos and quick analysis
    """
    
    def __init__(self, alpha: float = 1.0):
        """
        Initialize simplified MMM
        
        Args:
            alpha: Regularization strength
        """
        self.alpha = alpha
        self.model = Ridge(alpha=alpha)
        self.scaler_X = StandardScaler()
        self.scaler_y = StandardScaler()
        
        self.media_channels = []
        self.control_vars = []
        self.is_fitted = False
        
    def apply_adstock(self, x: np.ndarray, theta: float = 0.5) -> np.ndarray:
        """Apply geometric adstock transformation"""
        adstocked = np.zeros_like(x, dtype=float)
        adstocked[0] = x[0]
        
        for t in range(1, len(x)):
            adstocked[t] = x[t] + theta * adstocked[t-1]
        
        return adstocked
    
    def apply_saturation(self, x: np.ndarray, alpha: float = 0.5) -> np.ndarray:
        """Apply simple saturation curve"""
        return x / (x + alpha)
    
    def fit(self, 
            df: pd.DataFrame,
            kpi_col: str,
            media_cols: List[str],
            control_cols: Optional[List[str]] = None,
            adstock_theta: float = 0.5) -> 'SimplifiedMMM':
        """
        Fit the model
        
        Args:
            df: Input dataframe
            kpi_col: Target KPI column
            media_cols: Media channel columns
            control_cols: Control variable columns
            adstock_theta: Adstock decay parameter
        
        Returns:
            Self
        """
        self.media_channels = media_cols
        self.control_cols = control_cols or []
        
        # Prepare features
        X_media = df[media_cols].values.copy()
        
        # Apply transformations
        X_transformed = np.zeros_like(X_media)
        for i in range(X_media.shape[1]):
            x_adstocked = self.apply_adstock(X_media[:, i], adstock_theta)
            X_transformed[:, i] = self.apply_saturation(x_adstocked)
        
        # Add control variables if any
        if control_cols:
            X_control = df[control_cols].values
            X = np.hstack([X_transformed, X_control])
        else:
            X = X_transformed
        
        # Target
        y = df[kpi_col].values.reshape(-1, 1)
        
        # Scale
        X_scaled = self.scaler_X.fit_transform(X)
        y_scaled = self.scaler_y.fit_transform(y).ravel()
        
        # Fit
        self.model.fit(X_scaled, y_scaled)
        self.is_fitted = True
        
        # Store original data for analysis
        self.X_original = X
        self.y_original = y
        self.df_original = df
        
        return self
    
    def get_channel_contributions(self) -> pd.DataFrame:
        """Calculate channel contributions"""
        if not self.is_fitted:
            raise ValueError("Model not fitted")
        
        # Get coefficients
        coefs = self.model.coef_[:len(self.media_channels)]
        
        # Calculate contributions
        contributions = []
        X_media_scaled = self.scaler_X.transform(self.X_original)[:, :len(self.media_channels)]
        
        for i, channel in enumerate(self.media_channels):
            contrib = (coefs[i] * X_media_scaled[:, i]).sum()
            contributions.append({
                'channel': channel,
                'contribution': contrib,
                'coefficient': coefs[i]
            })
        
        df_contrib = pd.DataFrame(contributions)
        total_contrib = df_contrib['contribution'].abs().sum()
        df_contrib['contribution_pct'] = 100 * df_contrib['contribution'].abs() / total_contrib
        
        return df_contrib
    
    def calculate_roi(self) -> pd.DataFrame:
        """Calculate ROI for each channel"""
        if not self.is_fitted:
            raise ValueError("Model not fitted")
        
        contributions = self.get_channel_contributions()
        
        roi_data = []
        for i, channel in enumerate(self.media_channels):
            total_spend = self.df_original[channel].sum()
            contribution = contributions.loc[contributions['channel'] == channel, 'contribution'].values[0]
            
            # Convert back to original scale
            contribution_original = contribution * self.scaler_y.scale_[0] + self.scaler_y.mean_[0]
            
            roi = contribution_original / total_spend if total_spend > 0 else 0
            
            roi_data.append({
                'channel': channel,
                'total_spend': total_spend,
                'contribution': contribution_original,
                'roi': roi,
                'roas': roi
            })
        
        return pd.DataFrame(roi_data)
    
    def predict(self, df: pd.DataFrame, adstock_theta: float = 0.5) -> np.ndarray:
        """Make predictions"""
        if not self.is_fitted:
            raise ValueError("Model not fitted")
        
        # Apply same transformations
        X_media = df[self.media_channels].values.copy()
        X_transformed = np.zeros_like(X_media)
        
        for i in range(X_media.shape[1]):
            x_adstocked = self.apply_adstock(X_media[:, i], adstock_theta)
            X_transformed[:, i] = self.apply_saturation(x_adstocked)
        
        if self.control_cols:
            X_control = df[self.control_cols].values
            X = np.hstack([X_transformed, X_control])
        else:
            X = X_transformed
        
        X_scaled = self.scaler_X.transform(X)
        y_pred_scaled = self.model.predict(X_scaled)
        
        # Inverse transform
        y_pred = y_pred_scaled * self.scaler_y.scale_[0] + self.scaler_y.mean_[0]
        
        return y_pred
    
    def get_model_summary(self) -> Dict:
        """Get model summary"""
        if not self.is_fitted:
            raise ValueError("Model not fitted")
        
        return {
            'n_media_channels': len(self.media_channels),
            'n_control_vars': len(self.control_vars),
            'n_observations': len(self.y_original),
            'r_squared': self.model.score(
                self.scaler_X.transform(self.X_original),
                self.scaler_y.transform(self.y_original).ravel()
            ),
            'coefficients': {
                channel: float(coef) 
                for channel, coef in zip(self.media_channels, self.model.coef_[:len(self.media_channels)])
            }
        }
