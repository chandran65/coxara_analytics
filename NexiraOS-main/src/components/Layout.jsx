
import React, { useState } from 'react';
import { LayoutDashboard, Database, FlaskConical, Play, Search, Bell, User, Menu, LogOut } from 'lucide-react';
import { clsx } from 'clsx';

const Layout = ({ children, activeTab, setActiveTab, user, onLogout, connectedSource }) => {

    const navItems = [
        { id: 'data', label: 'Data Studio', icon: Database },
        { id: 'experiment', label: 'Experiment Studio', icon: FlaskConical },
        { id: 'simulation', label: 'Simulation Studio', icon: Play },
    ];

    const activeItem = navItems.find(item => item.id === activeTab) || navItems[0];

    // Helper to get columns or default empty list
    const columns = connectedSource?.columns || [];

    const renderRightPanel = () => {
        switch (activeTab) {
            case 'data':
                return (
                    <div className="p-4 space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Data Sources</h3>
                            <div className="space-y-2">
                                {connectedSource ? (
                                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-sm">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium text-slate-700 truncate max-w-[150px]">{connectedSource.name}</span>
                                            <span className="text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded">Active</span>
                                        </div>
                                        <p className="text-xs text-slate-500">
                                            {connectedSource.type} • {connectedSource.data?.length || 0} rows
                                        </p>
                                    </div>
                                ) : (
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 border-dashed text-center text-xs text-slate-400">
                                        No source connected
                                    </div>
                                )}
                                <button className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-sm text-slate-500 hover:border-blue-500 hover:text-blue-600 transition-colors">
                                    + Connect New Source
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => alert('Cleaning data... (Simulation)')}
                                    disabled={!connectedSource}
                                    className="p-2 text-xs bg-white border border-slate-200 rounded hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Clean Data
                                </button>
                                <button
                                    onClick={() => alert('Generating schema... (Simulation)')}
                                    disabled={!connectedSource}
                                    className="p-2 text-xs bg-white border border-slate-200 rounded hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Generate Schema
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'experiment':
                return (
                    <div className="p-4 space-y-6">
                        {/* Variable Mapping Section (Meridian Style) */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-semibold text-slate-900">Variable Mapping</h3>
                                <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100">Meridian</span>
                            </div>

                            {!connectedSource ? (
                                <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg text-xs text-amber-700">
                                    Please connect a data source in Data Studio first to map variables.
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {/* KPI */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            Response Variable (KPI)
                                        </label>
                                        <select className="w-full text-xs border-slate-200 rounded-md p-1.5 bg-white focus:ring-1 focus:ring-green-500/50">
                                            <option value="">Select KPI...</option>
                                            {columns.map(col => (
                                                <option key={col} value={col}>{col}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Paid Media */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                            Paid Media Channels
                                        </label>
                                        <div className="p-2 bg-slate-50 rounded border border-slate-200 space-y-2 max-h-32 overflow-y-auto">
                                            {columns.length > 0 ? columns.map(col => (
                                                <div key={col} className="flex items-center gap-2">
                                                    <input type="checkbox" className="rounded text-blue-600 w-3 h-3" />
                                                    <span className="text-xs text-slate-600 truncate" title={col}>{col}</span>
                                                </div>
                                            )) : <span className="text-xs text-slate-400">No columns found</span>}
                                        </div>
                                    </div>

                                    {/* Organic Media */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                            Organic Media
                                        </label>
                                        <select className="w-full text-xs border-slate-200 rounded-md p-1.5 bg-white focus:ring-1 focus:ring-purple-500/50">
                                            <option value="">Select Variable...</option>
                                            {columns.map(col => (
                                                <option key={col} value={col}>{col}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Non-Media / Economic */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-slate-500 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                            Non-Media / Economic
                                        </label>
                                        <select className="w-full text-xs border-slate-200 rounded-md p-1.5 bg-white focus:ring-1 focus:ring-orange-500/50">
                                            <option value="">Select Variable...</option>
                                            {columns.map(col => (
                                                <option key={col} value={col}>{col}</option>
                                            ))}
                                        </select>
                                        <button className="text-[10px] text-slate-400 hover:text-slate-600 mt-1 flex items-center gap-1">
                                            <span>+ Input External Data Source</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Model Parameters */}
                        <div className="pt-4 border-t border-slate-100">
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Model Parameters</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-xs font-medium text-slate-500">Adstock Decay (Geometric)</label>
                                    <input type="range" className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-2" />
                                    <div className="flex justify-between text-[10px] text-slate-400">
                                        <span>Fast (0.1)</span>
                                        <span>Slow (0.9)</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-slate-500">Saturation (Hill Function)</label>
                                    <select className="w-full mt-1 text-xs border-slate-200 rounded-md p-1.5 bg-slate-50">
                                        <option>Flexible (Recommended)</option>
                                        <option>Fixed Slope</option>
                                        <option>S-Curve</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-slate-500">Priors (Bayesian)</label>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">Uninformative</span>
                                        <button className="text-xs text-blue-600 hover:underline">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'simulation':
                return (
                    <div className="p-4 space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Simulation Scenarios</h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-purple-50 border border-purple-100 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="text-xs font-bold text-purple-800">Budget Optimization</h4>
                                        <span className="text-[10px] bg-white px-1.5 py-0.5 rounded text-purple-600 border border-purple-200">MMX</span>
                                    </div>
                                    <p className="text-xs text-purple-600/80">Optimize spend across channels for max ROI</p>
                                </div>

                                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="text-xs font-bold text-blue-800">Journey Impact</h4>
                                        <span className="text-[10px] bg-white px-1.5 py-0.5 rounded text-blue-600 border border-blue-200">MTA</span>
                                    </div>
                                    <p className="text-xs text-blue-600/80">Simulate removal of touchpoints</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Constraints</h3>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                                    <span>Total Budget</span>
                                    <span className="font-mono font-medium">$500,000</span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                                    <span>Min Channel Spend</span>
                                    <span className="font-mono font-medium">10%</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 shadow-md transform active:scale-[0.98] transition-all">
                            Run Forecast
                        </button>
                    </div>
                );
            default:
                return <div className="p-4 text-sm text-slate-400">No options available</div>;
        }
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0 transition-all duration-300">
                <div className="p-6 border-b border-slate-800">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        NexiraOS
                    </h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={clsx(
                                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                                activeTab === item.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors">
                        {user?.avatar ? (
                            <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full bg-slate-700" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                                {user?.name?.substring(0, 2).toUpperCase() || 'US'}
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{user?.name || 'User'}</p>
                            <p className="text-xs truncate text-slate-500">{user?.role || 'Viewer'}</p>
                        </div>
                        <button
                            onClick={onLogout}
                            className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-500 hover:text-red-400 transition-colors"
                            title="Sign Out"
                        >
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-semibold text-slate-800">
                            {activeItem.label}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 ml-4">
                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Split View: Content + Right Panel */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Scrollable Main Content */}
                    <main className="flex-1 overflow-auto p-6 relative">
                        {children || (
                            <div className="h-full flex items-center justify-center text-slate-400">
                                Select a studio to get started
                            </div>
                        )}
                    </main>

                    {/* Right Panel */}
                    <aside className="w-80 bg-white border-l border-slate-200 overflow-y-auto shrink-0 shadow-sm z-20">
                        {renderRightPanel()}
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Layout;
