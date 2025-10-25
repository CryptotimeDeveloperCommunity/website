'use client'

import { Brain, Users, Network, Target } from 'lucide-react'

export default function WhySection() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
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
        {/* Grid pattern */}
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
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            Why are we building this{' '}
            <span className="text-primary-glow font-black">AI + Web3</span>{' '}
            developer community?
          </h2>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full"></div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pain Point 1: AI Learning */}
          <div className="group relative flex flex-col">
            <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/10 flex flex-col h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-4 group-hover:bg-primary-glow/20 transition-colors">
                <Brain className="w-8 h-8 text-primary-glow" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                <span className="text-primary-glow">AI + Web3</span> learning revolution
              </h3>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">
                        <span className="text-primary-glow font-semibold">Past:</span> 6-12 months of docs, trial & error
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">
                        <span className="text-primary-glow font-semibold">Now:</span> First smart contract in 3 days
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-primary-glow/5 border-l-4 border-primary-glow p-4 rounded-r-lg">
                    <p className="text-text-secondary">
                      <span className="text-primary-glow font-semibold">Gap:</span> Most developers don't know how to combine AI with Web3 effectively
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Point 2: Talent Mismatch */}
          <div className="group relative flex flex-col">
            <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/10 flex flex-col h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-4 group-hover:bg-primary-glow/20 transition-colors">
                <Target className="w-8 h-8 text-primary-glow" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Talent-opportunity mismatch
              </h3>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">
                        <span className="text-primary-glow font-semibold">Industry:</span> Public chains lack developers, projects can't hire
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">
                        <span className="text-primary-glow font-semibold">Talent:</span> Traditional developers want to transition but lack pathways
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-primary-glow/5 border-l-4 border-primary-glow p-4 rounded-r-lg">
                    <p className="text-text-secondary">
                      <span className="text-primary-glow font-semibold">Solution:</span> Bridge the gap with community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Point 3: Creator Network */}
          <div className="group relative flex flex-col">
            <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/10 flex flex-col h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/10 rounded-xl mb-4 group-hover:bg-primary-glow/20 transition-colors">
                <Network className="w-8 h-8 text-primary-glow" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Need for open creator network
              </h3>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">
                        <span className="text-primary-glow font-semibold">Current:</span> Fragmented communities, information silos
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-text-secondary">
                        <span className="text-primary-glow font-semibold">Belief:</span> Innovation happens when creators connect
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-primary-glow/5 border-l-4 border-primary-glow p-4 rounded-r-lg">
                    <p className="text-text-secondary">
                      <span className="text-primary-glow font-semibold">Goal:</span> Build ecosystem where everyone contributes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}