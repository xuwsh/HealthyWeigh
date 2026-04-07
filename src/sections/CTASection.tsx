import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6B5A6] via-[#F7C5C0] to-[#F9D1C3]">
        {/* Animated Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,197.3C672,171,768,149,864,165.3C960,181,1056,235,1152,250.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 animate-float">
          <Star className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6 text-white/30" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-10 h-10 text-white/20" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            开启健康之旅
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            开启你的
            <span className="block">健康之旅</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 max-w-xl mx-auto">
            科学食养，从今天开始。让我们一起用美食守护健康，用科学管理体重。
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => navigate('/recipe/northeast')}
              className="group px-8 py-4 rounded-full bg-white text-[#F6B5A6] font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-soft"
            >
              <span>查看完整食谱</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/guide-intro')}
              className="px-8 py-4 rounded-full bg-white/20 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border-2 border-white/30"
            >
              了解更多
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              { label: 'BMI计算', link: '/bmi-calculator' },
              { label: '体质辨识', link: '/constitution' },
              { label: '热量查询', link: '/calories' },
              { label: '运动指导', link: '/exercise' },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => navigate(item.link)}
                className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>国家卫健委发布</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>科学权威</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>简单实用</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
