import React from 'react';
    import { FaDownload, FaSearch, FaKey, FaHandHoldingHeart, FaArrowRight, FaArrowDown } from 'react-icons/fa';

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
        desc: "点击“领取2个免费站点”"
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
            
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3 relative">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Card */}
                  <div className="w-full lg:w-auto flex-1 relative group">
                    <div className="h-full p-5 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:bg-white flex flex-col items-center text-center z-10 relative">
                      <div className="w-10 h-10 bg-white border border-slate-100 text-blue-600 rounded-xl flex items-center justify-center text-lg mb-3 shadow-sm group-hover:scale-110 group-hover:text-ali-orange group-hover:border-ali-orange/20 transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute top-1 right-3 text-4xl font-bold text-slate-100 -z-10 select-none group-hover:text-blue-50 transition-colors">
                        0{index + 1}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed px-2">{step.desc}</p>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 text-slate-300 flex flex-col items-center justify-center py-2 lg:py-0">
                      <FaArrowRight className="hidden lg:block text-sm text-slate-300" />
                      <FaArrowDown className="lg:hidden text-sm text-slate-300" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Steps;
