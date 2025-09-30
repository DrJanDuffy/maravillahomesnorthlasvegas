import { MaravillaHeroSection } from "@/components/maravilla-hero-section"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dr. Janet Duffy",
  "description": "Expert Las Vegas real estate services with 15+ years experience",
  "url": "https://lasvegasrealestate.com",
  "telephone": "(702) 555-REALTOR",
  "email": "info@lasvegasrealestate.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.1699",
    "longitude": "-115.1398"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City", 
      "name": "Henderson",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    }
  ],
  "serviceType": [
    "Real Estate Sales",
    "Property Valuation",
    "Home Buying Consultation",
    "Home Selling Consultation"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Buying Services",
          "description": "Expert assistance finding and purchasing your dream home"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Home Selling Services",
          "description": "Professional marketing and sales support for your property"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Property Valuation",
          "description": "Free home valuation and market analysis"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200"
  },
  "sameAs": [
    "https://www.facebook.com/lasvegasrealestate",
    "https://www.instagram.com/lasvegasrealtor",
    "https://www.linkedin.com/in/drjanetduffy"
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        {/* Hero Section with RealScout Simple Search */}
        <MaravillaHeroSection />
        
        {/* RealScout Advanced Search */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Your <span className="text-green-600">Perfect Home</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Use our advanced search to find properties that match your exact criteria and budget.
              </p>
            </div>
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </div>
        </section>

        {/* RealScout Office Listings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured <span className="text-green-600">Properties</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our latest listings in the Las Vegas area. From luxury homes to starter properties.
              </p>
            </div>
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="PRICE_LOW" 
              listing-status="For Sale" 
              property-types=",SFR,OTHER" 
              price-min="500000" 
              price-max="600000">
            </realscout-office-listings>
          </div>
        </section>

        {/* RealScout Your Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                My <span className="text-green-600">Featured Listings</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore my exclusive listings across Las Vegas. Each property is carefully selected 
                and professionally marketed for the best results.
              </p>
            </div>
            <realscout-your-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
              listing-status="For Sale" 
              property-types="SFR,MF,TC,LAL,MOBILE,OTHER">
            </realscout-your-listings>
          </div>
        </section>

        {/* RealScout Home Valuation */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get Your <span className="text-green-600">Home Valuation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover your home&apos;s current market value with our free, professional valuation service. 
                Get accurate insights based on recent sales and market trends in your area.
              </p>
            </div>
            <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
          </div>
        </section>
      </main>
    </>
  )
}
