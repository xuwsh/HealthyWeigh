import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Ruler, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { obesityDefinition } from '../data/guideContent';

const ObesityDefinition = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="font-bold text-[#4A4A4A]">肥胖定义与判定</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] text-sm font-bold">
              <Info className="w-4 h-4" />
              基础知识
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              {obesityDefinition.title}
            </h1>
            <p className="text-lg text-[#6A6A6A]">{obesityDefinition.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* What is Obesity */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                {obesityDefinition.sections[0].title}
              </h2>
              <p className="text-[#6A6A6A] leading-relaxed">{obesityDefinition.sections[0].content}</p>
            </div>

            {/* BMI Standards */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                {obesityDefinition.sections[1].title}
              </h2>
              <p className="text-[#6A6A6A] mb-6">{obesityDefinition.sections[1].content}</p>
              
              {/* BMI Formula */}
              <div className="bg-gradient-to-r from-[#F6B5A6]/10 to-[#F7C5C0]/10 rounded-2xl p-6 mb-6">
                <p className="text-center text-lg font-bold text-[#4A4A4A]">BMI = 体重(kg) ÷ 身高²(m²)</p>
              </div>

              {/* BMI Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F6B5A6]/10">
                      {obesityDefinition.sections[1].table?.headers.map((header, idx) => (
                        <th key={idx} className="px-4 py-3 text-left font-bold text-[#4A4A4A]">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {obesityDefinition.sections[1].table?.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-4 py-3 text-[#6A6A6A]">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {obesityDefinition.sections[1].note && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-700">{obesityDefinition.sections[1].note}</p>
                </div>
              )}
            </div>

            {/* Waist Standards */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                {obesityDefinition.sections[2].title}
              </h2>
              <p className="text-[#6A6A6A] mb-6">{obesityDefinition.sections[2].content}</p>
              
              {/* Waist Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F6B5A6]/10">
                      {obesityDefinition.sections[2].table?.headers.map((header, idx) => (
                        <th key={idx} className="px-4 py-3 text-left font-bold text-[#4A4A4A]">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {obesityDefinition.sections[2].table?.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-4 py-3 text-[#6A6A6A]">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {obesityDefinition.sections[2].note && (
                <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">{obesityDefinition.sections[2].note}</p>
                </div>
              )}
            </div>

            {/* Dangers */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                {obesityDefinition.sections[3].title}
              </h2>
              <p className="text-[#6A6A6A] mb-4">{obesityDefinition.sections[3].content}</p>
              <ul className="space-y-2">
                {obesityDefinition.sections[3].list?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F6B5A6] flex-shrink-0 mt-0.5" />
                    <span className="text-[#6A6A6A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/bmi-calculator')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                去测测我的BMI
              </button>
              <button 
                onClick={() => navigate('/tcm-obesity')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                了解中医分型
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

export default ObesityDefinition;
