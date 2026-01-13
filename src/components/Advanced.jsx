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
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-ali-orange rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  探索 ESA <span className="text-ali-orange">更多进阶能力</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  宝塔面板满足了日常运维的便捷性，如果您需满足更复杂的业务需求，阿里云 ESA 原生控制台还为您提供了更多企业级能力。
                </p>
                <button className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-lg transition-colors text-white font-semibold">
                  前往 ESA 控制台
                </button>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {advancedFeatures.map((item, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-blue-400 text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
