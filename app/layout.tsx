import './globals.css'
import type { Metadata } from 'next'
import { Inter, Orbitron, Exo_2 } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900']
})
const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo2',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'China Market Entry Service Provider | AI Product Launch',
  description: 'Professional service provider helping international AI products enter China. 100+ communities, 20+ cities. From product launch to user growth.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${exo2.variable}`}>{children}</body>
    </html>
  )
}
