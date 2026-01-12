'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { faqs } from '@/data/faqs'

/**
 * FAQ Section
 * 
 * Accordion-style FAQ section with:
 * - Family-specific questions
 * - Expandable answers
 * - Structured data for SEO
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-primary mb-4">Got Questions?</span>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-snow-600 mb-8">
              We understand planning a family trip to Lapland comes with lots of questions. 
              Here are answers to the most common ones.
            </p>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary-50 to-frost-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="font-semibold text-snow-900 mb-2">Still have questions?</h3>
              <p className="text-snow-600 text-sm mb-4">
                Our friendly team is here to help you plan your perfect Lapland adventure.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:hello@laplandfamille.com"
                  className="flex items-center gap-3 text-snow-700 hover:text-primary-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">hello@laplandfamille.com</span>
                </a>
                <a
                  href="tel:+441onal234567890"
                  className="flex items-center gap-3 text-snow-700 hover:text-primary-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm">+44 (0) 123 456 7890</span>
                </a>
              </div>
              <p className="text-xs text-snow-500 mt-4">
                Available Mon-Fri, 9am-6pm GMT
              </p>
            </div>

            {/* Emergency Info */}
            <div className="mt-6 p-4 bg-snow-50 rounded-xl border border-snow-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-warm-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-medium text-snow-900 text-sm">Emergency Contact</h4>
                  <p className="text-xs text-snow-600 mt-1">
                    During your trip, our 24/7 emergency line ensures help is always available: 
                    <span className="font-medium"> +44 (0) 800 XXX XXXX</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border border-snow-200 rounded-xl overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-snow-50 transition-colors"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-medium text-snow-900 pr-4" itemProp="name">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-snow-500 flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="p-4 pt-0 text-snow-600 text-sm leading-relaxed" itemProp="text">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
