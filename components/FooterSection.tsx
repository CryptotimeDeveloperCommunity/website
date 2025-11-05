'use client'

import { MessageCircle, Mail, Github, Twitter, Send, ArrowUp, MessageSquare, Heart, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function FooterSection() {
  const [showQRCode, setShowQRCode] = useState(false)
  const [showXiaohongshu, setShowXiaohongshu] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary border-t border-text-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 md:py-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Image 
                  src="/logos/logo.png" 
                  alt="CryptoTime" 
                  width={150}
                  height={50}
                  className="h-10 sm:h-12 md:h-14 w-auto"
                  priority
                />
              </div>
              
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-6 max-w-md">
                <span className="text-primary-glow">AI + Web3</span> developer community, building an open collaborative ecosystem for the future of technology.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://t.me/zhoumo_828" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center hover:bg-primary-glow/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary-glow" />
                </a>
                
                <a 
                  href="https://github.com/CryptotimeDeveloperCommunity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-glow/20 rounded-lg flex items-center justify-center hover:bg-primary-glow/30 transition-colors"
                >
                  <Github className="w-5 h-5 text-primary-glow" />
                </a>
                
                <a 
                  href="https://x.com/CryptoTimeDC" 
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
                  <a 
                    href="#team" 
                    className="text-text-secondary hover:text-primary-glow transition-colors"
                    onClick={() => {
                      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a 
                    href="#value" 
                    className="text-text-secondary hover:text-primary-glow transition-colors"
                    onClick={() => {
                      document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Value
                  </a>
                </li>
                <li>
                  <a 
                    href="#roadmap" 
                    className="text-text-secondary hover:text-primary-glow transition-colors"
                    onClick={() => {
                      document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
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
                  <Send className="w-4 h-4 text-primary-glow" />
                  <a 
                    href="https://t.me/zhoumo_828" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary-glow transition-colors"
                  >
                    @zhoumo_828
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Twitter className="w-4 h-4 text-primary-glow" />
                  <a 
                    href="https://x.com/CryptoTimeDC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary-glow transition-colors"
                  >
                    @CryptoTimeDC
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageSquare className="w-4 h-4 text-primary-glow" />
                  <button 
                    onClick={() => setShowQRCode(true)}
                    className="text-text-secondary hover:text-primary-glow transition-colors cursor-pointer"
                  >
                  WeChat Official Account
                  </button>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-primary-glow" />
                  <button 
                    onClick={() => setShowXiaohongshu(true)}
                    className="text-text-secondary hover:text-primary-glow transition-colors cursor-pointer"
                  >
                  Xiaohongshu
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-text-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © 2025 CryptoTime. All rights reserved.
            </div>
            
            <div className="flex items-center">
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

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-bg-primary border border-primary-glow/30 rounded-2xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowQRCode(false)}
              className="absolute top-4 right-4 text-text-secondary hover:text-primary-glow transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">WeChat Official Account</h3>
              <div className="flex justify-center">
                <Image 
                  src="/logos/qrcode.jpg" 
                  alt="WeChat QR Code" 
                  width={300} 
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <p className="text-text-secondary mt-4 text-sm">
                Scan to follow our WeChat Official Account
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Xiaohongshu Modal */}
      {showXiaohongshu && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-bg-primary border border-primary-glow/30 rounded-2xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowXiaohongshu(false)}
              className="absolute top-4 right-4 text-text-secondary hover:text-primary-glow transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">Xiaohongshu</h3>
              <div className="flex justify-center">
                <Image 
                  src="/logos/xiaohongshu.jpg" 
                  alt="Xiaohongshu QR Code" 
                  width={300} 
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <p className="text-text-secondary mt-4 text-sm">
                Scan to follow us on Xiaohongshu
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
