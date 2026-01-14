import React from 'react';
    import { FaChartLine, FaSlidersH, FaGlobe, FaLock, FaHistory } from 'react-icons/fa';

    const features = [
      {
        icon: <FaChartLine />,
        title: "全景数据概览",
        desc: "提供可视化的数据看板与源站监控，网站运行状态一屏尽知。"
      },
      {
        icon: <FaSlidersH />,
        title: "极简站点管理",
        desc: "一键启用/停用站点，灵活编辑接入模式与加速区域，一站式高效管理。"
      },
      {
        icon: <FaGlobe />,
        title: "统一DNS与解析",
        desc: "在面板内可直接添加/编辑 DNS 记录，解析生效快人一步。"
      },
      {
        icon: <FaLock />,
        title: "全链路证书配置",
        desc: "一站式上传与同步边缘及源站证书，轻松实现HTTPS全链路加密传输。"
      },
      {
        icon: <FaHistory />,
        title: "智能缓存调度",
        desc: "提供缓存刷新、缓存预热以及历史记录查询功能，清缓存更快更顺手。"
      }
    ];

    const Features = () => {
      return (
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">在宝塔面板，一键实现五大能力</h2>
              <p className="text-slate-500">主打“轻量、可视、自动化”，闭环管理您的站点</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`
                    bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group
                    ${index < 3 ? 'lg:col-span-2' : index === 3 ? 'lg:col-span-3' : 'md:col-span-2 lg:col-span-3'}
                  `}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Features;
