import React from 'react';
import { FaRocket } from 'react-icons/fa';

const Hero = () => {
      return (
        <section className="relative pt-24 pb-36 overflow-hidden bg-white">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            
    <h1 className="font-extrabold mb-8 text-slate-900 leading-tight">
      <span className="block text-3xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-ali-orange to-blue-600 mb-4 whitespace-nowrap tracking-tighter">
        阿里云ESA<span className="mx-3 sm:mx-6">X</span>宝塔面板
      </span>
      <span className="block text-xl sm:text-3xl md:text-5xl">
        插件一键接入，配置效率翻倍
      </span>
    </h1>
    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-loose font-light">
      在宝塔面板安装<span className="font-semibold text-ali-orange">“阿里云ESA”</span>插件<br />
      一站式管理站点接入与配置
    </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.bt.cn/new/download.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <FaRocket /> 立即安装宝塔面板
              </a>
              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold text-lg transition-all shadow-sm">
                了解更多
              </button>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
