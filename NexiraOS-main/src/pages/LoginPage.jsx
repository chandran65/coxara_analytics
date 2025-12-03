import React, { useState } from 'react';
import { User, Lock, ArrowRight, Loader2, Sparkles } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate network delay and database check
        setTimeout(() => {
            // Mock Database Validation
            // In a real app, this would be an API call to your backend
            if (username && password) {
                // Simple mock validation
                if (password.length < 4) {
                    setError('Password must be at least 4 characters');
                    setIsLoading(false);
                    return;
                }

                // Successful Login
                const user = {
                    id: '1',
                    name: username, // Use the input username
                    role: 'Admin',
                    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username
                };

                onLogin(user);
            } else {
                setError('Please enter both username and password');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-900">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px]" />
                <div className="absolute -bottom-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[100px]" />
            </div>

            {/* Content Container */}
            <div className="w-full max-w-md p-8 relative z-10">
                {/* Logo Section */}
                <div className="text-center mb-10 space-y-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-900/50 mb-4 animate-fade-in-up">
                        <Sparkles className="text-white w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        Nexira<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">OS</span>
                    </h1>
                    <p className="text-slate-400 text-sm">Next-Generation Data Intelligence</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Username</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                    placeholder="Enter your username"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center animate-shake">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin h-5 w-5" />
                                    <span>Authenticating...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="mt-8 text-center text-slate-500 text-xs">
                    Protected by NexiraOS Enterprise Security
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
