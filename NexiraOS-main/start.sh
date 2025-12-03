#!/bin/bash

# NexiraOS MMM Quick Start Script

echo "🚀 Starting NexiraOS with Marketing Mix Modeling"
echo "=================================================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.9 or higher."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

echo "✅ Python and Node.js found"
echo ""

# Setup Python backend
echo "📦 Setting up Python backend..."
cd backend

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing Python dependencies..."
pip install -q -r requirements.txt

echo "✅ Backend setup complete"
echo ""

# Start backend server in background
echo "🔧 Starting MMM API server..."
python quick_start.py &
BACKEND_PID=$!
echo "Backend PID: $BACKEND_PID"

# Wait for backend to start
sleep 3

# Go back to root and start frontend
cd ..

echo ""
echo "🎨 Starting React frontend..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "=================================================="
echo "✅ NexiraOS is running!"
echo "=================================================="
echo ""
echo "📊 Frontend: http://localhost:5173"
echo "🔧 Backend API: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Wait for Ctrl+C
trap "echo ''; echo '🛑 Stopping services...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
