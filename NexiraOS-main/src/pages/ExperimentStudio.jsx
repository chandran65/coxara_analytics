import React, { useState, useEffect } from 'react';
import { Play, Settings, TrendingUp, DollarSign, BarChart3, Zap, AlertCircle, CheckCircle, Loader, ArrowRight } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import mmmApi from '../lib/mmm-api';

const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const ExperimentStudio = ({ connectedSource }) => {
    const [step, setStep] = useState('selection'); // selection, config, training, results
    const [serverStatus, setServerStatus] = useState('checking');
    const [selectedWorkflow, setSelectedWorkflow] = useState(null);

    // Configuration
    const [config, setConfig] = useState({
        experimentName: '',
        kpi: '',
        mediaChannels: [],
        controlVars: [],
        adstockTheta: 0.5,
        alpha: 1.0
    });

    // Training state
    const [isTraining, setIsTraining] = useState(false);
    const [trainingProgress, setTrainingProgress] = useState(0);
    const [experimentId, setExperimentId] = useState(null);

    // Results
    const [results, setResults] = useState(null);
    const [optimizationBudget, setOptimizationBudget] = useState(100000);
    const [optimizedAllocation, setOptimizedAllocation] = useState(null);

    // Available columns from connected data source
    const [availableColumns, setAvailableColumns] = useState([]);

    useEffect(() => {
        checkServerStatus();

        if (connectedSource && connectedSource.columns) {
            setAvailableColumns(connectedSource.columns);
        }
    }, [connectedSource]);

    const checkServerStatus = async () => {
        const health = await mmmApi.healthCheck();
        setServerStatus(health.status === 'healthy' ? 'online' : 'offline');
    };

    const handleChannelToggle = (column) => {
        setConfig(prev => ({
            ...prev,
            mediaChannels: prev.mediaChannels.includes(column)
                ? prev.mediaChannels.filter(c => c !== column)
                : [...prev.mediaChannels, column]
        }));
    };

    const handleControlToggle = (column) => {
        setConfig(prev => ({
            ...prev,
            controlVars: prev.controlVars.includes(column)
                ? prev.controlVars.filter(c => c !== column)
                : [...prev.controlVars, column]
        }));
    };

    const handleTrainModel = async () => {
        if (!connectedSource || !connectedSource.data) {
            alert('Please connect a data source first');
            return;
        }

        if (!config.kpi || config.mediaChannels.length === 0) {
            alert('Please select KPI and at least one media channel');
            return;
        }

        setIsTraining(true);
        setStep('training');
        setTrainingProgress(0);

        try {
            // Simulate progress
            const progressInterval = setInterval(() => {
                setTrainingProgress(prev => Math.min(prev + 10, 90));
            }, 500);

            const response = await mmmApi.trainModel(connectedSource.data, {
                experimentId: `exp_${Date.now()}`,
                kpi: config.kpi,
                mediaChannels: config.mediaChannels,
                controlVars: config.controlVars,
                adstockTheta: config.adstockTheta,
                alpha: config.alpha
            });

            clearInterval(progressInterval);
            setTrainingProgress(100);

            if (response.success) {
                setExperimentId(response.experiment_id);
                setResults(response.results);
                setTimeout(() => setStep('results'), 500);
            } else {
                alert('Training failed: ' + response.error);
                setStep('config');
            }
        } catch (error) {
            console.error('Training error:', error);
            alert('Training failed: ' + error.message);
            setStep('config');
        } finally {
            setIsTraining(false);
        }
    };

    const handleOptimizeBudget = async () => {
        if (!experimentId) return;

        try {
            const response = await mmmApi.optimizeBudget(experimentId, optimizationBudget);
            if (response.success) {
                setOptimizedAllocation(response.optimized_allocation);
            }
        } catch (error) {
            console.error('Optimization error:', error);
            alert('Optimization failed: ' + error.message);
        }
    };

    // Render different steps
    if (serverStatus === 'offline') {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">Experiment Studio</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-900 mb-2">MMM Server Offline</h3>
                            <p className="text-amber-800 mb-4">
                                The Marketing Mix Modeling backend server is not running.
                            </p>
                            <div className="bg-slate-900 text-green-400 p-4 rounded font-mono text-sm">
                                <div>cd backend</div>
                                <div>python3 -m venv venv</div>
                                <div>source venv/bin/activate</div>
                                <div>pip install -r requirements.txt</div>
                                <div>python quick_start.py</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!connectedSource) {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">Experiment Studio</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-900 mb-2">Connect Data Source</h3>
                    <p className="text-blue-800">
                        Please connect a data source from the Data Studio to begin MMM experimentation.
                    </p>
                </div>
            </div>
        );
    }

    if (step === 'selection') {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Experiment Studio</h2>
                        <p className="text-sm text-slate-600 mt-1">Select an analytical workflow to begin</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Server Online</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* MMX Card */}
                    <div
                        onClick={() => {
                            setSelectedWorkflow('mmx');
                            setStep('config');
                        }}
                        className="bg-white p-6 rounded-xl border border-slate-200 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer group"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BarChart3 className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Marketing Mix Modeling</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            Analyze channel performance, calculate ROI, and optimize budget allocation using Bayesian methods.
                        </p>
                        <div className="flex items-center gap-2 text-purple-600 text-sm font-medium">
                            <span>Start Analysis</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* MTA Card */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 opacity-75 cursor-not-allowed">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Touch Attribution</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            Track customer journeys and assign credit to touchpoints at a granular level.
                        </p>
                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">Coming Soon</span>
                    </div>

                    {/* Forecasting Card */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 opacity-75 cursor-not-allowed">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <LineChart className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Demand Forecasting</h3>
                        <p className="text-slate-600 text-sm mb-4">
                            Predict future sales and trends based on historical data and seasonality.
                        </p>
                        <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded">Coming Soon</span>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'config') {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Experiment Studio</h2>
                        <p className="text-sm text-slate-600 mt-1">Configure your Marketing Mix Model</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Server Online</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Experiment Name */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-4">Experiment Details</h3>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Experiment Name
                                </label>
                                <input
                                    type="text"
                                    value={config.experimentName}
                                    onChange={(e) => setConfig({ ...config, experimentName: e.target.value })}
                                    placeholder="e.g., Q4 2024 Media Mix Analysis"
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Variable Mapping */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-4">Variable Mapping</h3>

                            {/* KPI Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Response Variable (KPI)
                                    </span>
                                </label>
                                <select
                                    value={config.kpi}
                                    onChange={(e) => setConfig({ ...config, kpi: e.target.value })}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                >
                                    <option value="">Select KPI...</option>
                                    {availableColumns.map(col => (
                                        <option key={col} value={col}>{col}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Media Channels */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        Paid Media Channels
                                    </span>
                                </label>
                                <div className="space-y-2 max-h-48 overflow-y-auto border border-slate-200 rounded-lg p-3">
                                    {availableColumns.filter(col => col !== config.kpi).map(col => (
                                        <label key={col} className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded">
                                            <input
                                                type="checkbox"
                                                checked={config.mediaChannels.includes(col)}
                                                onChange={() => handleChannelToggle(col)}
                                                className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                                            />
                                            <span className="text-sm text-slate-700">{col}</span>
                                        </label>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 mt-2">
                                    Selected: {config.mediaChannels.length} channel(s)
                                </p>
                            </div>

                            {/* Control Variables */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        Control Variables (Optional)
                                    </span>
                                </label>
                                <div className="space-y-2 max-h-32 overflow-y-auto border border-slate-200 rounded-lg p-3">
                                    {availableColumns
                                        .filter(col => col !== config.kpi && !config.mediaChannels.includes(col))
                                        .map(col => (
                                            <label key={col} className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-2 rounded">
                                                <input
                                                    type="checkbox"
                                                    checked={config.controlVars.includes(col)}
                                                    onChange={() => handleControlToggle(col)}
                                                    className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                                                />
                                                <span className="text-sm text-slate-700">{col}</span>
                                            </label>
                                        ))}
                                </div>
                            </div>
                        </div>

                        {/* Model Parameters */}
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-4">Model Parameters</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Adstock Decay (θ): {config.adstockTheta.toFixed(2)}
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.05"
                                        value={config.adstockTheta}
                                        onChange={(e) => setConfig({ ...config, adstockTheta: parseFloat(e.target.value) })}
                                        className="w-full"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        Controls carryover effect. Higher = longer memory.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Regularization (α): {config.alpha.toFixed(2)}
                                    </label>
                                    <input
                                        type="range"
                                        min="0.1"
                                        max="10"
                                        step="0.1"
                                        value={config.alpha}
                                        onChange={(e) => setConfig({ ...config, alpha: parseFloat(e.target.value) })}
                                        className="w-full"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        Controls model complexity. Higher = simpler model.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Panel */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
                            <h3 className="font-semibold text-slate-900 mb-4">Configuration Summary</h3>

                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="text-slate-600">Data Source:</span>
                                    <div className="font-medium text-slate-900 mt-1">
                                        {connectedSource.name || 'Connected'}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-slate-600">Observations:</span>
                                    <div className="font-medium text-slate-900 mt-1">
                                        {connectedSource.data?.length || 0} rows
                                    </div>
                                </div>

                                <div>
                                    <span className="text-slate-600">Target KPI:</span>
                                    <div className="font-medium text-slate-900 mt-1">
                                        {config.kpi || 'Not selected'}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-slate-600">Media Channels:</span>
                                    <div className="font-medium text-slate-900 mt-1">
                                        {config.mediaChannels.length} selected
                                    </div>
                                </div>

                                <div>
                                    <span className="text-slate-600">Control Variables:</span>
                                    <div className="font-medium text-slate-900 mt-1">
                                        {config.controlVars.length} selected
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleTrainModel}
                                disabled={!config.kpi || config.mediaChannels.length === 0}
                                className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium shadow-lg shadow-purple-500/30"
                            >
                                <Play className="w-5 h-5" />
                                Train Model
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'training') {
        return (
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800">Training Model...</h2>

                <div className="bg-white rounded-xl border border-slate-200 p-12">
                    <div className="max-w-md mx-auto text-center">
                        <Loader className="w-16 h-16 text-purple-600 mx-auto mb-6 animate-spin" />
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            Training Marketing Mix Model
                        </h3>
                        <p className="text-slate-600 mb-6">
                            Analyzing {config.mediaChannels.length} media channels and fitting the model...
                        </p>

                        <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                            <div
                                className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${trainingProgress}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-slate-600">{trainingProgress}% complete</p>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'results' && results) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Experiment Results</h2>
                        <p className="text-sm text-slate-600 mt-1">
                            Experiment ID: {experimentId}
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            setStep('config');
                            setResults(null);
                            setExperimentId(null);
                        }}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                        New Experiment
                    </button>
                </div>

                {/* Model Summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                        <div className="flex items-center gap-3 mb-2">
                            <BarChart3 className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-purple-900">R² Score</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-900">
                            {(results.summary.r_squared * 100).toFixed(1)}%
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                        <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-900">Channels</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-900">
                            {results.summary.n_media_channels}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                        <div className="flex items-center gap-3 mb-2">
                            <Zap className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-green-900">Observations</span>
                        </div>
                        <div className="text-2xl font-bold text-green-900">
                            {results.summary.n_observations}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                        <div className="flex items-center gap-3 mb-2">
                            <Settings className="w-5 h-5 text-orange-600" />
                            <span className="text-sm font-medium text-orange-900">Controls</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-900">
                            {results.summary.n_control_vars}
                        </div>
                    </div>
                </div>

                {/* Channel Contributions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-900 mb-4">Channel Contributions</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={results.contributions}
                                    dataKey="contribution_pct"
                                    nameKey="channel"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label={(entry) => `${entry.channel}: ${entry.contribution_pct.toFixed(1)}%`}
                                >
                                    {results.contributions.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-900 mb-4">ROI by Channel</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={results.roi}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="channel" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="roi" fill="#8b5cf6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Budget Optimization */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="font-semibold text-slate-900 mb-4">Budget Optimization</h3>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Total Budget ($)
                            </label>
                            <input
                                type="number"
                                value={optimizationBudget}
                                onChange={(e) => setOptimizationBudget(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <button
                            onClick={handleOptimizeBudget}
                            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                        >
                            <DollarSign className="w-4 h-4" />
                            Optimize
                        </button>
                    </div>

                    {optimizedAllocation && (
                        <div className="space-y-3">
                            {optimizedAllocation.map((item, index) => (
                                <div key={item.channel} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-900">{item.channel}</div>
                                        <div className="text-sm text-slate-600">
                                            ROI: {item.expected_roi.toFixed(2)}x
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-slate-900">
                                            ${item.allocated_budget.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            {item.allocation_pct.toFixed(1)}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return null;
};

export default ExperimentStudio;
