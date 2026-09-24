import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#090A0C]/85 backdrop-blur-xl border-b border-[#D4AF37]/20 py-3 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85)]'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark with luxury diamond spin */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 text-xl font-serif-luxury tracking-widest text-[#FFF6E5] hover:text-[#E6C687] transition-colors"
        >
          <span className="text-[#D4AF37] font-semibold text-lg inline-block transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
            ◈
          </span>
          <span className="relative">
            {PERSONAL_INFO.displayName}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500" />
          </span>
        </a>

        {/* Zone 2: Navigation Links with Animated Underline and Gold Glow */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#B8B4AA]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`group relative py-1.5 transition-all duration-300 hover:text-[#FFF8EB] ${
                  isActive ? 'text-[#E6C687] font-semibold' : ''
                }`}
              >
                <span>{link.label}</span>
                
                {/* Active Underline Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] rounded-full shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Subtle Hover Underline & Glow */}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#E6C687] -translate-x-1/2 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#EAE6DF] hover:text-[#E6C687] transition-all duration-300 border border-white/10 hover:border-[#D4AF37]/50 rounded-lg whitespace-nowrap bg-white/[0.02] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            title="View Muqadas's verified Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>View CV</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] rounded-lg transition-all duration-300 shadow-[0_0_18px_rgba(212,175,55,0.25)] hover:shadow-[0_0_26px_rgba(212,175,55,0.55)] hover:scale-[1.03] whitespace-nowrap overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Let's Talk</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#EAE6DF] hover:text-[#E6C687] border border-white/10 rounded-lg bg-white/[0.03] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0D0F13]/98 border-b border-[#D4AF37]/25 px-6 py-6 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium tracking-wide text-[#CCC8BF] hover:text-[#E6C687] py-1.5 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#EAE6DF] border border-white/15 rounded-lg bg-white/5 hover:border-[#D4AF37]/40"
                >
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  <span>View Full CV (Muqadas Bibi)</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] rounded-lg shadow-md"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
