'use client'

import { Globe, Target, Users, Heart, ArrowDown, ArrowRight, Code, Zap, BookOpen } from 'lucide-react'

export default function VisionSection() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary-glow rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary-glow rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-primary-glow rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            🌏 我们的愿景
          </h2>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full"></div>
        </div>

        {/* Vision Pyramid */}
        <div className="space-y-8">
          {/* Layer 1: Core Vision */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-primary-glow/20 to-primary-light/20 rounded-3xl p-8 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-12 h-12 text-primary-glow mr-4" />
                <h3 className="text-3xl font-bold text-text-primary">核心愿景</h3>
              </div>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-text-primary leading-relaxed font-medium">
                  打造一个
                  <span className="text-primary-glow font-bold"> 开放、互助 </span>
                  的华语区Web3开发者社区，相信
                  <span className="text-primary-glow font-bold"> AI </span>
                  可以让每个人都能参与Web3建设。
                </p>
              </div>
              
              {/* Decorative Arrow */}
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-6 h-6 text-primary-glow animate-bounce" />
              </div>
            </div>
          </div>

          {/* Layer 2: Specific Goals */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-bg-primary/80 to-bg-primary/60 rounded-3xl p-8 border border-text-primary/20 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-primary-glow mr-4" />
                <h3 className="text-3xl font-bold text-text-primary">具体目标</h3>
              </div>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-text-primary leading-relaxed font-medium">
                  成为华语区
                  <span className="text-primary-glow font-bold"> 最活跃 </span>
                  的Web3开发者网络之一，为各大公链输送
                  <span className="text-primary-glow font-bold text-2xl"> 500+ </span>
                  开发者人才
                </p>
              </div>
              
              {/* Stats Visualization */}
              <div className="flex justify-center mt-8 space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow">500+</div>
                  <div className="text-sm text-text-secondary">开发者</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow">多链</div>
                  <div className="text-sm text-text-secondary">生态</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-glow">华语区</div>
                  <div className="text-sm text-text-secondary">网络</div>
                </div>
              </div>
              
              {/* Decorative Arrow */}
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-6 h-6 text-primary-glow animate-bounce" />
              </div>
            </div>
          </div>

          {/* Layer 3: Inclusivity */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-3xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-primary-glow mr-4" />
                <h3 className="text-3xl font-bold text-text-primary">包容性</h3>
              </div>
              
              <div className="text-center max-w-4xl mx-auto mb-8">
                <p className="text-xl text-text-primary leading-relaxed font-medium">
                  无论你是想转型Web3的传统开发者，对AI+区块链感兴趣的探索者，还是希望用技术表达创意的写作者、运营者——
                  <span className="text-primary-glow font-bold"> 这里都有你的位置。</span>
                </p>
              </div>
              
              {/* User Types */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-bg-primary/50 rounded-2xl p-6 border border-text-primary/10">
                  <Code className="w-8 h-8 text-primary-glow mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-text-primary mb-2">传统开发者</h4>
                  <p className="text-text-secondary text-sm">想转型Web3的技术人员</p>
                </div>
                
                <div className="bg-bg-primary/50 rounded-2xl p-6 border border-text-primary/10">
                  <Zap className="w-8 h-8 text-primary-glow mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-text-primary mb-2">探索者</h4>
                  <p className="text-text-secondary text-sm">对AI+区块链感兴趣的学习者</p>
                </div>
                
                <div className="bg-bg-primary/50 rounded-2xl p-6 border border-text-primary/10">
                  <BookOpen className="w-8 h-8 text-primary-glow mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-text-primary mb-2">创造者</h4>
                  <p className="text-text-secondary text-sm">用技术表达创意的写作者、运营者</p>
                </div>
              </div>
              
              {/* Decorative Arrow */}
              <div className="flex justify-center mt-8">
                <ArrowDown className="w-6 h-6 text-primary-glow animate-bounce" />
              </div>
            </div>
          </div>

          {/* Layer 4: Commitment */}
          <div className="group relative">
            <div className="bg-gradient-to-r from-primary-glow/15 to-primary-light/15 rounded-3xl p-8 border border-primary-glow/20 hover:border-primary-glow/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-12 h-12 text-primary-glow mr-4" />
                <h3 className="text-3xl font-bold text-text-primary">陪伴承诺</h3>
              </div>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-2xl text-text-primary leading-relaxed font-bold">
                  陪你从
                  <span className="text-primary-glow"> 第一行代码 </span>
                  到
                  <span className="text-primary-glow"> 第一个项目 </span>
                  ，从
                  <span className="text-primary-glow"> 独立开发者 </span>
                  到
                  <span className="text-primary-glow"> 生态建设者</span>
                  。
                </p>
              </div>
              
              {/* Journey Visualization */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mb-2">
                    <Code className="w-8 h-8 text-primary-glow" />
                  </div>
                  <div className="text-sm text-text-secondary">第一行代码</div>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary-glow" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mb-2">
                    <Zap className="w-8 h-8 text-primary-glow" />
                  </div>
                  <div className="text-sm text-text-secondary">第一个项目</div>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary-glow" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-primary-glow" />
                  </div>
                  <div className="text-sm text-text-secondary">生态建设者</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-primary-glow hover:bg-primary-light text-bg-primary rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span>加入我们的愿景</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  )
}
