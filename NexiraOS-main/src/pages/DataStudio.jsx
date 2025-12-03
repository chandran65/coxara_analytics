

import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import VisualizationPanel from '../components/VisualizationPanel';
import ConnectSourceModal from '../components/ConnectSourceModal';
import { Database, Plus, FileText, CheckCircle2 } from 'lucide-react';

const DataStudio = ({ connectedSource, onConnectSource }) => {
    const [visualizationData, setVisualizationData] = useState(null);
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

    const handleConnectSource = (source) => {
        onConnectSource(source);
        // In a real app, this would trigger ingestion pipelines
        console.log("Connected to:", source);
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col gap-6">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Data Studio</h2>
                    <p className="text-slate-500 text-sm">Unified data ingestion, processing, and intelligence.</p>
                </div>
                <div className="flex items-center gap-4">
                    {connectedSource && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 text-sm font-medium animate-in fade-in slide-in-from-right-4">
                            <CheckCircle2 size={14} />
                            <span>Connected: {connectedSource.name}</span>
                        </div>
                    )}
                    <button
                        onClick={() => setIsConnectModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
                    >
                        <Plus size={18} />
                        <span>Connect Source</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
                {/* Chat Agent Section */}
                <div className="lg:col-span-4 h-full min-h-0">
                    <ChatInterface
                        onVisualizationUpdate={setVisualizationData}
                        connectedSource={connectedSource}
                    />
                </div>

                {/* Visualization Agent Section */}
                <div className="lg:col-span-8 h-full min-h-0 flex flex-col gap-6">
                    {visualizationData ? (
                        <VisualizationPanel data={visualizationData} />
                    ) : (
                        <div className="flex-1 bg-white rounded-xl border border-slate-200 border-dashed flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                <Database size={32} className="text-slate-300" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-600 mb-2">Ready to Visualize</h3>
                            <p className="max-w-md text-sm">
                                {connectedSource
                                    ? "Data source connected! Ask the Chat Agent to analyze your data."
                                    : "Connect a data source to get started, or ask the Chat Agent to analyze sample data."
                                }
                            </p>
                            <div className="mt-6 flex gap-2 text-xs">
                                <span className="px-3 py-1 bg-slate-100 rounded-full">Try "Show me sales data"</span>
                                <span className="px-3 py-1 bg-slate-100 rounded-full">Try "Analyze the trend"</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ConnectSourceModal
                isOpen={isConnectModalOpen}
                onClose={() => setIsConnectModalOpen(false)}
                onConnect={handleConnectSource}
            />
        </div>
    );
};

export default DataStudio;
