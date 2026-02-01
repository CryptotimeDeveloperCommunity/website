import Navigation from '@/components/Navigation'
import TeamSection from '@/components/TeamSection'
import VisionSection from '@/components/VisionSection'
import ValueSection from '@/components/ValueSection'
import FooterSection from '@/components/FooterSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* About Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center cosmic-bg overflow-hidden pt-20">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-primary mb-8 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.3)',
            WebkitTextStroke: '1px rgba(255, 165, 0, 0.2)'
          }}>
            About Us
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-text-primary max-w-4xl mx-auto mb-8 font-semibold">
            Your trusted partner for <span className="text-primary-glow font-bold">China market entry</span>
          </p>

          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-text-secondary">
            <p className="leading-relaxed">
              We are a professional service provider helping international AI products succeed in China's market.
            </p>
            <p className="leading-relaxed">
              With <span className="text-primary-glow font-semibold">100+ AI communities</span> and presence in <span className="text-primary-glow font-semibold">20+ cities</span>, we provide end-to-end market entry services — from product launch to hardware manufacturing.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-bg-primary/50 backdrop-blur-sm rounded-xl p-6 border border-primary-glow/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">100+</div>
              <div className="text-sm text-text-secondary">AI Communities & KOLs</div>
            </div>
            <div className="bg-bg-primary/50 backdrop-blur-sm rounded-xl p-6 border border-primary-glow/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">20+</div>
              <div className="text-sm text-text-secondary">Core Cities</div>
            </div>
            <div className="bg-bg-primary/50 backdrop-blur-sm rounded-xl p-6 border border-primary-glow/20">
              <div className="text-3xl font-bold text-primary-glow mb-2">6</div>
              <div className="text-sm text-text-secondary">Core Services</div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <VisionSection />
      <ValueSection />
      <FooterSection />
    </main>
  )
}
