'use client'

import { useState } from 'react'
import { Menu, X, MessageCircle, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/20 backdrop-blur-md border-b border-text-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logos/logo.png" 
              alt="CryptoTime" 
              width={200} 
              height={70}
              className="h-16 w-auto"
              priority
            />
          </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a 
                    href="#team" 
                    className="text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => {
                      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Team
                  </a>
                  <a 
                    href="#value" 
                    className="text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => {
                      document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Value
                  </a>
                  <a 
                    href="#roadmap" 
                    className="text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => {
                      document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Roadmap
                  </a>
                </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://t.me/zhoumo_828" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 bg-gradient-to-r from-primary-glow/10 to-primary-light/10 border border-primary-glow/30 rounded-2xl px-6 py-3 text-text-primary hover:bg-gradient-to-r hover:from-primary-glow/20 hover:to-primary-light/20 hover:border-primary-glow/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={18} className="text-primary-glow group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold">Join Community</span>
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <a 
                href="#team" 
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => {
                  document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Team
              </a>
              <a 
                href="#value" 
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => {
                  document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Value
              </a>
              <a 
                href="#roadmap" 
                className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => {
                  document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
              >
                Roadmap
              </a>
              <div className="border-t border-white/10 pt-2 mt-2">
                <a 
                  href="https://t.me/zhoumo_828" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 bg-gradient-to-r from-primary-glow/20 to-primary-light/20 border border-primary-glow/40 rounded-xl px-4 py-3 text-white hover:bg-gradient-to-r hover:from-primary-glow/30 hover:to-primary-light/30 transition-all duration-300 mx-3"
                >
                  <MessageCircle size={18} className="text-primary-glow group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Join Community</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
