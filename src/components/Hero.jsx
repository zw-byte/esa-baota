import React from 'react';
    import { FaRocket, FaBolt } from 'react-icons/fa';

    const Hero = () => {
      return (
        <section className="relative pt-24 pb-36 overflow-hidden bg-white">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="mb-8 flex justify-center">
               <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-base font-medium">
                <span className="flex items-center gap-2 text-ali-orange font-bold">
                  <FaBolt /> 强强联手
                </span>
                <span className="w-px h-4 bg-slate-300"></span>
                <span>阿里云 ESA <span className="text-slate-400">x</span> 宝塔面板</span>
              </div>
            </div>
            
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ali-orange to-blue-600 mb-2">
            阿里云 ESA x 宝塔面板
          </span>
          一键接入，效率翻倍
        </h1>
    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
      在宝塔面板安装<span className="font-semibold text-ali-orange">“阿里云ESA”</span>插件，<br className="hidden md:block"/>
      即可一站式管理站点接入与配置。
    </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                <FaRocket /> 立即下载宝塔面板
              </button>
              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold text-lg transition-all shadow-sm">
                了解更多详情
              </button>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
