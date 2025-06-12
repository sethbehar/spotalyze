"use client"

import { Clock, Disc3, History, Music } from "lucide-react"
import { useEffect, useState } from "react"

export default function StatsCards({ totalHours, topYear, topArtist, topSong, isPaid }) {
  // Round all time values to the nearest whole number
  const [roundedData, setRoundedData] = useState({
    totalHours: Math.round(totalHours || 0),
    topArtist: {
      ...topArtist,
      hours: Math.round(topArtist?.hours || 0),
    },
    topSong: {
      ...topSong,
      hours: Math.round(topSong?.hours || 0),
    },
    topYear: {
      ...topYear,
      hours: Math.round(topYear?.hours || 0),
    },
  })

  // Update rounded data when props change
  useEffect(() => {
    setRoundedData({
      totalHours: Math.round(totalHours || 0),
      topArtist: {
        ...topArtist,
        hours: Math.round(topArtist?.hours || 0),
      },
      topSong: {
        ...topSong,
        hours: Math.round(topSong?.hours || 0),
      },
      topYear: {
        ...topYear,
        hours: Math.round(topYear?.hours || 0),
      },
    })
  }, [totalHours, topArtist, topSong, topYear])

  const cardData = [
    {
      label: "Total Listening Time",
      value: `${roundedData.totalHours} hrs`,
      note: "Lifetime streaming",
      icon: <Clock className="h-5 w-5 text-emerald-500" />,
      gradient: "from-emerald-50 to-teal-50",
      accentColor: "border-l-emerald-400",
    },
    {
      label: "Top Artist",
      value: roundedData.topArtist.artist,
      note: isPaid ? `${roundedData.topArtist.hours} hrs` : "Buy credits to unlock stats",
      icon: <Disc3 className="h-5 w-5 text-violet-500" />,
      gradient: "from-violet-50 to-purple-50",
      accentColor: "border-l-violet-400",
      locked: !isPaid,
    },
    {
      label: "Top Song",
      value: roundedData.topSong.name,
      note: isPaid ? `${roundedData.topSong.hours} hrs` : "Buy credits to unlock stats",
      icon: <Music className="h-5 w-5 text-sky-500" />,
      gradient: "from-sky-50 to-blue-50",
      accentColor: "border-l-sky-400",
      locked: !isPaid,
    },
    {
      label: "Best Year",
      value: roundedData.topYear.year,
      note: isPaid ? `${roundedData.topYear.hours} hrs` : "Buy credits to unlock stats",
      icon: <History className="h-5 w-5 text-amber-500" />,
      gradient: "from-amber-50 to-yellow-50",
      accentColor: "border-l-amber-400",
      locked: !isPaid,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cardData.map((card, i) => (
        <div
          key={i}
          className={`relative flex flex-col h-full bg-gradient-to-br ${card.gradient} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${card.accentColor} overflow-hidden`}
        >
          <div className="flex items-center gap-3 mb-4">
            {card.icon}
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">{card.label}</span>
          </div>

          <h2 className={`text-2xl font-bold text-gray-800 mb-2 ${card.locked ? "opacity-60" : ""}`}>{card.value}</h2>

          <div className="mt-auto">
            <span className={`text-sm ${card.locked ? "text-amber-600 font-medium" : "text-gray-500"}`}>
              {card.locked && "🔒 "}
              {card.note}
            </span>
          </div>

          {card.locked && (
            <div className="absolute top-0 right-0 p-1 opacity-5">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-gray-900">
                <path
                  d="M50,5 A45,45 0 1,1 50,95 A45,45 0 1,1 50,5 Z M50,40 L50,60 M40,50 L60,50"
                  stroke="currentColor"
                  strokeWidth="8"
                />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
