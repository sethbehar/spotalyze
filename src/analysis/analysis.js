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
