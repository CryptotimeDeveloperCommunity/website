'use client'

import { Network, Users, Target, Cpu } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

export default function WhatWeDoSection() {
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
            Our Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto">
            Leveraging <span className="text-primary-glow font-bold">100+ AI communities and KOLs</span> across <span className="text-primary-glow font-bold">20+ cities</span> to deliver results
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
                  Extensive Network
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  Access to 100+ AI communities and KOLs — your direct channel to China's tech audience
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
                  Local Presence
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  On-the-ground operations in 20+ cities — we know the local market and speak the language
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
                  Proven Results
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  Community-driven approach that delivers authentic engagement and measurable growth
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
                  Hardware Supply Chain
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  Direct access to China's hardware ecosystem for rapid prototyping and manufacturing
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
