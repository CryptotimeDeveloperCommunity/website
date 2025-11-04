'use client'

import { Calendar, Clock, CheckCircle, ArrowDown, Github, BookOpen, ArrowRight } from 'lucide-react'

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            🗺️ Roadmap
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our development roadmap, from current goals to medium-term vision
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-glow via-primary-light to-primary-glow opacity-30"></div>
          
          {/* Timeline Nodes */}
          <div className="space-y-16">
            {/* Current Goals - 1 Month */}
            <div className="relative flex items-center">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-glow rounded-full border-4 border-bg-primary z-10 flex items-center justify-center">
                <Clock className="w-3 h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 ml-auto lg:ml-0 lg:mr-auto">
                <div className="bg-gradient-to-r from-primary-glow/20 to-primary-light/20 rounded-3xl p-8 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-primary-glow mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">Current Goals</h3>
                      <p className="text-primary-glow font-semibold">1 Month</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">First batch of core content production</p>
                        <p className="text-text-secondary text-sm">Web3 content system building, AI learning path development</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Seed user recruitment</p>
                        <p className="text-text-secondary text-sm">First batch of 100-200 members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Goals - 3 Months */}
            <div className="relative flex items-center">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-light rounded-full border-4 border-bg-primary z-10 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 ml-auto">
                <div className="bg-gradient-to-r from-bg-secondary/80 to-bg-secondary/60 rounded-3xl p-8 border border-text-primary/20 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-primary-glow mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">Recent Goals</h3>
                      <p className="text-primary-glow font-semibold">3 Months</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Release Web3 Knowledge Base 1.0</p>
                        <p className="text-text-secondary text-sm">Covering 10+ mainstream blockchains</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Launch first collaborative learning course</p>
                        <p className="text-text-secondary text-sm">Systematic Web3 technology learning</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Establish 2-3 blockchain/project partnerships</p>
                        <p className="text-text-secondary text-sm">Building ecosystem cooperation relationships</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium-term Goals - 6-12 Months */}
            <div className="relative flex items-center">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-glow rounded-full border-4 border-bg-primary z-10 flex items-center justify-center">
                <ArrowDown className="w-3 h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 ml-auto lg:ml-0 lg:mr-auto">
                <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-3xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-primary-glow mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">Medium-term Goals</h3>
                      <p className="text-primary-glow font-semibold">6-12 Months</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Community scale reaches 1000+ active members</p>
                        <p className="text-text-secondary text-sm">Building a strong developer network</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Incubate 10+ quality projects into ecosystem</p>
                        <p className="text-text-secondary text-sm">From idea to ecosystem contribution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Establish sustainable grant/revenue distribution mechanism</p>
                        <p className="text-text-secondary text-sm">Long-term incentive mechanism</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-glow/20 via-primary-light/20 to-primary-glow/20 rounded-3xl p-12 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-glow to-primary-light rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-bg-primary" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-text-primary mb-4 font-display">
              📚 Explore DeAI
            </h3>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              The first Chinese-speaking DeAI guidance. From code to career. Learn everything about decentralized AI in our comprehensive beginner's handbook.
            </p>
            
            <a 
              href="https://github.com/CryptotimeDeveloperCommunity/DeAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-3xl px-10 py-5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg relative overflow-hidden"
            >
              {/* Button Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-3xl animate-pulse opacity-50"></div>
              <Github size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View DeAI Handbook</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}