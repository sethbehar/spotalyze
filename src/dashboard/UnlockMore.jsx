import React from 'react';

export default function UnlockMore() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Left Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-600 mb-2">Want to see more?</h3>
        <button className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium w-full mb-4">
          Unlock full analysis
        </button>
        <div className="bg-primary-100 rounded-xl h-40 flex items-center justify-center">
          <span className="material-symbols-outlined text-5xl text-primary-400">equalizer</span>
        </div>
      </div>

      {/* Right Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
        <div className="bg-primary-100 h-40 rounded-xl"></div>
      </div>
    </div>
  );
}
