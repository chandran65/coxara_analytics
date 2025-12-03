# Marketing Mix Modeling Backend

Python-based MMM engine with Flask API for NexiraOS.

## Features

- **Bayesian MMM**: PyMC-based probabilistic modeling
- **Adstock Transformation**: Geometric and delayed adstock effects
- **Saturation Curves**: Hill and logistic saturation modeling
- **Channel Attribution**: Decompose KPI contributions by channel
- **ROI Analysis**: Calculate return on investment for each channel
- **Budget Optimization**: Optimize allocation across channels
- **Scenario Analysis**: What-if simulation capabilities

## Installation

1. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

```bash
python api_server.py
```

Server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Validate Data
```
POST /api/mmm/validate-data
```

### Train Model
```
POST /api/mmm/train
```

### Get Results
```
GET /api/mmm/results/<experiment_id>
```

### Optimize Budget
```
POST /api/mmm/optimize
```

### Run Scenario
```
POST /api/mmm/scenario
```

### List Experiments
```
GET /api/mmm/experiments
```

## Example Usage

See `example_usage.py` for complete examples.

## Model Architecture

1. **Data Preparation**: Normalize inputs, handle missing values
2. **Adstock**: Apply carryover effects to media variables
3. **Saturation**: Model diminishing returns
4. **Bayesian Regression**: Estimate coefficients with uncertainty
5. **Decomposition**: Attribute KPI to channels
6. **Optimization**: Find optimal budget allocation

## Requirements

- Python 3.9+
- PyMC 5.x
- Flask 3.x
- Pandas, NumPy, SciPy
