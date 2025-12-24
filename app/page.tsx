import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import TeamSection from '@/components/TeamSection'
import ValueSection from '@/components/ValueSection'
import VisionSection from '@/components/VisionSection'
import RoadmapSection from '@/components/RoadmapSection'
import TechTalksSection from '@/components/TechTalksSection'
import PartnershipSection from '@/components/PartnershipSection'
import FAQSection from '@/components/FAQSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhySection />
      <TeamSection />
      <ValueSection />
      <VisionSection />
      <RoadmapSection />
      <TechTalksSection />
      <PartnershipSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
