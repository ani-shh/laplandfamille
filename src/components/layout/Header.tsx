'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface HeaderProps {
  onOpenBooking: () => void
}

/**
 * Header Component
 * 
 * Sticky navigation with:
 * - Logo
 * - Navigation links
 * - Mobile menu
 * - CTA button
 * - Scroll-aware background
 */
export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const navLinks = [
    { href: '#packages', label: 'Packages' },
    { href: '#why-choose', label: 'Why Choose Us' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={clsx(
              'font-display text-2xl font-bold transition-colors duration-300',
              isScrolled ? 'text-primary-900' : 'text-white'
            )}
            aria-label="Lapland Famille - Home"
          >
            <span className="sr-only">Lapland Famille</span>
            <span aria-hidden="true">Lapland Famille</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200 hover:opacity-80',
                  isScrolled ? 'text-snow-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenBooking}
              className={clsx(
                'btn-primary text-sm',
                !isScrolled && 'bg-white text-primary-700 hover:bg-snow-100'
              )}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-snow-900 hover:bg-snow-100' : 'text-white hover:bg-white/10'
            )}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={clsx(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className={clsx(
            'rounded-xl p-4 space-y-2',
            isScrolled ? 'bg-snow-50' : 'bg-white/10 backdrop-blur-md'
          )}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={clsx(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  isScrolled
                    ? 'text-snow-700 hover:bg-snow-100 hover:text-primary-600'
                    : 'text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenBooking()
              }}
              className="w-full btn-primary mt-4"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
