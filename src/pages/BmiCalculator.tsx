import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Info, Ruler, Scale, ChevronRight } from 'lucide-react';

const BmiCalculator = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [waist, setWaist] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [waistRisk, setWaistRisk] = useState('');

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // convert to meters
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) {
        setCategory('体重过低');
      } else if (bmiValue < 24) {
        setCategory('体重正常');
      } else if (bmiValue < 28) {
        setCategory('超重');
      } else {
        setCategory('肥胖');
      }
    }
  };

  const checkWaist = () => {
    const w = parseFloat(waist);
    if (w > 0) {
      if (gender === 'male') {
        if (w >= 90) {
          setWaistRisk('中心型肥胖');
        } else if (w >= 85) {
          setWaistRisk('中心型肥胖前期');
        } else {
          setWaistRisk('正常');
        }
      } else {
        if (w >= 85) {
          setWaistRisk('中心型肥胖');
        } else if (w >= 80) {
          setWaistRisk('中心型肥胖前期');
        } else {
          setWaistRisk('正常');
        }
      }
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case '体重过低': return 'text-blue-500';
      case '体重正常': return 'text-green-500';
      case '超重': return 'text-yellow-500';
      case '肥胖': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getCategoryBg = (cat: string) => {
    switch (cat) {
      case '体重过低': return 'bg-blue-50';
      case '体重正常': return 'bg-green-50';
      case '超重': return 'bg-yellow-50';
      case '肥胖': return 'bg-red-50';
      default: return 'bg-gray-50';
    }
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
            <h1 className="font-bold text-[#4A4A4A]">BMI计算器</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <Calculator className="w-4 h-4" />
              健康工具
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              BMI计算器
            </h1>
            <p className="text-lg text-[#6A6A6A]">
              体质指数（BMI）是衡量人体胖瘦程度的标准
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* BMI Calculator */}
              <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-xl font-bold text-[#4A4A4A] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-[#F6B5A6]" />
                  </div>
                  计算BMI
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">身高 (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="请输入身高"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border-2 border-[#F6B5A6]/20 focus:border-[#F6B5A6] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">体重 (kg)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="请输入体重"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border-2 border-[#F6B5A6]/20 focus:border-[#F6B5A6] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    onClick={calculateBMI}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F6B5A6] to-[#F7C5C0] text-white font-bold hover:shadow-lg transition-shadow"
                  >
                    计算BMI
                  </button>
                </div>

                {bmi !== null && (
                  <div className={`mt-6 p-6 rounded-2xl ${getCategoryBg(category)}`}>
                    <div className="text-center">
                      <p className="text-sm text-[#6A6A6A] mb-2">您的BMI</p>
                      <p className="text-4xl font-black text-[#4A4A4A]">{bmi}</p>
                      <p className={`text-lg font-bold mt-2 ${getCategoryColor(category)}`}>{category}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Waist Calculator */}
              <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-xl font-bold text-[#4A4A4A] mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                    <Ruler className="w-5 h-5 text-[#F6B5A6]" />
                  </div>
                  腰围测量
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">性别</label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setGender('male')}
                        className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                          gender === 'male' 
                            ? 'border-[#F6B5A6] bg-[#F6B5A6]/10 text-[#F6B5A6]' 
                            : 'border-gray-200 text-[#6A6A6A]'
                        }`}
                      >
                        男性
                      </button>
                      <button
                        onClick={() => setGender('female')}
                        className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                          gender === 'female' 
                            ? 'border-[#F6B5A6] bg-[#F6B5A6]/10 text-[#F6B5A6]' 
                            : 'border-gray-200 text-[#6A6A6A]'
                        }`}
                      >
                        女性
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A4A4A] mb-2">腰围 (cm)</label>
                    <input
                      type="number"
                      value={waist}
                      onChange={(e) => setWaist(e.target.value)}
                      placeholder="请输入腰围"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF9F5] border-2 border-[#F6B5A6]/20 focus:border-[#F6B5A6] focus:outline-none transition-colors"
                    />
                    <p className="text-xs text-[#6A6A6A] mt-1">
                      测量位置：腋中线肋弓下缘和髂嵴连线中点的水平位置
                    </p>
                  </div>

                  <button
                    onClick={checkWaist}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F6B5A6] to-[#F7C5C0] text-white font-bold hover:shadow-lg transition-shadow"
                  >
                    判断腰围
                  </button>
                </div>

                {waistRisk && (
                  <div className={`mt-6 p-6 rounded-2xl ${
                    waistRisk === '正常' ? 'bg-green-50' : 
                    waistRisk === '中心型肥胖前期' ? 'bg-yellow-50' : 'bg-red-50'
                  }`}>
                    <div className="text-center">
                      <p className="text-sm text-[#6A6A6A] mb-2">腰围判断结果</p>
                      <p className={`text-lg font-bold ${
                        waistRisk === '正常' ? 'text-green-500' : 
                        waistRisk === '中心型肥胖前期' ? 'text-yellow-500' : 'text-red-500'
                      }`}>{waistRisk}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* BMI Standards Table */}
            <div className={`mt-8 bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                BMI判定标准
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F6B5A6]/10">
                      <th className="px-4 py-3 text-left font-bold text-[#4A4A4A]">分类</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A4A4A]">BMI范围</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A4A4A]">说明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-blue-600 font-medium">体重过低</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">BMI &lt; 18.5</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">体重不足，需增加营养</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-green-600 font-medium">体重正常</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">18.5 ≤ BMI &lt; 24.0</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">健康体重范围</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-yellow-600 font-medium">超重</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">24.0 ≤ BMI &lt; 28.0</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">体重超标，需注意控制</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-red-600 font-medium">肥胖</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">BMI ≥ 28.0</td>
                      <td className="px-4 py-3 text-[#6A6A6A]">肥胖状态，需积极干预</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-700">
                  对于80岁以上高龄老人，建议BMI适宜范围为22.0-26.9kg/m²
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/dietary-principles')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                了解食养原则
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/recipe/northeast')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                查看减脂食谱
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

export default BmiCalculator;
