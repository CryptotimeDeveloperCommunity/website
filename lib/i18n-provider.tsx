'use client'

import { createContext, useContext, ReactNode } from 'react'
import type { Locale } from './i18n-config'

type Translations = Record<string, any>

const I18nContext = createContext<{
  locale: Locale
  t: Translations
}>({
  locale: 'en',
  t: {}
})

export function I18nProvider({
  locale,
  translations,
  children
}: {
  locale: Locale
  translations: Translations
  children: ReactNode
}) {
  return (
    <I18nContext.Provider value={{ locale, t: translations }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslations must be used within I18nProvider')
  }
  return context
}
