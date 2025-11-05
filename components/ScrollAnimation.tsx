'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right'
  delay?: number
  threshold?: number
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          // 只触发一次，之后取消观察
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  // 根据动画类型返回对应的类名
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0'
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-fade-in-up'
      case 'fade-in':
        return 'animate-fade-in'
      case 'slide-in-left':
        return 'animate-slide-in-left'
      case 'slide-in-right':
        return 'animate-slide-in-right'
      default:
        return 'animate-fade-in-up'
    }
  }

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
    >
      {children}
    </div>
  )
}

