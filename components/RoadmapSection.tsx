'use client'

import { Calendar, Clock, CheckCircle, ArrowDown } from 'lucide-react'

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-12 sm:py-16 md:py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-display">
            🗺️ Roadmap
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-2">
            Our development roadmap, from current goals to medium-term vision
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-primary-glow via-primary-light to-primary-glow opacity-30"></div>
          
          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-16">
            {/* Current Goals - 1 Month */}
            <div className="relative flex items-start sm:items-center">
              {/* Timeline Node */}
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-glow rounded-full border-2 sm:border-4 border-bg-primary z-10 flex items-center justify-center -translate-x-1/2 sm:translate-x-0">
                <Clock className="w-2 h-2 sm:w-3 sm:h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full ml-6 sm:ml-0 lg:w-5/12 lg:mr-auto">
                <div className="bg-gradient-to-r from-primary-glow/20 to-primary-light/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow mr-3 sm:mr-4" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary">Current Goals</h3>
                      <p className="text-primary-glow font-semibold text-sm sm:text-base">1 Month</p>
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
            <div className="relative flex items-start sm:items-center">
              {/* Timeline Node */}
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-light rounded-full border-2 sm:border-4 border-bg-primary z-10 flex items-center justify-center -translate-x-1/2 sm:translate-x-0">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full ml-6 sm:ml-auto lg:w-5/12">
                <div className="bg-gradient-to-r from-bg-secondary/80 to-bg-secondary/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-text-primary/20 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow mr-3 sm:mr-4" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary">Recent Goals</h3>
                      <p className="text-primary-glow font-semibold text-sm sm:text-base">3 Months</p>
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
            <div className="relative flex items-start sm:items-center">
              {/* Timeline Node */}
              <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-primary-glow rounded-full border-2 sm:border-4 border-bg-primary z-10 flex items-center justify-center -translate-x-1/2 sm:translate-x-0">
                <ArrowDown className="w-2 h-2 sm:w-3 sm:h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full ml-6 sm:ml-0 lg:w-5/12 lg:mr-auto">
                <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow mr-3 sm:mr-4" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary">Medium-term Goals</h3>
                      <p className="text-primary-glow font-semibold text-sm sm:text-base">6-12 Months</p>
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
      </div>
    </section>
  )
}