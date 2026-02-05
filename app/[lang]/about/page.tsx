import Navigation from '@/components/Navigation'
import AboutHeroSection from '@/components/AboutHeroSection'
import TeamSection from '@/components/TeamSection'
import VisionSection from '@/components/VisionSection'
import ValueSection from '@/components/ValueSection'
import FooterSection from '@/components/FooterSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHeroSection />
      <TeamSection />
      <VisionSection />
      <ValueSection />
      <FooterSection />
    </main>
  )
}
