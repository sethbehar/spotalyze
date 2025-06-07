import React from 'react';

const sections = [
  {
    title: 'About',
    links: ['Privacy Policy', 'Account Information', 'Cookies', 'Contact us']
  },
  {
    title: 'Help',
    links: ['How to upload', 'Support', 'Request feature', 'Credit redemption']
  },
  {
    title: 'Legal',
    links: ['Terms', 'Security', 'Privacy']
  },
  {
    title: 'More',
    links: ['About product', 'Pricing product']
  }
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200 text-gray-600">
      {sections.map((sec, idx) => (
        <div key={idx}>
          <h3 className="font-bold mb-3">{sec.title}</h3>
          <ul className="space-y-2">
            {sec.links.map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-600 transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
