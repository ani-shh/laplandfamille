/**
 * Analytics Helper Functions
 * 
 * This module provides utility functions for tracking events
 * across the Lapland Famille website.
 * 
 * Setup Instructions:
 * 1. Add GA4 tracking code to _document.tsx
 * 2. Replace 'GA_MEASUREMENT_ID' with your actual GA4 ID
 * 3. Uncomment the gtag calls below when analytics is set up
 */

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

/**
 * Track a page view
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    })
  }
}

/**
 * Track a custom event
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

/**
 * Track specific conversion events for the Lapland Famille funnel
 */
export const analytics = {
  // Hero section events
  heroCTAClick: () => trackEvent('hero_cta_click', 'engagement', 'Explore Packages'),
  heroBookNowClick: () => trackEvent('hero_book_click', 'conversion', 'Book Now'),
  
  // Package events
  packageView: (packageId: string, packageName: string) => 
    trackEvent('package_view', 'engagement', packageName, undefined),
  packageBookClick: (packageId: string, packageName: string) => 
    trackEvent('package_book_click', 'conversion', packageName, undefined),
  packageFilterChange: (filter: string) => 
    trackEvent('package_filter', 'engagement', filter),
  
  // Booking form events
  bookingModalOpen: (source: string) => 
    trackEvent('booking_modal_open', 'conversion', source),
  bookingStepComplete: (step: number) => 
    trackEvent('booking_step_complete', 'conversion', `Step ${step}`, step),
  bookingFormSubmit: (packageName: string) => 
    trackEvent('form_submission', 'conversion', packageName),
  
  // Newsletter events
  newsletterSubscribe: () => 
    trackEvent('newsletter_subscribe', 'engagement'),
  
  // Social share events
  socialShare: (platform: string) => 
    trackEvent('social_share', 'engagement', platform),
}

/**
 * Initialize dataLayer for GTM
 */
export const initializeDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
  }
}

/**
 * Push custom data to dataLayer for GTM
 */
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data)
  }
}
