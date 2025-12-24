'use client'

import { Users, Code, Network, Zap, Sparkles } from 'lucide-react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function TeamSection() {
  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-bg-primary relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-10 sm:mb-12 md:mb-16"
        >
          Why <span className="text-primary-glow">us</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {/* Team Member 1 */}
          <ScrollAnimation animation="slide-in-left" delay={0}>
            <div className="bg-bg-secondary/50 backdrop-blur-sm border border-text-secondary/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary-glow transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/logos/zhoumo.jpeg" 
                    alt="Zhou Mo" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 p-1.5 sm:p-2 bg-bg-primary rounded-full border border-primary-glow text-primary-glow">
                  <Network size={12} className="sm:w-4 sm:h-4" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-2">Zhou Mo</h3>
              <p className="text-lg sm:text-xl text-primary-glow mb-3 sm:mb-4">Ecosystem Connector</p>
              <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 max-w-md px-2">Crypto nomad for 3 years, focused on AI and digital nomad communities in East China. Organizer of the China Digital Nomad Conference, connecting 100+ communities and more than 1,000 creators and developers.</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Ecosystem Design
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Community Ops
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Resource Integration
                </span>
              </div>
            </div>
          </div>
          </ScrollAnimation>

          {/* Team Member 2 */}
          <ScrollAnimation animation="slide-in-right" delay={100}>
            <div className="bg-bg-secondary/50 backdrop-blur-sm border border-text-secondary/20 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary-glow transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/logos/Darren.jpeg" 
                    alt="Darren" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 p-1.5 sm:p-2 bg-bg-primary rounded-full border border-primary-glow text-primary-glow">
                  <Zap size={12} className="sm:w-4 sm:h-4" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-2">Darren</h3>
              <p className="text-lg sm:text-xl text-primary-glow mb-3 sm:mb-4">Developer Enabler</p>
              <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 max-w-md px-2">5+ years in tech innovation communities, built multiple open source organizations, served 100K+ developers. Believes: technology value amplifies through connections, innovation grows through collaboration.</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Network Building
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Tech Content
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Community Culture
                </span>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>

        {/* Shared Belief */}
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-glow/15 via-primary-glow/10 to-primary-light/15 backdrop-blur-sm border border-primary-glow/30 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-center max-w-4xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary-glow rounded-full"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-primary-glow rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-glow rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-glow/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 sm:mb-6">
                Our Shared Belief
              </h3>
              
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto px-2">
                Building the <span className="text-primary-glow font-semibold">most vibrant</span> <span className="text-primary-glow font-semibold">AI-driven cutting-edge tech</span> innovation community focused on <span className="text-primary-glow font-semibold">AI + Web3</span> through <span className="text-primary-glow font-semibold">open collaboration</span>
              </p>
            </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}