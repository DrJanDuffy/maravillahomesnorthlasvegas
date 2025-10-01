import type { Metadata } from "next";
import { generateArticleMetadata } from "@/config/metadata-config";

// Generate article-specific metadata with all the required Open Graph properties
export const metadata: Metadata = generateArticleMetadata({
  title: "Las Vegas Real Estate Market Update: 2024 Trends & Insights",
  description: "Discover the latest Las Vegas real estate market trends for 2024. Dr. Janet Duffy shares expert insights on home prices, inventory levels, and what buyers and sellers need to know.",
  url: "https://villagestulesprings.com/blog/las-vegas-market-update-2024",
  publishedTime: "2024-01-15T10:00:00Z",
  modifiedTime: "2024-01-15T15:30:00Z",
  author: "Dr. Janet Duffy",
  section: "Market Analysis",
  tags: [
    "Las Vegas real estate",
    "market trends",
    "home prices",
    "real estate market 2024",
    "Las Vegas housing market",
    "property values",
    "market analysis"
  ],
  featuredImage: "/blog/las-vegas-market-2024.jpg"
});

export default function BlogPostPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-4">
            <time dateTime="2024-01-15T10:00:00Z">January 15, 2024</time>
            <span className="mx-2">•</span>
            <span>Market Analysis</span>
            <span className="mx-2">•</span>
            <span>Dr. Janet Duffy</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Las Vegas Real Estate Market Update: 2024 Trends & Insights
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            As we move through 2024, the Las Vegas real estate market continues to evolve. 
            Here's what buyers and sellers need to know about current trends, pricing, and opportunities.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="/blog/las-vegas-market-2024.jpg"
            alt="Las Vegas real estate market trends and home prices in 2024"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Market Overview</h2>
          <p className="text-gray-600 mb-6">
            The Las Vegas real estate market in 2024 shows signs of stabilization after the 
            volatility of recent years. While interest rates remain elevated compared to 
            historic lows, the market is adapting to new conditions.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Trends</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Home Prices</h3>
          <p className="text-gray-600 mb-6">
            Median home prices in Las Vegas have shown modest appreciation year-over-year, 
            with luxury properties in areas like Summerlin and Henderson continuing to 
            perform well. The market is seeing more balanced conditions between buyers and sellers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inventory Levels</h3>
          <p className="text-gray-600 mb-6">
            Inventory levels have improved from the historic lows of 2021-2022, providing 
            buyers with more options. However, well-priced homes in desirable neighborhoods 
            still move quickly, often receiving multiple offers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interest Rates</h3>
          <p className="text-gray-600 mb-6">
            Mortgage rates have stabilized in the 6-7% range, which has become the new 
            normal for many buyers. This has led to more realistic expectations and 
            sustainable market conditions.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What This Means for You</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Buyers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• More inventory to choose from</li>
                <li>• Less competition on most properties</li>
                <li>• Opportunity to negotiate terms</li>
                <li>• Time to make informed decisions</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Sellers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Price homes competitively</li>
                <li>• Prepare for longer marketing times</li>
                <li>• Focus on property presentation</li>
                <li>• Consider timing carefully</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Neighborhood Highlights</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Summerlin</h3>
          <p className="text-gray-600 mb-4">
            Summerlin continues to be a top performer with strong demand for luxury homes 
            and master-planned community amenities. New construction is limited, supporting 
            resale values.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Henderson</h3>
          <p className="text-gray-600 mb-4">
            Henderson's diverse neighborhoods offer opportunities for buyers at various 
            price points. The area's proximity to Las Vegas and strong school districts 
            maintain its appeal.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Downtown Las Vegas</h3>
          <p className="text-gray-600 mb-6">
            Downtown continues its transformation with new residential developments and 
            entertainment options. This area offers unique opportunities for investors 
            and urban living enthusiasts.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg my-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Expert Insight</h2>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "The Las Vegas market in 2024 presents opportunities for both buyers and sellers, 
              but success requires understanding current conditions and working with experienced 
              professionals who know the local market intimately."
            </blockquote>
            <cite className="text-gray-600">— Dr. Janet Duffy, Licensed Real Estate Agent</cite>
          </div>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Looking Ahead</h2>
          <p className="text-gray-600 mb-8">
            As we progress through 2024, the Las Vegas real estate market is expected to 
            remain stable with moderate price appreciation. The key to success in this 
            market is working with knowledgeable professionals who can guide you through 
            the complexities of buying or selling in today's environment.
          </p>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-gray-600">
                <strong>About the Author:</strong> Dr. Janet Duffy is a licensed real estate 
                professional with over 15 years of experience in the Las Vegas market.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="tel:(702) 555-REALTOR"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Dr. Duffy
              </a>
              <a 
                href="/listings"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Listings
              </a>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
