"""
Flask API Server for Marketing Mix Modeling
Provides endpoints for model training, prediction, and analysis
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import json
import os
from datetime import datetime
try:
    from mmm_engine import MarketingMixModel
except ImportError:
    MarketingMixModel = None
from mmm_simple import SimplifiedMMM
import traceback

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Store active models in memory (in production, use Redis or database)
active_models = {}
model_results = {}

# Data storage directory
if os.environ.get('VERCEL'):
    DATA_DIR = os.path.join('/tmp', 'data')
else:
    DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
os.makedirs(DATA_DIR, exist_ok=True)


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'MMM Engine',
        'timestamp': datetime.now().isoformat()
    })


@app.route('/api/mmm/validate-data', methods=['POST'])
def validate_data():
    """
    Validate uploaded data for MMM
    
    Expected payload:
    {
        "data": [...],  # Array of data rows
        "kpi": "sales",
        "media_channels": ["TV", "radio", "newspaper"],
        "control_vars": ["seasonality", "price"]
    }
    """
    try:
        payload = request.json
        
        # Convert to DataFrame
        df = pd.DataFrame(payload['data'])
        kpi_col = payload['kpi']
        media_cols = payload['media_channels']
        control_cols = payload.get('control_vars', [])
        
        # Validation checks
        errors = []
        warnings = []
        
        # Check if columns exist
        all_cols = [kpi_col] + media_cols + control_cols
        missing_cols = [col for col in all_cols if col not in df.columns]
        if missing_cols:
            errors.append(f"Missing columns: {', '.join(missing_cols)}")
        
        # Check for sufficient data
        if len(df) < 52:
            warnings.append(f"Only {len(df)} observations. Recommend at least 52 (1 year weekly data)")
        
        # Check for missing values
        if df[all_cols].isnull().any().any():
            warnings.append("Data contains missing values. These will be imputed.")
        
        # Check for zero variance
        zero_var_cols = [col for col in media_cols if df[col].std() == 0]
        if zero_var_cols:
            errors.append(f"Zero variance in channels: {', '.join(zero_var_cols)}")
        
        # Check for negative values in media spend
        negative_cols = [col for col in media_cols if (df[col] < 0).any()]
        if negative_cols:
            errors.append(f"Negative values in channels: {', '.join(negative_cols)}")
        
        # Data summary
        summary = {
            'n_observations': len(df),
            'n_media_channels': len(media_cols),
            'n_control_vars': len(control_cols),
            'date_range': {
                'start': df.index[0] if isinstance(df.index[0], str) else str(df.index[0]),
                'end': df.index[-1] if isinstance(df.index[-1], str) else str(df.index[-1])
            } if len(df) > 0 else None,
            'kpi_stats': {
                'mean': float(df[kpi_col].mean()),
                'std': float(df[kpi_col].std()),
                'min': float(df[kpi_col].min()),
                'max': float(df[kpi_col].max())
            }
        }
        
        return jsonify({
            'valid': len(errors) == 0,
            'errors': errors,
            'warnings': warnings,
            'summary': summary
        })
        
    except Exception as e:
        return jsonify({
            'valid': False,
            'errors': [str(e)],
            'traceback': traceback.format_exc()
        }), 400


@app.route('/api/mmm/train', methods=['POST'])
def train_model():
    """
    Train a new MMM model
    
    Expected payload:
    {
        "experiment_id": "exp_123",
        "data": [...],
        "config": {
            "kpi": "sales",
            "media_channels": ["TV", "radio", "newspaper"],
            "control_vars": ["seasonality"],
            "adstock_type": "geometric",
            "saturation_type": "hill",
            "mcmc_draws": 2000,
            "mcmc_tune": 1000,
            "mcmc_chains": 2
        }
    }
    """
    try:
        payload = request.json
        experiment_id = payload['experiment_id']
        config = payload['config']
        
        # Convert to DataFrame
        df = pd.DataFrame(payload['data'])
        
        # Initialize model
        # Use SimplifiedMMM if on Vercel or if PyMC is missing
        use_simple = os.environ.get('VERCEL') or MarketingMixModel is None
        
        if not use_simple:
            try:
                mmm = MarketingMixModel(
                    adstock_type=config.get('adstock_type', 'geometric'),
                    saturation_type=config.get('saturation_type', 'hill'),
                    random_seed=42
                )
            except ImportError:
                use_simple = True
        
        if use_simple:
            print("Using SimplifiedMMM (Ridge Regression)")
            mmm = SimplifiedMMM()
            # Map config to simple model params if needed
            # For now, simple model uses defaults
        
        # Prepare data
        mmm.prepare_data(
            df=df,
            kpi_col=config['kpi'],
            media_cols=config['media_channels'],
            control_cols=config.get('control_vars', [])
        )
        
        # Build and fit model
        if hasattr(mmm, 'build_model'):
            mmm.build_model()
            
            # For demo purposes, use smaller MCMC settings
            trace = mmm.fit(
                draws=config.get('mcmc_draws', 500),  # Reduced for speed
                tune=config.get('mcmc_tune', 500),
                chains=config.get('mcmc_chains', 2)
            )
        else:
            # Simple model fit
            mmm.fit(
                df=df,
                kpi_col=config['kpi'],
                media_cols=config['media_channels'],
                control_cols=config.get('control_vars', [])
            )
        
        # Store model
        active_models[experiment_id] = mmm
        
        # Calculate results
        contributions = mmm.get_channel_contributions()
        if hasattr(mmm, 'build_model'):
             roi = mmm.calculate_roi(df[config['media_channels']])
        else:
             roi = mmm.calculate_roi()
        
        # Store results
        summary_data = {}
        if hasattr(mmm, 'summary'):
            # Check if summary returns a DataFrame or Dict
            s = mmm.summary()
            summary_data = s.to_dict() if hasattr(s, 'to_dict') else s
        elif hasattr(mmm, 'get_model_summary'):
            summary_data = mmm.get_model_summary()

        model_results[experiment_id] = {
            'contributions': contributions.to_dict('records'),
            'roi': roi.to_dict('records'),
            'summary': summary_data,
            'config': config,
            'trained_at': datetime.now().isoformat()
        }
        
        return jsonify({
            'success': True,
            'experiment_id': experiment_id,
            'message': 'Model trained successfully',
            'results': model_results[experiment_id]
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e),
            'traceback': traceback.format_exc()
        }), 500


@app.route('/api/mmm/results/<experiment_id>', methods=['GET'])
def get_results(experiment_id):
    """Get results for a trained model"""
    if experiment_id not in model_results:
        return jsonify({
            'error': 'Experiment not found'
        }), 404
    
    return jsonify({
        'success': True,
        'results': model_results[experiment_id]
    })


@app.route('/api/mmm/contributions/<experiment_id>', methods=['GET'])
def get_contributions(experiment_id):
    """Get channel contributions"""
    if experiment_id not in active_models:
        return jsonify({'error': 'Model not found'}), 404
    
    mmm = active_models[experiment_id]
    contributions = mmm.get_channel_contributions()
    
    return jsonify({
        'success': True,
        'contributions': contributions.to_dict('records')
    })


@app.route('/api/mmm/optimize', methods=['POST'])
def optimize_budget():
    """
    Optimize budget allocation across channels
    
    Expected payload:
    {
        "experiment_id": "exp_123",
        "total_budget": 100000,
        "constraints": {
            "TV": {"min": 0.2, "max": 0.5},
            "radio": {"min": 0.1, "max": 0.4}
        }
    }
    """
    try:
        payload = request.json
        experiment_id = payload['experiment_id']
        total_budget = payload['total_budget']
        constraints = payload.get('constraints', {})
        
        if experiment_id not in active_models:
            return jsonify({'error': 'Model not found'}), 404
        
        mmm = active_models[experiment_id]
        
        # Simple optimization: allocate proportional to ROI
        # In production, use scipy.optimize or similar
        if hasattr(mmm, 'build_model'):
            roi_data = mmm.calculate_roi(
                pd.DataFrame({ch: [1000] for ch in mmm.media_channels})  # Dummy spend
            )
        else:
            # SimplifiedMMM uses internal data for ROI, which might not be ideal for "what-if" optimization
            # But for now, we just use the historical ROI
            roi_data = mmm.calculate_roi()
        
        # Sort by ROI
        roi_data = roi_data.sort_values('roi', ascending=False)
        
        # Allocate budget proportionally
        total_roi = roi_data['roi'].sum()
        optimized_allocation = []
        
        for _, row in roi_data.iterrows():
            channel = row['channel']
            allocation_pct = row['roi'] / total_roi
            
            # Apply constraints if specified
            if channel in constraints:
                allocation_pct = max(constraints[channel].get('min', 0), 
                                   min(constraints[channel].get('max', 1), allocation_pct))
            
            allocated_budget = total_budget * allocation_pct
            
            optimized_allocation.append({
                'channel': channel,
                'allocated_budget': allocated_budget,
                'allocation_pct': allocation_pct * 100,
                'expected_roi': row['roi'],
                'expected_return': allocated_budget * row['roi']
            })
        
        # Normalize to ensure total = 100%
        total_allocated = sum(item['allocated_budget'] for item in optimized_allocation)
        for item in optimized_allocation:
            item['allocated_budget'] = (item['allocated_budget'] / total_allocated) * total_budget
        
        return jsonify({
            'success': True,
            'total_budget': total_budget,
            'optimized_allocation': optimized_allocation,
            'expected_total_return': sum(item['expected_return'] for item in optimized_allocation)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e),
            'traceback': traceback.format_exc()
        }), 500


@app.route('/api/mmm/scenario', methods=['POST'])
def run_scenario():
    """
    Run what-if scenario analysis
    
    Expected payload:
    {
        "experiment_id": "exp_123",
        "scenario": {
            "TV": 50000,
            "radio": 30000,
            "newspaper": 20000
        }
    }
    """
    try:
        payload = request.json
        experiment_id = payload['experiment_id']
        scenario = payload['scenario']
        
        if experiment_id not in active_models:
            return jsonify({'error': 'Model not found'}), 404
        
        mmm = active_models[experiment_id]
        
        # Create scenario DataFrame
        scenario_df = pd.DataFrame([scenario])
        
        # Predict (simplified - in production use proper prediction)
        # For now, return estimated impact based on coefficients
        contributions = mmm.get_channel_contributions()
        
        total_impact = 0
        channel_impacts = []
        
        for channel, spend in scenario.items():
            if channel in mmm.media_channels:
                # Find coefficient
                coef = contributions.loc[contributions['channel'] == channel, 'coefficient'].values[0]
                impact = coef * spend
                total_impact += impact
                
                channel_impacts.append({
                    'channel': channel,
                    'spend': spend,
                    'estimated_impact': impact
                })
        
        return jsonify({
            'success': True,
            'scenario': scenario,
            'total_estimated_impact': total_impact,
            'channel_impacts': channel_impacts
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e),
            'traceback': traceback.format_exc()
        }), 500


@app.route('/api/mmm/experiments', methods=['GET'])
def list_experiments():
    """List all active experiments"""
    experiments = []
    for exp_id, results in model_results.items():
        experiments.append({
            'experiment_id': exp_id,
            'trained_at': results['trained_at'],
            'n_channels': len(results['config']['media_channels']),
            'kpi': results['config']['kpi']
        })
    
    return jsonify({
        'success': True,
        'experiments': experiments
    })


if __name__ == '__main__':
    print("🚀 Starting MMM API Server...")
    print("📊 Endpoints available:")
    print("  - POST /api/mmm/validate-data")
    print("  - POST /api/mmm/train")
    print("  - GET  /api/mmm/results/<experiment_id>")
    print("  - POST /api/mmm/optimize")
    print("  - POST /api/mmm/scenario")
    print("  - GET  /api/mmm/experiments")
    print("\n🌐 Server running on http://localhost:5000")
    
    app.run(debug=True, port=5000, host='0.0.0.0')
