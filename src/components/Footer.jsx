import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-white text-slate-500 py-16 border-t border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-8">开启高效运维新体验</h3>
            <div className="flex justify-center gap-8 mb-10 text-sm font-medium">
              <a href="#" className="text-slate-600 hover:text-ali-orange transition-colors">关于阿里云 ESA</a>
              <a href="#" className="text-slate-600 hover:text-ali-orange transition-colors">宝塔面板官网</a>
              <a href="#" className="text-slate-600 hover:text-ali-orange transition-colors">帮助文档</a>
            </div>
            <p className="text-sm text-slate-400">
              © 2024 Alibaba Cloud & Baota Panel. All rights reserved.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;
