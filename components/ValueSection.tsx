'use client'

import { Shield, Zap, Users, Award } from 'lucide-react'

export default function ValueSection() {
  return (
    <section id="value" className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-glow rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            What sets us apart in China's market entry landscape
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Prop 1 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-4 mx-auto">
              <Shield className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Proven Track Record</h3>
            <p className="text-text-secondary text-sm">
              Years of experience helping international products succeed in China
            </p>
          </div>

          {/* Prop 2 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-4 mx-auto">
              <Users className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Authentic Network</h3>
            <p className="text-text-secondary text-sm">
              Real connections with 100+ communities, not just paid advertising
            </p>
          </div>

          {/* Prop 3 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-4 mx-auto">
              <Zap className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Fast Execution</h3>
            <p className="text-text-secondary text-sm">
              Launch campaigns in 2-4 weeks with on-the-ground support
            </p>
          </div>

          {/* Prop 4 */}
          <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-4 mx-auto">
              <Award className="w-8 h-8 text-primary-glow" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Full-Stack Services</h3>
            <p className="text-text-secondary text-sm">
              From software launch to hardware manufacturing — we cover it all
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
