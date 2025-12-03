# NexiraOS - Marketing Mix Modeling Guide

## 🎯 What is Marketing Mix Modeling?

Marketing Mix Modeling (MMM) is a statistical analysis technique that helps you understand:
- **Channel Attribution**: Which marketing channels drive the most impact?
- **ROI Analysis**: What's the return on investment for each channel?
- **Budget Optimization**: How should you allocate your budget for maximum impact?
- **Scenario Planning**: What happens if you change your media spend?

## 🚀 Quick Start

### 1. Start the Servers

**Option A: Automated (Recommended)**
```bash
chmod +x start.sh
./start.sh
```

**Option B: Manual**

Terminal 1 - Backend:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python quick_start.py
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### 2. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📊 Using the Experiment Studio

### Step 1: Prepare Your Data

Your data should have:
- **Date column**: Time series data (weekly or daily)
- **KPI column**: Your target metric (sales, conversions, revenue, etc.)
- **Media columns**: Spend or impressions for each channel (TV, Radio, Digital, etc.)
- **Control columns** (optional): Seasonality, price, promotions, etc.

Example CSV structure:
```csv
date,sales,TV,radio,newspaper,price,seasonality
2024-01-01,50000,10000,5000,2000,99,0.8
2024-01-08,52000,12000,5500,2200,99,0.9
...
```

### Step 2: Connect Data Source

1. Go to **Data Studio**
2. Click **Connect Source**
3. Upload your CSV file
4. Navigate to **Experiment Studio**

### Step 3: Configure Your Model

1. **Experiment Name**: Give your experiment a descriptive name
2. **Select KPI**: Choose your response variable (e.g., "sales")
3. **Select Media Channels**: Check the boxes for your paid media channels
4. **Select Control Variables** (optional): Add seasonality, price, etc.
5. **Adjust Parameters**:
   - **Adstock Decay (θ)**: 0.3-0.7 for most cases
     - Higher = longer carryover effect
     - TV typically has higher adstock than digital
   - **Regularization (α)**: 1.0 is a good starting point
     - Increase if model is overfitting

### Step 4: Train the Model

Click **Train Model** and wait for the analysis to complete (usually 10-30 seconds).

### Step 5: Analyze Results

The results page shows:

1. **Model Quality**
   - R² Score: How well the model fits (>70% is good)
   
2. **Channel Contributions**
   - Pie chart showing % contribution of each channel to your KPI
   
3. **ROI by Channel**
   - Bar chart showing return on investment for each channel
   
4. **Budget Optimization**
   - Enter your total budget
   - Click "Optimize" to see recommended allocation
   - Allocation is based on marginal ROI

## 🧪 Model Parameters Explained

### Adstock (Carryover Effect)

Adstock models the delayed and prolonged effect of advertising:
- **θ = 0**: No carryover (immediate effect only)
- **θ = 0.5**: Moderate carryover (typical for digital)
- **θ = 0.8**: Strong carryover (typical for TV/brand campaigns)

Formula: `adstocked[t] = spend[t] + θ × adstocked[t-1]`

### Saturation (Diminishing Returns)

Saturation models the fact that doubling spend doesn't double impact:
- Captured automatically by the model
- Ensures realistic predictions at different spend levels

## 📈 Interpreting Results

### Channel Contribution %
- Shows relative importance of each channel
- Sum = 100%
- Example: TV = 40%, Digital = 35%, Radio = 25%

### ROI (Return on Investment)
- ROI = Incremental KPI / Spend
- Example: ROI = 2.5 means $1 spent generates $2.50 in KPI value
- Compare across channels to find winners

### Optimized Budget Allocation
- Based on marginal ROI (next dollar impact)
- Channels with higher marginal ROI get more budget
- Respects diminishing returns

## 🎓 Best Practices

### Data Requirements
- **Minimum**: 52 weeks of data (1 year)
- **Recommended**: 104+ weeks (2 years)
- **Frequency**: Weekly is ideal, daily works too
- **Consistency**: Same measurement period for all variables

### Model Configuration
- Start with simple model (fewer controls)
- Add complexity gradually
- Validate results against business intuition
- Test multiple adstock values

### Validation
- Check if R² > 0.7
- Verify coefficients are positive for media channels
- Compare results with historical performance
- Run sensitivity analysis

## 🔧 Troubleshooting

### "MMM Server Offline"
```bash
cd backend
source venv/bin/activate
python quick_start.py
```

### "Training Failed"
- Check that you have at least 2 media channels selected
- Ensure no columns have zero variance
- Verify no negative values in media spend
- Check for missing data

### Poor Model Fit (Low R²)
- Add more control variables (seasonality, trends)
- Try different adstock values
- Check for data quality issues
- Consider longer time period

### Unrealistic ROI Values
- Check units (ensure spend and KPI are in same currency)
- Verify data quality
- Adjust regularization parameter
- Consider log-transforming variables

## 🚀 Advanced Features (Coming Soon)

- Hierarchical models for multi-geography
- Time-varying coefficients
- Competitive effects
- Cross-channel synergies
- Automated hyperparameter tuning

## 📚 Learn More

- [PyMC Marketing Documentation](https://www.pymc-marketing.io/)
- [Marketing Mix Modeling Guide](https://en.wikipedia.org/wiki/Marketing_mix_modeling)
- [Adstock Transformation](https://en.wikipedia.org/wiki/Advertising_adstock)

## 💡 Example Use Cases

1. **Budget Planning**: Optimize Q1 2025 media budget
2. **Channel Evaluation**: Should we invest more in TV or Digital?
3. **Scenario Analysis**: What if we cut radio by 20%?
4. **ROI Reporting**: Prove marketing effectiveness to stakeholders
5. **Incrementality**: Measure true incremental impact of campaigns

---

**Need Help?** Check the backend logs or frontend console for detailed error messages.
