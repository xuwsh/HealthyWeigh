import { useNavigate } from 'react-router-dom';
import { Heart, BookOpen, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: '指南内容',
      items: [
        { label: '食养原则', href: '/dietary-principles' },
        { label: '体质辨识', href: '/constitution' },
        { label: '地区食谱', href: '/recipe/northeast' },
        { label: '药食同源', href: '/food-medicine' },
      ]
    },
    {
      title: '实用工具',
      items: [
        { label: 'BMI计算器', href: '/bmi-calculator' },
        { label: '热量查询', href: '/calories' },
        { label: '食谱推荐', href: '/recipe/northeast' },
        { label: '运动指导', href: '/exercise' },
      ]
    },
    {
      title: '关于我们',
      items: [
        { label: '指南介绍', href: '/guide-intro' },
        { label: '肥胖定义', href: '/obesity-definition' },
        { label: '中医认识', href: '/tcm-obesity' },
        { label: '免责声明', href: '/disclaimer' },
      ]
    }
  ];

  return (
    <footer className="relative bg-[#4A4A4A] text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 0L60 5C120 10 240 20 360 25C480 30 600 30 720 25C840 20 960 10 1080 8C1200 5 1320 10 1380 12L1440 15V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F6B5A6] to-[#F7C5C0] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">成人肥胖食养指南</h3>
                <p className="text-sm text-gray-400">国家卫健委权威发布</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm">
              根据《成人肥胖食养指南（2024年版）》制作，旨在帮助成年人科学管理体重，建立健康的生活方式。
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>了解更多请访问国家卫健委官网</span>
            </div>
          </div>

          {/* Links */}
          {links.map((group, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-bold text-lg">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => navigate(item.href)}
                      className="text-gray-400 hover:text-[#F6B5A6] transition-colors flex items-center gap-1 group text-left"
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} 成人肥胖食养指南</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">基于国家卫健委指南制作</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#F6B5A6] fill-[#F6B5A6] animate-pulse" />
              <span>for health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
