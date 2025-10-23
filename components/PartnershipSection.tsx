'use client'

import { Users, Link, Briefcase, Award, Lightbulb, FileText, Mail, MessageCircle } from 'lucide-react'

export default function PartnershipSection() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            🤝 合作形式
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            寻找志同道合的合作伙伴，共同建设Web3开发者生态
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Partnership Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Partners We're Looking For */}
          <div className="group">
            <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-3xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
              <div className="flex items-center mb-8">
                <Users className="w-10 h-10 text-primary-glow mr-4" />
                <h3 className="text-3xl font-bold text-text-primary">我们寻找的合作伙伴</h3>
              </div>
              
              <div className="space-y-6">
                {/* Blockchain/L2 Projects */}
                <div className="bg-bg-primary/50 rounded-2xl p-6 border border-text-primary/5 hover:border-primary-glow/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-glow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Link className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-text-primary mb-2">公链/L2项目</h4>
                      <p className="text-text-secondary leading-relaxed">
                        寻求开发者增长、生态激活的解决方案
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Web3 Projects */}
                <div className="bg-bg-primary/50 rounded-2xl p-6 border border-text-primary/5 hover:border-primary-glow/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-glow/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-text-primary mb-2">Web3项目方</h4>
                      <p className="text-text-secondary leading-relaxed">
                        需要技术人才、希望参与开发者培养
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Partnership Methods */}
          <div className="group">
            <div className="bg-gradient-to-r from-bg-primary/80 to-bg-primary/60 rounded-3xl p-8 border border-text-primary/20 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
              <div className="flex items-center mb-8">
                <Award className="w-10 h-10 text-primary-glow mr-4" />
                <h3 className="text-3xl font-bold text-text-primary">合作方式</h3>
              </div>
              
              <div className="space-y-4">
                {/* Grant Sponsorship */}
                <div className="bg-bg-secondary/50 rounded-xl p-4 border border-text-primary/5 hover:border-primary-glow/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary-glow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">Grant赞助</h4>
                      <p className="text-text-secondary text-sm">支持社区课程、活动、内容生产</p>
                    </div>
                  </div>
                </div>
                
                {/* Joint Training */}
                <div className="bg-bg-secondary/50 rounded-xl p-4 border border-text-primary/5 hover:border-primary-glow/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary-glow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">联合培养</h4>
                      <p className="text-text-secondary text-sm">定制化训练营、企业专场、人才输送</p>
                    </div>
                  </div>
                </div>
                
                {/* Ecosystem Building */}
                <div className="bg-bg-secondary/50 rounded-xl p-4 border border-text-primary/5 hover:border-primary-glow/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-primary-glow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">生态共建</h4>
                      <p className="text-text-secondary text-sm">联合举办黑客松、提供项目孵化资源</p>
                    </div>
                  </div>
                </div>
                
                {/* Content Co-creation */}
                <div className="bg-bg-secondary/50 rounded-xl p-4 border border-text-primary/5 hover:border-primary-glow/20 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-glow/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary-glow" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">内容共创</h4>
                      <p className="text-text-secondary text-sm">品牌合作、技术内容联合生产</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-glow/15 to-primary-light/15 rounded-3xl p-8 border border-primary-glow/20">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-primary-glow mr-4" />
              <h3 className="text-3xl font-bold text-text-primary">联系我们</h3>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-bg-primary/50 rounded-2xl p-6 border border-text-primary/10">
                <div className="flex items-center justify-center space-x-4">
                  <MessageCircle className="w-8 h-8 text-primary-glow" />
                  <div className="text-center">
                    <p className="text-text-secondary mb-2">Telegram</p>
                    <p className="text-2xl font-bold text-primary-glow">@zhoumo_828</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-text-secondary">
                  期待与您建立合作关系，共同推动Web3开发者生态的发展
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}