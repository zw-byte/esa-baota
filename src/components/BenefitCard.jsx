import React from 'react';
    import { FaGift, FaCheckCircle } from 'react-icons/fa';

    const BenefitCard = () => {
      return (
        <div className="container mx-auto px-6 -mt-20 relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-ali-orange rounded-lg">
                    <FaGift className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-ali-orange">宝塔用户专属权益</h3>
                </div>
                <p className="text-slate-300 text-lg mb-4">
                  为满足多站点用户的加速需求，通过宝塔面板使用ESA插件的用户，可领取专属福利。
                </p>
                <div className="flex items-center gap-2 text-green-400 font-semibold bg-green-400/10 px-4 py-2 rounded-lg w-fit">
                  <FaCheckCircle /> 每个账号仅限领取一次
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center min-w-[200px]">
                <div className="text-sm text-slate-400 mb-1">免费领取</div>
                <div className="text-5xl font-bold text-white mb-2">2个</div>
                <div className="text-ali-orange font-bold">免费版套餐额度</div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default BenefitCard;
