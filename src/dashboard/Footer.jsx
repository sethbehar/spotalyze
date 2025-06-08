import React from 'react';

export default function Footer() {
  return (
    <div className="mt-8 flex justify-between items-center text-xs text-gray-500">
      <span>© 2023</span>
      <div className="flex space-x-4">
        {['Creative Tim','Sitemap','Blog','License'].map((text,i) => (
          <a key={i} href="#" className="hover:text-primary-500 transition-colors">
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
