'use client'

import { useState, useCallback } from 'react'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhyChoose from '@/components/sections/WhyChoose'
import Packages from '@/components/sections/Packages'
import WhatsIncluded from '@/components/sections/WhatsIncluded'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import BookingModal from '@/components/ui/BookingModal'

/**
 * Lapland Famille - Landing Page
 * 
 * Premium Lapland holidays for families and couples.
 * 
 * SEO Target Keywords:
 * - Primary: lapland holidays, lapland holidays 2026
 * - Secondary: family lapland holidays, Lapland holidays for families
 * 
 * Analytics Setup Notes:
 * - GA4 events to track: hero_cta_click, package_view, form_submission
 * - Conversion funnel: Hero -> Packages -> Enquiry Form
 */
export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined)

  const handleOpenBooking = useCallback((packageId?: string) => {
    setSelectedPackage(packageId)
    setIsBookingOpen(true)
    // Track event: booking_modal_open
  }, [])

  const handleCloseBooking = useCallback(() => {
    setIsBookingOpen(false)
    setSelectedPackage(undefined)
    // Track event: booking_modal_close
  }, [])

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Lapland Famille | Premium Lapland Holidays for Families 2025/2026</title>
        <meta 
          name="description" 
          content="Experience magical family Lapland holidays in Finnish Lapland. Meet Santa, see the Northern Lights, and create unforgettable winter memories. ABTA & ATOL protected. Book your 2025/2026 Lapland holiday today." 
        />
        <meta 
          name="keywords" 
          content="lapland holidays, lapland holidays 2026, family lapland holidays, lapland holidays for families, santa holidays, northern lights holidays, finnish lapland, winter holidays" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.laplandfamille.com/" />
        <meta property="og:title" content="Lapland Famille | Premium Lapland Holidays for Families" />
        <meta property="og:description" content="Experience magical family Lapland holidays. Meet Santa, see Northern Lights, and create unforgettable memories. ABTA & ATOL protected." />
        <meta property="og:image" content="https://www.laplandfamille.com/og-image.jpg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Lapland Famille" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.laplandfamille.com/" />
        <meta name="twitter:title" content="Lapland Famille | Premium Lapland Holidays for Families" />
        <meta name="twitter:description" content="Experience magical family Lapland holidays. Meet Santa, see Northern Lights, and create unforgettable memories." />
        <meta name="twitter:image" content="https://www.laplandfamille.com/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.laplandfamille.com/" />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lapland Famille" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Lapland Famille",
              "url": "https://www.laplandfamille.com",
              "description": "Premium Lapland holidays for families and couples",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.laplandfamille.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Lapland Famille",
              "image": "https://www.laplandfamille.com/logo.png",
              "url": "https://www.laplandfamille.com",
              "telephone": "+44-XXX-XXX-XXXX",
              "email": "hello@laplandfamille.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "\u00A3\u00A3\u00A3",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "800"
              }
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.laplandfamille.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Packages",
                  "item": "https://www.laplandfamille.com/#packages"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Header/Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Why Choose Section */}
        <WhyChoose />

        {/* Packages Section */}
        <Packages onBookPackage={handleOpenBooking} />

        {/* What's Included Section */}
        <WhatsIncluded />

        {/* How It Works Section */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedPackage={selectedPackage}
      />
    </>
  )
}
