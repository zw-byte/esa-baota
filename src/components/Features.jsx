import React from 'react';
    import { FaChartLine, FaSlidersH, FaGlobe, FaLock, FaHistory } from 'react-icons/fa';

    const features = [
      {
        icon: <FaChartLine />,
        title: "全景数据概览",
        desc: "提供可视化的数据看板与源站监控，网站运行状态一屏尽知。",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: <FaSlidersH />,
        title: "极简站点管理",
        desc: "一键启用/停用站点，灵活编辑接入模式与加速区域，一站式高效管理。",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: <FaGlobe />,
        title: "统一DNS与解析",
        desc: "在面板内可直接添加/编辑 DNS 记录，解析生效快人一步。",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: <FaLock />,
        title: "全链路证书配置",
        desc: "一站式上传与同步边缘及源站证书，轻松实现HTTPS全链路加密传输。",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: <FaHistory />,
        title: "智能缓存调度",
        desc: "提供缓存刷新、缓存预热以及历史记录查询功能，清缓存更快更顺手。",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
      }
    ];

    const Features = () => {
      return (
        <section className="py-24 bg-white relative z-10">
          {/* Subtle background connection */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
             <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">在宝塔面板，一键实现ESA五大能力</h2>
              <p className="text-slate-500">主打“轻量、可视、自动化”，闭环管理您的站点</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`
                    relative overflow-hidden
                    bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center group
                    ${index < 3 ? 'lg:col-span-2' : index === 3 ? 'lg:col-span-3' : 'md:col-span-2 lg:col-span-3'}
                  `}
                >
                  {/* Hover Image Background */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-blue-500/40 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-slate-600 group-hover:text-slate-200 leading-relaxed transition-colors duration-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Features;
