'use client'

import { Users, Code, Network, Zap, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-bg-primary relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl sm:text-5xl font-bold text-center text-text-primary mb-16"
        >
          Why <span className="text-primary-glow">us</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Team Member 1 */}
          <div className="bg-bg-secondary/50 backdrop-blur-sm border border-text-secondary/20 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary-glow transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image 
                    src="/logos/zhoumo.jpeg" 
                    alt="Zhou Mo" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 bg-bg-primary rounded-full border border-primary-glow text-primary-glow">
                  <Network size={16} />
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">Zhou Mo</h3>
              <p className="text-xl text-primary-glow mb-4">Ecosystem Connector</p>
              <p className="text-text-secondary mb-6 max-w-md">Digital nomad culture promoter, core builder of Chinese youth community ecosystem. Experienced blockchain ecosystem pain points: talent loss, shallow events, declining community vitality.</p>
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

          {/* Team Member 2 */}
          <div className="bg-bg-secondary/50 backdrop-blur-sm border border-text-secondary/20 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary-glow transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image 
                    src="/logos/Darren.jpeg" 
                    alt="Darren" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 bg-bg-primary rounded-full border border-primary-glow text-primary-glow">
                  <Zap size={16} />
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">Darren</h3>
              <p className="text-xl text-primary-glow mb-4">Developer Enabler</p>
              <p className="text-text-secondary mb-6 max-w-md">5+ years in tech innovation communities, built multiple open source organizations, served 100K+ developers. Believes: technology value amplifies through connections, innovation grows through collaboration.</p>
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
        </div>

        {/* Shared Belief */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary-glow/15 via-primary-glow/10 to-primary-light/15 backdrop-blur-sm border border-primary-glow/30 rounded-3xl p-12 text-center max-w-4xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary-glow rounded-full"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-primary-glow rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary-glow rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary-glow" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                Our Shared Belief
              </h3>
              
              <p className="text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Building the <span className="text-primary-glow font-semibold">most vibrant</span> <span className="text-primary-glow font-semibold">AI + Web3</span> developer network through <span className="text-primary-glow font-semibold">open collaboration</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}