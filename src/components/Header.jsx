import React from 'react';

export default function Header() {
  return (
    <header className="grid grid-cols-12 items-center mb-12">
      <div className="col-span-6 md:col-span-4 flex items-center">
        <div className="h-8 w-8 bg-green-500 rounded-full mr-2"></div>
        <h1 className="text-xl font-bold text-gray-800">Spotalyze</h1>
      </div>
      <div className="col-span-6 md:col-span-8 flex justify-end gap-3">
        <button className="text-green-600 hover:text-green-800 transition-colors duration-300">
          Login
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md transition-all duration-300 transform hover:scale-105">
          Sign Up
        </button>
      </div>
    </header>
  );
}
