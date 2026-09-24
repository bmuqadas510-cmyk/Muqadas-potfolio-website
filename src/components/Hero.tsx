import React, { useState, useEffect } from 'react';
import { ArrowDown, Code2, Eye, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Magnetic } from './Magnetic';

interface HeroProps {
  onWorkClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkClick, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  // Interactive slow 3D parallax on developer workstation card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });
  const rotateX = useTransform(springY, [-200, 200], [4, -4]);
  const rotateY = useTransform(springX, [-200, 200], [-5, 5]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const developerName = "MUQADAS";

  const letterVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.15 + i * 0.07,
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const codeSnippet = `<?php
/**
 * Custom WordPress Theme Architecture
 * Developed by Muqadas — WordPress & Web Developer
 */

declare(strict_types=1);

namespace Muqadas\\Theme\\Optimization;

class PerformanceEngine {
    public function __construct() {
        add_action('wp_enqueue_scripts', [$this, 'optimize_assets'], 999);
        add_filter('wp_lazy_loading_enabled', '__return_true');
        add_action('after_setup_theme', [$this, 'setup_responsive_features']);
    }

    public function optimize_assets(): void {
        // Enqueue high-performance modern bundles
        wp_dequeue_style('wp-block-library');
        wp_enqueue_style('muqadas-luxury-core', get_stylesheet_uri(), [], '2.4.0');
    }

    public function setup_responsive_features(): void {
        add_theme_support('responsive-embeds');
        add_theme_support('custom-spacing');
        add_theme_support('title-tag');
    }
}

new PerformanceEngine();`;

  // Floating background abstract particles
  const particles = [
    { top: '15%', left: '10%', size: 4, delay: 0, duration: 9 },
    { top: '28%', left: '85%', size: 5, delay: 2, duration: 11 },
    { top: '65%', left: '18%', size: 3, delay: 1, duration: 8 },
    { top: '78%', left: '75%', size: 4, delay: 3, duration: 10 },
    { top: '45%', left: '48%', size: 3, delay: 4, duration: 12 },
    { top: '88%', left: '35%', size: 5, delay: 1.5, duration: 9.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#090A0C]">
      
      {/* Cinematic Animated Ambient Lighting & Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-[#D4AF37]/15 to-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.3, 0.55, 0.3],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-gradient-to-tl from-[#E6C687]/12 to-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none"
      />

      {/* Floating abstract luxury particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className="absolute rounded-full bg-[#FFE6A3] shadow-[0_0_8px_#D4AF37]"
          />
        ))}
      </div>

      {/* Hairline geometric grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Letter Reveal, Shimmer & Magnetic Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Kicker with subtle gold pulse */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
              </span>
              <span>WordPress & Web Developer</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#A9A59C]">Pakistan & Global Clients</span>
            </motion.div>

            {/* Letter-by-letter reveal for MUQADAS */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif-luxury font-bold tracking-tight leading-[1.08] mb-4 text-balance overflow-hidden flex flex-wrap">
              {developerName.split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-gold-shimmer"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle with fade + upward slide */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl font-light text-[#E6C687] tracking-wide mb-6"
            >
              WordPress & Web Developer
            </motion.h2>

            {/* Professional Statement */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#C8C3B8] font-normal leading-relaxed max-w-xl mb-8"
            >
              Muqadas creates modern, responsive, user-friendly, and professional websites using WordPress and modern web technologies. Specialized in clean design, robust plugin architecture, and high-conversion client solutions.
            </motion.p>

            {/* Premium Buttons with Magnetic and Golden Glow Scale */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Magnetic strength={0.3}>
                <button
                  onClick={onWorkClick}
                  className="group relative px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-[1.03] flex items-center gap-2 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">View My Work</span>
                  <ArrowDown className="relative z-10 w-4 h-4 text-[#090A0C] group-hover:translate-y-0.5 transition-transform" />
                </button>
              </Magnetic>

              <Magnetic strength={0.3}>
                <button
                  onClick={onContactClick}
                  className="group px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#EAE6DF] hover:text-[#FFF8EB] border border-[#D4AF37]/35 hover:border-[#D4AF37] bg-white/[0.02] hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-[1.03]"
                >
                  Let's Work Together
                </button>
              </Magnetic>
            </motion.div>

            {/* Proof Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#9E9A90]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#EAE6DF] font-medium">6+ Years</span> Experience
              </div>
              <span aria-hidden="true" className="text-white/20">/</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#EAE6DF] font-medium">100%</span> Mobile Responsive
              </div>
              <span aria-hidden="true" className="text-white/20">/</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[#EAE6DF] font-medium">BS CS</span> Graduate
              </div>
            </motion.div>

          </div>

          {/* Right Column: Slow 3D Parallax Visual Container */}
          <div className="lg:col-span-6 [perspective:1000px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative rounded-2xl overflow-hidden glass-panel border border-[#D4AF37]/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-shadow duration-500 hover:shadow-[0_25px_70px_-10px_rgba(212,175,55,0.25)]"
            >
              {/* Subtle top glare line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFE6A3]/60 to-transparent z-20 pointer-events-none" />

              {/* Terminal / Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0F1116] border-b border-white/10 text-xs">
                {/* Window Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/70" />
                  <span className="ml-2 text-[#7C7870] font-mono-code hidden sm:inline">
                    muqadas-workspace · production
                  </span>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="flex items-center gap-1 bg-[#1A1D24] p-0.5 rounded-md border border-white/5">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                      activeTab === 'preview'
                        ? 'bg-[#2B303C] text-[#FFF6E5] shadow-sm'
                        : 'text-[#8F8B82] hover:text-[#CCC8BF]'
                    }`}
                  >
                    <Eye className="w-3 h-3 text-[#D4AF37]" />
                    <span>Live Preview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                      activeTab === 'code'
                        ? 'bg-[#2B303C] text-[#FFF6E5] shadow-sm'
                        : 'text-[#8F8B82] hover:text-[#CCC8BF]'
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>WP Logic</span>
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="relative aspect-[16/10] bg-[#0A0C10] overflow-hidden">
                {activeTab === 'preview' ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={PERSONAL_INFO.heroImage}
                      alt="Muqadas WordPress & Web Developer Workstation"
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Subtle Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/90 via-[#090A0C]/30 to-transparent pointer-events-none" />
                    
                    {/* Overlay Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                      <div className="bg-[#0D0F14]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#D4AF37]/25 shadow-lg">
                        <p className="text-[11px] tracking-wider uppercase text-[#D4AF37] font-semibold">
                          Custom Client Build
                        </p>
                        <p className="text-xs text-[#EAE6DF] font-medium">
                          WordPress · Elementor Pro · Responsive CSS
                        </p>
                      </div>

                      <div className="bg-[#0D0F14]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 hidden sm:flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[11px] text-[#C5A880] font-mono-code">PageSpeed: 99/100</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full p-4 overflow-x-auto bg-[#0B0D11] text-xs font-mono-code text-[#ABB2BF] leading-relaxed select-text">
                    <pre className="text-[11px] sm:text-xs">
                      <code>{codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Status footer bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#0C0E12] border-t border-white/5 text-[11px] text-[#7A766E]">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">●</span>
                  <span>PHP 8.2 / WP 6.5+ Compliant</span>
                </div>
                <span>Sub-second Load Guaranteed</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
