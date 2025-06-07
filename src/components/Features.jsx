import React from 'react';

const features = [
  { icon: './check.svg', text: 'Find songs listened to' },
  { icon: './check.svg', text: 'Discover reasons for song ending' },
  { icon: './check.svg', text: 'Total time listening' },
  { icon: './check.svg', text: 'Specific artists insights' },
  { icon: './check.svg', text: 'Discover reasons for song starting' },
  { icon: './check.svg', text: 'Add more as user confirms' },
  { icon: './check.svg', text: 'Top 100 songs of all time' },
  { icon: './check.svg', text: 'Top 100 artists of all time' },
  { icon: './check.svg', text: 'More coming soon...' },
];

export default function Features() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">What You Will Get</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="flex items-start">
            <div className="w-8 h-8 rounded-fullflex items-center justify-center mr-3 mt-1">
              <img src={f.icon} width={25} height={25}/>
            </div>
            <p className="text-gray-700">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
