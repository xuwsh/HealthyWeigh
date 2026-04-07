import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Flame, Info, Utensils } from 'lucide-react';
import { foodCalories } from '../data/guideContent';

const CalorieQuery = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const categories = Array.from(new Set(foodCalories.map(f => f.category)));

  const filteredFoods = foodCalories.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? food.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '谷薯类': 'from-amber-400 to-yellow-500',
      '蔬菜类': 'from-green-400 to-emerald-500',
      '水果类': 'from-red-400 to-rose-500',
      '畜禽类': 'from-orange-400 to-red-500',
      '水产类': 'from-blue-400 to-cyan-500',
      '奶豆类': 'from-purple-400 to-pink-500',
      '坚果类': 'from-amber-500 to-orange-500',
      '油脂类': 'from-gray-400 to-gray-500',
    };
    return colors[category] || 'from-[#F6B5A6] to-[#F7C5C0]';
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
            <h1 className="font-bold text-[#4A4A4A]">热量查询</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <Flame className="w-4 h-4" />
              实用工具
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              食物热量查询
            </h1>
            <p className="text-lg text-[#6A6A6A]">
              查询常见食物的热量，科学控制每日摄入
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className={`relative mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6A6A6A]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索食物名称..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-[#F6B5A6]/20 focus:border-[#F6B5A6] focus:outline-none transition-colors shadow-soft"
              />
            </div>

            {/* Category Filter */}
            <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-[#F6B5A6] text-white'
                    : 'bg-white text-[#6A6A6A] hover:bg-[#F6B5A6]/10'
                }`}
              >
                全部
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#F6B5A6] text-white'
                      : 'bg-white text-[#6A6A6A] hover:bg-[#F6B5A6]/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Food List */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {filteredFoods.map((food, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-soft p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs text-white bg-gradient-to-r ${getCategoryColor(food.category)} mb-2`}>
                        {food.category}
                      </span>
                      <h3 className="font-bold text-[#4A4A4A]">{food.name}</h3>
                      <p className="text-sm text-[#6A6A6A]">{food.amount}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-[#F6B5A6]">
                        <Flame className="w-4 h-4" />
                        <span className="text-xl font-bold">{food.calories}</span>
                      </div>
                      <span className="text-xs text-[#6A6A6A]">kcal</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFoods.length === 0 && (
              <div className="text-center py-12">
                <Utensils className="w-16 h-16 text-[#F6B5A6]/30 mx-auto mb-4" />
                <p className="text-[#6A6A6A]">未找到相关食物</p>
              </div>
            )}

            {/* Tips */}
            <div className={`mt-8 bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                热量控制小贴士
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-[#6A6A6A]">成年女性每日建议摄入能量：1000-1200kcal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-[#6A6A6A]">成年男性每日建议摄入能量：1200-1500kcal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-[#6A6A6A]">三大营养素供能比：碳水50-60%，蛋白质15-20%，脂肪20-30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span className="text-[#6A6A6A]">一日三餐能量分配：早餐30%，午餐40%，晚餐30%</span>
                </li>
              </ul>
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

export default CalorieQuery;
