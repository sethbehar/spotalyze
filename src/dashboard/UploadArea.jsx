"use client"

import { FileUp, Loader2, AlertCircle, CheckCircle2, FileArchive } from "lucide-react"
import { useState, useRef } from "react"

export default function UploadArea({ selectedFile, onFileSelect, processing, error, isPaid, credits }) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.name.endsWith(".zip")) {
        onFileSelect(file)
      } else {
        onFileSelect(null)
      }
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="bg-gradient-to-br from-violet-50 to-indigo-50 p-6 rounded-2xl shadow-sm mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-l-4 border-l-violet-400">
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <FileArchive className="h-5 w-5 text-violet-500" />
          <h3 className="text-gray-700 font-medium">Upload your Spotify ZIP</h3>
        </div>

        <div
          className={`relative border-2 border-dashed rounded-xl p-4 mb-4 text-center cursor-pointer transition-all
            ${isDragging ? "border-violet-500 bg-violet-100" : "border-gray-300 hover:border-violet-400 hover:bg-violet-50"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <FileUp className="h-8 w-8 mx-auto mb-2 text-violet-500" />
          <p className="text-sm text-gray-600">
            Drag & drop your ZIP file here or <span className="text-violet-600 font-medium">browse</span>
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".zip"
            onChange={(e) => onFileSelect(e.target.files?.[0] ?? null)}
            className="hidden"
          />
        </div>

        {selectedFile && (
          <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm mb-3">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
            <p className="text-sm truncate">
              Selected: <span className="font-medium">{selectedFile.name}</span>
            </p>
          </div>
        )}

        {processing && (
          <div className="flex items-center gap-2 text-blue-600 animate-pulse">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p className="text-sm font-medium">Processing your data...</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg text-red-600 mt-3">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-violet-100/50 to-indigo-100/50 rounded-2xl md:col-span-2 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            {processing ? (
              <Loader2 className="h-12 w-12 text-violet-500 animate-spin" />
            ) : selectedFile ? (
              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            ) : (
              <FileUp className="h-12 w-12 text-violet-400" />
            )}
          </div>

          <h3 className="text-lg font-medium text-gray-800 mb-2">
            {processing ? "Processing Your Music Data" : selectedFile ? "Ready to Analyze" : "Upload Your Spotify Data"}
          </h3>

          <p className="text-sm text-gray-600 max-w-md mx-auto">
            {processing
              ? "Please wait while we process your listening history..."
              : selectedFile
                ? "You are now ready to explore your lifetime history"
                : "Get detailed insights about your listening habits and discover patterns in your music taste"}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-indigo-100/50"></div>
        <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-violet-100/50"></div>
      </div>
    </div>
  )
}
