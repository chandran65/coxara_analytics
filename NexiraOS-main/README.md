
# NexiraOS – Unified Data Platform with Marketing Mix Modeling

NexiraOS is a unified intelligence-driven data platform designed to support end-to-end data operations. It integrates data ingestion, processing, reasoning, and visualization into a seamless experience powered by specialized AI agents.

## 🎯 Core Capabilities

- **Unified Data Studio**: A central hub for data operations
- **Chat Agent**: Natural-language orchestrator with reasoning capabilities
- **Visualization Agent**: Automatically generates insights and interactive charts
- **Experiment Studio**: Marketing Mix Modeling (MMM) with budget optimization
- **Simulation Studio**: Advanced scenario planning (coming soon)

## 🚀 Quick Start

### Option 1: Automated Start (Recommended)

```bash
chmod +x start.sh
./start.sh
```

This will start both the React frontend and Python MMM backend.

### Option 2: Manual Start

**Terminal 1 - Frontend:**
```bash
npm install
npm run dev
```

**Terminal 2 - Backend (for MMM):**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python quick_start.py
```

## 📊 Marketing Mix Modeling

NexiraOS includes a full-featured Marketing Mix Modeling engine:

- **Bayesian MMM**: Statistical modeling with uncertainty quantification
- **Adstock Transformation**: Model carryover effects
- **Saturation Curves**: Capture diminishing returns
- **Channel Attribution**: Decompose KPI by marketing channel
- **ROI Analysis**: Calculate return on investment
- **Budget Optimization**: Find optimal allocation
- **Scenario Planning**: What-if analysis

### Try It Out

1. Start the servers (see Quick Start above)
2. Navigate to **Data Studio** → **Connect Source**
3. Upload `backend/sample_marketing_data.csv`
4. Go to **Experiment Studio**
5. Configure your model and click **Train Model**

See [MMM_GUIDE.md](MMM_GUIDE.md) for detailed instructions.

## 💡 Usage Examples

### Data Studio
- Upload CSV files
- Explore data with the Chat Agent
- Generate automatic visualizations

### Chat Interface
Try commands like:
- "Show me sales data"
- "Analyze the trend"
- "What are the unique values in the model column?"
- "Create a bar chart of sales by channel"

### Experiment Studio
- Map variables (KPI, media channels, controls)
- Train Marketing Mix Models
- Analyze channel contributions
- Optimize budget allocation

## 🛠 Tech Stack

**Frontend:**
- React 19 + Vite
- Tailwind CSS
- Recharts for visualization
- Lucide React icons

**Backend (MMM):**
- Python 3.9+
- Flask for API
- scikit-learn for modeling
- PyMC for Bayesian inference (optional)

## 📁 Project Structure

```
NexiraOS/
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── pages/             # Page components
│   ├── lib/               # Utilities and API clients
│   └── App.jsx            # Main app
├── backend/               # Python MMM engine
│   ├── mmm_engine.py      # Full Bayesian MMM
│   ├── mmm_simple.py      # Simplified MMM
│   ├── quick_start.py     # Flask API server
│   └── sample_marketing_data.csv
├── start.sh               # Automated startup script
└── MMM_GUIDE.md          # Detailed MMM guide
```

## 📚 Documentation

- [MMM User Guide](MMM_GUIDE.md) - Complete guide to Marketing Mix Modeling
- [Backend README](backend/README.md) - API documentation

## 🎓 Learn More

- [Marketing Mix Modeling](https://en.wikipedia.org/wiki/Marketing_mix_modeling)
- [PyMC Marketing](https://www.pymc-marketing.io/)
- [Adstock Transformation](https://en.wikipedia.org/wiki/Advertising_adstock)
