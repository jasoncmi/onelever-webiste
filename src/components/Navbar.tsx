import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-[#1a2332] py-5'}`} aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            onelever<span className="text-[#c2823a]">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/how-we-work" className="text-sm font-medium text-zinc-400 hover:text-[#c2823a] transition-colors">How We Work</Link>
          <Link to="/use-cases" className="text-sm font-medium text-zinc-400 hover:text-[#c2823a] transition-colors">Use Cases</Link>
          <Link to="/case-studies" className="text-sm font-medium text-zinc-400 hover:text-[#c2823a] transition-colors">Case Studies</Link>
          <Link to="/insights" className="text-sm font-medium text-zinc-400 hover:text-[#c2823a] transition-colors">Insights</Link>
          <Link to="/about" className="text-sm font-medium text-zinc-400 hover:text-[#c2823a] transition-colors">About</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-[#c2823a] hover:bg-[#d49650] text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#c2823a]/20 cursor-pointer">
            Contact
          </Link>
        </div>

        <button className="md:hidden text-zinc-100 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark border-t border-white/10 p-6 md:hidden z-50 h-screen"
          >
            <div className="flex flex-col gap-6">
              <Link to="/how-we-work" className="text-xl font-medium text-zinc-100" onClick={handleNavClick}>How We Work</Link>
              <Link to="/use-cases" className="text-xl font-medium text-zinc-100" onClick={handleNavClick}>Use Cases</Link>
              <Link to="/case-studies" className="text-xl font-medium text-zinc-100" onClick={handleNavClick}>Case Studies</Link>
              <Link to="/insights" className="text-xl font-medium text-zinc-100" onClick={handleNavClick}>Insights</Link>
              <Link to="/about" className="text-xl font-medium text-zinc-100" onClick={handleNavClick}>About</Link>
              <Link to="/contact" className="w-full py-4 bg-[#c2823a] text-white font-bold rounded-xl text-center mt-4" onClick={handleNavClick}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
