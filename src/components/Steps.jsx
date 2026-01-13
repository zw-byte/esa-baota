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
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Card */}
                  <div className="w-full lg:w-auto flex-1 relative group">
                    <div className="h-full p-6 xl:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:bg-white flex flex-col items-center text-center z-10 relative">
                      <div className="w-14 h-14 bg-white border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl mb-5 shadow-sm group-hover:scale-110 group-hover:text-ali-orange group-hover:border-ali-orange/20 transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="absolute top-2 right-4 text-5xl font-bold text-slate-100 -z-10 select-none group-hover:text-blue-50 transition-colors">
                        0{index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 text-slate-300 flex flex-col items-center justify-center py-2 lg:py-0">
                      <FaArrowRight className="hidden lg:block text-xl text-slate-300" />
                      <FaArrowDown className="lg:hidden text-xl text-slate-300" />
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
