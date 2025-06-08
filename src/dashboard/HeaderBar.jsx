import { UserButton } from '@clerk/clerk-react';
import React from 'react';

export default function HeaderBar() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-green-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <UserButton />
      </div>
    </div>
  );
}
