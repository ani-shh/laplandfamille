'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Why Choose Lapland Famille Section
 * 
 * Features:
 * - Trust and safety messaging
 * - Parent-focused benefits
 * - Trust badges (ABTA/ATOL)
 * - Family-friendly feature highlights
 */

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Family-First Approach',
    description: 'Every experience is designed with families in mind. Age-appropriate activities, flexible schedules, and child-friendly accommodations.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Fully Protected',
    description: 'Your holiday is protected by ABTA and ATOL. Book with complete confidence knowing your family is covered.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Magical Experiences',
    description: 'Private Santa meetings, husky safaris, and Northern Lights hunts. Create memories your children will treasure forever.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Perfect Pacing',
    description: 'No rushing. Our itineraries include rest time and flexibility, perfect for families with young children.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Our team is available around the clock. From booking questions to on-trip assistance, we\'re always here for you.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Everything Included',
    description: 'Thermal clothing, meals, activities, and transfers. No hidden costs or surprises - just pure magic.',
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '15,000+', label: 'Happy Families' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '98%', label: 'Would Recommend' },
]

export default function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-choose" className="section bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge badge-primary mb-4">Why Families Trust Us</span>
          <h2 className="mb-4">Why Choose Lapland Famille?</h2>
          <p className="text-lg text-snow-600 max-w-2xl mx-auto">
            We understand that planning a family holiday requires trust and attention to detail. 
            Here's why thousands of families choose us for their Lapland adventure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-snow-50 hover:bg-primary-50 transition-colors duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-snow-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-snow-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-50 to-frost-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Trust Message */}
            <div>
              <h3 className="text-2xl font-semibold text-snow-900 mb-4">
                Why Parents Trust Lapland Famille
              </h3>
              <p className="text-snow-600 mb-6 leading-relaxed">
                As parents ourselves, we understand the importance of safety, reliability, and creating 
                genuine magical moments. Every detail of your trip is carefully planned with your 
                family's wellbeing in mind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-snow-700">
                  <svg className="w-5 h-5 text-aurora-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Perfect for children of all ages (3+)</span>
                </li>
                <li className="flex items-center gap-3 text-snow-700">
                  <svg className="w-5 h-5 text-aurora-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All guides are child-safety certified</span>
                </li>
                <li className="flex items-center gap-3 text-snow-700">
                  <svg className="w-5 h-5 text-aurora-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Full financial protection with ABTA & ATOL</span>
                </li>
                <li className="flex items-center gap-3 text-snow-700">
                  <svg className="w-5 h-5 text-aurora-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible booking & fair cancellation policy</span>
                </li>
              </ul>
            </div>

            {/* Right: Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {/* ABTA Badge */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center gap-2 w-36">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">ABTA</span>
                </div>
                <span className="text-xs text-snow-500 text-center">Member Y1234</span>
              </div>
              
              {/* ATOL Badge */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center gap-2 w-36">
                <div className="w-16 h-16 bg-frost-100 rounded-full flex items-center justify-center">
                  <span className="text-frost-700 font-bold text-lg">ATOL</span>
                </div>
                <span className="text-xs text-snow-500 text-center">Protected 5678</span>
              </div>

              {/* TripAdvisor Style Badge */}
              <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center gap-2 w-36">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-aurora-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-snow-500 text-center">Excellent</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-snow-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
