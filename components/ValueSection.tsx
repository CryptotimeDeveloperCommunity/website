'use client'

import { BookOpen, Users, Zap, Briefcase, Heart } from 'lucide-react'

export default function ValueSection() {
  return (
    <section id="value" className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            What can you get by joining us?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We are building infrastructure for <span className="text-primary-glow">AI + Web3</span> creators
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Infrastructure Flow */}
        <div className="relative mb-16">
          {/* Vertical Flow Design */}
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Knowledge Base */}
            <div className="flex items-center mb-12 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-4 border-primary-glow/30">
                <BookOpen className="w-8 h-8 text-bg-primary" />
              </div>
              <div className="ml-8 flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-semibold text-primary-glow bg-primary-glow/10 px-3 py-1 rounded-full mr-4">Step 1</span>
                  <h3 className="text-2xl font-bold text-text-primary">
                    📚 <span className="text-primary-glow">AI + Web3</span> Knowledge Base
                  </h3>
                </div>
                <p className="text-primary-glow text-lg font-semibold mb-4">Build to Learn</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Structured knowledge system × AI learning assistant × Real-time Web3 content
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Structured knowledge</span>
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">AI assistant</span>
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Real-time content</span>
                </div>
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex justify-center mb-12">
              <div className="w-8 h-8 border-r-2 border-b-2 border-primary-glow rotate-45 animate-pulse"></div>
            </div>

            {/* Step 2: Collaboration Network */}
            <div className="flex items-center mb-12 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-4 border-primary-glow/30">
                <Users className="w-8 h-8 text-bg-primary" />
              </div>
              <div className="ml-8 flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-semibold text-primary-glow bg-primary-glow/10 px-3 py-1 rounded-full mr-4">Step 2</span>
                  <h3 className="text-2xl font-bold text-text-primary">
                    🤝 Collaborative Growth Network
                  </h3>
                </div>
                <p className="text-primary-glow text-lg font-semibold mb-4">Learn to Build</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Proposal-driven learning × Grant incentives × Everyone is both student and mentor
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Proposal learning</span>
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Grant incentives</span>
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Bidirectional mentorship</span>
                </div>
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="flex justify-center mb-12">
              <div className="w-8 h-8 border-r-2 border-b-2 border-primary-glow rotate-45 animate-pulse"></div>
            </div>

            {/* Step 3: Innovation Hub */}
            <div className="flex items-center group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-4 border-primary-glow/30">
                <Zap className="w-8 h-8 text-bg-primary" />
              </div>
              <div className="ml-8 flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-semibold text-primary-glow bg-primary-glow/10 px-3 py-1 rounded-full mr-4">Step 3</span>
                  <h3 className="text-2xl font-bold text-text-primary">
                    🔥 <span className="text-primary-glow">AI + Web3</span> Innovation Hub
                  </h3>
                </div>
                <p className="text-primary-glow text-lg font-semibold mb-4">Build to Impact</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Summer School × Hackathons × Project Acceleration: from idea to ecosystem impact
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Summer School</span>
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Hackathons</span>
                  <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Project Acceleration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Benefits */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-text-primary mb-12">
            What you'll gain
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Career Development */}
            <div className="group">
              <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-glow/10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-bg-primary" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-text-primary mb-6">Career Opportunities</h4>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <p className="text-text-secondary">Connect with <span className="text-primary-glow font-semibold">AI + Web3</span> teams</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <p className="text-text-secondary">Get recommendations</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <p className="text-text-secondary">Find jobs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Long-term Growth */}
            <div className="group">
              <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 rounded-2xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-glow/10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-bg-primary" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-text-primary mb-6">Growth Partners</h4>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <p className="text-text-secondary">Find companions</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <p className="text-text-secondary">Learn together</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <p className="text-text-secondary">Grow together</p>
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