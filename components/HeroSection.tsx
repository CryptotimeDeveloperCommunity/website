'use client'

import { Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from '@/lib/i18n-provider'

export default function HeroSection() {
  const { locale, t } = useTranslations()
  const hero = t?.hero || {
    title: "Your Gateway to China's AI Market",
    chinaMarketEntry: "China Market Entry",
    serviceProvider: "Service Provider",
    subtitle: "Professional market entry services for international AI products",
    description: "Leveraging 100+ AI communities and KOLs across 20+ cities in China",
    cta: "Start Your Journey",
    learnMore: "Learn More",
    scrollToExplore: "Scroll to explore"
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Planets */}
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
        <div className="planet planet-4"></div>
        <div className="planet planet-5"></div>
        <div className="planet planet-6"></div>
        
        {/* Orbit Lines */}
        <div className="orbit-line orbit-1"></div>
        <div className="orbit-line orbit-2"></div>

        {/* Static Star Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-glow rounded-full opacity-30 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20 sm:pt-0">
        {/* Floating particles around title */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-glow rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 40}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1.5 + Math.random() * 1}s`,
                transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`
              }}
            />
          ))}
        </div>
        {/* Main Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero-title font-black text-text-primary mb-6 sm:mb-8 leading-tight cursor-default group font-orbitron tracking-normal sm:tracking-wide md:tracking-wider flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-2 md:gap-3 px-2"
          style={{
            fontFamily: 'var(--font-orbitron)',
            textShadow: '0 0 10px rgba(255, 165, 0, 0.3), 0 0 20px rgba(255, 165, 0, 0.2), 0 0 30px rgba(255, 165, 0, 0.1)',
            WebkitTextStroke: '1px rgba(255, 165, 0, 0.2)'
          }}
        >
          <div className="relative inline-block transition-all duration-500 group-hover:scale-105 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-glow group-hover:via-primary-light group-hover:to-primary-glow md:group-hover:tracking-widest whitespace-nowrap">
            {hero.chinaMarketEntry}
            {/* Sci-fi glow effect overlay */}
            <div className="absolute inset-0 text-primary-glow opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm -z-10 font-orbitron">
              {hero.chinaMarketEntry}
            </div>
            {/* Neon border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20">
              <div className="absolute inset-0 border-2 border-primary-glow rounded-lg blur-sm"></div>
            </div>
          </div>
          <div className="relative inline-block transition-all duration-500 group-hover:scale-105 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-light group-hover:via-primary-glow group-hover:to-primary-light md:group-hover:drop-shadow-[0_0_30px_rgba(255,165,0,0.8)] md:group-hover:rotate-1 md:group-hover:tracking-widest whitespace-nowrap">
            {hero.serviceProvider}
            {/* Sci-fi glow effect overlay */}
            <div className="absolute inset-0 text-primary-light opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm -z-10 font-orbitron">
              {hero.serviceProvider}
            </div>
            {/* Neon border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20">
              <div className="absolute inset-0 border-2 border-primary-light rounded-lg blur-sm"></div>
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-primary font-bold hover:text-primary-glow transition-colors duration-300 cursor-default font-exo2 tracking-wide px-2 sm:px-4">
            {hero.subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary hover:text-primary-glow transition-colors duration-300 cursor-default font-exo2 tracking-wide px-2 sm:px-4">
            {hero.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-6 sm:px-4">
          <a
            href="https://t.me/zhoumo_828"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-sm sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl sm:rounded-3xl px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base md:text-lg shadow-lg shadow-primary-glow/50 hover:shadow-2xl hover:shadow-primary-glow/80 relative overflow-hidden magnetic-button"
          >
            {/* Button Pulse Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl sm:rounded-3xl animate-pulse opacity-50"></div>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <span className="relative z-10">{hero.cta}</span>
            <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>

          <a
            href={`/${locale}/about`}
            className="group w-full max-w-sm sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 glass-effect rounded-2xl sm:rounded-3xl px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-text-primary hover:bg-text-primary/10 transition-all duration-300 hover:border-primary-highlight/50 hover:scale-105 font-semibold text-sm sm:text-base md:text-lg relative overflow-hidden magnetic-button shadow-lg hover:shadow-primary-glow/30"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">{hero.learnMore}</span>
            <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px] md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>
        </div>

      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="w-6 h-10 border-2 border-text-primary/30 rounded-full flex justify-center group-hover:border-primary-glow transition-colors duration-300">
          <div className="w-1 h-3 bg-text-primary/50 rounded-full mt-2 animate-pulse group-hover:bg-primary-glow transition-colors duration-300"></div>
        </div>
        {/* Scroll Hint */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-text-secondary/50 group-hover:text-primary-glow transition-colors duration-300 whitespace-nowrap">
          {hero.scrollToExplore}
        </div>
      </div>
    </section>
  )
}
