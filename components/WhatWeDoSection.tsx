'use client'

import { Network, Users, Target, Cpu } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import { useTranslations } from '@/lib/i18n-provider'

export default function WhatWeDoSection() {
  const { t } = useTranslations()
  const whatWeDo = t?.whatWeDo || {
    title: 'What We Do',
    subtitle: 'Connecting international AI products with China\'s vibrant tech ecosystem',
    network: {
      title: 'Extensive Network',
      description: 'Access to 100+ AI communities and KOLs — your direct channel to China\'s tech audience'
    },
    presence: {
      title: 'Local Presence',
      description: 'On-the-ground operations in 20+ cities — we know the local market and speak the language'
    },
    results: {
      title: 'Proven Results',
      description: 'Community-driven approach that delivers authentic engagement and measurable growth'
    },
    hardware: {
      title: 'Hardware Access',
      description: 'Direct connections to China\'s hardware supply chain for your AI product needs'
    }
  }
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border border-primary-glow/20 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,165,0,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            {whatWeDo.title}
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto">
            {whatWeDo.subtitle}
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Service 1 */}
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="group relative h-full">
              <div className="glass-effect rounded-2xl p-8 hover:border-primary-glow/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/20 h-full card-3d">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                  <Network className="w-8 h-8 text-primary-glow" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {whatWeDo.network.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {whatWeDo.network.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 2 */}
          <ScrollAnimation animation="fade-in-up" delay={100}>
            <div className="group relative h-full">
              <div className="glass-effect rounded-2xl p-8 hover:border-primary-glow/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/20 h-full card-3d">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                  <Users className="w-8 h-8 text-primary-glow" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {whatWeDo.presence.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {whatWeDo.presence.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 3 */}
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <div className="group relative h-full">
              <div className="glass-effect rounded-2xl p-8 hover:border-primary-glow/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/20 h-full card-3d">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                  <Target className="w-8 h-8 text-primary-glow" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {whatWeDo.results.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {whatWeDo.results.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Service 4 - Hardware Supply Chain */}
          <ScrollAnimation animation="fade-in-up" delay={300}>
            <div className="group relative h-full">
              <div className="glass-effect rounded-2xl p-8 hover:border-primary-glow/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/20 h-full card-3d">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                  <Cpu className="w-8 h-8 text-primary-glow" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {whatWeDo.hardware.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {whatWeDo.hardware.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
