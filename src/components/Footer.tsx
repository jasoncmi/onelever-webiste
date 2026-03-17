import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-display font-bold tracking-tighter text-white">
              onelever<span className="text-[#c2823a]">.</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500 font-medium">
            <a href="#" className="hover:text-[#c2823a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c2823a] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#c2823a] transition-colors">Data Processing Addendum</a>
          </div>
          
          <div className="text-sm text-zinc-600 font-semibold">
            © 2026 onelever AI Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
