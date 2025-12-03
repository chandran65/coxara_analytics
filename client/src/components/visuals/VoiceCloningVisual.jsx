import React from 'react';

const VoiceCloningVisual = () => {
    return (
        <div className="relative flex items-center justify-center w-64 h-64 mx-auto mb-8">
            {/* Outer expanding rings */}
            <div className="absolute w-full h-full border-2 border-brand-light/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute w-3/4 h-3/4 border-2 border-brand-vivid/40 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] delay-700"></div>
            <div className="absolute w-1/2 h-1/2 border-2 border-brand-purple/50 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] delay-1000"></div>

            {/* Core glowing circle */}
            <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-brand-vivid to-brand-dark rounded-full shadow-[0_0_60px_rgba(124,58,237,0.6)] flex items-center justify-center animate-float">
                <div className="w-24 h-24 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                    {/* Microphone/Voice icon */}
                    <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-purple/20 blur-3xl rounded-full"></div>
        </div>
    );
};

export default VoiceCloningVisual;
