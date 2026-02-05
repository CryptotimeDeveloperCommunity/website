'use client'

import { MessageSquare, Video, Code2, Users2, MapPin, ExternalLink, Calendar, Users } from 'lucide-react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'
import { useTranslations } from '@/lib/i18n-provider'

export default function ShowcaseSection() {
  const { t } = useTranslations()
  const sh = t?.showcase || {}
  const items = [
    { id: 1, key: 'onlineCommunity', icon: MessageSquare, image: '/imgs/community.png', metricsKeys: ['communities', 'members', 'cities'], metricValues: ['100+', '10K+', '20+'] },
    { id: 2, key: 'onlineEvent', icon: Video, image: '/imgs/online.png', metricsKeys: ['events', 'attendees', 'products'], metricValues: ['30+', '5K+', '15+'] },
    { id: 3, key: 'hackathon', icon: Code2, image: '/imgs/hackathon.jpg', metricsKeys: ['hackathons', 'developers', 'projects'], metricValues: ['12+', '2K+', '200+'] },
    { id: 4, key: 'meetup', icon: Users2, image: '/imgs/meetup.jpg', metricsKeys: ['meetups', 'attendees', 'cities'], metricValues: ['50+', '3K+', '20+'] }
  ]
  const showcaseItems = items.map(({ id, key, icon, image, metricsKeys, metricValues }) => {
    const d = sh[key] || {}
    const m = d.metrics || {}
    return {
      id,
      title: d.title ?? key,
      category: d.category ?? key,
      icon,
      location: d.location ?? '',
      date: d.date ?? '',
      participants: d.participants ?? '',
      description: d.description ?? '',
      image,
      metrics: metricsKeys.map((k, i) => ({ label: m[k] ?? k, value: metricValues[i] })),
      tags: Array.isArray(d.tags) ? d.tags : []
    }
  })

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
              {sh.title ?? 'Our Success Stories'}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={100}>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
              {(() => {
                const subtitle = sh.subtitle ?? 'Real results from our community-driven approach to China market entry'
                const highlight = sh.subtitleHighlight ?? 'community-driven approach'
                if (!highlight || !subtitle.includes(highlight)) return subtitle
                return subtitle.split(highlight).map((part: string, i: number) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <span className="text-primary-glow font-bold">{highlight}</span>}
                  </span>
                ))
              })()}
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
                <div className={`relative h-64 lg:h-full bg-gradient-to-br from-primary-glow/20 to-bg-secondary overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-glow/90 backdrop-blur-sm px-4 py-2 rounded-full z-10">
                    <span className="text-bg-primary font-semibold text-sm">{item.category}</span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <item.icon className="w-12 h-12 text-white/80" />
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
                        <span>{item.participants}</span>
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
                    {item.tags.map((tag: string, idx: number) => (
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
              {sh.impact?.title ?? 'Overall Impact'}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">100+</div>
                <div className="text-text-secondary">{sh.impact?.communities ?? 'Online Communities'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">90+</div>
                <div className="text-text-secondary">{sh.impact?.events ?? 'Events & Activities'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">20K+</div>
                <div className="text-text-secondary">{sh.impact?.participants ?? 'Total Participants'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-glow mb-2">20+</div>
                <div className="text-text-secondary">{sh.impact?.cities ?? 'Cities Covered'}</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <p className="text-xl text-text-secondary mb-6">
              {sh.cta?.question ?? 'Want to be our next success story?'}
            </p>
            <a
              href="https://t.me/zhoumo_828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl px-10 py-5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-2xl shadow-primary-glow/50 magnetic-button"
            >
              <span>{sh.cta?.button ?? 'Start Your Journey'}</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
