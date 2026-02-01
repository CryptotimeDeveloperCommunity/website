'use client'

import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
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
                    href="/"
                    className="text-text-secondary hover:text-primary-glow transition-all duration-300 font-exo2 tracking-wide relative group"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm -z-10"></div>
                  </a>
                  <a
                    href="/about"
                    className="text-text-secondary hover:text-primary-glow transition-all duration-300 font-exo2 tracking-wide relative group"
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-0 bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm -z-10"></div>
                  </a>
                </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center">
            <a
              href="https://t.me/zhoumo_828"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-2 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl px-6 py-3.5 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 hover:scale-105 font-semibold shadow-lg shadow-primary-glow/50 magnetic-button"
            >
              {/* Enhanced Pulse Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-2xl animate-pulse opacity-50"></div>

              {/* Message Icon */}
              <MessageCircle size={18} className="relative z-10 text-bg-primary" />

              <span className="relative z-10">Contact Us</span>
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
                href="/"
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="border-t border-white/10 pt-3 mt-2">
                <a
                  href="https://t.me/zhoumo_828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-glow to-primary-light rounded-xl px-5 py-3 text-bg-primary hover:from-primary-light hover:to-primary-glow transition-all duration-300 font-semibold text-sm shadow-lg shadow-primary-glow/50 magnetic-button"
                >
                  {/* Enhanced Pulse Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light rounded-xl animate-pulse opacity-50"></div>

                  {/* Message Icon */}
                  <MessageCircle size={16} className="relative z-10 text-bg-primary" />

                  <span className="relative z-10">Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
