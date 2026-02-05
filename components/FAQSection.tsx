'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Users, Gift, Lightbulb, Target } from 'lucide-react'
import { useTranslations } from '@/lib/i18n-provider'

const defaultFaqs = [
  { icon: Target, question: "What makes your service different from traditional marketing agencies?", answer: "We provide authentic community-driven growth instead of paid ads. Our 100+ AI communities and 20+ city presence give you direct access to real developers and tech enthusiasts, not just impressions." },
  { icon: Users, question: "How quickly can you help us launch in China?", answer: "Typically 2-4 weeks from initial consultation to campaign launch. We handle everything: market research, community outreach, content localization, and user feedback collection." },
  { icon: Code, question: "Do you only work with AI products?", answer: "While AI products are our specialty, we also work with Web3, developer tools, and hardware products that target China's tech community. If your product serves developers or tech enthusiasts, we can help." },
  { icon: Lightbulb, question: "Can you help with hardware manufacturing?", answer: "Yes! We connect you with China's hardware supply chain for rapid prototyping and manufacturing. From PCB design to final assembly, we facilitate the entire process." },
  { icon: Gift, question: "What's your pricing model?", answer: "We offer flexible engagement models: project-based, retainer, or revenue-share partnerships. Contact us to discuss what works best for your needs and budget." }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useTranslations()
  const faq = t?.faq || {}
  const items = Array.isArray(faq.items) && faq.items.length > 0
    ? faq.items.map((item: { question: string; answer: string }, i: number) => ({
        ...defaultFaqs[i],
        question: item.question ?? defaultFaqs[i].question,
        answer: item.answer ?? defaultFaqs[i].answer
      }))
    : defaultFaqs

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-display">
            ❓ {faq.title ?? 'Frequently Asked Questions'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-2">
            {(() => {
              const subtitle = faq.subtitle ?? 'Common questions about our China market entry services'
              const highlight = faq.subtitleHighlight ?? 'China market entry services'
              if (!highlight || !subtitle.includes(highlight)) return subtitle
              return subtitle.split(highlight).map((part: string, i: number) => (
                <span key={i}>
                  {part}
                  {i === 0 && <span className="text-primary-glow font-semibold">{highlight}</span>}
                </span>
              ))
            })()}
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-6">
          {items.map((faqItem: { icon: typeof Target; question: string; answer: string }, index: number) => {
            const IconComponent = faqItem.icon
            const isOpen = openIndex === index
            
            return (
              <div
                key={index}
                className="group glass-effect rounded-xl sm:rounded-2xl hover:border-primary-glow/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary-glow/20 card-3d"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-start sm:items-center justify-between hover:bg-primary-glow/5 transition-colors duration-200 gap-3 sm:gap-0"
                >
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-glow/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-glow/30 transition-colors">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-primary-glow transition-colors">
                        Q: {faqItem.question}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="ml-2 sm:ml-4 flex-shrink-0 pt-1 sm:pt-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary group-hover:text-primary-glow transition-colors" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="ml-0 sm:ml-14 md:ml-16 bg-bg-primary/50 rounded-xl p-4 border border-text-primary/5">
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        <span className="text-primary-glow font-semibold">A: </span>
                        {faqItem.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}