import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Leaf, Sparkles, ChevronRight } from 'lucide-react';

interface RecipeCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  color: string;
}

const BASE_URL = import.meta.env.BASE_URL;

const recipes: RecipeCard[] = [
  {
    id: 'northeast',
    title: '东北地区食谱',
    subtitle: '炖菜为主，温热滋补',
    image: `${BASE_URL}recipe-northeast.jpg`,
    tag: '温热滋补',
    color: 'from-orange-400 to-red-400'
  },
  {
    id: 'northwest',
    title: '西北地区食谱',
    subtitle: '面食搭配，营养均衡',
    image: `${BASE_URL}recipe-2.jpg`,
    tag: '营养均衡',
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: 'south',
    title: '南方地区食谱',
    subtitle: '清淡鲜美，汤品为主',
    image: `${BASE_URL}recipe-4.jpg`,
    tag: '清淡养生',
    color: 'from-green-400 to-teal-400'
  },
  {
    id: 'general',
    title: '通用减脂餐',
    subtitle: '科学配比，健康减脂',
    image: `${BASE_URL}recipe-1.jpg`,
    tag: '减脂首选',
    color: 'from-pink-400 to-rose-400'
  }
];

const RecipeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id') || '';
            setVisibleCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (regionId: string) => {
    navigate(`/recipe/${regionId}`);
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F6B5A6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7C5C0]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            科学食谱
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
            科学食谱，<span className="text-gradient">健康美味</span>
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
            针对不同地区和体质，提供个性化食养方案，让健康饮食变得简单有趣
          </p>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              data-card-id={recipe.id}
              onClick={() => handleCardClick(recipe.id)}
              className={`recipe-card group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                visibleCards.has(recipe.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${recipe.color} text-white text-xs font-bold`}>
                  {recipe.tag}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 rounded-full bg-white/90 text-[#4A4A4A] font-bold text-sm flex items-center gap-2">
                    <span>查看详情</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#F6B5A6]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">地区特色</span>
                </div>
                <h3 className="text-xl font-bold text-[#4A4A4A] group-hover:text-[#F6B5A6] transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-[#6A6A6A] text-sm">{recipe.subtitle}</p>
                <div className="flex items-center gap-2 text-[#F6B5A6] font-bold text-sm pt-2 group-hover:gap-4 transition-all">
                  <span>点击查看食谱</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#F6B5A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/recipe/northeast')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFF9F5] text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg hover:bg-[#F6B5A6] hover:text-white transition-all duration-300"
          >
            <Leaf className="w-5 h-5" />
            <span>探索更多食谱</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
