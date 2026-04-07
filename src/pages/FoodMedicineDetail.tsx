import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, Search, Info, AlertTriangle, ChevronRight } from 'lucide-react';
import { foodMedicineItems } from '../data/guideContent';

const FoodMedicineDetail = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<typeof foodMedicineItems[0] | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = foodMedicineItems.filter(item => 
    item.name.includes(searchTerm) || 
    item.pinyin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const natureColors: Record<string, string> = {
    '寒': 'bg-blue-100 text-blue-600',
    '凉': 'bg-cyan-100 text-cyan-600',
    '平': 'bg-green-100 text-green-600',
    '温': 'bg-orange-100 text-orange-600',
    '热': 'bg-red-100 text-red-600',
    '微温': 'bg-amber-100 text-amber-600',
    '微寒': 'bg-sky-100 text-sky-600',
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
            <h1 className="font-bold text-[#4A4A4A]">药食同源</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <Leaf className="w-4 h-4" />
              中医智慧
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              药食同源食材
            </h1>
            <p className="text-lg text-[#6A6A6A]">
              既是食品又是中药材的物质，合理食用可辅助调理身体
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Search */}
            <div className={`relative mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6A6A6A]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索食材名称或拼音..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-[#F6B5A6]/20 focus:border-[#F6B5A6] focus:outline-none transition-colors shadow-soft"
              />
            </div>

            {/* Items Grid */}
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {filteredItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className={`p-4 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all text-left ${
                    selectedItem?.name === item.name ? 'ring-2 ring-[#F6B5A6]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#4A4A4A]">{item.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${natureColors[item.nature] || 'bg-gray-100 text-gray-600'}`}>
                      {item.nature}
                    </span>
                  </div>
                  <p className="text-sm text-[#6A6A6A] italic">{item.pinyin}</p>
                </button>
              ))}
            </div>

            {/* Selected Item Detail */}
            {selectedItem && (
              <div className="bg-white rounded-3xl shadow-soft p-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F6B5A6] to-[#F7C5C0] flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{selectedItem.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#4A4A4A]">{selectedItem.name}</h2>
                    <p className="text-[#6A6A6A]">{selectedItem.pinyin}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#4A4A4A] mb-2">性味归经</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${natureColors[selectedItem.nature]}`}>
                          性: {selectedItem.nature}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm">
                          味: {selectedItem.taste}
                        </span>
                      </div>
                      <p className="text-sm text-[#6A6A6A] mt-2">归经: {selectedItem.meridian}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#4A4A4A] mb-2">功效</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.effects.map((effect, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                            {effect}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#4A4A4A] mb-2">用法用量</h4>
                      <p className="text-sm text-[#6A6A6A]">{selectedItem.usage}</p>
                    </div>
                  </div>

                  {/* Indications & Contraindications */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#4A4A4A] mb-2">主治</h4>
                      <ul className="space-y-1">
                        {selectedItem.indications.map((indication, idx) => (
                          <li key={idx} className="text-sm text-[#6A6A6A] flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#F6B5A6] mt-2 flex-shrink-0" />
                            {indication}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-xl">
                      <h4 className="font-bold text-yellow-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        禁忌
                      </h4>
                      <p className="text-sm text-yellow-700">{selectedItem.contraindications}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Info Card */}
            <div className={`mt-8 bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                使用须知
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span className="text-[#6A6A6A]">选用国家公布的既是食品又是中药材的物质</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span className="text-[#6A6A6A]">将食药物质能量与宏量营养素纳入全天饮食总量考虑</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span className="text-[#6A6A6A]">已知对某种食药物质过敏者需在专业人员指导下食用</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span className="text-[#6A6A6A]">根据"因人、因时、因地"三因原则选择相应食药物质</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/tcm-obesity')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                了解中医分型
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/recipe/northeast')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                查看食谱
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

export default FoodMedicineDetail;
