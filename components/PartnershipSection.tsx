'use client'

import { Users, Link, Briefcase, Award, Lightbulb, FileText } from 'lucide-react'

export default function PartnershipSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-display">
            🤝 Partnership
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-2">
            Looking for like-minded partners to build the Web3 developer ecosystem together
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* Partnership Flow */}
        <div className="relative mb-10 sm:mb-16 mt-6 sm:mt-8">
          {/* Central Hub Design */}
          <div className="max-w-5xl mx-auto">
            {/* Central Hub */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-glow to-primary-light rounded-full mb-4 sm:mb-6 border-4 border-primary-glow/30">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-bg-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">Partnership Hub</h3>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto px-2">
                Building the <span className="text-primary-glow font-semibold">AI + Web3</span> ecosystem together
              </p>
            </div>

            {/* Partnership Flow */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left: What We Offer */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-text-primary mb-2">What We Offer</h4>
                  <div className="w-16 h-1 bg-primary-glow mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  {/* Grant Sponsorship */}
                  <div className="group flex items-center space-x-4 bg-gradient-to-r from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-bg-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-text-primary mb-1">Grant Sponsorship</h5>
                      <p className="text-text-secondary text-sm">Support community courses, events, and content production</p>
                    </div>
                  </div>
                  
                  {/* Joint Training */}
                  <div className="group flex items-center space-x-4 bg-gradient-to-r from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-bg-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-text-primary mb-1">Joint Training</h5>
                      <p className="text-text-secondary text-sm">Customized bootcamps, corporate sessions, talent pipeline</p>
                    </div>
                  </div>
                  
                  {/* Ecosystem Building */}
                  <div className="group flex items-center space-x-4 bg-gradient-to-r from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-6 h-6 text-bg-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-text-primary mb-1">Ecosystem Building</h5>
                      <p className="text-text-secondary text-sm">Co-host hackathons, provide project incubation resources</p>
                    </div>
                  </div>
                  
                  {/* Content Co-creation */}
                  <div className="group flex items-center space-x-4 bg-gradient-to-r from-primary-glow/10 to-primary-light/5 rounded-2xl p-6 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-bg-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-text-primary mb-1">Content Co-creation</h5>
                      <p className="text-text-secondary text-sm">Brand partnerships, joint technical content production</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Who We're Looking For */}
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-text-primary mb-2">Who We're Looking For</h4>
                  <div className="w-16 h-1 bg-primary-glow mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  {/* Blockchain/L2 Projects */}
                  <div className="group bg-gradient-to-br from-primary-glow/15 to-primary-light/10 rounded-2xl p-8 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Link className="w-8 h-8 text-bg-primary" />
                      </div>
                      <div className="ml-4">
                        <h5 className="text-xl font-bold text-text-primary">Blockchain/L2 Projects</h5>
                        <p className="text-primary-glow font-semibold">Infrastructure Partners</p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Seeking solutions for developer growth and ecosystem activation. Looking for projects that want to build a strong developer community around their technology.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Developer Growth</span>
                      <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Ecosystem Activation</span>
                      <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Community Building</span>
                    </div>
                  </div>
                  
                  {/* Web3 Projects */}
                  <div className="group bg-gradient-to-br from-primary-glow/15 to-primary-light/10 rounded-2xl p-8 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-8 h-8 text-bg-primary" />
                      </div>
                      <div className="ml-4">
                        <h5 className="text-xl font-bold text-text-primary">Web3 Project Teams</h5>
                        <p className="text-primary-glow font-semibold">Innovation Partners</p>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Need technical talent and want to participate in developer cultivation. Perfect for teams building the next generation of Web3 applications.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Technical Talent</span>
                      <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Developer Cultivation</span>
                      <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm">Innovation</span>
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