import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Info } from 'lucide-react';

interface Constitution {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  foods: string[];
  color: string;
  bgColor: string;
}

const constitutions: Constitution[] = [
  {
    id: 1,
    name: '平和质',
    subtitle: '健康平衡',
    description: '阴阳气血调和，体态适中，面色红润，精力充沛。',
    characteristics: ['体态适中', '面色红润', '精力充沛', '睡眠良好'],
    foods: ['五谷杂粮', '新鲜蔬果', '优质蛋白'],
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    id: 2,
    name: '气虚质',
    subtitle: '元气不足',
    description: '容易疲乏，气短懒言，语音低弱，精神不振。',
    characteristics: ['容易疲乏', '气短懒言', '语音低弱', '易出汗'],
    foods: ['山药', '大枣', '黄芪', '鸡肉'],
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 3,
    name: '阳虚质',
    subtitle: '阳气不足',
    description: '畏寒怕冷，手足不温，喜热饮食，精神不振。',
    characteristics: ['畏寒怕冷', '手足不温', '喜热饮食', '精神不振'],
    foods: ['生姜', '羊肉', '桂圆', '核桃'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    id: 4,
    name: '阴虚质',
    subtitle: '阴液亏少',
    description: '手足心热，口燥咽干，鼻微干，喜冷饮。',
    characteristics: ['手足心热', '口燥咽干', '喜冷饮', '易失眠'],
    foods: ['百合', '银耳', '梨', '鸭肉'],
    color: 'text-red-400',
    bgColor: 'bg-red-50'
  },
  {
    id: 5,
    name: '痰湿质',
    subtitle: '痰湿凝聚',
    description: '形体肥胖，腹部肥满，口黏苔腻，容易困倦。',
    characteristics: ['形体肥胖', '腹部肥满', '口黏苔腻', '容易困倦'],
    foods: ['薏米', '冬瓜', '荷叶', '山楂'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-50'
  },
  {
    id: 6,
    name: '湿热质',
    subtitle: '湿热内蕴',
    description: '面垢油光，易生痤疮，口苦口干，大便黏滞。',
    characteristics: ['面垢油光', '易生痤疮', '口苦口干', '大便黏滞'],
    foods: ['绿豆', '苦瓜', '芹菜', '黄瓜'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-50'
  },
  {
    id: 7,
    name: '血瘀质',
    subtitle: '血行不畅',
    description: '肤色晦暗，色素沉着，容易出现瘀斑，口唇暗淡。',
    characteristics: ['肤色晦暗', '易有瘀斑', '口唇暗淡', '易疼痛'],
    foods: ['山楂', '玫瑰花', '红糖', '黑木耳'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    id: 8,
    name: '气郁质',
    subtitle: '气机郁滞',
    description: '神情抑郁，情感脆弱，烦闷不乐，容易紧张。',
    characteristics: ['神情抑郁', '情感脆弱', '烦闷不乐', '容易紧张'],
    foods: ['陈皮', '佛手', '茉莉花', '小麦'],
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-50'
  }
];

const ConstitutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? constitutions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === constitutions.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (translateX > 50) {
      handlePrev();
    } else if (translateX < -50) {
      handleNext();
    }
    setIsDragging(false);
    setTranslateX(0);
  };

  const activeConstitution = constitutions[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#FFF9F5] to-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F6B5A6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            中医智慧
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
            辨识体质，<span className="text-gradient">精准调理</span>
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
            中医辨证施膳，针对不同体质提供个性化建议
          </p>
        </div>

        {/* Carousel */}
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Main Card */}
          <div 
            ref={sliderRef}
            className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Info */}
              <div className={`p-8 ${activeConstitution.bgColor}`}>
                <div className="space-y-6">
                  <div>
                    <span className={`text-sm font-bold ${activeConstitution.color}`}>
                      {activeConstitution.subtitle}
                    </span>
                    <h3 className="text-3xl font-black text-[#4A4A4A] mt-1">
                      {activeConstitution.name}
                    </h3>
                  </div>
                  
                  <p className="text-[#6A6A6A]">
                    {activeConstitution.description}
                  </p>

                  <div>
                    <h4 className="font-bold text-[#4A4A4A] mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      主要特征
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeConstitution.characteristics.map((char, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/70 text-sm text-[#4A4A4A]"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#4A4A4A] mb-3">推荐食材</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeConstitution.foods.map((food, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${activeConstitution.color.replace('text-', 'from-').replace('500', '400').replace('400', '300')} to-[#F6B5A6]`}
                        >
                          {food}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative bg-gradient-to-br from-[#F6B5A6]/20 to-[#F7C5C0]/20 flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${activeConstitution.color.replace('text-', 'from-').replace('500', '400').replace('400', '300')} to-[#F6B5A6] flex items-center justify-center shadow-lg animate-pulse-soft`}>
                    <span className="text-4xl font-black text-white">
                      {activeConstitution.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-[#6A6A6A] text-sm">
                    滑动查看更多体质类型
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#F6B5A6] hover:bg-[#F6B5A6] hover:text-white transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#F6B5A6] hover:bg-[#F6B5A6] hover:text-white transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {constitutions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-[#F6B5A6]'
                    : 'bg-[#F6B5A6]/30 hover:bg-[#F6B5A6]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstitutionSection;
