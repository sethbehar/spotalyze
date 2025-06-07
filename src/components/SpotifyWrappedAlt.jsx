import React from 'react';

export default function SpotifyWrappedAlt() {
  return (
    <section className="grid grid-cols-12 gap-8 mb-20">
      <div className="col-span-12 md:col-span-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          You don't need to wait for
          <br />
          Spotify <span className='text-green-900'>wrapped</span>
        </h2>
        <p className="text-gray-900 mb-6">
          Upload the data you requested from Spotify and explore the most important parts of your
          music listening habits. There's no need to wait. You can get this:
        </p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Ratings */}
          <div className="flex flex-col items-center">
            <div className="flex text-amber-400 mb-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="font-bold">4.9 / 5 rating</p>
            <p className="text-sm text-gray-500">100+ downloads</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex text-amber-400 mb-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p className="font-bold">4.8 / 5 rating</p>
            <p className="text-sm text-gray-500">Custom-made</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 grid grid-cols-1 gap-4">
        {['analytics','landscape','travel_explore'].map(icon => (
          <div key={icon} className="flex items-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <span className="material-symbols-outlined text-green-600">{icon}</span>
            </div>
            <p className="font-medium">
              {icon === 'analytics' ? 'Complex stats'
               : icon === 'landscape' ? 'Analytics'
               : 'Explore'
              }
            </p>
            {icon === 'travel_explore' && (
              <p className="text-xs text-gray-500 ml-2">
                Learn more about your listening habits than you ever knew
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
