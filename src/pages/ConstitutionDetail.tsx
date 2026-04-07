import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserCheck, Activity, ChevronRight, CheckCircle, Leaf, Flame, Droplets, Wind, Thermometer } from 'lucide-react';
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

const ConstitutionDetail = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeType, setActiveType] = useState(0);
  const [checkedSymptoms, setCheckedSymptoms] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const syndromeTypes = tcmObesityKnowledge.sections.slice(1);
  const currentType = syndromeTypes[activeType];

  const toggleSymptom = (symptom: string) => {
    const newChecked = new Set(checkedSymptoms);
    if (newChecked.has(symptom)) {
      newChecked.delete(symptom);
    } else {
      newChecked.add(symptom);
    }
    setCheckedSymptoms(newChecked);
  };

  const calculateMatch = () => {
    if (!currentType || !currentType.symptoms) return 0;
    const matched = currentType.symptoms.filter(s => checkedSymptoms.has(s)).length;
    return Math.round((matched / currentType.symptoms.length) * 100);
  };

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
            <h1 className="font-bold text-[#4A4A4A]">体质辨识</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <UserCheck className="w-4 h-4" />
              自我检测
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              中医体质辨识
            </h1>
            <p className="text-lg text-[#6A6A6A]">
              根据症状自测，了解您的体质类型，获取个性化食养建议
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Type Selector */}
            <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {syndromeTypes.map((type, index) => {
                const Icon = typeIcons[type.title] || Activity;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveType(index);
                      setCheckedSymptoms(new Set());
                    }}
                    className={`px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                      activeType === index
                        ? `bg-gradient-to-r ${typeColors[type.title]} text-white shadow-lg`
                        : 'bg-white text-[#6A6A6A] hover:bg-[#F6B5A6]/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {type.title}
                  </button>
                );
              })}
            </div>

            {/* Main Content */}
            {currentType && (
              <div className={`bg-white rounded-3xl shadow-soft overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className={`p-8 bg-gradient-to-r ${typeColors[currentType.title]}`}>
                  <div className="flex items-center gap-4">
                    {(() => {
                      const Icon = typeIcons[currentType.title] || Activity;
                      return <Icon className="w-10 h-10 text-white" />;
                    })()}
                    <div>
                      <h2 className="text-2xl font-bold text-white">{currentType.title}</h2>
                      <p className="text-white/80">点击符合的症状进行自测</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Symptoms Checklist */}
                    <div>
                      <h3 className="font-bold text-[#4A4A4A] mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-[#F6B5A6]" />
                        主要症状
                      </h3>
                      <div className="space-y-2">
                        {currentType?.symptoms?.map((symptom, idx) => (
                          <button
                            key={idx}
                            onClick={() => toggleSymptom(symptom)}
                            className={`w-full p-3 rounded-xl text-left transition-all flex items-center gap-3 ${
                              checkedSymptoms.has(symptom)
                                ? 'bg-[#F6B5A6]/10 border-2 border-[#F6B5A6]'
                                : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              checkedSymptoms.has(symptom)
                                ? 'border-[#F6B5A6] bg-[#F6B5A6]'
                                : 'border-gray-300'
                            }`}>
                              {checkedSymptoms.has(symptom) && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                            <span className={checkedSymptoms.has(symptom) ? 'text-[#F6B5A6]' : 'text-[#6A6A6A]'}>
                              {symptom}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Match Score */}
                      {checkedSymptoms.size > 0 && (
                        <div className="mt-6 p-4 bg-[#FFF9F5] rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-[#6A6A6A]">症状匹配度</span>
                            <span className="text-lg font-bold text-[#F6B5A6]">{calculateMatch()}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#F6B5A6] to-[#F7C5C0] transition-all duration-500"
                              style={{ width: `${calculateMatch()}%` }}
                            />
                          </div>
                          <p className="text-xs text-[#6A6A6A] mt-2">
                            {calculateMatch() >= 70 ? '您的症状与该类型高度吻合，建议参考相应食养方案' :
                             calculateMatch() >= 40 ? '您的症状部分符合该类型，可结合其他类型综合判断' :
                             '您的症状与该类型匹配度较低，请尝试其他类型'}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-6">
                      <div className="p-4 bg-green-50 rounded-xl">
                        <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                          <Leaf className="w-4 h-4" />
                          食疗原则
                        </h4>
                        <p className="text-green-700 text-sm">{currentType.foodTherapy}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#4A4A4A] mb-3">推荐食药物质</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentType?.recommendedFoods?.map((food, idx) => (
                            <span key={idx} className="px-3 py-2 rounded-full bg-gradient-to-r from-[#F6B5A6] to-[#F7C5C0] text-white text-sm font-medium">
                              {food}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-bold text-blue-700 mb-2">调理建议</h4>
                        <ul className="space-y-2 text-sm text-blue-700">
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-500 mt-2" />
                            规律作息，保证充足睡眠
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-500 mt-2" />
                            适量运动，循序渐进
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-blue-500 mt-2" />
                            保持心情舒畅，避免情绪波动
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/food-medicine')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                查看食药同源
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/recipe/northeast')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                查看对应食谱
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

export default ConstitutionDetail;
