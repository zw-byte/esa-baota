import React from 'react';
    import { FaDownload, FaSearch, FaKey, FaHandHoldingHeart } from 'react-icons/fa';

    const steps = [
      {
        icon: <FaDownload />,
        title: "下载安装",
        desc: "进入宝塔官网，下载安装宝塔面板"
      },
      {
        icon: <FaSearch />,
        title: "搜索插件",
        desc: "在软件商店搜索“阿里云 ESA”，下载安装"
      },
      {
        icon: <FaKey />,
        title: "关联密钥",
        desc: "首次进入提示关联ESA密钥，填入信息"
      },
      {
        icon: <FaHandHoldingHeart />,
        title: "领取权益",
        desc: "点击“领取2个免费站点”，3个工作日内发放"
      }
    ];

    const Steps = () => {
      return (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">简单四步，即刻开启</h2>
              <p className="text-slate-500">无需复杂配置，分钟级完成接入</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:bg-white h-full">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="absolute top-8 right-8 text-6xl font-bold text-slate-100 -z-10 select-none">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Steps;
