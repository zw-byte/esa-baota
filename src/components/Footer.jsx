import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-white text-slate-500 py-16 border-t border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-8">开启高效运维新体验</h3>
          <div className="flex justify-center gap-8 mb-10 text-sm font-medium">
            <a href="https://www.aliyun.com/product/esa?spm=5176.42028462.nav-v2-dropdown-menu-1.d_main_4_3_1.35c9154atdjKRv&scm=20140722.X_data-0cdb601aa282ed84fccb._.V_1" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-ali-orange transition-colors">关于阿里云 ESA</a>
            <a href="https://www.bt.cn/new/index.html" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-ali-orange transition-colors">宝塔面板官网</a>
            <a href="https://help.aliyun.com/zh/edge-security-acceleration/?spm=5176.29630154.J_AHgvE-XDhTWrtotIBlDQQ.9.2d857579gd6c4g" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-ali-orange transition-colors">帮助文档</a>
          </div>
            <p className="text-sm text-slate-400">
              © 2024 Alibaba Cloud & Baota Panel. All rights reserved.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;
