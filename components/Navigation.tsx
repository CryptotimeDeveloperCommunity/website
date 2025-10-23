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
              width={180} 
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors">
              Services
            </a>
            <a href="#community" className="text-text-secondary hover:text-text-primary transition-colors">
              Community
            </a>
            <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://discord.gg/cryptotime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <MessageCircle size={20} />
              <span>Discord</span>
            </a>
            <button className="flex items-center space-x-2 bg-text-primary border border-text-primary/30 rounded-2xl px-6 py-2 text-bg-primary hover:bg-primary-highlight transition-colors font-semibold">
              <Globe size={16} />
              <span>Explore Now</span>
            </button>
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
              <a href="#about" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#community" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Community
              </a>
              <a href="#contact" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <div className="border-t border-white/10 pt-2 mt-2">
                <a 
                  href="https://discord.gg/cryptotime" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Discord</span>
                </a>
                <button className="flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white transition-colors w-full text-left">
                  <Globe size={16} />
                  <span>Explore Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
