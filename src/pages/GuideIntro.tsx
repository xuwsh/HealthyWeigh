import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Target, Users, FileText, ChevronRight, CheckCircle } from 'lucide-react';
import { guideIntroduction } from '../data/guideContent';

const GuideIntro = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F6B5A6]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#6A6A6A] hover:text-[#F6B5A6] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">返回首页</span>
            </button>
            <h1 className="font-bold text-[#4A4A4A]">指南介绍</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <BookOpen className="w-4 h-4" />
              关于指南
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              {guideIntroduction.title}
            </h1>
            <p className="text-lg text-[#6A6A6A]">
              成人肥胖食养指南（2024年版）
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Sections */}
            {guideIntroduction.sections.map((section, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                    {index === 0 ? <Target className="w-5 h-5 text-[#F6B5A6]" /> :
                     index === 1 ? <FileText className="w-5 h-5 text-[#F6B5A6]" /> :
                     index === 2 ? <BookOpen className="w-5 h-5 text-[#F6B5A6]" /> :
                     <Users className="w-5 h-5 text-[#F6B5A6]" />}
                  </div>
                  {section.title}
                </h2>
                <p className="text-[#6A6A6A] leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Key Points */}
            <div className={`bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 rounded-3xl p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6 text-center">指南核心内容</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: '食养原则', desc: '6条日常食养原则和建议', icon: 'Leaf' },
                  { title: '食物选择', desc: '各类食物推荐、限制和避免清单', icon: 'Apple' },
                  { title: '中医辨证', desc: '5种肥胖证型及对应食药物质', icon: 'Activity' },
                  { title: '地区食谱', desc: '7个地区、4个季节的食谱示例', icon: 'MapPin' },
                  { title: '食养方例', desc: '多种证型的食养方举例', icon: 'ChefHat' },
                  { title: '食物交换', desc: '常见食物交换表等实用工具', icon: 'Scale' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-soft">
                    <h4 className="font-bold text-[#4A4A4A] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#6A6A6A]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">指南特色</h2>
              <ul className="space-y-4">
                {[
                  '充分发挥现代营养学和传统食养的优势',
                  '将食药物质融入合理膳食中',
                  '根据不同地区、不同季节编制食谱',
                  '提供实用的食物交换表等工具',
                  '针对不同证型提供个性化食养方案',
                  '继承传统中医文化，发展传统食养服务',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F6B5A6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6A6A6A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/dietary-principles')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                了解食养原则
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/disclaimer')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                查看免责声明
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">基于国家卫健委《成人肥胖食养指南（2024年版）》制作</p>
        </div>
      </footer>
    </div>
  );
};

export default GuideIntro;
