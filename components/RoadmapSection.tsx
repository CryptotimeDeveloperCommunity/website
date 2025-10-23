'use client'

import { Calendar, Clock, CheckCircle, ArrowDown } from 'lucide-react'

export default function RoadmapSection() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 font-display">
            🗺️ Roadmap
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            我们的发展路线图，从当前目标到中期愿景
          </p>
          <div className="w-24 h-1 bg-primary-glow mx-auto rounded-full mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-glow via-primary-light to-primary-glow opacity-30"></div>
          
          {/* Timeline Nodes */}
          <div className="space-y-16">
            {/* Current Goals - 1 Month */}
            <div className="relative flex items-center">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-glow rounded-full border-4 border-bg-primary z-10 flex items-center justify-center">
                <Clock className="w-3 h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 ml-auto lg:ml-0 lg:mr-auto">
                <div className="bg-gradient-to-r from-primary-glow/20 to-primary-light/20 rounded-3xl p-8 border border-primary-glow/30 hover:border-primary-glow/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/20">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-primary-glow mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">当前目标</h3>
                      <p className="text-primary-glow font-semibold">1个月</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">首批核心内容生产</p>
                        <p className="text-text-secondary text-sm">Web3内容体系搭建、AI学习路径搭建</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">种子用户招募</p>
                        <p className="text-text-secondary text-sm">首批100-200名成员</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Goals - 3 Months */}
            <div className="relative flex items-center">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-light rounded-full border-4 border-bg-primary z-10 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 ml-auto">
                <div className="bg-gradient-to-r from-bg-secondary/80 to-bg-secondary/60 rounded-3xl p-8 border border-text-primary/20 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-primary-glow mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">近期目标</h3>
                      <p className="text-primary-glow font-semibold">3个月</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">发布Web3知识库1.0版本</p>
                        <p className="text-text-secondary text-sm">覆盖10+主流公链</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">启动首期共学课程</p>
                        <p className="text-text-secondary text-sm">系统性学习Web3技术</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">达成2-3个公链/项目方合作</p>
                        <p className="text-text-secondary text-sm">建立生态合作关系</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium-term Goals - 6-12 Months */}
            <div className="relative flex items-center">
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-glow rounded-full border-4 border-bg-primary z-10 flex items-center justify-center">
                <ArrowDown className="w-3 h-3 text-bg-primary" />
              </div>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 ml-auto lg:ml-0 lg:mr-auto">
                <div className="bg-gradient-to-r from-primary-glow/10 to-primary-light/10 rounded-3xl p-8 border border-text-primary/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-primary-glow mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">中期目标</h3>
                      <p className="text-primary-glow font-semibold">6-12个月</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">社区规模达到1000+活跃成员</p>
                        <p className="text-text-secondary text-sm">建立强大的开发者网络</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">孵化10+优质项目进入生态</p>
                        <p className="text-text-secondary text-sm">从idea到生态贡献</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-glow/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">建立可持续的grant/收益分配机制</p>
                        <p className="text-text-secondary text-sm">长期激励机制</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-secondary/30 rounded-2xl p-6 border border-text-primary/10">
              <div className="text-3xl font-bold text-primary-glow mb-2">100-200</div>
              <div className="text-text-secondary">种子用户</div>
            </div>
            
            <div className="bg-bg-secondary/30 rounded-2xl p-6 border border-text-primary/10">
              <div className="text-3xl font-bold text-primary-glow mb-2">1000+</div>
              <div className="text-text-secondary">活跃成员</div>
            </div>
            
            <div className="bg-bg-secondary/30 rounded-2xl p-6 border border-text-primary/10">
              <div className="text-3xl font-bold text-primary-glow mb-2">10+</div>
              <div className="text-text-secondary">孵化项目</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}