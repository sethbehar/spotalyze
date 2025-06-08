import React from 'react';

export default function SidebarPromo() {
  return (
    <div className="bg-primary-100 rounded-xl p-4">
      <div className="flex flex-col items-center text-center">
        <span className="bg-white p-3 rounded-full mb-3">
          <span className="material-symbols-outlined text-primary-500">
            workspace_premium
          </span>
        </span>
        <h3 className="text-sm font-bold text-primary-700 mb-2">
          Want to unlock full stats?
        </h3>
        <p className="text-xs text-primary-600 mb-3">
          Please check out our paid plan
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 text-white w-full py-2 rounded-lg text-sm font-medium">
          CREDITS
        </button>
      </div>
    </div>
  );
}
