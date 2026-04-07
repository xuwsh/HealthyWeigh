import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, MapPin, Award } from 'lucide-react';

interface Stat {
  id: number;
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: BookOpen,
    value: 70,
    suffix: '+',
    label: '食养食谱',
    color: 'from-[#F6B5A6] to-[#F7C5C0]'
  },
  {
    id: 2,
    icon: Users,
    value: 7,
    suffix: '种',
    label: '体质辨识',
    color: 'from-[#F7C5C0] to-[#F9D1C3]'
  },
  {
    id: 3,
    icon: MapPin,
    value: 6,
    suffix: '大',
    label: '地区方案',
    color: 'from-[#F9D1C3] to-[#E8B4B8]'
  },
  {
    id: 4,
    icon: Award,
    value: 100,
    suffix: '%',
    label: '科学配比',
    color: 'from-[#E8B4B8] to-[#F6B5A6]'
  }
];

const AnimatedNumber = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isVisible]);

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F5] via-white to-[#FFF9F5]" />
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F6B5A6]/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#F7C5C0]/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#F9D1C3]/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`relative text-center space-y-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#4A4A4A]">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>

                {/* Label */}
                <div className="text-[#6A6A6A] font-medium">{stat.label}</div>

                {/* Shine Effect */}
                {isVisible && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 animate-shine"
                    style={{
                      animation: 'shine 3s ease-in-out infinite',
                      animationDelay: `${index * 0.5}s`
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
