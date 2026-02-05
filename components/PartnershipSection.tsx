'use client'

import { Mail, MessageCircle, Calendar } from 'lucide-react'
import { useTranslations } from '@/lib/i18n-provider'

export default function PartnershipSection() {
  const { t } = useTranslations()
  const p = t?.partnership || {}
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 font-display">
            🤝 {p.title ?? "Ready to Enter China?"}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-2">
            {p.subtitle ?? "Let's discuss how we can help your AI product succeed in China's market"}
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-4 sm:mt-6"></div>
        </div>

        {/* CTA Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Telegram */}
            <a
              href="https://t.me/zhoumo_828"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect rounded-2xl p-8 hover:border-primary-glow/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/30 text-center card-3d magnetic-button"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6 mx-auto group-hover:bg-primary-glow/30 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{p.quickChat?.title ?? 'Quick Chat'}</h3>
              <p className="text-text-secondary text-sm">
                {p.quickChat?.description ?? 'Message us on Telegram for a quick conversation'}
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@cryptotime.com"
              className="group glass-effect rounded-2xl p-8 hover:border-primary-glow/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/30 text-center card-3d magnetic-button"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6 mx-auto group-hover:bg-primary-glow/30 transition-colors">
                <Mail className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{p.emailUs?.title ?? 'Email Us'}</h3>
              <p className="text-text-secondary text-sm">
                {p.emailUs?.description ?? 'Send us a detailed inquiry via email'}
              </p>
            </a>

            {/* Schedule */}
            <a
              href="https://t.me/zhoumo_828"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect rounded-2xl p-8 hover:border-primary-glow/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-glow/30 text-center card-3d magnetic-button"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-glow/20 rounded-xl mb-6 mx-auto group-hover:bg-primary-glow/30 transition-colors">
                <Calendar className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{p.scheduleCall?.title ?? 'Schedule Call'}</h3>
              <p className="text-text-secondary text-sm">
                {p.scheduleCall?.description ?? 'Book a consultation to discuss your needs'}
              </p>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-6">
              {p.responseTime ?? 'Typical response time:'} <span className="text-primary-glow font-semibold">{p.responseValue ?? 'Within 24 hours'}</span>
            </p>
            <div className="bg-bg-primary/50 rounded-xl p-6 border border-text-primary/10">
              <p className="text-text-secondary text-sm leading-relaxed">
                {p.additionalInfo ?? "We work with companies of all sizes — from early-stage startups to established enterprises. Whether you're exploring the China market or ready to launch, we're here to help."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
