import React from 'react';

export default function TopSongsTable() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Top Songs</h3>
        <div className="flex items-center">
          <button className="text-primary-500 border border-primary-500 px-3 py-1 rounded-l-lg hover:bg-primary-50">1</button>
          <button className="text-gray-500   border border-gray-300    px-3 py-1 rounded-r-lg hover:bg-gray-50">10</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {['Song','Artist','Album','Time Listened'].map((h,i) => (
                <th key={i} className="text-left py-3 px-2 text-xs font-medium text-gray-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* map your data here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
