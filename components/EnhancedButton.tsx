'use client'

import { ReactNode } from 'react'

interface EnhancedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function EnhancedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: EnhancedButtonProps) {
  const baseClasses = 'group relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden magnetic-button'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-glow to-primary-light text-bg-primary hover:from-primary-light hover:to-primary-glow shadow-lg shadow-primary-glow/50 hover:shadow-2xl hover:shadow-primary-glow/80',
    secondary: 'glass-effect text-text-primary hover:bg-text-primary/10 shadow-lg hover:shadow-primary-glow/30',
    outline: 'border-2 border-primary-glow/50 text-primary-glow hover:bg-primary-glow/10 hover:border-primary-glow'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-10 py-5 text-lg rounded-3xl'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary-light animate-pulse opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </>
      )}
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
