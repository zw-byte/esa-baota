import React from 'react';

    const Footer = () => {
      return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">立即体验“原生级”的网站加速与防护服务！</h3>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="hover:text-white transition-colors">关于阿里云 ESA</a>
              <a href="#" className="hover:text-white transition-colors">宝塔面板官网</a>
              <a href="#" className="hover:text-white transition-colors">帮助文档</a>
            </div>
            <p className="text-sm text-slate-600">
              © 2024 Alibaba Cloud & Baota Panel. All rights reserved.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;
