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
            <div className="mb-10 flex flex-wrap justify-center items-center gap-6 select-none opacity-90">
              {/* 阿里云 Logo */}
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 1024 1024" className="w-8 h-8 md:w-9 md:h-9" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.333333 213.333333h170.666667v128H298.666667v341.333334h85.333333v128H213.333333V213.333333z m597.333334 0v597.333334h-170.666667v-128h85.333333V341.333333h-85.333333V213.333333h170.666667z" fill="#FF6A00" />
                  <path d="M469.333333 469.333333h85.333334v85.333334h-85.333334z" fill="#FF6A00" />
                </svg>
                <span className="text-xl md:text-2xl font-bold text-slate-700 tracking-tight">阿里云</span>
              </div>

              <span className="text-slate-300 text-xl font-light px-1">×</span>

              {/* 宝塔 Logo */}
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 1024 1024" className="w-7 h-7 md:w-8 md:h-8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 100L128 240V512C128 760 512 924 512 924C512 924 896 760 896 512V240L512 100Z" fill="#20a53a"/>
                  <path d="M512 240L700 320V380H324V320L512 240Z" fill="white" opacity="0.9"/>
                  <path d="M340 420H684V480H340V420Z" fill="white" opacity="0.9"/>
                  <path d="M360 520H664V580H360V520Z" fill="white" opacity="0.9"/>
                </svg>
                <span className="text-xl md:text-2xl font-bold text-slate-700 tracking-tight">宝塔面板</span>
              </div>
            </div>
            
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 leading-snug">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ali-orange to-blue-600 mb-2 whitespace-nowrap">
            阿里云 ESA x 宝塔面板
          </span>
          一键接入，效率翻倍
        </h1>
    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-loose font-light">
      在宝塔面板安装<span className="font-semibold text-ali-orange">“阿里云ESA”</span>插件，<br className="hidden md:block"/>
      即可一站式管理站点接入与配置。
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
