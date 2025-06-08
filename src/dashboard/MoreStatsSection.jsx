import React from 'react';

export default function MoreStatsSection() {
  const stats = [
    { icon: 'bar_chart',   value: '2.42m', label: 'Total repeats', bg: 'bg-primary-100', color: 'text-primary-500' },
    { icon: 'trending_up',  value: '2.42m', label: 'Total repeats', bg: 'bg-green-100',   color: 'text-green-500' },
    { icon: 'show_chart',   value: '2.42m', label: 'Total repeats', bg: 'bg-blue-100',    color: 'text-blue-500' },
    { icon: 'trending_down',value: '2.42m', label: 'Total repeats', bg: 'bg-amber-100',   color: 'text-amber-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Stats Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">More stats</h3>
        <p className="text-sm text-gray-600 mb-4">Explore more</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s,i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`${s.bg} p-2 rounded-full mb-2`}>
                <span className="material-symbols-outlined" style={{color: ''}}>{s.icon}</span>
              </div>
              <span className="text-gray-800 font-medium">{s.value}</span>
              <span className="text-xs text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Listening overview</h3>
            <span className="text-xs text-gray-500">2017 - 2023</span>
          </div>
        </div>
        <div className="h-56 w-full bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg"></div>
      </div>
    </div>
  );
}
