import { useEffect, useRef, useState } from 'react';
import { UserCheck, Utensils, Dumbbell, Leaf, ChevronRight, Star } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: UserCheck,
    title: '体质辨识',
    subtitle: '中医辨证',
    description: '根据中医九种体质分类，精准辨识您的体质类型，为个性化食养提供科学依据。',
    color: 'text-[#F6B5A6]',
    bgColor: 'bg-[#F6B5A6]/10'
  },
  {
    id: 2,
    icon: Utensils,
    title: '科学配餐',
    subtitle: '营养配餐',
    description: '遵循营养均衡原则，科学搭配食材，控制热量摄入，满足身体所需营养。',
    color: 'text-[#F7C5C0]',
    bgColor: 'bg-[#F7C5C0]/10'
  },
  {
    id: 3,
    icon: Dumbbell,
    title: '运动指导',
    subtitle: '运动处方',
    description: '结合饮食管理，提供科学的运动建议，帮助您更有效地管理体重。',
    color: 'text-[#F9D1C3]',
    bgColor: 'bg-[#F9D1C3]/10'
  },
  {
    id: 4,
    icon: Leaf,
    title: '中医调理',
    subtitle: '中医智慧',
    description: '运用药食同源理念，通过日常饮食调理身体，达到健康减脂的效果。',
    color: 'text-[#E8B4B8]',
    bgColor: 'bg-[#E8B4B8]/10'
  }
];

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveFeature((current) => (current % 4) + 1);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [activeFeature]);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#FFF9F5] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F6B5A6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#F7C5C0]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Character */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6B5A6]/30 to-[#F7C5C0]/30 rounded-full blur-3xl scale-110" />
              
              {/* Character */}
              <img
                src={`${import.meta.env.BASE_URL}feature-character.png`}
                alt="健康助手"
                className="relative z-10 w-full max-w-md drop-shadow-2xl animate-breathe"
              />

              {/* Floating Stars */}
              <div className="absolute top-10 -right-4 animate-float">
                <Star className="w-8 h-8 text-[#F6B5A6] fill-[#F6B5A6]" />
              </div>
              <div className="absolute bottom-20 -left-4 animate-float" style={{ animationDelay: '1s' }}>
                <Star className="w-6 h-6 text-[#F7C5C0] fill-[#F7C5C0]" />
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
                <Star className="w-4 h-4" />
                核心功能
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
                科学管理，<span className="text-gradient">健康减脂</span>
              </h2>
              <p className="text-lg text-[#6A6A6A]">
                四大核心功能，全方位助力您的健康管理之旅
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature) => {
                const isActive = activeFeature === feature.id;
                const Icon = feature.icon;
                
                return (
                  <div
                    key={feature.id}
                    onClick={() => {
                      setActiveFeature(feature.id);
                      setProgress(0);
                    }}
                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      isActive
                        ? 'bg-white shadow-lg scale-105'
                        : 'bg-white/50 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    {/* Progress Bar */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#F6B5A6] to-[#F7C5C0] transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-xl ${feature.bgColor} ${feature.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-lg font-bold transition-colors ${
                            isActive ? 'text-[#F6B5A6]' : 'text-[#4A4A4A]'
                          }`}>
                            {feature.title}
                          </h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500">
                            {feature.subtitle}
                          </span>
                        </div>
                        <p className={`text-sm transition-all duration-300 ${
                          isActive ? 'text-[#6A6A6A] opacity-100' : 'text-[#6A6A6A] opacity-70'
                        }`}>
                          {feature.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? 'text-[#F6B5A6] translate-x-1'
                          : 'text-gray-300'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
