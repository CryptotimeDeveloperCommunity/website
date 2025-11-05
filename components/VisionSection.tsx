'use client'

import { Globe, Target, Users, Heart, ArrowDown, ArrowRight, Code, Zap, BookOpen, Github } from 'lucide-react'

export default function VisionSection() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary-glow rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary-glow rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Holographic grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary-glow rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-orbitron tracking-wide" style={{
            textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
            WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
          }}>
            🌏 Our Vision
          </h2>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full"></div>
        </div>

        {/* Vision Pyramid */}
        <div className="space-y-8 sm:space-y-12">
          {/* Layer 1: Core Vision - Full Width Card with DeAI CTA */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-primary-glow/20 to-primary-light/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-glow/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-light/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-4">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-glow" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">Core Vision</h3>
                </div>
                
                <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg md:text-xl text-text-primary leading-relaxed font-medium px-2">
                    Build an
                    <span className="text-primary-glow font-bold"> open and collaborative </span>
                    <span className="text-primary-glow font-bold">AI + Web3</span> developer community, believing that
                    <span className="text-primary-glow font-bold"> AI + Web3 </span>
                    can enable everyone to participate in the future of technology.
                  </p>
                </div>
                
                {/* DeAI CTA Section */}
                <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-primary-glow/20">
                  <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-center md:gap-8">
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-center md:justify-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-glow/30 to-primary-light/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs sm:text-sm font-semibold text-primary-glow mb-1">📚 Start Learning</div>
                        <div className="text-xs text-text-secondary hidden sm:block">The first Chinese-speaking DeAI guidance</div>
                      </div>
                    </div>
                    
                    <a 
                      href="https://github.com/CryptotimeDeveloperCommunity/DeAI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base shadow-lg relative overflow-hidden"
                    >
                      {/* Button Pulse Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-xl sm:rounded-2xl animate-pulse opacity-50"></div>
                      <Github size={16} className="sm:w-[18px] sm:h-[18px] relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10">View DeAI Handbook</span>
                      <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </a>
                  </div>
                </div>
                
                {/* Decorative Arrow */}
                <div className="flex justify-center mt-6 sm:mt-8">
                  <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Layer 2: Specific Goals - Split Layout for Visual Variety */}
          <div className="grid md:grid-cols-5 gap-4 sm:gap-6 items-start md:items-center">
            <div className="md:col-span-2 flex flex-row items-center gap-3 sm:gap-4 mb-4 md:mb-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-glow/30 to-primary-light/30 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary-glow" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">Specific Goals</h3>
            </div>
            <div className="md:col-span-3">
              <div className="bg-gradient-to-r from-bg-primary/60 to-bg-primary/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-primary-glow">
                <p className="text-base sm:text-lg text-text-primary leading-relaxed">
                  Become one of the
                  <span className="text-primary-glow font-bold"> most active </span>
                  <span className="text-primary-glow font-bold">AI + Web3</span> developer networks, supplying
                  <span className="text-primary-glow font-bold text-xl sm:text-2xl"> 500+ </span>
                  developer talents to major ecosystems
                </p>
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="flex justify-center py-3 sm:py-4">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent"></div>
          </div>

          {/* Layer 3: Inclusivity - Card with Grid */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
              <div className="flex items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-glow" />
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">Inclusivity</h3>
              </div>
              
              <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-text-primary leading-relaxed font-medium px-2">
                  Whether you're a traditional developer wanting to transition to <span className="text-primary-glow font-bold">AI + Web3</span>, an explorer interested in emerging tech, or a creator hoping to express innovation through technology—
                  <span className="text-primary-glow font-bold"> there's a place for you here.</span>
                </p>
              </div>
              
              {/* User Types */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-bg-primary/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300">
                  <Code className="w-7 h-7 sm:w-8 sm:h-8 text-primary-glow mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">Traditional Developers</h4>
                  <p className="text-text-secondary text-xs sm:text-sm">Transitioning to <span className="text-primary-glow">AI + Web3</span></p>
                </div>
                
                <div className="bg-bg-primary/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary-glow mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">Explorers</h4>
                  <p className="text-text-secondary text-xs sm:text-sm">Interested in emerging tech</p>
                </div>
                
                <div className="bg-bg-primary/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 sm:col-span-2 md:col-span-1">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-primary-glow mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">Creators</h4>
                  <p className="text-text-secondary text-xs sm:text-sm">Expressing innovation through technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="flex justify-center py-3 sm:py-4">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent"></div>
          </div>

          {/* Layer 4: Commitment - Horizontal Layout */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-primary-glow/15 via-primary-light/10 to-primary-glow/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
              {/* Header Section - Mobile Optimized */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-glow/30 to-primary-light/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary-glow" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary leading-tight">Our Commitment</h3>
                </div>
              </div>
              
              {/* Commitment Text */}
              <div className="mb-5 sm:mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-primary leading-relaxed">
                  Accompanying you from your
                  <span className="text-primary-glow font-bold"> first line of code </span>
                  to your
                  <span className="text-primary-glow font-bold"> first <span className="text-primary-glow">AI + Web3</span> project </span>
                  , from
                  <span className="text-primary-glow font-bold"> independent developer </span>
                  to
                  <span className="text-primary-glow font-bold"> ecosystem builder</span>
                  .
                </p>
              </div>
              
              {/* Journey Visualization - Mobile Optimized */}
              <div className="relative pt-4 sm:pt-6 border-t border-primary-glow/20">
                {/* Desktop: Horizontal line */}
                <div className="absolute inset-0 top-1/2 hidden md:block">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary-glow/30 to-transparent"></div>
                </div>
                
                {/* Mobile: Compact vertical layout */}
                <div className="flex md:flex-row flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 relative">
                  <div className="text-center flex-1 max-w-[120px] sm:max-w-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-glow/30 to-primary-light/30 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3 shadow-lg mx-auto">
                      <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-glow" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-text-primary">First Code</div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-glow rotate-90 md:rotate-0 flex-shrink-0 my-1 md:my-0" />
                  
                  <div className="text-center flex-1 max-w-[120px] sm:max-w-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-glow/30 to-primary-light/30 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3 shadow-lg mx-auto">
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-glow" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-text-primary">First Project</div>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-glow rotate-90 md:rotate-0 flex-shrink-0 my-1 md:my-0" />
                  
                  <div className="text-center flex-1 max-w-[120px] sm:max-w-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary-glow/30 to-primary-light/30 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3 shadow-lg mx-auto">
                      <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-glow" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-text-primary">Ecosystem Builder</div>
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