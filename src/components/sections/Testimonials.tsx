'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { testimonials, getFeaturedTestimonials } from '@/data/testimonials'

/**
 * Testimonials Section
 * 
 * Displays customer reviews with:
 * - Grid/Carousel layout
 * - Star ratings
 * - Verified badges
 * - Parent-focused stories
 */
export default function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const displayedTestimonials = showAll ? testimonials : getFeaturedTestimonials()

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-warm-500' : 'text-snow-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="section bg-snow-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge badge-primary mb-4">Family Stories</span>
          <h2 className="mb-4">What Families Say About Us</h2>
          <p className="text-lg text-snow-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real families have to say 
            about their magical Lapland experiences.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">4.9</div>
            <div className="text-sm text-snow-500">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">800+</div>
            <div className="text-sm text-snow-500">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">98%</div>
            <div className="text-sm text-snow-500">Would Recommend</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-snow-200/50 hover:shadow-xl transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-frost-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-snow-900" itemProp="author">{testimonial.name}</p>
                    <p className="text-xs text-snow-500">{testimonial.location}</p>
                  </div>
                </div>
                {testimonial.verified && (
                  <span className="flex items-center gap-1 text-xs text-aurora-600 bg-aurora-50 px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                {renderStars(testimonial.rating)}
                <meta itemProp="ratingValue" content={String(testimonial.rating)} />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-snow-900 mb-2" itemProp="name">
                "{testimonial.title}"
              </h4>

              {/* Content */}
              <p className="text-snow-600 text-sm leading-relaxed mb-4" itemProp="reviewBody">
                {testimonial.content}
              </p>

              {/* Footer */}
              <div className="pt-4 border-t border-snow-100 flex flex-wrap gap-2 text-xs text-snow-500">
                <span className="bg-snow-100 px-2 py-1 rounded">{testimonial.packageName}</span>
                <span className="bg-snow-100 px-2 py-1 rounded">{testimonial.travelDate}</span>
                <span className="bg-snow-100 px-2 py-1 rounded">{testimonial.familyType}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Show More Button */}
        {testimonials.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Reviews'}
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
