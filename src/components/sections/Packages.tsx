'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { packages } from '@/data/packages'
import PackageCard from '@/components/ui/PackageCard'

interface PackagesProps {
  onBookPackage: (packageId: string) => void
}

/**
 * Packages Section Component
 * 
 * Displays all available packages in a responsive grid with:
 * - Filter tabs (All, By Duration)
 * - Package cards with full details
 * - Seasonal urgency messaging
 * 
 * Analytics events to track:
 * - package_card_click: When a package card is clicked
 * - package_filter_change: When filter tab is changed
 */
export default function Packages({ onBookPackage }: PackagesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'short' | 'week'>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filters = [
    { id: 'all' as const, label: 'All Packages', count: packages.length },
    { id: 'short' as const, label: 'Short Breaks (2-4 nights)', count: packages.filter(p => p.durationNights <= 4).length },
    { id: 'week' as const, label: 'Week Long', count: packages.filter(p => p.durationNights > 4).length },
  ]

  const filteredPackages = activeFilter === 'all'
    ? packages
    : activeFilter === 'short'
    ? packages.filter(pkg => pkg.durationNights <= 4)
    : packages.filter(pkg => pkg.durationNights > 4)

  return (
    <section id="packages" className="section bg-snow-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge badge-warm mb-4">2025/2026 Season</span>
          <h2 className="mb-4">Our Lapland Holiday Packages</h2>
          <p className="text-lg text-snow-600 max-w-2xl mx-auto">
            Choose from our carefully curated collection of family packages.
            Every trip includes unforgettable experiences, cozy accommodation, and magical memories.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter packages"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-white text-snow-600 hover:bg-snow-100 border border-snow-200'
              }`}
              role="tab"
              aria-selected={activeFilter === filter.id}
              aria-controls="packages-grid"
            >
              {filter.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-snow-100 text-snow-500'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-warm-50 border border-warm-200 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-500"></span>
            </span>
            <span className="font-medium text-warm-800">Limited Availability</span>
          </div>
          <span className="text-warm-700 text-sm">
            December dates are selling fast! Book now to secure your preferred dates for the 2025/2026 season.
          </span>
        </motion.div>

        {/* Packages Grid */}
        <div
          id="packages-grid"
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <PackageCard
                package_={pkg}
                onBookNow={onBookPackage}
              />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-snow-500">No packages found for this filter.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-snow-600 mb-4">
            Can't find what you're looking for? We can create a custom itinerary for your family.
          </p>
          <button
            onClick={() => onBookPackage('custom')}
            className="btn-secondary"
          >
            Request Custom Package
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
