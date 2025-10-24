'use client'

import { Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          className="text-hero-title font-bold text-text-primary mb-8 leading-tight font-display hover:text-primary-glow transition-all duration-500 cursor-default"
        >
          CryptoTime Developer Community
        </h1>

        {/* Subtitle */}
        <div className="mb-10 space-y-3">
          <p className="text-hero-subtitle text-text-primary font-medium hover:text-primary-glow transition-colors duration-300 cursor-default">
            <span className="text-primary-glow">AI</span> + <span className="text-primary-glow">Web3</span> Developer Community for Chinese Speakers
          </p>
          <p className="text-hero-description text-text-secondary hover:text-primary-glow transition-colors duration-300 cursor-default">
            Bridging AI Innovation with Web3 Technology
          </p>
          <p className="text-base text-text-secondary/80 hover:text-primary-glow transition-colors duration-300 cursor-default">
            Collaborative Learning × Open Collaboration | From Code to Career
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://github.com/CryptotimeDeveloperCommunity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-bg-primary border border-text-primary/30 rounded-3xl px-10 py-5 text-text-primary hover:bg-text-primary/10 transition-all duration-300 hover:border-primary-highlight/50 hover:scale-105 font-semibold text-lg relative overflow-hidden"
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Github size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">GitHub</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>
          
          <a 
            href="https://t.me/zhoumo_828" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-gradient-to-r from-primary-glow to-primary-light rounded-3xl px-10 py-5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg relative overflow-hidden"
          >
            {/* Button Pulse Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-3xl animate-pulse opacity-50"></div>
            <span className="relative z-10">Join Community</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p 
            className="text-text-secondary text-sm hover:text-primary-glow transition-colors duration-300 cursor-default"
          >
            <span className="text-primary-highlight font-semibold hover:scale-110 transition-transform duration-300 inline-block">500+</span> developers target by 2025
          </p>
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
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
