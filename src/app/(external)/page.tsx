import { MaravillaHeroSection } from "@/components/maravilla-hero-section"
import { MaravillaPropertyListings } from "@/components/maravilla-property-listings-v2"
import { MaravillaCommunityFeatures } from "@/components/maravilla-community-features"
import { MaravillaLocationMap } from "@/components/maravilla-location-map"
import { MaravillaVirtualTours } from "@/components/maravilla-virtual-tours-v2"
import { MaravillaTestimonials } from "@/components/maravilla-testimonials"
import { MaravillaMortgageCalculator } from "@/components/maravilla-mortgage-calculator"
import { MaravillaContactSection } from "@/components/maravilla-virtual-tours"

export default function Home() {
  return (
    <main>
      <MaravillaHeroSection />
      <MaravillaPropertyListings />
      <MaravillaCommunityFeatures />
      <MaravillaLocationMap />
      <MaravillaVirtualTours />
      <MaravillaTestimonials />
      <MaravillaMortgageCalculator />
      <MaravillaContactSection />
    </main>
  )
}
