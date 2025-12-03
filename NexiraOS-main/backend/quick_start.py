"""
Quick Start API Server using Simplified MMM
Faster execution for demos and development
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from datetime import datetime
from mmm_simple import SimplifiedMMM
import traceback

app = Flask(__name__)
CORS(app)

# Store models
active_models = {}
model_results = {}


@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'service': 'MMM Quick Start',
        'timestamp': datetime.now().isoformat()
    })


@app.route('/api/mmm/train', methods=['POST'])
def train_model():
    """Train simplified MMM model"""
    try:
        payload = request.json
        experiment_id = payload.get('experiment_id', f'exp_{datetime.now().timestamp()}')
        config = payload['config']
        
        # Convert to DataFrame
        df = pd.DataFrame(payload['data'])
        
        # Initialize and train model
        mmm = SimplifiedMMM(alpha=config.get('alpha', 1.0))
        mmm.fit(
            df=df,
            kpi_col=config['kpi'],
            media_cols=config['media_channels'],
            control_cols=config.get('control_vars', []),
            adstock_theta=config.get('adstock_theta', 0.5)
        )
        
        # Store model
        active_models[experiment_id] = mmm
        
        # Get results
        contributions = mmm.get_channel_contributions()
        roi = mmm.calculate_roi()
        summary = mmm.get_model_summary()
        
        # Store results
        model_results[experiment_id] = {
            'contributions': contributions.to_dict('records'),
            'roi': roi.to_dict('records'),
            'summary': summary,
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
        return jsonify({'error': 'Experiment not found'}), 404
    
    return jsonify({
        'success': True,
        'results': model_results[experiment_id]
    })


@app.route('/api/mmm/optimize', methods=['POST'])
def optimize_budget():
    """Optimize budget allocation"""
    try:
        payload = request.json
        experiment_id = payload['experiment_id']
        total_budget = payload['total_budget']
        
        if experiment_id not in active_models:
            return jsonify({'error': 'Model not found'}), 404
        
        mmm = active_models[experiment_id]
        roi_data = mmm.calculate_roi()
        
        # Allocate proportional to ROI
        total_roi = roi_data['roi'].sum()
        optimized_allocation = []
        
        for _, row in roi_data.iterrows():
            allocation_pct = row['roi'] / total_roi
            allocated_budget = total_budget * allocation_pct
            
            optimized_allocation.append({
                'channel': row['channel'],
                'allocated_budget': float(allocated_budget),
                'allocation_pct': float(allocation_pct * 100),
                'expected_roi': float(row['roi']),
                'expected_return': float(allocated_budget * row['roi'])
            })
        
        return jsonify({
            'success': True,
            'total_budget': total_budget,
            'optimized_allocation': optimized_allocation
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/mmm/scenario', methods=['POST'])
def run_scenario():
    """Run scenario analysis"""
    try:
        payload = request.json
        experiment_id = payload['experiment_id']
        scenario = payload['scenario']
        
        if experiment_id not in active_models:
            return jsonify({'error': 'Model not found'}), 404
        
        mmm = active_models[experiment_id]
        
        # Create scenario DataFrame
        scenario_df = pd.DataFrame([scenario])
        
        # Predict
        prediction = mmm.predict(scenario_df)
        
        return jsonify({
            'success': True,
            'scenario': scenario,
            'predicted_kpi': float(prediction[0])
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


if __name__ == '__main__':
    print("🚀 Starting MMM Quick Start Server...")
    print("🌐 Server running on http://localhost:5001")
    app.run(debug=True, port=5001, host='0.0.0.0')
