import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Apple, Heart, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const characterRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (characterRef.current) {
        const rect = characterRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) / 30;
        const y = (e.clientY - centerY) / 30;
        setMousePos({ x: Math.max(-15, Math.min(15, x)), y: Math.max(-15, Math.min(15, y)) });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bubbles = [
    { icon: BookOpen, text: '70+ 食养食谱', color: 'bg-[#F6B5A6]', delay: '0s', link: '/recipe/northeast' },
    { icon: Apple, text: '科学配餐', color: 'bg-[#F7C5C0]', delay: '0.2s', link: '/dietary-principles' },
    { icon: Heart, text: '健康减脂', color: 'bg-[#F9D1C3]', delay: '0.4s', link: '/bmi-calculator' },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#FFF9F5] via-[#F9D1C3]/30 to-[#F7C5C0]/20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern animate-spin-slow" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#F6B5A6]/20 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-[#F7C5C0]/30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-[#F9D1C3]/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-20">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/20 text-[#4A4A4A] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#F6B5A6] animate-pulse" />
                国家卫健委权威发布
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#4A4A4A] leading-tight">
                成人肥胖
                <span className="block text-gradient">食养指南</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#6A6A6A] max-w-lg">
                科学管理体重，健康生活每一天。根据中医辨证施膳原则，为您提供个性化的食养方案。
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/obesity-definition')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold text-lg shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                开始探索
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/guide-intro')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold text-lg shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-[#F6B5A6]/30"
              >
                了解更多
              </button>
            </div>

            {/* Floating Bubbles */}
            <div className="flex flex-wrap gap-4 pt-8">
              {bubbles.map((bubble, index) => (
                <button
                  key={index}
                  onClick={() => navigate(bubble.link)}
                  className={`${bubble.color} px-6 py-3 rounded-2xl shadow-soft flex items-center gap-3 animate-float hover:scale-110 transition-transform duration-300`}
                  style={{ animationDelay: bubble.delay }}
                >
                  <bubble.icon className="w-5 h-5 text-white" />
                  <span className="text-white font-bold">{bubble.text}</span>
                </button>
              ))}
            </div>

            {/* Quick Links */}
            <div className="pt-4">
              <p className="text-sm text-[#6A6A6A] mb-3">快速导航：</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'BMI计算', link: '/bmi-calculator' },
                  { label: '热量查询', link: '/calories' },
                  { label: '体质辨识', link: '/constitution' },
                  { label: '运动指导', link: '/exercise' },
                  { label: '药食同源', link: '/food-medicine' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate(item.link)}
                    className="px-3 py-1.5 rounded-full bg-white/50 text-[#6A6A6A] text-sm hover:bg-[#F6B5A6]/10 hover:text-[#F6B5A6] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Character */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div
              ref={characterRef}
              className="relative animate-breathe"
              style={{
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#F6B5A6]/30 rounded-full blur-3xl scale-110" />
              
              {/* Character Image */}
              <img
                src={`${import.meta.env.BASE_URL}hero-character.png`}
                alt="健康指导员"
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />

              {/* Floating Elements around character */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#F6B5A6] rounded-full flex items-center justify-center animate-float shadow-lg cursor-pointer hover:scale-110 transition-transform"
                   onClick={() => navigate('/bmi-calculator')}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-20 -left-8 w-14 h-14 bg-[#F7C5C0] rounded-full flex items-center justify-center animate-float shadow-lg cursor-pointer hover:scale-110 transition-transform"
                   style={{ animationDelay: '1s' }}
                   onClick={() => navigate('/constitution')}>
                <Heart className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
