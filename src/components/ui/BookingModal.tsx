'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { packages } from '@/data/packages'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedPackage?: string
}

interface FormData {
  // Step 1: Dates & Guests
  departureDate: string
  returnDate: string
  adults: number
  children: number
  childAges: string
  // Step 2: Package Selection
  selectedPackage: string
  // Step 3: Contact & Message
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  newsletter: boolean
}

const initialFormData: FormData = {
  departureDate: '',
  returnDate: '',
  adults: 2,
  children: 0,
  childAges: '',
  selectedPackage: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  newsletter: false,
}

/**
 * Multi-step Booking/Enquiry Modal
 * 
 * 3 Steps:
 * 1. Travel dates & party composition
 * 2. Package selection
 * 3. Contact details & message
 * 
 * Features:
 * - Form validation
 * - Mobile-friendly
 * - Keyboard accessible
 * - Success state
 * 
 * Backend Integration Notes:
 * - Form submission endpoint: POST /api/enquiries
 * - Required fields marked with *
 * - Data structure matches FormData interface
 */
export default function BookingModal({ isOpen, onClose, preselectedPackage }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1)
      setFormData({
        ...initialFormData,
        selectedPackage: preselectedPackage || '',
      })
      setErrors({})
      setIsSuccess(false)
    }
  }, [isOpen, preselectedPackage])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const updateFormData = useCallback((field: keyof FormData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (step === 1) {
      if (!formData.departureDate) {
        newErrors.departureDate = 'Please select a departure date'
      }
      if (formData.adults < 1) {
        newErrors.adults = 'At least 1 adult is required'
      }
    }

    if (step === 2) {
      if (!formData.selectedPackage) {
        newErrors.selectedPackage = 'Please select a package'
      }
    }

    if (step === 3) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required'
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required'
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setIsSubmitting(true)

    // Simulate API call - replace with actual endpoint
    // POST /api/enquiries with formData
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Track conversion event
      // gtag('event', 'form_submission', { form_type: 'booking_enquiry' })
      
      setIsSuccess(true)
    } catch (error) {
      console.error('Submission error:', error)
      setErrors({ email: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    { number: 1, label: 'Dates & Guests' },
    { number: 2, label: 'Package' },
    { number: 3, label: 'Contact' },
  ]

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-snow-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-snow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-frost-600 px-6 py-6 text-white">
          <h2 id="booking-modal-title" className="text-2xl font-display font-semibold">
            {isSuccess ? 'Enquiry Submitted!' : 'Book Your Lapland Adventure'}
          </h2>
          {!isSuccess && (
            <p className="text-primary-100 mt-1">Fill in your details and we'll get back to you within 24 hours</p>
          )}
        </div>

        {/* Progress Steps */}
        {!isSuccess && (
          <div className="px-6 py-4 bg-snow-50 border-b border-snow-200">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      currentStep >= step.number
                        ? 'bg-primary-600 text-white'
                        : 'bg-snow-200 text-snow-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`ml-2 text-sm hidden sm:block ${
                      currentStep >= step.number ? 'text-primary-600 font-medium' : 'text-snow-500'
                    }`}
                  >
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 sm:w-16 h-0.5 mx-2 ${
                        currentStep > step.number ? 'bg-primary-600' : 'bg-snow-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-aurora-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-aurora-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-snow-900 mb-2">Thank You, {formData.firstName}!</h3>
                <p className="text-snow-600 mb-6">
                  Your enquiry has been received. One of our Lapland specialists will contact you 
                  within 24 hours at <span className="font-medium">{formData.email}</span>
                </p>
                <p className="text-sm text-snow-500 mb-6">
                  In the meantime, check your inbox for a confirmation email with more information 
                  about your selected package.
                </p>
                <button onClick={onClose} className="btn-primary">
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Dates & Guests */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-snow-900 mb-4">When would you like to travel?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="departureDate" className="form-label">
                            Preferred Departure Date *
                          </label>
                          <input
                            type="date"
                            id="departureDate"
                            value={formData.departureDate}
                            onChange={(e) => updateFormData('departureDate', e.target.value)}
                            className={`form-input ${errors.departureDate ? 'border-red-500' : ''}`}
                            min={new Date().toISOString().split('T')[0]}
                          />
                          {errors.departureDate && (
                            <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="returnDate" className="form-label">
                            Preferred Return Date
                          </label>
                          <input
                            type="date"
                            id="returnDate"
                            value={formData.returnDate}
                            onChange={(e) => updateFormData('returnDate', e.target.value)}
                            className="form-input"
                            min={formData.departureDate || new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-snow-900 mb-4">Who's travelling?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="adults" className="form-label">
                            Adults (18+) *
                          </label>
                          <select
                            id="adults"
                            value={formData.adults}
                            onChange={(e) => updateFormData('adults', parseInt(e.target.value))}
                            className={`form-input ${errors.adults ? 'border-red-500' : ''}`}
                          >
                            {[1, 2, 3, 4, 5, 6].map(n => (
                              <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                          {errors.adults && (
                            <p className="text-red-500 text-sm mt-1">{errors.adults}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="children" className="form-label">
                            Children (3-17)
                          </label>
                          <select
                            id="children"
                            value={formData.children}
                            onChange={(e) => updateFormData('children', parseInt(e.target.value))}
                            className="form-input"
                          >
                            {[0, 1, 2, 3, 4, 5, 6].map(n => (
                              <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {formData.children > 0 && (
                        <div className="mt-4">
                          <label htmlFor="childAges" className="form-label">
                            Children's Ages (optional)
                          </label>
                          <input
                            type="text"
                            id="childAges"
                            value={formData.childAges}
                            onChange={(e) => updateFormData('childAges', e.target.value)}
                            className="form-input"
                            placeholder="e.g., 5, 8, 12"
                          />
                          <p className="text-xs text-snow-500 mt-1">
                            This helps us recommend the best activities for your family
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Package Selection */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-snow-900 mb-4">Select your package</h3>
                    {errors.selectedPackage && (
                      <p className="text-red-500 text-sm mb-4">{errors.selectedPackage}</p>
                    )}
                    <div className="space-y-3">
                      {packages.map((pkg) => (
                        <label
                          key={pkg.id}
                          className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.selectedPackage === pkg.id
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-snow-200 hover:border-snow-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="package"
                            value={pkg.id}
                            checked={formData.selectedPackage === pkg.id}
                            onChange={(e) => updateFormData('selectedPackage', e.target.value)}
                            className="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold text-snow-900">{pkg.name}</p>
                                <p className="text-sm text-snow-500">{pkg.duration}</p>
                              </div>
                              <p className="font-semibold text-primary-600">
                                From \u00A3{pkg.price.adult}
                              </p>
                            </div>
                            <p className="text-sm text-snow-600 mt-1">{pkg.shortDescription}</p>
                          </div>
                        </label>
                      ))}
                      <label
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.selectedPackage === 'custom'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-snow-200 hover:border-snow-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value="custom"
                          checked={formData.selectedPackage === 'custom'}
                          onChange={(e) => updateFormData('selectedPackage', e.target.value)}
                          className="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500"
                        />
                        <div>
                          <p className="font-semibold text-snow-900">Custom Package</p>
                          <p className="text-sm text-snow-600 mt-1">
                            Tell us what you're looking for and we'll create a bespoke itinerary
                          </p>
                        </div>
                      </label>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-snow-900 mb-4">Your contact details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData('firstName', e.target.value)}
                          className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                          autoComplete="given-name"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData('lastName', e.target.value)}
                          className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                          autoComplete="family-name"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="form-label">Additional Message (optional)</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        className="form-input min-h-[100px]"
                        placeholder="Tell us about any special requirements, questions, or preferences..."
                      />
                    </div>
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={(e) => updateFormData('newsletter', e.target.checked)}
                          className="mt-1 w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                        />
                        <span className="text-sm text-snow-600">
                          Keep me updated with special offers and early access to new packages
                        </span>
                      </label>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="px-6 py-4 bg-snow-50 border-t border-snow-200 flex justify-between">
            <button
              onClick={handleBack}
              className={`btn-secondary ${currentStep === 1 ? 'invisible' : ''}`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            {currentStep < 3 ? (
              <button onClick={handleNext} className="btn-primary">
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-warm"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}
