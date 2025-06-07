import React from 'react';

export default function Hero() {
  return (
    <section className="grid grid-cols-12 gap-8 mb-20">
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Turn your Spotify files,
          <br />
          into insights - <span className="text-green-900">Instantly</span>
        </h2>
        <p className="text-gray-900 mb-6">
          Simply request your data from Spotify, upload the .zip, and explore your data
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full w-1/2 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Try for free
        </button>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-center items-center relative">
        <img src='./logo.PNG' width={400} height={400}/> 
      </div>
    </section>
  );
}
