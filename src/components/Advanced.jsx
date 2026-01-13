import React from 'react';
    import { FaShieldAlt, FaTachometerAlt, FaCode, FaChartPie } from 'react-icons/fa';

    const advancedFeatures = [
      {
        icon: <FaShieldAlt />,
        title: "全方位安全防护",
        desc: "集成 WAF、DDoS 防护及 Bots 流量管理，构建云边一体的安全防线。"
      },
      {
        icon: <FaTachometerAlt />,
        title: "极致性能优化",
        desc: "支持 HTTP/3 (QUIC)、IPv6；提供图像自适应处理（WebP/AVIF），降低延时与成本。"
      },
      {
        icon: <FaCode />,
        title: "边缘计算 Serverless",
        desc: "在全球边缘节点直接运行 JavaScript/Wasm 代码，无需服务器处理复杂逻辑。"
      },
      {
        icon: <FaChartPie />,
        title: "深度分析和日志",
        desc: "边缘日志分析、实时监控和智能告警，及时发现威胁，增强数据可见性。"
      }
    ];

    const Advanced = () => {
      return (
        <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-100 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">
              <div className="lg:w-1/3 pt-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  探索 ESA <br/><span className="text-ali-orange">更多进阶能力</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  宝塔面板满足了日常运维的便捷性，如果您需满足更复杂的业务需求，阿里云 ESA 原生控制台还为您提供了更多企业级能力。
                </p>
                <button className="px-8 py-3 bg-white border border-slate-200 hover:border-ali-orange hover:text-ali-orange rounded-xl transition-all text-slate-700 font-semibold shadow-sm hover:shadow-md">
                  前往ESA官方文档
                </button>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {advancedFeatures.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
                    <div className="flex items-start gap-5">
                      <div className="mt-1 text-blue-500 text-2xl p-3 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Advanced;
