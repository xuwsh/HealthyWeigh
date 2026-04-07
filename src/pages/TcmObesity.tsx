import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Leaf, Activity, Thermometer, Droplets, Wind, Flame } from 'lucide-react';
import { tcmObesityKnowledge } from '../data/guideContent';

const typeIcons: Record<string, React.ElementType> = {
  '胃热火郁证': Flame,
  '痰湿内盛证': Droplets,
  '气郁血瘀证': Wind,
  '脾虚不运证': Activity,
  '脾肾阳虚证': Thermometer,
};

const typeColors: Record<string, string> = {
  '胃热火郁证': 'from-red-400 to-orange-400',
  '痰湿内盛证': 'from-blue-400 to-cyan-400',
  '气郁血瘀证': 'from-purple-400 to-pink-400',
  '脾虚不运证': 'from-yellow-400 to-amber-400',
  '脾肾阳虚证': 'from-teal-400 to-green-400',
};

const TcmObesity = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeType, setActiveType] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const syndromeTypes = tcmObesityKnowledge.sections.slice(1);

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
            <h1 className="font-bold text-[#4A4A4A]">中医对肥胖的认识</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <BookOpen className="w-4 h-4" />
              中医智慧
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              {tcmObesityKnowledge.title}
            </h1>
            <p className="text-lg text-[#6A6A6A]">{tcmObesityKnowledge.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Introduction */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                {tcmObesityKnowledge.sections[0].title}
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed">{tcmObesityKnowledge.sections[0].content}</p>
            </div>

            {/* Syndrome Types Grid */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6 text-center">中医辨证分型</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {syndromeTypes.map((type, index) => {
                  const Icon = typeIcons[type.title] || Leaf;
                  const isActive = activeType === type.title;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveType(isActive ? null : type.title)}
                      className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                        isActive 
                          ? 'bg-white shadow-lg scale-105' 
                          : 'bg-white/50 hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${typeColors[type.title]} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-[#4A4A4A]">{type.title}</h3>
                      <p className="text-sm text-[#6A6A6A] mt-2">点击查看详情</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Type Detail */}
            {activeType && (
              <div className="bg-white rounded-3xl shadow-soft p-8 animate-fade-in">
                {syndromeTypes.map((type, index) => {
                  if (type.title !== activeType) return null;
                  
                  return (
                    <div key={index} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${typeColors[type.title]} flex items-center justify-center`}>
                          {(() => {
                            const Icon = typeIcons[type.title] || Leaf;
                            return <Icon className="w-7 h-7 text-white" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#4A4A4A]">{type.title}</h3>
                          <p className="text-[#6A6A6A]">中医辨证分型</p>
                        </div>
                      </div>

                      {/* Symptoms */}
                      <div>
                        <h4 className="font-bold text-[#4A4A4A] mb-3 flex items-center gap-2">
                          <Activity className="w-5 h-5 text-[#F6B5A6]" />
                          主要症状
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {type?.symptoms?.map((symptom, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm">
                              {symptom}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Food Therapy */}
                      <div className="p-4 bg-green-50 rounded-xl">
                        <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                          <Leaf className="w-5 h-5" />
                          食疗原则
                        </h4>
                        <p className="text-green-700">{type.foodTherapy}</p>
                      </div>

                      {/* Recommended Foods */}
                      <div>
                        <h4 className="font-bold text-[#4A4A4A] mb-3">推荐食药物质</h4>
                        <div className="flex flex-wrap gap-2">
                          {type?.recommendedFoods?.map((food, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F6B5A6] to-[#F7C5C0] text-white text-sm font-medium">
                              {food}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/constitution')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                进行体质辨识
              </button>
              <button 
                onClick={() => navigate('/food-medicine')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                查看食药同源
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

export default TcmObesity;
