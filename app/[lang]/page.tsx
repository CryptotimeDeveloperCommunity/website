import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import PartnershipScenariosSection from '@/components/PartnershipScenariosSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import PartnershipSection from '@/components/PartnershipSection'
import FAQSection from '@/components/FAQSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <PartnershipScenariosSection />
      <ShowcaseSection />
      <PartnershipSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
