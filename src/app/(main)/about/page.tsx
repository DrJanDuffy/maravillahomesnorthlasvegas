import type { Metadata } from "next";
import { aboutPageMetadata } from "@/config/metadata-config";

// Use the pre-configured metadata for the about page
export const metadata: Metadata = aboutPageMetadata;

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Dr. Janet Duffy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Dr. Janet Duffy is a licensed real estate professional with over 15 years of experience 
            helping clients buy and sell homes in the Las Vegas metropolitan area.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience & Expertise</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• 15+ years in Las Vegas real estate</li>
                <li>• Licensed Nevada Real Estate Agent</li>
                <li>• Certified Home Valuation Specialist</li>
                <li>• Luxury Home Marketing Expert</li>
                <li>• First-Time Homebuyer Specialist</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Areas Served</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Las Vegas</li>
                <li>• Henderson</li>
                <li>• Summerlin</li>
                <li>• Green Valley</li>
                <li>• Anthem</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Approach</h2>
            <p className="text-gray-600 mb-4">
              Dr. Janet Duffy combines deep local market knowledge with a personalized approach 
              to help clients achieve their real estate goals. Whether you're buying your first home, 
              selling a family residence, or investing in Las Vegas real estate, Dr. Duffy provides 
              expert guidance every step of the way.
            </p>
            <p className="text-gray-600">
              Her commitment to excellence and client satisfaction has earned her recognition as 
              one of Las Vegas's top real estate professionals, with hundreds of successful 
              transactions and satisfied clients.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-6">
              Contact Dr. Janet Duffy today for a free consultation about your real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(702) 555-REALTOR"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Call (702) 555-REALTOR
              </a>
              <a 
                href="mailto:info@lasvegasrealestate.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Email Dr. Duffy
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
