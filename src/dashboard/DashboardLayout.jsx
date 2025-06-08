import React from 'react';
import Sidebar       from './Sidebar';
import HeaderBar     from './HeaderBar';
import StatsCards    from './StatsCards';
import UnlockMore from './UnlockMore';
import MoreStatsSection from './MoreStatsSection';
import TopSongsTable from './TopSongsTable';
import RecentSongs   from './RecentSongs';
import Footer        from './Footer';


export default function DashboardLayout() {
  return (
    <div id="webcrumbs" className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <HeaderBar />
        <StatsCards />
        <UnlockMore />
        <MoreStatsSection />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TopSongsTable />
          <RecentSongs />
        </div>

        <Footer />
      </main>

    </div>
  );
}
