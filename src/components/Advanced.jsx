import React from 'react';
    import { FaShieldAlt, FaTachometerAlt, FaCode, FaChartPie } from 'react-icons/fa';

    const advancedFeatures = [
      {
        icon: <FaShieldAlt />,
        title: "全方位安全防护",
        desc: "集成 WAF Web应用防火墙、DDoS 防护及 Bots 流量管理，构建云边一体的安全防线，精准抵御各类网络攻击"
      },
      {
        icon: <FaTachometerAlt />,
        title: "极致性能优化",
        desc: "全面支持 HTTP/3 (QUIC) 协议与 IPv6 访问；提供图像自适应处理（WebP/AVIF、智能压缩），在降低延时的同时显著减少带宽成本"
      },
      {
        icon: <FaCode />,
        title: "函数和Pages",
        desc: "提供 Serverless 计算环境，支持在全球边缘节点直接运行 JavaScript/Wasm 代码，无需服务器即可处理复杂业务逻辑；Pages 可实现与 Git 代码仓库无缝集成，支持自动化构建和部署，让前端项目瞬间获得全球加速能力"
      },
      {
        icon: <FaChartPie />,
        title: "分析和日志",
        desc: "通过边缘日志分析、实时监控和智能告警在边缘节点对数据进行收集和处理，及时发现和响应潜在的安全威胁，增强数据的可见性和管理性和运营效率"
      }
    ];

    const Advanced = () => {
      return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 text-slate-900 relative overflow-hidden">
          {/* Decorative background elements - Subtle flow */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-b from-indigo-50/60 to-violet-50/60 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-t from-orange-50/50 to-rose-50/50 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">
              <div className="lg:w-1/3 pt-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  探索 ESA <br/><span className="text-ali-orange">更多进阶能力</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  宝塔面板满足了日常运维的便捷性，若您还需满足更复杂的业务需求，可前往阿里云控制台探索更多进阶能力。
                </p>
                <a 
                  href="https://help.aliyun.com/zh/edge-security-acceleration/esa/product-overview/what-is-esa?spm=a2c4g.11186623.0.i1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white border border-slate-200 hover:border-ali-orange hover:text-ali-orange rounded-xl transition-all text-slate-700 font-semibold shadow-sm hover:shadow-md"
                >
                  前往ESA官方文档
                </a>
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
