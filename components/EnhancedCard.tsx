'use client'

import { ReactNode } from 'react'

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  hover3d?: boolean
  glowOnHover?: boolean
}

export default function EnhancedCard({
  children,
  className = '',
  hover3d = true,
  glowOnHover = true
}: EnhancedCardProps) {
  const baseClasses = 'glass-effect rounded-2xl p-8 transition-all duration-500'
  const hoverClasses = hover3d ? 'card-3d hover:scale-105' : 'hover:scale-102'
  const glowClasses = glowOnHover ? 'hover:shadow-2xl hover:shadow-primary-glow/30 hover:border-primary-glow/40' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>
      {children}
    </div>
  )
}
