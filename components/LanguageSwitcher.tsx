'use client'

import { useState, useEffect, useRef } from 'react'
import { Globe } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { locales, localeNames, type Locale } from '@/lib/i18n-config'

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|zh|ja|ko)/, '') || '/'
    // Add new locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    router.push(newPath)
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-bg-secondary/50 hover:bg-bg-secondary border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300"
      >
        <Globe size={18} className="text-primary-glow" />
        <span className="text-text-secondary font-medium">{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-bg-secondary/95 backdrop-blur-md border border-primary-glow/20 rounded-xl shadow-2xl shadow-primary-glow/20 overflow-hidden z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                locale === currentLocale
                  ? 'bg-primary-glow/20 text-primary-glow font-semibold'
                  : 'text-text-secondary hover:bg-primary-glow/10 hover:text-primary-glow'
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
