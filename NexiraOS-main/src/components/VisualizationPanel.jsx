
import React from 'react';
import {
    BarChart, Bar, LineChart, Line, ScatterChart, Scatter,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Info } from 'lucide-react';

const VisualizationPanel = ({ data }) => {
    if (!data) return null;

    const { type, title, data: chartData, xKey, yKey, interpretation } = data;

    const renderChart = () => {
        switch (type) {
            case 'bar':
                return (
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey={xKey} stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                        />
                        <Legend />
                        <Bar dataKey={yKey} fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                );
            case 'line':
                return (
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey={xKey} stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey={yKey} stroke="#8b5cf6" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                );
            case 'scatter':
                return (
                    <ScatterChart>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis type="number" dataKey={xKey} name="x" stroke="#64748b" />
                        <YAxis type="number" dataKey={yKey} name="y" stroke="#64748b" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Data Points" data={chartData} fill="#10b981" />
                    </ScatterChart>
                );
            default:
                return <div className="text-slate-400">Unsupported chart type</div>;
        }
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-semibold text-slate-800">{title}</h3>
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full capitalize">
                    {type} Chart
                </span>
            </div>

            <div className="flex-1 p-4 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    {renderChart()}
                </ResponsiveContainer>
            </div>

            {interpretation && (
                <div className="p-4 bg-blue-50 border-t border-blue-100 flex gap-3">
                    <Info className="text-blue-600 shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-blue-800 leading-relaxed">
                        <span className="font-semibold">Insight:</span> {interpretation}
                    </p>
                </div>
            )}
        </div>
    );
};

export default VisualizationPanel;
