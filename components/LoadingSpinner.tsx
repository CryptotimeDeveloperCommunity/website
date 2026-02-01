'use client'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-primary">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-primary-glow/20 rounded-full"></div>

        {/* Spinning ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-primary-glow rounded-full animate-spin"></div>

        {/* Inner glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-glow/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}
