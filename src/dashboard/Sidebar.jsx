import React from 'react';
import NavItem from './NavItem';
import SidebarPromo from './SidebarPromo';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-6 space-y-8">
      <div className="text-green-800 text-xl font-bold mb-8">
        Spotalyze
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <NavItem className='bg-green-800' icon="dashboard"  label="Dashboard" active />
          <NavItem className='bg-green-800' icon="equalizer"  label="Songs"     />
          <NavItem className='bg-green-800' icon="person"     label="Artists"    />
          <NavItem className='bg-green-800' icon="add"        label="Extra"     />
        </div>
      </div>

      <SidebarPromo />
    </div>
  );
}
