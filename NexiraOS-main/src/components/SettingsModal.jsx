
import React, { useState, useEffect } from 'react';
import { X, Settings, Key, Save, AlertCircle } from 'lucide-react';
import { LLM_PROVIDERS } from '../lib/llm';

const SettingsModal = ({ isOpen, onClose, onSave, initialConfig }) => {
    const [config, setConfig] = useState({
        provider: 'OPENAI',
        apiKey: '',
        baseUrl: LLM_PROVIDERS.OPENAI.baseUrl,
        model: ''
    });

    useEffect(() => {
        if (initialConfig) {
            setConfig(initialConfig);
        }
    }, [initialConfig]);

    if (!isOpen) return null;

    const handleProviderChange = (e) => {
        const newProvider = e.target.value;
        setConfig(prev => ({
            ...prev,
            provider: newProvider,
            baseUrl: LLM_PROVIDERS[newProvider].baseUrl,
            model: '' // Reset model to default
        }));
    };

    const handleSave = () => {
        onSave(config);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div className="flex items-center gap-2">
                        <Settings className="text-slate-700" size={20} />
                        <h2 className="text-xl font-bold text-slate-800">Intelligence Settings</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">AI Provider</label>
                        <select
                            value={config.provider}
                            onChange={handleProviderChange}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                        >
                            {Object.entries(LLM_PROVIDERS).map(([key, provider]) => (
                                <option key={key} value={key}>{provider.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">API Key</label>
                        <div className="relative">
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="password"
                                value={config.apiKey}
                                onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                                placeholder={
                                    config.provider === 'OPENAI' ? 'sk-...' :
                                        config.provider === 'ANTHROPIC' ? 'sk-ant-...' :
                                            config.provider === 'GOOGLE' ? 'AIza...' :
                                                config.provider === 'GROQ' ? 'gsk_...' :
                                                    config.provider === 'HUGGINGFACE' ? 'hf_...' : 'API Key'
                                }
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                        </div>
                        <p className="text-xs text-slate-500">Keys are stored locally in your browser.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Base URL (Optional)</label>
                        <input
                            type="text"
                            value={config.baseUrl}
                            onChange={(e) => setConfig({ ...config, baseUrl: e.target.value })}
                            placeholder={LLM_PROVIDERS[config.provider]?.baseUrl}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-mono text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Model Name (Optional)</label>
                        <input
                            type="text"
                            value={config.model}
                            onChange={(e) => setConfig({ ...config, model: e.target.value })}
                            placeholder={LLM_PROVIDERS[config.provider]?.defaultModel}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-mono text-sm"
                        />
                        {config.provider === 'HUGGINGFACE' && (
                            <p className="text-xs text-slate-500">
                                Enter the full Model ID from Hugging Face (e.g., <code>meta-llama/Meta-Llama-3-8B-Instruct</code> or <code>mistralai/Mistral-7B-Instruct-v0.2</code>).
                            </p>
                        )}
                        {config.provider === 'GOOGLE' && (
                            <p className="text-xs text-slate-500">
                                Enter a valid Gemini model ID (e.g., <code>gemini-1.5-flash-001</code>, <code>gemini-1.5-pro-001</code>).
                            </p>
                        )}
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start">
                        <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={16} />
                        <p className="text-xs text-blue-800 leading-relaxed">
                            NexiraOS uses a JSON-enforced system prompt. Ensure your model supports instruction following for best results.
                        </p>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg transition-colors font-medium text-sm">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm flex items-center gap-2">
                        <Save size={16} />
                        Save Configuration
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
