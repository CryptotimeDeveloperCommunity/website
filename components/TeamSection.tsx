'use client'

import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Zhou Mo",
      nameChinese: "周莫",
      title: "International Digital Nomad Ecosystem Connector",
      image: "/logos/zhoumo.jpeg",
      background: [
        "Co-founder of Digital Nomad Conference",
        "Project Manager of 'Full-Stack Digital Nomad Survey Report'",
        "Organizer of International Digital Nomad Conference NomadSummit",
        "Connecting 100+ organizations and 1,500+ digital nomads globally"
      ],
      advantage: "Deep understanding of global digital nomad ecosystem, with precise touchpoint capabilities for overseas OPC entrepreneurs entering China"
    },
    {
      name: "Su Peng",
      nameChinese: "苏鹏",
      title: "AI Developer Community Operations Expert",
      image: "/logos/Darren.jpeg",
      background: [
        "City leader of well-known AI open source community Datawhale",
        "Co-founder of community incubator AGI Villa",
        "Years of developer community operations experience",
        "Connecting 1,000+ domestic and international developers"
      ],
      advantage: "Rich technical community operations experience and industry docking capabilities, providing high-quality local technical ecosystem connections"
    }
  ]

  return (
    <section id="team" className="py-20 bg-bg-primary relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 font-orbitron">
            Meet Our <span className="text-primary-glow">Team</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Experienced professionals bridging international innovation and China's market
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <ScrollAnimation
              key={index}
              animation={index === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 100}
            >
              <div className="bg-bg-secondary/50 backdrop-blur-sm border border-text-secondary/20 rounded-2xl overflow-hidden hover:border-primary-glow transition-all duration-300 h-full">
                {/* Header with Image */}
                <div className="bg-gradient-to-br from-primary-glow/10 to-primary-light/5 p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-glow/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {member.name} <span className="text-primary-glow">|</span> {member.nameChinese}
                  </h3>
                  <p className="text-primary-glow font-semibold">{member.title}</p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Background */}
                  <div>
                    <h4 className="text-sm font-bold text-primary-glow uppercase tracking-wide mb-3">
                      Background
                    </h4>
                    <ul className="space-y-2">
                      {member.background.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-text-secondary">
                          <span className="text-primary-glow mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Advantage */}
                  <div className="bg-primary-glow/5 border-l-4 border-primary-glow rounded-r-lg p-4">
                    <h4 className="text-sm font-bold text-primary-glow uppercase tracking-wide mb-2">
                      Core Advantage
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {member.advantage}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Mission Statement */}
        <ScrollAnimation animation="fade-in-up" delay={200}>
          <div className="bg-gradient-to-br from-primary-glow/15 via-primary-glow/10 to-primary-light/15 backdrop-blur-sm border border-primary-glow/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Our Mission
            </h3>

            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              Helping international AI products <span className="text-primary-glow font-semibold">succeed in China</span> through <span className="text-primary-glow font-semibold">authentic community connections</span> and <span className="text-primary-glow font-semibold">local market expertise</span>
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
