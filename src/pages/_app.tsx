import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

/**
 * Main App Component
 * 
 * Analytics Integration Notes:
 * - GA4: Add Google Analytics script in _document.tsx or use next/script
 * - GTM: Initialize GTM container in _document.tsx
 * - Event tracking functions should be added to src/lib/analytics.ts
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport meta for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Theme color for browser chrome */}
        <meta name="theme-color" content="#0c4a6e" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
