import { useEffect, useRef, useState } from 'react';
import { Leaf, Search, Heart, Sparkles } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  pinyin: string;
  description: string;
  benefits: string[];
  color: string;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: '山药',
    pinyin: 'Shan Yao',
    description: '补脾养胃，生津益肺',
    benefits: ['健脾', '养胃', '补肾'],
    color: 'from-amber-400 to-yellow-500'
  },
  {
    id: 2,
    name: '薏米',
    pinyin: 'Yi Mi',
    description: '利水渗湿，健脾止泻',
    benefits: ['祛湿', '健脾', '美容'],
    color: 'from-gray-300 to-gray-400'
  },
  {
    id: 3,
    name: '红豆',
    pinyin: 'Hong Dou',
    description: '利水消肿，解毒排脓',
    benefits: ['利水', '消肿', '补血'],
    color: 'from-red-400 to-red-500'
  },
  {
    id: 4,
    name: '枸杞',
    pinyin: 'Gou Qi',
    description: '滋补肝肾，益精明目',
    benefits: ['明目', '养肝', '补肾'],
    color: 'from-red-500 to-red-600'
  },
  {
    id: 5,
    name: '山楂',
    pinyin: 'Shan Zha',
    description: '消食健胃，行气散瘀',
    benefits: ['消食', '降脂', '活血'],
    color: 'from-red-400 to-rose-500'
  },
  {
    id: 6,
    name: '荷叶',
    pinyin: 'He Ye',
    description: '清暑化湿，升发清阳',
    benefits: ['清热', '祛湿', '降脂'],
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 7,
    name: '决明子',
    pinyin: 'Jue Ming Zi',
    description: '清热明目，润肠通便',
    benefits: ['明目', '润肠', '降压'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 8,
    name: '茯苓',
    pinyin: 'Fu Ling',
    description: '利水渗湿，健脾宁心',
    benefits: ['祛湿', '健脾', '安神'],
    color: 'from-stone-300 to-stone-400'
  }
];

const FoodMedicineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredItems = foodItems.filter(
    (item) =>
      item.name.includes(searchTerm) ||
      item.pinyin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F6B5A6]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F7C5C0]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
            <Leaf className="w-4 h-4" />
            药食同源
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
            药食同源，<span className="text-gradient">天然调理</span>
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
            善用食药物质，调理身体健康，让食物成为最好的药物
          </p>
        </div>

        {/* Search Bar */}
        <div className={`max-w-md mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6A6A6A]" />
            <input
              type="text"
              placeholder="搜索食材..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-[#FFF9F5] border-2 border-[#F6B5A6]/20 focus:border-[#F6B5A6] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${hoveredItem !== null && hoveredItem !== item.id ? 'opacity-50' : 'opacity-100'}`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group-hover:scale-105">
                {/* Top Color Bar */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                
                <div className="p-6 space-y-4">
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-black text-white">{item.name.charAt(0)}</span>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold text-[#4A4A4A]">{item.name}</h3>
                    <p className="text-sm text-[#6A6A6A] italic">{item.pinyin}</p>
                  </div>

                  <p className="text-sm text-[#6A6A6A] text-center">{item.description}</p>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap justify-center gap-1">
                    {item.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full text-xs text-white bg-gradient-to-r ${item.color}`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFF9F5] text-[#6A6A6A]">
            <Heart className="w-4 h-4 text-[#F6B5A6]" />
            <span className="text-sm">这些食材既是美味佳肴，也是养生良药</span>
            <Sparkles className="w-4 h-4 text-[#F6B5A6]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMedicineSection;
