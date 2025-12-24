'use client'

import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/20 backdrop-blur-md border-b border-text-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logos/logo.png" 
              alt="CryptoTime" 
              width={200} 
              height={70}
              className="h-10 sm:h-14 md:h-16 w-auto"
              priority
            />
          </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a 
                    href="#team" 
                    className="text-text-secondary hover:text-primary-glow transition-all duration-300 font-exo2 tracking-wide relative group"
                    onClick={() => {
                      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="relative z-10">Team</span>
                    <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm -z-10"></div>
                  </a>
                  <a 
                    href="#value" 
                    className="text-text-secondary hover:text-primary-glow transition-all duration-300 font-exo2 tracking-wide relative group"
                    onClick={() => {
                      document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="relative z-10">Value</span>
                    <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm -z-10"></div>
                  </a>
                  <a 
                    href="#roadmap" 
                    className="text-text-secondary hover:text-primary-glow transition-all duration-300 font-exo2 tracking-wide relative group"
                    onClick={() => {
                      document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="relative z-10">Roadmap</span>
                    <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm -z-10"></div>
                  </a>
                  <a 
                    href="#tech-talks" 
                    className="text-text-secondary hover:text-primary-glow transition-all duration-300 font-exo2 tracking-wide relative group"
                    onClick={() => {
                      document.getElementById('tech-talks')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="relative z-10">Tech Talks</span>
                    <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm -z-10"></div>
                  </a>
                </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://github.com/CryptotimeDeveloperCommunity/DeAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-2 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl px-6 py-3.5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold shadow-2xl shadow-primary-glow/50 overflow-visible border-2 border-primary-glow/30 hover:border-primary-glow/60"
            >
              {/* Enhanced Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl animate-pulse opacity-50"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-glow via-primary-light to-primary-glow rounded-2xl opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Sparkle Icon */}
              <Sparkles size={16} className="relative z-10 text-bg-primary animate-pulse group-hover:rotate-180 transition-transform duration-500" />
              
              <span className="relative z-10">DeAI Handbook</span>
              
              {/* NEW Badge */}
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-bounce z-20 border border-white/30">
                NEW
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <a 
                href="#team" 
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => {
                  document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Team
              </a>
              <a 
                href="#value" 
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => {
                  document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Value
              </a>
              <a 
                href="#roadmap" 
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => {
                  document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Roadmap
              </a>
              <a 
                href="#tech-talks" 
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => {
                  document.getElementById('tech-talks')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Tech Talks
              </a>
              <div className="border-t border-white/10 pt-3 mt-2">
                <a 
                  href="https://github.com/CryptotimeDeveloperCommunity/DeAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-glow to-primary-light rounded-xl px-5 py-3 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 font-semibold text-sm shadow-2xl shadow-primary-glow/50 overflow-visible border-2 border-primary-glow/30 hover:border-primary-glow/60"
                >
                  {/* Enhanced Pulse Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-xl animate-pulse opacity-50"></div>
                  
                  {/* Glowing Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-glow via-primary-light to-primary-glow rounded-xl opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
                  
                  {/* Sparkle Icon */}
                  <Sparkles size={14} className="relative z-10 text-bg-primary animate-pulse group-hover:rotate-180 transition-transform duration-500" />
                  
                  <span className="relative z-10">DeAI Handbook</span>
                  
                  {/* NEW Badge */}
                  <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-lg animate-bounce z-20 border border-white/30">
                    NEW
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
