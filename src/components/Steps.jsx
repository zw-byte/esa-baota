    import React from 'react';
    import { FaCloudDownloadAlt, FaServer } from 'react-icons/fa';

    const Steps = () => {
      return (
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">安装接入方式</h2>
              <p className="text-slate-500">灵活选择适合您的接入方式，快速开启边缘加速</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* 方式一 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  推荐
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                    <FaCloudDownloadAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">方式一：面板插件安装</h3>
                    <p className="text-slate-500 text-sm">适用于已安装宝塔面板的用户</p>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  {/* 连接线 */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200"></div>

                  {/* Step 1 */}
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-bold z-10 shrink-0 shadow-sm">1</div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-800 mb-1">进入软件商店</h4>
                      <p className="text-slate-600 text-sm">安装宝塔面板 → 进入首页“软件商店”</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-bold z-10 shrink-0 shadow-sm">2</div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-800 mb-1">下载插件</h4>
                      <p className="text-slate-600 text-sm">搜索 “阿里云ESA” → 下载安装</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center font-bold z-10 shrink-0 shadow-sm">3</div>
                    <div className="pt-1">
                      <h4 className="font-bold text-slate-800 mb-1">关联密钥启用</h4>
                      <p className="text-slate-600 text-sm">关联阿里云账号密钥（在ESA控制台获取）→ 即可启用！</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 方式二 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-ali-orange/30 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-xl">
                  即将上线
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-50 text-ali-orange rounded-xl flex items-center justify-center text-xl">
                    <FaServer />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">方式二：镜像一键部署</h3>
                    <p className="text-slate-500 text-sm">通过阿里云市场安装</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-slate-600 leading-relaxed mb-4 whitespace-nowrap text-sm">
                    通过阿里云市场安装宝塔镜像，默认提供ESA插件功能，<span className="font-bold text-slate-800">开箱即用</span>。
                  </p>
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                    敬请期待
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>
      );
    };

    export default Steps;
