'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Code, Users, Gift, Lightbulb, Target } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      icon: Code,
      question: "I'm a Web2 developer with no blockchain knowledge. Can I join?",
      answer: "Absolutely! 70% of our content is designed for zero-experience developers. Follow the learning path with AI assistance, and you can write your first smart contract in 30 days."
    },
    {
      icon: Users,
      question: "I'm not a developer, just interested in Web3. Is this suitable for me?",
      answer: "Perfect! 30% of our members are writers, operators, designers, and other cross-domain contributors. You can use your professional skills to participate in content creation, community operations, event planning, etc."
    },
    {
      icon: Gift,
      question: "Is the community free?",
      answer: "Yes, all learning resources, collaborative courses, and event participation are completely free. We maintain operations through blockchain grants and partner sponsorships."
    },
    {
      icon: Lightbulb,
      question: "How do I start contributing content or making proposals?",
      answer: "We are optimizing the proposal process. Please stay in touch - any valuable ideas are welcome!"
    },
    {
      icon: Target,
      question: "What are the requirements for participating in collaborative learning/hackathons?",
      answer: "Zero barriers! We encourage developers of all levels to participate. What matters is learning attitude and collaborative spirit."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-display">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-2">
            Answering your questions about CryptoTime Developer Community
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon
            const isOpen = openIndex === index
            
            return (
              <div
                key={index}
                className="group bg-gradient-to-r from-bg-secondary/50 to-bg-secondary/30 rounded-xl sm:rounded-2xl border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-glow/10"
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
                        Q: {faq.question}
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
                        {faq.answer}
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