import React from 'react';

const BiksPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50/20 to-white pt-20">
            <div className="container-custom text-center max-w-3xl">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-secondary-900">
                    <span className="gradient-text">BIKS</span>
                </h1>
                <p className="text-xl text-secondary-600 leading-relaxed max-w-2xl mx-auto mb-8">
                    Business Intelligence & Knowledge Systems. Coming soon.
                </p>
                <div className="inline-block px-6 py-3 bg-brand-purple/10 text-brand-purple font-semibold rounded-lg border border-brand-purple/20">
                    🚀 Stay tuned for updates
                </div>
            </div>
        </div>
    );
};

export default BiksPage;
