import { I18nProvider } from '@/lib/i18n-provider'
import { locales, defaultLocale, type Locale } from '@/lib/i18n-config'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang as Locale

  if (!locales.includes(lang)) {
    notFound()
  }

  let translations = {}
  try {
    translations = (await import(`@/lib/locales/${lang}.json`)).default
  } catch (error) {
    console.error(`Failed to load translations for ${lang}`)
  }

  return (
    <I18nProvider locale={lang} translations={translations}>
      {children}
    </I18nProvider>
  )
}
