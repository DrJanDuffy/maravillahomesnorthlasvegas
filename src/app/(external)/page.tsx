import { HeroSection } from "@/components/hero-section"
import { HomeListings } from "@/components/home-listings"
import { CommunityFeatures } from "@/components/community-features"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeListings />
      <CommunityFeatures />
      <ContactForm />
    </main>
  )
}
