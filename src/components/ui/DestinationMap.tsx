'use client'

/**
 * Interactive Map Placeholder Component
 * 
 * This is a static placeholder for an interactive map of Lapland destinations.
 * 
 * Future Integration:
 * - Replace with Mapbox GL JS or Google Maps
 * - Add markers for each destination
 * - Add click handlers to show destination details
 */
export default function DestinationMap() {
  const destinations = [
    { name: 'Rovaniemi', description: 'Home of Santa Claus', lat: 66.5, lng: 25.7 },
    { name: 'Saariselkä', description: 'Northern Lights capital', lat: 68.4, lng: 27.4 },
    { name: 'Levi', description: 'Finland\'s top ski resort', lat: 67.8, lng: 24.8 },
    { name: 'Kemi', description: 'Snow Castle & icebreaker cruises', lat: 65.7, lng: 24.6 },
  ]

  return (
    <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-primary-100 to-frost-100 rounded-2xl overflow-hidden">
      {/* Static Map Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Finland silhouette placeholder */}
        <svg
          className="w-full max-w-md h-auto text-primary-200 opacity-50"
          viewBox="0 0 200 300"
          fill="currentColor"
        >
          <path d="M100,10 L120,30 L140,20 L150,50 L170,60 L160,90 L180,110 L170,140 L180,160 L160,180 L150,220 L130,250 L100,280 L70,250 L50,220 L40,180 L20,160 L30,140 L20,110 L40,90 L30,60 L50,50 L60,20 L80,30 Z" />
        </svg>
      </div>

      {/* Destination Markers */}
      <div className="absolute inset-0 p-8">
        <div className="relative w-full h-full">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="absolute group cursor-pointer"
              style={{
                // Position markers roughly on a static "map"
                left: `${30 + (index * 15)}%`,
                top: `${20 + (index * 20)}%`,
              }}
            >
              {/* Marker */}
              <div className="relative">
                <div className="w-4 h-4 bg-warm-500 rounded-full shadow-lg animate-pulse" />
                <div className="absolute w-8 h-8 -top-2 -left-2 bg-warm-500/20 rounded-full" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-white rounded-lg shadow-lg px-3 py-2 whitespace-nowrap">
                  <p className="font-semibold text-snow-900 text-sm">{dest.name}</p>
                  <p className="text-xs text-snow-500">{dest.description}</p>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-white rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4 justify-center">
        {destinations.map((dest) => (
          <div key={dest.name} className="flex items-center gap-2 text-xs text-snow-600">
            <div className="w-2 h-2 bg-warm-500 rounded-full" />
            <span>{dest.name}</span>
          </div>
        ))}
      </div>

      {/* Placeholder Notice */}
      <div className="absolute top-4 right-4">
        <span className="text-xs text-snow-500 bg-white/80 px-2 py-1 rounded">
          Interactive map placeholder
        </span>
      </div>
    </div>
  )
}
