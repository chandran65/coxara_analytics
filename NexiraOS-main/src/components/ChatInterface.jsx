import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, ChevronDown, ChevronRight, Loader2, Settings } from 'lucide-react';
import { processUserQuery } from '../lib/agent-mock';
import { generateLLMResponse } from '../lib/llm';
import SettingsModal from './SettingsModal';
import { clsx } from 'clsx';

const ChatInterface = ({ onVisualizationUpdate, connectedSource }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            role: 'system',
            content: "Hello! I'm NexiraOS. I can help you analyze data, visualize trends, or detect anomalies. How can I assist you today?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [llmConfig, setLlmConfig] = useState(() => {
        const saved = localStorage.getItem('nexira_llm_config');
        return saved ? JSON.parse(saved) : null;
    });

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Notify chat when a source is connected
    useEffect(() => {
        if (connectedSource) {
            setMessages(prev => [...prev, {
                id: Date.now(),
                role: 'system',
                content: `Source connected: ${connectedSource.name}. I now have access to this data context.`,
                timestamp: new Date()
            }]);
        }
    }, [connectedSource]);

    const handleSaveConfig = (config) => {
        setLlmConfig(config);
        localStorage.setItem('nexira_llm_config', JSON.stringify(config));
        setMessages(prev => [...prev, {
            id: Date.now(),
            role: 'system',
            content: `Intelligence engine updated to ${config.provider} (${config.model || 'Default Model'}).`,
            timestamp: new Date()
        }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now(),
            role: 'user',
            content: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsProcessing(true);

        try {
            let response;

            if (llmConfig && llmConfig.apiKey) {
                // Use Real LLM
                response = await generateLLMResponse(
                    messages.concat(userMessage).filter(m => m.role !== 'system' || m.id === 1), // Filter out internal system notifications if needed, but keep history
                    llmConfig,
                    connectedSource
                );
            } else {
                // Use Mock Agent
                response = await processUserQuery(userMessage.content, connectedSource);
            }

            const systemMessage = {
                id: Date.now() + 1,
                role: 'system',
                content: response.message,
                reasoning: response.reasoning,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, systemMessage]);

            if (response.visualization && onVisualizationUpdate) {
                onVisualizationUpdate(response.visualization);
            }
        } catch (error) {
            console.error("Error processing query:", error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                role: 'system',
                content: `I encountered an error: ${error.message}. Please check your API settings or try again.`,
                timestamp: new Date()
            }]);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Sparkles className="text-purple-600" size={18} />
                    <h3 className="font-semibold text-slate-800">Chat Agent</h3>
                </div>
                <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                    title="Configure Intelligence"
                >
                    <Settings size={16} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg) => (
                    <MessageItem key={msg.id} message={msg} />
                ))}
                {isProcessing && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                            <Bot size={18} className="text-purple-600" />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-50 px-4 py-2 rounded-2xl rounded-tl-none">
                            <Loader2 size={14} className="animate-spin" />
                            <span>NexiraOS is thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-100 bg-white">
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question about your data..."
                        className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                        disabled={isProcessing}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isProcessing}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:hover:bg-purple-600 transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>

            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                onSave={handleSaveConfig}
                initialConfig={llmConfig}
            />
        </div>
    );
};

const MessageItem = ({ message }) => {
    const isUser = message.role === 'user';
    const [showReasoning, setShowReasoning] = useState(false);

    return (
        <div className={clsx("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
            <div className={clsx(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                isUser ? "bg-blue-100" : "bg-purple-100"
            )}>
                {isUser ? <User size={18} className="text-blue-600" /> : <Bot size={18} className="text-purple-600" />}
            </div>

            <div className={clsx(
                "flex flex-col gap-1 max-w-[85%]",
                isUser ? "items-end" : "items-start"
            )}>
                <div className={clsx(
                    "px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm overflow-x-auto",
                    isUser
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white border border-slate-100 text-slate-700 rounded-tl-none"
                )}>
                    <div className="whitespace-pre-wrap font-sans">
                        {message.content.split('```').map((part, i) =>
                            i % 2 === 1 ? (
                                <code key={i} className="block bg-slate-100 p-2 rounded my-2 font-mono text-xs text-slate-800">{part}</code>
                            ) : (
                                <span key={i} dangerouslySetInnerHTML={{
                                    __html: part
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\|/g, '<span class="opacity-30">|</span>')
                                        .replace(/\n/g, '<br/>')
                                }} />
                            )
                        )}
                    </div>
                </div>

                {!isUser && message.reasoning && (
                    <div className="mt-1">
                        <button
                            onClick={() => setShowReasoning(!showReasoning)}
                            className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            {showReasoning ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                            <span>View Reasoning Process</span>
                        </button>

                        {showReasoning && (
                            <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 font-mono">
                                <div className="flex items-center gap-2 mb-1 text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                                    <Sparkles size={10} />
                                    Agent Thought Process
                                </div>
                                {message.reasoning}
                            </div>
                        )}
                    </div>
                )}

                <span className="text-[10px] text-slate-400 px-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
};

export default ChatInterface;
