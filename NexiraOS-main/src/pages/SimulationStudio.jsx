import React from 'react';

const SimulationStudio = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Simulation Studio</h2>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Run Simulation
                </button>
            </div>
            <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-xl">
                <p className="text-slate-500">Define scenario parameters to simulate outcomes</p>
            </div>
        </div>
    );
};

export default SimulationStudio;
