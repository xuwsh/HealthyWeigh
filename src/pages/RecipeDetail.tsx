import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Flame, 
  ChefHat,
  Clock,
  Sparkles,
  ChevronRight,
  Leaf,
  Info
} from 'lucide-react';
import { regionRecipesData, seasons } from '../data/recipes';

const RecipeDetail = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const navigate = useNavigate();
  const [activeSeason, setActiveSeason] = useState('spring');
  const [isVisible, setIsVisible] = useState(false);

  const region = regionRecipesData.find(r => r.id === regionId);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (region) {
      setActiveSeason('spring');
    }
  }, [regionId, region]);

  if (!region) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-[#4A4A4A]">地区未找到</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-[#F6B5A6] text-white font-bold hover:bg-[#F7C5C0] transition-colors"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const currentMealPlans = region.mealPlans[activeSeason as keyof typeof region.mealPlans] || [];
  const activeSeasonData = seasons.find(s => s.id === activeSeason);

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
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F6B5A6]" />
              <span className="font-bold text-[#4A4A4A]">{region.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-10`} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${region.color} rounded-3xl blur-3xl opacity-30`} />
              <img 
                src={region.image} 
                alt={region.name}
                className="relative w-full h-64 sm:h-80 object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <ChefHat className="w-10 h-10 text-[#F6B5A6]" />
              </div>
            </div>

            {/* Right - Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm">
                <Sparkles className="w-4 h-4 text-[#F6B5A6]" />
                <span className="text-sm font-bold text-[#4A4A4A]">地区特色食谱</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
                {region.name}
                <span className="block text-gradient">食养方案</span>
              </h1>
              <p className="text-lg text-[#6A6A6A]">{region.description}</p>
              <div className="flex flex-wrap gap-2">
                {region.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeSeason === season.id
                    ? `bg-gradient-to-r ${season.color} text-white shadow-lg scale-105`
                    : 'bg-white text-[#6A6A6A] hover:bg-[#F6B5A6]/10'
                }`}
              >
                <span className="text-lg">{season.icon}</span>
                <span>{season.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className={`p-2 rounded-xl bg-gradient-to-r ${activeSeasonData?.color}`}>
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#4A4A4A]">
              {activeSeasonData?.name}食谱推荐
            </h2>
          </div>

          <div className="space-y-8">
            {currentMealPlans.map((mealPlan, index) => (
              <div 
                key={mealPlan.id}
                className="bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Meal Plan Header */}
                <div className={`p-6 bg-gradient-to-r ${region.color} text-white`}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <ChefHat className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{mealPlan.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-white/80 mt-1">
                          <span className="flex items-center gap-1">
                            <Flame className="w-4 h-4" />
                            {mealPlan.calories}kcal
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            一日三餐
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-sm">
                        油 {mealPlan.oil}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-sm">
                        盐 {mealPlan.salt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meal Plan Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Breakfast */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
                          <span className="text-lg">🌅</span>
                        </div>
                        <h4 className="font-bold text-[#4A4A4A]">早餐</h4>
                      </div>
                      <ul className="space-y-2">
                        {mealPlan.meals.breakfast.ingredients.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#6A6A6A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F6B5A6] mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lunch */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                          <span className="text-lg">☀️</span>
                        </div>
                        <h4 className="font-bold text-[#4A4A4A]">午餐</h4>
                      </div>
                      <ul className="space-y-2">
                        {mealPlan.meals.lunch.ingredients.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#6A6A6A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F6B5A6] mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dinner */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <span className="text-lg">🌙</span>
                        </div>
                        <h4 className="font-bold text-[#4A4A4A]">晚餐</h4>
                      </div>
                      <ul className="space-y-2">
                        {mealPlan.meals.dinner.ingredients.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#6A6A6A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F6B5A6] mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Snacks */}
                  {mealPlan.meals.snacks && mealPlan.meals.snacks.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <span className="text-lg">🍎</span>
                        </div>
                        <h4 className="font-bold text-[#4A4A4A]">加餐</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mealPlan.meals.snacks.map((snack, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {snack.ingredients.map((item, itemIdx) => (
                              <span 
                                key={itemIdx}
                                className="px-3 py-1 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Note */}
                  <div className="mt-6 p-4 rounded-xl bg-[#FFF9F5] flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#F6B5A6] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#6A6A6A]">{mealPlan.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Regions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">探索其他地区</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {regionRecipesData.filter(r => r.id !== regionId).map((otherRegion) => (
                <button
                  key={otherRegion.id}
                  onClick={() => navigate(`/recipe/${otherRegion.id}`)}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={otherRegion.image} 
                      alt={otherRegion.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${otherRegion.color} opacity-60`} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#4A4A4A] group-hover:text-[#F6B5A6] transition-colors">
                      {otherRegion.name}
                    </h3>
                    <p className="text-sm text-[#6A6A6A] mt-1 line-clamp-2">{otherRegion.description}</p>
                    <div className="flex items-center gap-1 text-[#F6B5A6] text-sm font-medium mt-3">
                      <span>查看食谱</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4A4A] text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-[#F6B5A6]" />
              <span className="font-bold">成人肥胖食养指南</span>
            </div>
            <p className="text-sm text-gray-400">基于国家卫健委指南制作</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetail;
