import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Shield, Info, ChevronRight } from 'lucide-react';
import { disclaimer } from '../data/guideContent';

const Disclaimer = () => {
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
            <h1 className="font-bold text-[#4A4A4A]">免责声明</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-sm font-bold">
              <AlertTriangle className="w-4 h-4" />
              重要提示
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A4A4A]">
              {disclaimer.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Warning Card */}
            <div className={`bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-yellow-700 mb-2">使用前请仔细阅读</h2>
                  <p className="text-yellow-700">
                    本网站内容仅供参考，不能替代专业医疗建议。如有健康问题，请咨询专业医生。
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Content */}
            <div className={`bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="prose prose-lg max-w-none">
                {disclaimer.content.split('\n\n').map((paragraph, index) => {
                  const lines = paragraph.split('\n');
                  if (lines.length > 1) {
                    return (
                      <div key={index} className="mb-6">
                        {lines.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-[#6A6A6A] mb-2">
                            {line}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-[#6A6A6A] mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Key Points */}
            <div className={`mt-8 bg-white rounded-3xl shadow-soft p-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F6B5A6]/10 flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#F6B5A6]" />
                </div>
                重要提醒
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: '不替代专业医疗',
                    content: '本网站提供的信息不能替代专业医疗建议、诊断或治疗。'
                  },
                  {
                    title: '个体差异',
                    content: '每个人的身体状况不同，减重方案应因人而异。'
                  },
                  {
                    title: '适用人群限制',
                    content: '本网站内容适用于一般健康的成人肥胖患者，不适用于孕妇、哺乳期妇女、儿童、老年人以及患有慢性疾病的人群。'
                  },
                  {
                    title: '咨询专业人士',
                    content: '建议在进行任何减重计划前，先咨询专业医疗人员。'
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F6B5A6]/10 text-[#F6B5A6] flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4A4A4A]">{item.title}</h4>
                      <p className="text-sm text-[#6A6A6A]">{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Source */}
            <div className={`mt-8 bg-gradient-to-br from-[#F6B5A6]/10 to-[#F7C5C0]/10 rounded-3xl p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-xl font-bold text-[#4A4A4A] mb-4">内容来源</h2>
              <p className="text-[#6A6A6A] mb-4">
                本网站内容基于国家卫生健康委员会发布的《成人肥胖食养指南（2024年版）》整理制作。
              </p>
              <div className="p-4 bg-white rounded-xl">
                <p className="text-sm text-[#6A6A6A]">
                  <strong>原始文件：</strong>成人肥胖食养指南（2024年版）
                </p>
                <p className="text-sm text-[#6A6A6A] mt-2">
                  <strong>发布单位：</strong>国家卫生健康委员会
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => navigate('/guide-intro')}
                className="px-8 py-4 rounded-full bg-[#F6B5A6] text-white font-bold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                了解指南详情
                <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/bmi-calculator')}
                className="px-8 py-4 rounded-full bg-white text-[#4A4A4A] font-bold shadow-soft hover:shadow-lg transition-all duration-300"
              >
                使用BMI计算器
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

export default Disclaimer;
