import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scale, Apple, Clock, Activity, Leaf, Shield, ChevronRight } from 'lucide-react';
import { dietaryPrinciples } from '../data/guideContent';

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Apple,
  Clock,
  Activity,
  Leaf,
  Shield,
};

const DietaryPrinciples = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(1);

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
            <h1 className="font-bold text-[#4A4A4A]">食养原则</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <Leaf className="w-4 h-4" />
              科学指导
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              {dietaryPrinciples.title}
            </h1>
            <p className="text-lg text-[#6A6A6A]">{dietaryPrinciples.description}</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {dietaryPrinciples.principles.map((principle, index) => {
              const Icon = iconMap[principle.icon] || Leaf;
              const isExpanded = expandedId === principle.id;
              
              return (
                <div
                  key={principle.id}
                  className={`bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : principle.id)}
                    className="w-full p-6 flex items-center gap-4 text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6B5A6] to-[#F7C5C0] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#F6B5A6] text-white text-sm font-bold flex items-center justify-center">
                          {principle.id}
                        </span>
                        <h3 className="text-lg font-bold text-[#4A4A4A]">{principle.title}</h3>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-[#F6B5A6] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-[#6A6A6A] mb-4">{principle.content}</p>
                      <ul className="space-y-2">
                        {principle.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F6B5A6] mt-2 flex-shrink-0" />
                            <span className="text-[#6A6A6A] text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Food Choices */}
          <div className={`max-w-4xl mx-auto mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl shadow-soft p-8">
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Apple className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                食物选择建议
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: '谷薯类', rec: '全谷物、粗粮、杂粮', lim: '精制米面', avoid: '油炸食品、糕点' },
                  { name: '蔬菜类', rec: '各类新鲜蔬菜', lim: '高淀粉根茎类', avoid: '油炸蔬菜' },
                  { name: '水果类', rec: '低GI水果', lim: '高糖水果', avoid: '水果罐头、果脯' },
                  { name: '畜禽类', rec: '低脂肉类', lim: '带皮禽肉', avoid: '肥肉、五花肉' },
                  { name: '水产类', rec: '清蒸海鲜', lim: '红烧鱼类', avoid: '油炸水产品' },
                  { name: '豆类', rec: '豆腐、豆浆', lim: '少量加工豆制品', avoid: '油豆腐' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#FFF9F5] rounded-xl">
                    <h4 className="font-bold text-[#4A4A4A] mb-2">{item.name}</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-green-600">✓ {item.rec}</p>
                      <p className="text-yellow-600">△ {item.lim}</p>
                      <p className="text-red-500">✗ {item.avoid}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => navigate('/recipe/northeast')}
              className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              查看地区食谱
            </button>
            <button 
              onClick={() => navigate('/calories')}
              className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
            >
              查询食物热量
            </button>
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

export default DietaryPrinciples;
