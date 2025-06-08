import React from 'react';

const cardData = [
  { label: 'Total Listening Time', value: '8969 hours' },
  { label: 'Top Artist',         value: 'Zach Bryan',  note: '498 Hours' },
  { label: 'Top Song',           value: 'Burn, Burn, Burn', note: '41.2 hours' },
  { label: 'Best Year',          value: '2024',        note: '1442 Hours' },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cardData.map((c, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
          <span className="text-xs text-gray-500 block mb-1">{c.label}</span>
          <h2 className="text-2xl font-bold text-gray-800">{c.value}</h2>
          {c.note && <span className="text-sm text-gray-600">{c.note}</span>}
        </div>
      ))}
    </div>
  );
}
