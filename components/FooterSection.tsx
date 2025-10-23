'use client'

import { MessageCircle, Mail, Github, Twitter, Globe, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary border-t border-text-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/logos/logo.png" 
                  alt="CryptoTime" 
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                AI-powered Web3 developer community for Chinese speakers, lowering Web3 barriers with AI, building an open collaborative developer ecosystem.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://discord.gg/cryptotime" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center hover:bg-primary-glow/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary-glow" />
                </a>
                
                <a 
                  href="https://github.com/cryptotime" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center hover:bg-primary-glow/30 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary-glow" />
                </a>
                
                <a 
                  href="https://twitter.com/cryptotime" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center hover:bg-primary-glow/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-primary-glow" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-text-secondary hover:text-primary-glow transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-text-secondary hover:text-primary-glow transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-text-secondary hover:text-primary-glow transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-text-secondary hover:text-primary-glow transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-primary-glow" />
                  <span className="text-text-secondary">@zhoumo_828</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-glow" />
                  <span className="text-text-secondary">contact@cryptotime.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-primary-glow" />
                  <span className="text-text-secondary">cryptotime.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-text-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © 2024 CryptoTime Developer Community. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-text-secondary hover:text-primary-glow transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-text-secondary hover:text-primary-glow transition-colors text-sm">
                Terms of Service
              </a>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-primary-glow/20 rounded-lg flex items-center justify-center hover:bg-primary-glow/30 transition-colors"
              >
                <ArrowUp className="w-4 h-4 text-primary-glow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
