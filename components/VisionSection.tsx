'use client'

import { Target, Globe, Users, TrendingUp } from 'lucide-react'
import { useTranslations } from '@/lib/i18n-provider'

export default function VisionSection() {
  const { t } = useTranslations()
  const v = t?.about?.vision || {}
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            {v.title ?? 'Our Vision'}
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            {v.subtitle ?? "Building the bridge between international innovation and China's market"}
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6">
              <Globe className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{v.globalToLocal?.title ?? 'Global to Local'}</h3>
            <p className="text-text-secondary leading-relaxed">
              {v.globalToLocal?.description ?? "We help international AI products navigate China's unique market landscape, providing local expertise and authentic community connections."}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6">
              <Target className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{v.resultsDriven?.title ?? 'Results-Driven'}</h3>
            <p className="text-text-secondary leading-relaxed">
              {v.resultsDriven?.description ?? "Beyond traditional marketing, we deliver measurable growth through community-driven strategies and on-the-ground execution."}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6">
              <Users className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{v.communityFirst?.title ?? 'Community First'}</h3>
            <p className="text-text-secondary leading-relaxed">
              {v.communityFirst?.description ?? "Our strength lies in authentic relationships with 100+ communities and 1,500+ developers across China's tech ecosystem."}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6">
              <TrendingUp className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{v.longTerm?.title ?? 'Long-term Partnership'}</h3>
            <p className="text-text-secondary leading-relaxed">
              {v.longTerm?.description ?? "We're not just a service provider — we're your long-term partner in China, committed to your sustained success."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
