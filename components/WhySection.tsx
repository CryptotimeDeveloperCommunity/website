'use client'

import { Brain, Users, Network, ArrowRight, Clock, Target, Globe } from 'lucide-react'

export default function WhySection() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            Why are we building this
            <span className="text-primary-glow"> AI-driven</span>
            developer community?
          </h2>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full"></div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pain Point 1: AI Learning */}
          <div className="group relative">
            <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/10">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                <Brain className="w-8 h-8 text-primary-glow" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                AI is reshaping how developers learn
              </h3>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-text-secondary mb-2">
                      <span className="text-text-primary font-semibold">Before:</span>
                      Learning Web3 required 6-12 months of reading docs, trial and error, and lonely exploration
                    </p>
                    <p className="text-text-secondary">
                      <span className="text-primary-glow font-semibold">Now:</span>
                      With AI assistance, you can write your first smart contract in 3 days
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary-glow/5 border-l-4 border-primary-glow p-4 rounded-r-lg">
                  <p className="text-text-secondary">
                    <span className="text-primary-glow font-semibold">But the problem is:</span>
                    Most developers don't know how to use AI effectively for learning and building Web3
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Point 2: Talent Mismatch */}
          <div className="group relative">
            <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/10">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                <Target className="w-8 h-8 text-primary-glow" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Severe mismatch between talent and opportunities
              </h3>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-bg-primary/50 p-4 rounded-lg border border-text-primary/5">
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-semibold">Industry side:</span>
                      Blockchain ecosystems lack developers, projects can't find talent, grants go undistributed
                    </p>
                  </div>
                  
                  <div className="bg-bg-primary/50 p-4 rounded-lg border border-text-primary/5">
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-semibold">Talent side:</span>
                      Traditional developers want to transition but lack pathways, Web3 newcomers lack hands-on opportunities
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary-glow/5 border-l-4 border-primary-glow p-4 rounded-r-lg">
                  <p className="text-text-secondary">
                    <span className="text-primary-glow font-semibold">Missing link:</span>
                    A network that can bidirectionally connect and continuously supply talent
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Point 3: Creator Network */}
          <div className="group relative">
            <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/10">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-6 group-hover:bg-primary-glow/20 transition-colors">
                <Network className="w-8 h-8 text-primary-glow" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Chinese-speaking regions need a truly open creator network
              </h3>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-bg-primary/50 p-4 rounded-lg border border-text-primary/5">
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-semibold">Current state:</span>
                      Fragmented communities, information silos, newcomers struggle to integrate
                    </p>
                  </div>
                  
                  <div className="bg-bg-primary/50 p-4 rounded-lg border border-text-primary/5">
                    <p className="text-text-secondary">
                      <span className="text-text-primary font-semibold">We believe:</span>
                      Innovation truly happens when developers and creators connect and empower each other
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary-glow/5 border-l-4 border-primary-glow p-4 rounded-r-lg">
                  <p className="text-text-secondary">
                    <span className="text-primary-glow font-semibold">Goal:</span>
                    Not just teaching technology, but building an ecosystem where everyone can contribute and grow together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#vision" 
            className="inline-flex items-center justify-center px-8 py-4 border border-primary-glow text-primary-glow rounded-full text-lg font-semibold hover:bg-primary-glow/10 transition-all duration-300"
          >
            Learn more about our vision <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}