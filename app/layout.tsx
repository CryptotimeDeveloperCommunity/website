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
  title: 'Cutting-edge Tech Developer Community',
  description: 'AI-Driven Cutting-Edge Tech Developer Community | Focused on AI + Web3 Collaborative Learning | Encouraging Open Collaboration, From Code to Career',
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
