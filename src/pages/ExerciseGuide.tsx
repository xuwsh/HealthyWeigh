import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Activity, Timer, Zap, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { exerciseGuidance } from '../data/guideContent';

const ExerciseGuide = () => {
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
            <h1 className="font-bold text-[#4A4A4A]">运动指导</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <Activity className="w-4 h-4" />
              科学运动
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              {exerciseGuidance.title}
            </h1>
            <p className="text-lg text-[#6A6A6A]">{exerciseGuidance.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Aerobic Exercise */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                {exerciseGuidance.sections[0].title}
              </h2>
              <p className="text-[#6A6A6A] mb-6">{exerciseGuidance.sections[0].content}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {exerciseGuidance.sections[0].activities?.map((activity, idx) => (
                  <div key={idx} className="p-4 bg-green-50 rounded-xl">
                    <h4 className="font-bold text-green-700 mb-2">{activity.name}</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-green-600">强度: {activity.intensity}</p>
                      {'calories' in activity && <p className="text-green-600">{activity.calories}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resistance Exercise */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                {exerciseGuidance.sections[1].title}
              </h2>
              <p className="text-[#6A6A6A] mb-6">{exerciseGuidance.sections[1].content}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {exerciseGuidance.sections[1].activities?.map((activity, idx) => (
                  <div key={idx} className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-bold text-blue-700 mb-2">{activity.name}</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-blue-600">强度: {activity.intensity}</p>
                      {'target' in activity && <p className="text-blue-600">目标: {activity.target}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercise Guidelines */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                {exerciseGuidance.sections[2].title}
              </h2>
              <ul className="space-y-3">
                {exerciseGuidance.sections[2].list?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F6B5A6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6A6A6A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reduce Sedentary */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Timer className="w-5 h-5 text-purple-600" />
                </div>
                {exerciseGuidance.sections[3].title}
              </h2>
              <p className="text-[#6A6A6A]">{exerciseGuidance.sections[3].content}</p>
            </div>

            {/* Weekly Plan */}
            <div className={`bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 rounded-3xl p-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6 text-center">每周运动计划建议</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { day: '周一', activity: '快走/慢跑', time: '30-45分钟', type: '有氧' },
                  { day: '周二', activity: '力量训练', time: '20分钟', type: '抗阻' },
                  { day: '周三', activity: '游泳/骑车', time: '30-45分钟', type: '有氧' },
                  { day: '周四', activity: '休息/拉伸', time: '15分钟', type: '恢复' },
                  { day: '周五', activity: '快走/跳绳', time: '30-45分钟', type: '有氧' },
                  { day: '周六', activity: '力量训练', time: '20分钟', type: '抗阻' },
                  { day: '周日', activity: '太极拳/瑜伽', time: '30分钟', type: '柔韧' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-soft">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#4A4A4A]">{item.day}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === '有氧' ? 'bg-green-100 text-green-600' :
                        item.type === '抗阻' ? 'bg-blue-100 text-blue-600' :
                        item.type === '恢复' ? 'bg-gray-100 text-gray-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>{item.type}</span>
                    </div>
                    <p className="text-sm text-[#6A6A6A]">{item.activity}</p>
                    <p className="text-xs text-[#F6B5A6] mt-1">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/bmi-calculator')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                计算我的BMI
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/recipe/northeast')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                查看减脂食谱
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

export default ExerciseGuide;
