'use client'

import { Rocket, TrendingUp, Users, MessageSquare, Target, Cpu } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import { useTranslations } from '@/lib/i18n-provider'

export default function PartnershipScenariosSection() {
  const { t } = useTranslations()
  const s = t?.services || {}
  const fallbacks: Record<string, { title: string; description: string }> = {
    launch: { title: 'Product Launch & Promotion', description: 'We help you launch and promote AI products in mainland China through our 100+ community network' },
    growth: { title: 'User Growth Services', description: 'Drive early adoption among local developers and tech enthusiasts across 20+ cities' },
    community: { title: 'Community Marketing', description: 'Execute authentic community-based campaigns that deliver better ROI than traditional paid ads' },
    research: { title: 'User Research & Feedback', description: 'Collect valuable insights from real users to inform your product development' },
    validation: { title: 'Market Validation', description: 'Test and validate product-market fit before committing to full-scale expansion' },
    hardware: { title: 'Hardware Supply Chain', description: "Connect with China's hardware ecosystem to rapidly prototype and manufacture AI hardware products" }
  }
  const scenarios = [
    { icon: Rocket, key: 'launch', color: 'from-primary-glow to-primary-light' },
    { icon: TrendingUp, key: 'growth', color: 'from-primary-light to-primary-highlight' },
    { icon: Users, key: 'community', color: 'from-primary-glow to-primary-light' },
    { icon: MessageSquare, key: 'research', color: 'from-primary-light to-primary-highlight' },
    { icon: Target, key: 'validation', color: 'from-primary-glow to-primary-light' },
    { icon: Cpu, key: 'hardware', color: 'from-primary-light to-primary-highlight' }
  ].map(({ icon, key, color }) => ({
    icon,
    title: s[key]?.title ?? fallbacks[key].title,
    description: s[key]?.description ?? fallbacks[key].description,
    color
  }))

  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            {s.title ?? 'Our Services'}
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            {s.subtitle ?? 'We help international AI products succeed in China through:'}
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full"></div>
        </div>

        {/* Scenarios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <div className="group relative h-full">
                <div className="glass-effect rounded-2xl p-8 hover:border-primary-glow/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/30 h-full flex flex-col card-3d">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${scenario.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <scenario.icon className="w-8 h-8 text-bg-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight">
                    {scenario.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed flex-grow">
                    {scenario.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-text-secondary mb-6">
            {s.cta?.question ?? 'Ready to explore how we can help?'}
          </p>
          <a
            href="https://t.me/zhoumo_828"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl px-10 py-5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-2xl shadow-primary-glow/50"
          >
            <span>{s.cta?.button ?? 'Get in Touch'}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
