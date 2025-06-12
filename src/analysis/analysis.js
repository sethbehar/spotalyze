// analysis.js

// 3a) Total listening time in hours
export function totalListenHours(entries) {
  const totalMs = entries.reduce((sum, e) => sum + (e.ms_played || 0), 0)
  return totalMs / 1000 / 60 / 60
}

// 3b) Top N most-played tracks
export function topTracks(entries, topN = 5) {
  const byTrack = entries.reduce((acc, e) => {
    const name = e.master_metadata_track_name || '<unknown>'
    acc[name] = (acc[name] || 0) + (e.ms_played || 0)
    return acc
  }, {})

  return Object.entries(byTrack)
    .sort(([, a], [, b]) => b - a)
    .slice(0, topN)
    .map(([name, ms]) => ({ name, hours: ms / 1000 / 60 / 60 }))
}

// 3c) Daily listening totals
export function dailyTotals(entries) {
  const byDay = entries.reduce((acc, e) => {
    const day = new Date(e.ts).toISOString().slice(0, 10)
    acc[day] = (acc[day] || 0) + (e.ms_played || 0)
    return acc
  }, {})

  return Object.entries(byDay)
    .map(([day, ms]) => ({ day, hours: ms / 1000 / 60 / 60 }))
    .sort((a, b) => a.day.localeCompare(b.day))
}

// 3d) Top N artists by total time
export function topArtists(entries, topN = 10) {
  const byArtist = entries.reduce((acc, e) => {
    const artist = e.master_metadata_album_artist_name 
                 || e.master_metadata_artist_name 
                 || '<unknown>';
    acc[artist] = (acc[artist] || 0) + (e.ms_played || 0);
    return acc;
  }, {});

  return Object.entries(byArtist)
    .sort(([, a], [, b]) => b - a)
    .slice(0, topN)
    .map(([artist, ms]) => ({
      artist,
      hours: ms / 1000 / 60 / 60
    }));
}

// 3e) Most-listened calendar year
export function mostListenedYear(entries) {
  const byYear = entries.reduce((acc, e) => {
    if (!e.ts) return acc;
    const year = new Date(e.ts).getFullYear();
    acc[year] = (acc[year] || 0) + (e.ms_played || 0);
    return acc;
  }, {});

  let maxYear = null, maxMs = 0;
  Object.entries(byYear).forEach(([year, ms]) => {
    if (ms > maxMs) {
      maxMs  = ms;
      maxYear = year;
    }
  });

  return {
    year: maxYear,
    hours: maxMs / 1000 / 60 / 60
  };
}
