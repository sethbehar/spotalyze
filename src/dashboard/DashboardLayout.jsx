import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';

import { useUser, useAuth } from '@clerk/clerk-react';

import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';
import StatsCards from './StatsCards';
import UploadArea from './UploadArea';
import MoreStatsSection from './MoreStatsSection';
import TopSongsTable from './TopSongsTable';
import RecentSongs from './RecentSongs';
import Footer from './Footer';

import {
  totalListenHours,
  topTracks,
  dailyTotals,
  topArtists,
  mostListenedYear,
} from '../analysis/analysis';

export default function DashboardLayout() {
  const { user } = useUser();
  const { getToken } = useAuth();

  const [zipFile, setZipFile] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [credits, setCredits] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [analysisRes, setAnalysisRes] = useState(() => {
    const saved = localStorage.getItem('spotify_analysis');
    return saved ? JSON.parse(saved) : {
      totalHours: 0,
      top100: [],
      artists: [],
      topYear: { year: null, hours: 0 },
      daily: []
    };
  });

  useEffect(() => {
    if (!user) return;
    // initial fetch of credits/free-upload flag
    (async () => {
      const token = await getToken();
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/get-user-credits`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store'
      }
      );
      if (res.ok) {
        const data = await res.json();
        const first = data[0] || { total_spent: '0', credits: 0 };

        console.log(first)
        if (parseFloat(first.total_spent) > 0) {
          setIsPaid(true)
          print(isPaid)
        }
        setCredits(first.credits);
      }
    })();
  }, [user, getToken]);

  useEffect(() => {
    if (!zipFile) return;

    (async () => {
      setProcessing(true);
      setError(null);

      try {
        // 1️⃣ Consume either free upload or a credit
        const token = await getToken();
        const creditRes = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/update-free-credit`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
        }
        );

        if (!creditRes.ok) {
          throw new Error(`Credit endpoint returned ${creditRes.status}`);
        }

        const { uploads } = await creditRes.json();
        if (uploads === 'None') {
          setError('No uploads left. Please purchase more.');
          setProcessing(false);
          return;
        }

        // update UI flags
        setIsPaid(uploads === 'Pro');
        if (uploads === 'Pro') {
          setCredits(c => Math.max(0, c - 1));
        }

        // 2️⃣ Now parse the ZIP locally
        const zip = await JSZip.loadAsync(zipFile);
        const allEnts = [];

        await Promise.all(
          Object.keys(zip.files)
            .filter(n => n.endsWith('.json'))
            .map(async n => {
              const text = await zip.file(n).async('string');
              const parsed = JSON.parse(text);
              if (Array.isArray(parsed)) {
                allEnts.push(...parsed);
              } else {
                Object.values(parsed).forEach(val => {
                  if (Array.isArray(val)) allEnts.push(...val);
                });
              }
            })
        );

        // 3️⃣ Compute and show only your summaries
        const totalHours = totalListenHours(allEnts);
        const top100 = topTracks(allEnts, 100);
        const artists = topArtists(allEnts, 10);
        const topYear = mostListenedYear(allEnts);
        const daily = dailyTotals(allEnts);

        setAnalysisRes({ totalHours, top100, artists, topYear, daily });
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setProcessing(false);
      }
    })();
  }, [zipFile, getToken, user]);

  return (
    <div id="webcrumbs" className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <StatsCards
          totalHours={analysisRes.totalHours}
          topYear={analysisRes.topYear}
          topArtist={analysisRes.artists[0] ?? { name: '—', hours: 0 }}
          topSong={analysisRes.top100[0] ?? { name: '—', hours: 0 }}
          isPaid={isPaid}
        />


        <UploadArea
          selectedFile={zipFile}
          onFileSelect={setZipFile}
          processing={processing}
          error={error}
          isPaid={isPaid}
          credits={credits}
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
