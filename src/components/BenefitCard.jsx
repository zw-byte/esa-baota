import React from 'react';
    import { FaGift, FaCheckCircle } from 'react-icons/fa';

    const BenefitCard = () => {
      return (
        <div className="container mx-auto px-6 -mt-20 relative z-10">
          <div className="rounded-3xl p-8 md:p-12 max-w-4xl mx-auto bg-white border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-50 to-blue-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-100 text-ali-orange rounded-xl">
                    <FaGift className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">宝塔用户专属权益</h3>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  为满足多站点用户的加速需求，通过宝塔面板使用ESA插件的用户，可领取专属福利。
                </p>
                <div className="flex items-center gap-2 text-green-600 font-medium bg-green-50 px-4 py-2 rounded-lg w-fit border border-green-100">
                  <FaCheckCircle /> 每个账号仅限领取一次
                </div>
              </div>
              <div className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl border border-slate-100 text-center min-w-[240px] shadow-lg shadow-slate-200/50">
                <div className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wider">免费领取</div>
                <div className="text-6xl font-extrabold text-slate-900 mb-2 tracking-tight">2<span className="text-3xl align-top ml-1">个</span></div>
                <div className="text-ali-orange font-bold text-lg">免费版套餐额度</div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default BenefitCard;
