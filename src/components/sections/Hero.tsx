'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  onOpenBooking: () => void
}

/**
 * Hero Section Component
 * 
 * Features:
 * - Full-width hero with background image/video
 * - Compelling headline and subheadline
 * - Primary CTA button
 * - Countdown timer for seasonal urgency
 * - Trust indicators
 * 
 * Analytics events to track:
 * - hero_cta_click: When "Explore Packages" is clicked
 * - hero_scroll: When user scrolls past hero
 */
export default function Hero({ onOpenBooking }: HeroProps) {
  const [daysUntilSeason, setDaysUntilSeason] = useState(0)

  useEffect(() => {
    // Calculate days until next Lapland season (December)
    const now = new Date()
    const currentYear = now.getFullYear()
    const seasonStart = new Date(currentYear, 11, 1) // December 1st
    
    if (now > seasonStart) {
      seasonStart.setFullYear(currentYear + 1)
    }
    
    const diffTime = seasonStart.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysUntilSeason(diffDays)
  }, [])

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages')
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Track event: hero_cta_click
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder background - replace with actual hero image */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-900 via-frost-800 to-primary-900"
          style={{
            backgroundImage: `url('/images/hero-family-snow.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />
        
        {/* Animated snow effect */}
        <div className="absolute inset-0 opacity-30">
          {/* Add snow particle animation here if desired */}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Seasonal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-500/90 text-white text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              2025/2026 Season Now Booking
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow leading-tight"
          >
            Premium Lapland Holidays for{' '}
            <span className="text-aurora-400">Families</span> &{' '}
            <span className="text-aurora-400">Couples</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Create magical winter memories in Finnish Lapland. Meet Santa, chase the Northern Lights, 
            and experience unforgettable adventures designed for families with children of all ages.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={scrollToPackages}
              className="btn-primary text-lg px-8 py-4 bg-white text-primary-700 hover:bg-snow-100"
            >
              Explore Packages
              <svg className="ml-2 w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={onOpenBooking}
              className="btn-warm text-lg px-8 py-4"
            >
              Book Your Trip
              <svg className="ml-2 w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          {/* Countdown Timer */}
          {daysUntilSeason > 0 && daysUntilSeason < 180 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10"
            >
              <p className="text-primary-200 text-sm mb-2">Season starts in</p>
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">{daysUntilSeason}</span>
                  <span className="text-xs text-primary-200">Days</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-primary-200 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-aurora-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 from 800+ families</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-aurora-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>ABTA & ATOL Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-aurora-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Family specialists since 2015</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToPackages}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to packages"
        >
          <span className="text-xs font-medium">Discover More</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
