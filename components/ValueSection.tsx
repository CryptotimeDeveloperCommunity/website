'use client'

import { BookOpen, Users, Zap, ArrowRight, Briefcase, Heart } from 'lucide-react'

export default function ValueSection() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            What can you get by joining us?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We are building infrastructure for Web3 creators
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Infrastructure Network */}
        <div className="relative mb-16">
          {/* Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              <path 
                d="M200 200 L400 100 L600 200 L200 200" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              <path 
                d="M200 200 L400 200" 
                stroke="url(#gradient2)" 
                strokeWidth="1" 
                strokeDasharray="3,3"
              />
              <path 
                d="M400 200 L600 200" 
                stroke="url(#gradient2)" 
                strokeWidth="1" 
                strokeDasharray="3,3"
              />
              <path 
                d="M400 100 L400 200" 
                stroke="url(#gradient2)" 
                strokeWidth="1" 
                strokeDasharray="3,3"
              />
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#FF4444" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#DC2626" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#FF4444" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Three Infrastructure Nodes */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Knowledge Infrastructure */}
            <div className="group relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-glow to-primary-light rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-primary-glow/20 group-hover:border-primary-glow/50">
                  <BookOpen className="w-10 h-10 text-bg-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  📚 Open Knowledge Infrastructure
                </h3>
                <p className="text-primary-glow text-lg font-semibold mb-6">
                  Build to Learn
                </p>
                
                <div className="bg-bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-text-primary/10 group-hover:border-primary-glow/30 transition-all duration-300">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Feishu Knowledge Base × Web3 E-books × AI Learning Assistant, building the most complete Web3 knowledge graph for Chinese speakers
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Structured knowledge system</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>AI intelligent learning assistant</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Real-time updated content</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Network */}
            <div className="group relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-glow to-primary-light rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-primary-glow/20 group-hover:border-primary-glow/50">
                  <Users className="w-10 h-10 text-bg-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  🤝 Collaborative Growth Network
                </h3>
                <p className="text-primary-glow text-lg font-semibold mb-6">
                  Learn to Build
                </p>
                
                <div className="bg-bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-text-primary/10 group-hover:border-primary-glow/30 transition-all duration-300">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Proposal-driven collaborative learning mechanism, grant-incentivized contribution culture, everyone is both student and mentor
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Proposal-driven learning</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Grant incentive mechanism</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Bidirectional mentorship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Incubator */}
            <div className="group relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-glow to-primary-light rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-primary-glow/20 group-hover:border-primary-glow/50">
                  <Zap className="w-10 h-10 text-bg-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  🔥 Innovation Incubator
                </h3>
                <p className="text-primary-glow text-lg font-semibold mb-6">
                  Build to Impact
                </p>
                
                <div className="bg-bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-text-primary/10 group-hover:border-primary-glow/30 transition-all duration-300">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Summer School × Hackathons × Project Acceleration, from idea to demo, from code to ecosystem contribution
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Summer School Bootcamp</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Hackathon Competitions</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary-glow rounded-full"></div>
                      <span>Project Acceleration Incubation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Benefits */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-3xl p-8 border border-primary-glow/20">
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              You will gain
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Career Development */}
              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-primary-glow mr-3" />
                  <h4 className="text-xl font-bold text-text-primary">Career Development Opportunities</h4>
                </div>
                <div className="space-y-2 text-text-secondary">
                  <p>Connect with project teams</p>
                  <p>Get recommendations</p>
                  <p>Find jobs</p>
                </div>
              </div>
              
              {/* Long-term Growth */}
              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary-glow mr-3" />
                  <h4 className="text-xl font-bold text-text-primary">Long-term Growth Partners</h4>
                </div>
                <div className="space-y-2 text-text-secondary">
                  <p>Find companions</p>
                  <p>Not learning alone</p>
                  <p>Grow together</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-8">
              <button className="group inline-flex items-center space-x-3 bg-primary-glow hover:bg-primary-light text-bg-primary rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105">
                <span>Join Us Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}