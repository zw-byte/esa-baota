import React, { useRef, useEffect, useState } from 'react';
    import { FaChartLine, FaSlidersH, FaGlobe, FaLock, FaHistory } from 'react-icons/fa';
    import { motion, useScroll, useTransform } from 'framer-motion';

    const features = [
      {
        icon: <FaChartLine />,
        title: "全景数据概览",
        desc: "提供可视化的数据看板与源站监控，网站运行状态一屏尽知"
      },
      {
        icon: <FaSlidersH />,
        title: "极简站点管理",
        desc: "一键启用/停用站点，灵活编辑接入模式与加速区域，一站式高效管理"
      },
      {
        icon: <FaGlobe />,
        title: "统一DNS与解析",
        desc: "在面板内可直接添加/编辑 DNS 记录，解析生效快人一步"
      },
      {
        icon: <FaLock />,
        title: "全链路证书配置",
        desc: "一站式上传与同步边缘及源站证书，轻松实现HTTPS全链路加密传输"
      },
      {
        icon: <FaHistory />,
        title: "智能缓存调度",
        desc: "提供缓存刷新、缓存预热以及历史记录查询功能，清缓存更快更顺手"
      }
    ];

    const Features = () => {
      const targetRef = useRef(null);
      const scrollContainerRef = useRef(null);
      const [scrollRange, setScrollRange] = useState(0);

      const { scrollYProgress } = useScroll({
        target: targetRef,
      });

      // 动态计算滚动距离
      useEffect(() => {
        const updateScrollRange = () => {
          if (scrollContainerRef.current) {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const containerWidth = scrollContainerRef.current.parentElement.clientWidth;
            // 计算需要滚动的距离：内容总宽 - 容器可视宽度
            const range = scrollWidth - containerWidth;
            setScrollRange(range > 0 ? range : 0);
          }
        };

        // 初始化和 resize 时更新
        updateScrollRange();
        window.addEventListener('resize', updateScrollRange);
        
        // 稍微延迟一下以确保渲染完成
        const timer = setTimeout(updateScrollRange, 100);
        
        return () => {
          window.removeEventListener('resize', updateScrollRange);
          clearTimeout(timer);
        };
      }, []);

      const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

      return (
        <section ref={targetRef} className="relative h-[300vh] bg-white z-10">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
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
              
              {/* 滚动容器 */}
              <div className="overflow-hidden -mx-6 px-6">
                <motion.div 
                  ref={scrollContainerRef}
                  style={{ x }}
                  className="flex gap-6 w-max pb-4"
                >
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="min-w-[300px] md:min-w-[360px] bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Features;
