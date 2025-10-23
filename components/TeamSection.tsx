'use client'

import { Users, Code, Network, Zap } from 'lucide-react'

export default function TeamSection() {
  return (
    <section className="py-20 bg-bg-primary relative z-10">
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
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary-glow to-primary-light p-1 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center text-text-secondary">
                  <Users size={64} className="text-primary-glow" />
                </div>
                <div className="absolute bottom-0 right-0 p-2 bg-bg-primary rounded-full border border-primary-glow text-primary-glow">
                  <Network size={16} />
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">Zhou Mo</h3>
              <p className="text-xl text-primary-glow mb-4">Ecosystem Connector</p>
              <p className="text-text-secondary mb-6 max-w-md">Promoter of China's digital nomad culture, core builder of Chinese youth community ecosystem, deeply involved in multiple blockchain projects, experienced various ecosystem pain points such as talent loss, insufficient event depth, and community vitality decline.</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Ecosystem Design
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Community Operations
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Cross-border Resource Integration
                </span>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-bg-secondary/50 backdrop-blur-sm border border-text-secondary/20 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-primary-glow transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary-glow to-primary-light p-1 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center text-text-secondary">
                  <Code size={64} className="text-primary-glow" />
                </div>
                <div className="absolute bottom-0 right-0 p-2 bg-bg-primary rounded-full border border-primary-glow text-primary-glow">
                  <Zap size={16} />
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-text-primary mb-2">Su Peng</h3>
              <p className="text-xl text-primary-glow mb-4">Developer Enabler</p>
              <p className="text-text-secondary mb-6 max-w-md">Five years deep in technology and innovation communities, participated in building and operating multiple domestic open source communities and organizations, served over 100,000 developers. Firmly believes: the value of technology is amplified in connections, the power of innovation grows in collaboration.</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Ecosystem Network Building
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Technical Content Development
                </span>
                <span className="bg-bg-primary border border-text-secondary/30 text-text-secondary text-sm px-4 py-2 rounded-full group-hover:border-primary-light group-hover:text-primary-light transition-colors duration-300">
                  Community Culture Shaping
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Shared Belief */}
        <div className="relative bg-gradient-to-r from-primary-glow/20 to-primary-light/20 backdrop-blur-sm border border-primary-glow/50 rounded-xl p-10 text-center max-w-3xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary-glow/10 animate-breathe"></div>
          </div>
          <p className="relative z-10 text-2xl sm:text-3xl font-bold text-text-primary leading-relaxed">
            Shared belief: Building the <span className="text-primary-glow">most vibrant</span> Web3 developer network in Chinese-speaking regions through <span className="text-primary-glow">open collaboration</span>
          </p>
        </div>
      </div>
    </section>
  )
}