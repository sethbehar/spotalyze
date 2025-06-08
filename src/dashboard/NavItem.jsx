import React from 'react';

export default function NavItem({ icon, label, active, href = '#' }) {
  const base = active
    ? 'text-primary-600 bg-primary-50'
    : 'text-gray-600 hover:bg-primary-50';
  return (
    <a
      href={href}
      className={`flex items-center space-x-3 font-medium p-2 rounded-lg transition-all ${base}`}
    >
      <span className={`bg-gray-100 p-2 rounded-full ${active ? 'bg-primary-100' : ''}`}>
        <span className="material-symbols-outlined text-green-900">{icon}</span>
      </span>
      <span>{label}</span>
    </a>
  );
}
