import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaChartLine, FaSlidersH, FaGlobe, FaLock, FaHistory, FaTimes, FaSearchPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: <FaChartLine />,
    title: "全景数据概览",
    desc: "提供可视化的数据看板与源站监控，网站运行状态一屏尽知",
    image: "https://1d-static.alibaba-inc.com/oneday/source/37804e78-6827-4cae-8817-dce739a4e1a0.png"
  },
  {
    icon: <FaSlidersH />,
    title: "极简站点管理",
    desc: "一键启用/停用站点，灵活编辑接入模式与加速区域，一站式高效管理",
    image: "https://1d-static.alibaba-inc.com/oneday/source/2efe6ece-02af-4087-a867-a5fb34b6674e.png"
  },
  {
    icon: <FaGlobe />,
    title: "统一DNS与解析",
    desc: "在面板内可直接添加/编辑 DNS 记录，解析生效快人一步",
    image: "https://1d-static.alibaba-inc.com/oneday/source/04a15f44-a7d7-4eb7-b36e-4c414e79d40e.png"
  },
  {
    icon: <FaLock />,
    title: "全链路证书配置",
    desc: "一站式上传与同步边缘及源站证书，轻松实现HTTPS全链路加密传输",
    image: "https://1d-static.alibaba-inc.com/oneday/source/f9f0d491-e0a5-4690-bd7a-f3a952011734.png"
  },
  {
    icon: <FaHistory />,
    title: "智能缓存调度",
    desc: "提供缓存刷新、缓存预热以及历史记录查询功能，清缓存更快更顺手",
    image: "https://1d-static.alibaba-inc.com/oneday/source/5a3cc8d7-8ee4-4d99-95b5-8fe6d868dbe8.png"
  }
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Lock body scroll when modal is open and prevent layout shift
  useEffect(() => {
    if (selectedFeature) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [selectedFeature]);

  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      {/* Subtle background connection */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-gradient-to-bl from-emerald-50/40 to-teal-50/40 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-50/40 to-sky-50/40 rounded-full blur-3xl"></div>
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
              onClick={() => setSelectedFeature(feature)}
              className={`
                bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 cursor-pointer group relative
                ${index < 3 ? 'lg:col-span-2' : index === 3 ? 'lg:col-span-3' : 'md:col-span-2 lg:col-span-3'}
              `}
            >
              {/* Hover Hint Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-400 bg-blue-50 p-2 rounded-full transform translate-y-2 group-hover:translate-y-0">
                <FaSearchPlus />
              </div>

              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedFeature && (
            <motion.div 
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
              style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                key="modal-content"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 bg-white z-10 shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg">
                      {selectedFeature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{selectedFeature.title}</h3>
                      <p className="text-sm text-slate-500 hidden sm:block">{selectedFeature.desc}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                
                {/* Modal Content - Image Container */}
                <div className="flex-1 overflow-hidden p-4 bg-white flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <img 
                      src={selectedFeature.image} 
                      alt={selectedFeature.title} 
                      className="w-[700px] max-w-full h-auto block"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Features;
