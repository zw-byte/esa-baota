import React from 'react';
    import { FaRocket, FaBolt } from 'react-icons/fa';

    const Hero = () => {
      return (
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 -z-10" />
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 animate-bounce">
              <FaBolt /> 强强联手：阿里云 ESA x 宝塔面板
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
              插件一键接入<br />
              <span className="gradient-text">运维效率翻倍</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              即日起，在宝塔面板搜索并安装“阿里云ESA”插件，即可在面板内实现一站式站点接入、配置与管理，享受更便携的边缘安全与加速服务。
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
