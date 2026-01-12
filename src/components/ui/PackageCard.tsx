'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Package } from '@/data/packages'

interface PackageCardProps {
  package_: Package
  onBookNow: (packageId: string) => void
}

/**
 * Package Card Component
 * 
 * Displays individual package information with:
 * - Hero image with skeleton loading
 * - Title, duration, pricing
 * - Ideal for badges
 * - Activities included/excluded
 * - Expandable details
 * - Book Now CTA
 * 
 * Includes structured data for SEO
 */
export default function PackageCard({ package_: pkg, onBookNow }: PackageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getDifficultyColor = (difficulty: Package['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-aurora-100 text-aurora-700'
      case 'moderate':
        return 'bg-warm-100 text-warm-700'
      case 'challenging':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-snow-100 text-snow-700'
    }
  }

  return (
    <article className="card group" itemScope itemType="https://schema.org/TouristTrip">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}
        
        {/* Placeholder gradient background (replace with actual image) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary-600 to-frost-700 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {pkg.new && (
            <span className="badge bg-warm-500 text-white text-xs">New</span>
          )}
          {pkg.spotsRemaining <= 5 && (
            <span className="badge bg-red-500 text-white text-xs animate-pulse">
              Only {pkg.spotsRemaining} spots left!
            </span>
          )}
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <span className={`badge text-xs ${getDifficultyColor(pkg.difficulty)}`}>
            {pkg.difficulty.charAt(0).toUpperCase() + pkg.difficulty.slice(1)}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="badge bg-white/90 text-snow-800 text-sm font-medium">
            {pkg.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-snow-900 group-hover:text-primary-600 transition-colors" itemProp="name">
            {pkg.name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <svg className="w-4 h-4 text-warm-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-snow-700">{pkg.rating}</span>
            <span className="text-xs text-snow-500">({pkg.reviewCount})</span>
          </div>
        </div>

        {/* Ideal For Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.idealFor.map((type) => (
            <span key={type} className="text-xs px-2 py-1 rounded bg-primary-50 text-primary-700 capitalize">
              {type}
            </span>
          ))}
          {!pkg.skiRequired && (
            <span className="text-xs px-2 py-1 rounded bg-aurora-50 text-aurora-700">
              No skiing required
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-snow-600 text-sm mb-4 line-clamp-2" itemProp="description">
          {pkg.shortDescription}
        </p>

        {/* Accommodation */}
        <div className="flex items-center gap-2 text-sm text-snow-600 mb-4">
          <svg className="w-4 h-4 text-snow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>{pkg.accommodationType}</span>
        </div>

        {/* Activities Preview */}
        <div className="mb-4">
          <p className="text-xs text-snow-500 mb-2">Activities included:</p>
          <div className="flex flex-wrap gap-1">
            {pkg.activities.filter(a => a.included).slice(0, 3).map((activity) => (
              <span key={activity.name} className="text-xs px-2 py-1 rounded-full bg-snow-100 text-snow-600">
                {activity.name}
              </span>
            ))}
            {pkg.activities.filter(a => a.included).length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-snow-100 text-snow-500">
                +{pkg.activities.filter(a => a.included).length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-snow-200 pt-4 mt-4 space-y-4">
                {/* Full Activities List */}
                <div>
                  <p className="text-sm font-medium text-snow-800 mb-2">All Activities:</p>
                  <ul className="space-y-1">
                    {pkg.activities.map((activity) => (
                      <li key={activity.name} className="flex items-center gap-2 text-sm">
                        {activity.included ? (
                          <svg className="w-4 h-4 text-aurora-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-snow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        )}
                        <span className={activity.included ? 'text-snow-700' : 'text-snow-500'}>
                          {activity.name}
                          {!activity.included && <span className="text-xs ml-1">(optional extra)</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-sm font-medium text-snow-800 mb-2">Highlights:</p>
                  <ul className="grid grid-cols-1 gap-1">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-snow-600">
                        <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Dates */}
                <div>
                  <p className="text-sm font-medium text-snow-800 mb-2">Available:</p>
                  <p className="text-sm text-snow-600">{pkg.dates.available.join(', ')}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Price & CTAs */}
        <div className="flex items-end justify-between gap-4 mt-6 pt-4 border-t border-snow-100">
          <div>
            <p className="text-xs text-snow-500 mb-1">From</p>
            <div className="flex items-baseline gap-1" itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <span className="text-2xl font-bold text-snow-900" itemProp="price">
                {formatPrice(pkg.price.adult, pkg.price.currency)}
              </span>
              <span className="text-sm text-snow-500">/ adult</span>
              <meta itemProp="priceCurrency" content={pkg.price.currency} />
            </div>
            {pkg.price.child > 0 && (
              <p className="text-xs text-snow-500 mt-1">
                Child: {formatPrice(pkg.price.child, pkg.price.currency)}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => onBookNow(pkg.id)}
              className="btn-warm text-sm px-5 py-2.5"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 justify-center"
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show Less' : 'View Details'}
              <svg
                className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": pkg.name,
            "description": pkg.description,
            "touristType": pkg.idealFor.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', '),
            "offers": {
              "@type": "Offer",
              "price": pkg.price.adult,
              "priceCurrency": pkg.price.currency,
              "availability": pkg.spotsRemaining > 0 ? "https://schema.org/InStock" : "https://schema.org/SoldOut"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": pkg.rating,
              "reviewCount": pkg.reviewCount
            }
          })
        }}
      />
    </article>
  )
}
