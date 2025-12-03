
import React, { useState } from 'react';
import {
    X, Upload, FileText, FileSpreadsheet, Presentation,
    Database, Cloud, Server, Search, CheckCircle2, AlertCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { MOCK_MARKETING_DATA, MOCK_COLUMNS } from '../lib/mockData';

const ConnectSourceModal = ({ isOpen, onClose, onConnect }) => {
    const [activeTab, setActiveTab] = useState('files');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedConnector, setSelectedConnector] = useState(null);
    const [isConnecting, setIsConnecting] = useState(false);

    if (!isOpen) return null;

    const connectors = [
        { id: 'aws', name: 'Amazon S3', type: 'cloud', icon: Cloud, color: 'text-orange-500', bg: 'bg-orange-50' },
        { id: 'azure', name: 'Microsoft Azure', type: 'cloud', icon: Cloud, color: 'text-blue-600', bg: 'bg-blue-50' },
        { id: 'gcp', name: 'Google Cloud', type: 'cloud', icon: Cloud, color: 'text-red-500', bg: 'bg-red-50' },
        { id: 'mongo', name: 'MongoDB', type: 'database', icon: Database, color: 'text-green-600', bg: 'bg-green-50' },
        { id: 'postgres', name: 'PostgreSQL', type: 'database', icon: Database, color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 'mysql', name: 'MySQL', type: 'database', icon: Database, color: 'text-blue-700', bg: 'bg-blue-50' },
        { id: 'snowflake', name: 'Snowflake', type: 'database', icon: Server, color: 'text-sky-500', bg: 'bg-sky-50' },
        { id: 'salesforce', name: 'Salesforce', type: 'saas', icon: Cloud, color: 'text-blue-400', bg: 'bg-blue-50' },
    ];

    const filteredConnectors = connectors.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFileDrop = async (e) => {
        e.preventDefault();
        let file;

        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else if (e.target.files) {
            file = e.target.files[0];
        }

        if (!file) return;

        setIsConnecting(true);

        // Simple CSV Parsing (Headers + First 100 Rows)
        let columns = [];
        let previewData = [];

        if (file.name.endsWith('.csv')) {
            try {
                const text = await file.slice(0, 50000).text(); // Read first 50KB
                const lines = text.split('\n');

                if (lines.length > 0) {
                    // Parse Headers
                    columns = lines[0].split(',').map(c => c.trim());

                    // Parse Rows (up to 100)
                    for (let i = 1; i < Math.min(lines.length, 101); i++) {
                        if (!lines[i].trim()) continue;
                        const values = lines[i].split(',');
                        const row = {};
                        columns.forEach((col, index) => {
                            row[col] = values[index]?.trim();
                        });
                        previewData.push(row);
                    }
                }
            } catch (err) {
                console.error("Failed to read file", err);
            }
        }

        // Simulate processing delay
        setTimeout(() => {
            onConnect({
                type: 'file',
                name: file.name,
                columns: columns.length > 0 ? columns : ['id', 'date', 'value', 'category'],
                data: previewData // Pass the actual data sample
            });
            setIsConnecting(false);
            onClose();
        }, 1500);
    };

    const handleConnectorSelect = (connector) => {
        setSelectedConnector(connector);
    };

    const handleConnect = () => {
        if (!selectedConnector) return;
        setIsConnecting(true);
        setTimeout(() => {
            onConnect({
                type: 'connector',
                name: selectedConnector.name,
                columns: MOCK_COLUMNS,
                data: MOCK_MARKETING_DATA
            });
            setIsConnecting(false);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">Connect Data Source</h2>
                        <p className="text-sm text-slate-500">Import files or connect to external data warehouses</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-100 px-6">
                    <button
                        onClick={() => setActiveTab('files')}
                        className={clsx(
                            "px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2",
                            activeTab === 'files'
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-slate-500 hover:text-slate-700"
                        )}
                    >
                        <Upload size={16} />
                        Upload Files
                    </button>
                    <button
                        onClick={() => setActiveTab('connectors')}
                        className={clsx(
                            "px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2",
                            activeTab === 'connectors'
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-slate-500 hover:text-slate-700"
                        )}
                    >
                        <Database size={16} />
                        Data Connectors
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto flex-1">
                    {activeTab === 'files' ? (
                        <div className="space-y-6">
                            <div
                                className="border-2 border-dashed border-slate-200 rounded-xl p-10 text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleFileDrop}
                                onClick={() => document.getElementById('file-upload').click()}
                            >
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Upload size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-700 mb-2">Click to upload or drag and drop</h3>
                                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
                                    Support for CSV, Excel, JSON, PDF, PPTX, and Parquet files. Max file size 500MB.
                                </p>
                                <input type="file" id="file-upload" className="hidden" onChange={handleFileDrop} />
                                <div className="flex justify-center gap-4 text-xs text-slate-400">
                                    <span className="flex items-center gap-1"><FileSpreadsheet size={14} /> CSV/Excel</span>
                                    <span className="flex items-center gap-1"><FileText size={14} /> PDF/Docs</span>
                                    <span className="flex items-center gap-1"><Presentation size={14} /> PPTX</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
                                <AlertCircle className="text-blue-600 shrink-0" size={20} />
                                <div className="text-sm text-blue-800">
                                    <p className="font-semibold mb-1">Data Privacy</p>
                                    <p>Uploaded files are processed locally or in your private cloud instance. No data is shared with public models.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search connectors (e.g., Amazon, Mongo)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {filteredConnectors.map((connector) => (
                                    <button
                                        key={connector.id}
                                        onClick={() => handleConnectorSelect(connector)}
                                        className={clsx(
                                            "flex items-center gap-3 p-3 rounded-xl border text-left transition-all",
                                            selectedConnector?.id === connector.id
                                                ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                                                : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                                        )}
                                    >
                                        <div className={clsx("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", connector.bg, connector.color)}>
                                            <connector.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-700 text-sm">{connector.name}</p>
                                            <p className="text-xs text-slate-500 capitalize">{connector.type}</p>
                                        </div>
                                        {selectedConnector?.id === connector.id && (
                                            <CheckCircle2 className="ml-auto text-blue-600" size={18} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-medium text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConnect}
                        disabled={activeTab === 'connectors' && !selectedConnector || isConnecting}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm flex items-center gap-2"
                    >
                        {isConnecting ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Connecting...
                            </>
                        ) : (
                            'Connect Source'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConnectSourceModal;
