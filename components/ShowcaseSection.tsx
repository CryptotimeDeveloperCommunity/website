'use client'

import { Calendar, Users, TrendingUp, Award, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function ShowcaseSection() {
  const showcaseItems = [
    {
      id: 1,
      title: 'AI Product Launch - Beijing',
      category: 'Product Launch',
      location: 'Beijing',
      date: '2024-12',
      participants: '500+',
      description: 'Successfully launched an international AI product in Beijing tech community, achieving 500+ early adopters in first week.',
      image: '/showcase/event-1.jpg', // 你需要添加实际图片
      metrics: [
        { label: 'Attendees', value: '500+' },
        { label: 'Communities', value: '15' },
        { label: 'Cities', value: '3' }
      ],
      tags: ['Product Launch', 'Community Event', 'AI']
    },
    {
      id: 2,
      title: 'Developer Meetup Series',
      category: 'Community Event',
      location: 'Shanghai, Shenzhen, Guangzhou',
      date: '2024-11',
      participants: '1000+',
      description: 'Organized multi-city developer meetups across China, connecting international AI tools with local developers.',
      image: '/showcase/event-2.jpg',
      metrics: [
        { label: 'Total Reach', value: '1000+' },
        { label: 'Cities', value: '8' },
        { label: 'Partners', value: '20+' }
      ],
      tags: ['Meetup', 'Developer Community', 'Multi-city']
    },
    {
      id: 3,
      title: 'AI Hardware Prototype Launch',
      category: 'Hardware',
      location: 'Shenzhen',
      date: '2024-10',
      participants: '300+',
      description: 'Facilitated hardware product prototyping and manufacturing for an AI startup, from design to production.',
      image: '/showcase/event-3.jpg',
      metrics: [
        { label: 'Prototypes', value: '50' },
        { label: 'Manufacturers', value: '5' },
        { label: 'Timeline', value: '4 weeks' }
      ],
      tags: ['Hardware', 'Manufacturing', 'Prototyping']
    }
  ]

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 font-orbitron tracking-wide" style={{
              textShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
              WebkitTextStroke: '0.5px rgba(255, 165, 0, 0.1)'
            }}>
              Our Success Stories
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={100}>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              Real results from our <span className="text-primary-glow font-bold">community-driven approach</span> to China market entry
            </p>
          </ScrollAnimation>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Showcase Grid */}
        <div className="space-y-12">
          {showcaseItems.map((item, index) => (
            <ScrollAnimation key={item.id} animation="fade-in-up" delay={index * 100}>
              <div className={`group glass-effect rounded-3xl overflow-hidden hover:border-primary-glow/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-glow/30 ${
                index % 2 === 0 ? 'lg:grid lg:grid-cols-2' : 'lg:grid lg:grid-cols-2'
              }`}>
                {/* Image Section */}
                <div className={`relative h-64 lg:h-full bg-gradient-to-br from-primary-glow/20 to-bg-secondary ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  {/* Placeholder for image - replace with actual Image component when you have photos */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 text-primary-glow/50 mx-auto mb-4" />
                      <p className="text-text-secondary text-sm">Event Photo</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-glow/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-bg-primary font-semibold text-sm">{item.category}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10">
                  {/* Title & Meta */}
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-3 group-hover:text-primary-glow transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary-glow" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary-glow" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary-glow" />
                        <span>{item.participants} participants</span>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 bg-bg-primary/50 rounded-xl">
                        <div className="text-2xl font-bold text-primary-glow mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-glow/10 border border-primary-glow/30 rounded-full text-xs text-primary-glow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats Summary */}
        <ScrollAnimation animation="fade-in-up" delay={300}>
          <div className="mt-16 glass-effect-strong rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary text-center mb-8">
              Overall Impact
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">
                  50+
                </div>
                <div className="text-text-secondary">
                  Events Organized
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">
                  10K+
                </div>
                <div className="text-text-secondary">
                  Community Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">
                  20+
                </div>
                <div className="text-text-secondary">
                  Cities Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">
                  30+
                </div>
                <div className="text-text-secondary">
                  Products Launched
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <p className="text-xl text-text-secondary mb-6">
              Want to be our next success story?
            </p>
            <a
              href="https://t.me/zhoumo_828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl px-10 py-5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-2xl shadow-primary-glow/50 magnetic-button"
            >
              <span>Start Your Journey</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
