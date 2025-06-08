import React from 'react';

export default function RecentSongs() {
  const recent = [
    { artist: 'Zach Bryan', time: '22 DEC 7:30 PM', color: 'bg-cyan-500' },
    { artist: 'Zach Bryan', time: '21 DEC 11:15 PM', color: 'bg-red-500' },
    // …
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent songs</h3>
      <div className="space-y-4">
        {recent.map((r,i) => (
          <div key={i} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
            <div className={`${r.color} w-8 h-8 rounded-md mr-3 flex items-center justify-center text-white text-xs`}>
              <span className="material-symbols-outlined">music_note</span>
            </div>
            <div>
              <h4 className="font-medium">{r.artist}</h4>
              <span className="text-xs text-gray-500">{r.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
