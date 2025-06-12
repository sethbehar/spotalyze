import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';

import Sidebar           from './Sidebar';
import HeaderBar         from './HeaderBar';
import StatsCards        from './StatsCards';
import UploadArea        from './UploadArea';
import MoreStatsSection  from './MoreStatsSection';
import TopSongsTable     from './TopSongsTable';
import RecentSongs       from './RecentSongs';
import Footer            from './Footer';
import { useUser, useAuth } from '@clerk/clerk-react';

import {
  totalListenHours,
  topTracks,
  dailyTotals,
  topArtists,
  mostListenedYear,
} from '../analysis/analysis';

export default function DashboardLayout() {
  const { user } = useUser();
  const { getToken } = useAuth()
  const [ isPaid, setIsPaid ] = useState(false)
  const [zipFile,      setZipFile]      = useState(null);
  const [analysisRes,  setAnalysisRes]  = useState(() => {
    const saved = localStorage.getItem('spotify_analysis');
    return saved ? JSON.parse(saved) : {
      totalHours: 0,
      top100:     [],
      topArtists: [],
      topYear:    { year: null, hours: 0 },
      daily:      []
    };
  });
  const [error,        setError]        = useState(null);
  const [processing,   setProcessing]   = useState(false);

  // whenever the user picks a ZIP, re‐parse & re‐compute
  useEffect(() => {
    if (!zipFile) return;

    (async () => {
      setProcessing(true);
      setError(null);

      try {
        const zip     = await JSZip.loadAsync(zipFile);
        const allEnts = [];

        // flatten every .json array
        await Promise.all(
          Object.keys(zip.files)
            .filter(n => n.endsWith('.json'))
            .map(async n => {
              const text   = await zip.file(n).async('string');
              const parsed = JSON.parse(text);
              if (Array.isArray(parsed)) {
                allEnts.push(...parsed);
              } else {
                // handle JSON with nested arrays
                Object.values(parsed).forEach(val => {
                  if (Array.isArray(val)) allEnts.push(...val);
                });
              }
            })
        );

        // compute only the summaries you need:
        const totalHours = totalListenHours(allEnts);
        const top100     = topTracks(allEnts, 100);
        const artists    = topArtists(allEnts, 10);
        const topYear    = mostListenedYear(allEnts);
        const daily      = dailyTotals(allEnts);

        const summary = { totalHours, top100, artists, topYear, daily };
        console.log(summary)

        setAnalysisRes(summary);
        localStorage.setItem('spotify_analysis', JSON.stringify(summary));
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setProcessing(false);
      }
    })();
  }, [zipFile]);

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const token = await getToken();

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get-user-credits`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Rows ', res);
      } catch (err) {
        console.error('error in upsert effect', err);
      }
    })(); 
  }, [user, getToken]);

  return (
    <div id="webcrumbs" className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <HeaderBar />
        <StatsCards 
          totalHours={analysisRes.totalHours}
          topYear={analysisRes.topYear}
          topArtist={analysisRes.artists[0]}
          topSong={analysisRes.top100[0]}
          isPaid={isPaid}
        />

        <UploadArea
          selectedFile={zipFile}
          onFileSelect={setZipFile}
          processing={processing}
          error={error}
        />

        <MoreStatsSection
          totalHours={analysisRes.totalHours}
          top100={analysisRes.top100}
          topArtists={analysisRes.artists}
          topYear={analysisRes.topYear}
          dailyTotals={analysisRes.daily}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TopSongsTable data={analysisRes.top100} />
          <RecentSongs entries={analysisRes.daily} />
        </div>

        <Footer />
      </main>
    </div>
  );
}
