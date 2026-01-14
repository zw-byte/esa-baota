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
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <img 
                src="https://1d-static.alibaba-inc.com/oneday/source/14a5e15c-3e02-4299-b440-59c6d7b8daf2.png" 
                alt="Alibaba Cloud" 
                className="h-10 md:h-14 object-contain mix-blend-multiply"
              />
              <span className="text-slate-300 text-xl">✕</span>
              <img 
                src="https://1d-static.alibaba-inc.com/oneday/source/2ffb5d0c-a53c-4845-a099-d15ffdd0bf9f.png" 
                alt="Baota Panel" 
                className="h-10 md:h-14 object-contain mix-blend-multiply"
              />
            </div>

    <h1 className="font-extrabold mb-8 text-slate-900 leading-tight">
      <span className="block text-3xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-ali-orange to-blue-600 mb-4 whitespace-nowrap tracking-tighter">
        ESA<span className="mx-3 sm:mx-6">X</span>宝塔面板
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
              <a 
                href="https://help.aliyun.com/zh/edge-security-acceleration/?spm=5176.29630154.J_AHgvE-XDhTWrtotIBlDQQ.9.2d857579gd6c4g"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold text-lg transition-all shadow-sm flex items-center justify-center"
              >
                了解阿里云ESA
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
