import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document Component
 * 
 * This file is used to augment the <html> and <body> tags
 * for all pages. Add analytics scripts, fonts, and other
 * document-level customizations here.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 
          ==========================================
          ANALYTICS INTEGRATION PLACEHOLDERS
          ==========================================
          
          Google Analytics 4 (GA4):
          Replace GA_MEASUREMENT_ID with your actual GA4 ID
          
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          
          Google Tag Manager (GTM):
          Replace GTM-XXXXXX with your actual GTM container ID
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-XXXXXX');
              `,
            }}
          />
        */}
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Lapland Famille",
              "description": "Premium Lapland holidays for families and couples. Experience magical winter adventures in Finnish Lapland.",
              "url": "https://www.laplandfamille.com",
              "logo": "https://www.laplandfamille.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/laplandfamille",
                "https://www.instagram.com/laplandfamille",
                "https://twitter.com/laplandfamille"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        {/* 
          GTM NoScript Fallback (place immediately after body tag):
          
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
