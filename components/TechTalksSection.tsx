'use client'

import { Video, Play, ExternalLink, Calendar, Users } from 'lucide-react'

export default function TechTalksSection() {
  return (
    <section id="tech-talks" className="py-12 sm:py-16 md:py-20 bg-bg-secondary relative overflow-hidden">
      {/* Sci-fi Background Effects */}
      <div className="absolute inset-0">
        {/* Animated connection lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10">
            <defs>
              <linearGradient id="talksLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,165,0,0.8)" />
                <stop offset="50%" stopColor="rgba(255,165,0,0.4)" />
                <stop offset="100%" stopColor="rgba(255,165,0,0.8)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 300 Q 300 200 600 300 T 1200 300"
              stroke="url(#talksLineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        </div>
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
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
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            🎥 Tech Talks
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-exo2 tracking-wide px-2">
            Online live sharing of cutting-edge technologies, with recordings archived
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto">
          <a
            href="https://digitalnomadsinchina.notion.site/CT-Developer-Community-Archives-2d1885a3557d808781f6eb9d3bdd5dcd?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-gradient-to-br from-primary-glow/20 via-primary-light/15 to-primary-glow/20 rounded-3xl p-8 sm:p-12 border-2 border-primary-glow/30 hover:border-primary-glow/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/30 hover:scale-[1.02] relative overflow-hidden">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/5 via-primary-light/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start mb-6 sm:mb-8 gap-4 sm:gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-glow to-primary-light rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-4 border-primary-glow/30 shadow-lg shadow-primary-glow/20">
                    <Video className="w-10 h-10 sm:w-12 sm:h-12 text-bg-primary" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                      Developer Community Archives
                    </h3>
                    <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                      Explore cutting-edge technology sharing in <span className="text-primary-glow font-semibold">AI + Web3</span>, watch past live recordings, and learn and grow with community developers
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3 bg-bg-primary/30 rounded-xl p-4 border border-primary-glow/20 group-hover:border-primary-glow/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-glow to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-bg-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold text-sm sm:text-base">Live Recordings</p>
                      <p className="text-text-secondary text-xs sm:text-sm">Watch past sessions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-bg-primary/30 rounded-xl p-4 border border-primary-glow/20 group-hover:border-primary-glow/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-glow to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-bg-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold text-sm sm:text-base">Regular Updates</p>
                      <p className="text-text-secondary text-xs sm:text-sm">New content added frequently</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-bg-primary/30 rounded-xl p-4 border border-primary-glow/20 group-hover:border-primary-glow/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-glow to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-bg-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold text-sm sm:text-base">Community Sharing</p>
                      <p className="text-text-secondary text-xs sm:text-sm">Learn with developers</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-bg-primary/30 rounded-xl p-4 border border-primary-glow/20 group-hover:border-primary-glow/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-glow to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-5 h-5 text-bg-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold text-sm sm:text-base">Cutting-edge Tech</p>
                      <p className="text-text-secondary text-xs sm:text-sm">Latest innovations</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center sm:justify-start">
                  <div className="group/btn relative flex items-center space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl px-8 py-4 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 font-semibold text-lg shadow-2xl shadow-primary-glow/50 overflow-visible border-2 border-primary-glow/30 hover:border-primary-glow/60">
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl animate-pulse opacity-50"></div>
                    
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-glow via-primary-light to-primary-glow rounded-2xl opacity-30 blur-sm group-hover/btn:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                    
                    <span className="relative z-10">View Archives</span>
                    <ExternalLink size={20} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-text-secondary text-sm sm:text-base">
            Each live session recording is updated in the <span className="text-primary-glow font-semibold">Notion Archives</span>
          </p>
        </div>
      </div>
    </section>
  )
}

