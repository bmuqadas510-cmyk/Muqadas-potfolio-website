import React from 'react';
import { 
  Palette, 
  Smartphone, 
  Target, 
  Code, 
  Search, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';
import { STRENGTHS_DATA } from '../data/portfolioData';
import { AnimatedReveal } from './AnimatedReveal';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Palette className="w-5 h-5 text-[#E6C687]" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-[#E6C687]" />;
      case 2:
        return <Target className="w-5 h-5 text-[#E6C687]" />;
      case 3:
        return <Code className="w-5 h-5 text-[#E6C687]" />;
      case 4:
        return <MessageSquare className="w-5 h-5 text-[#E6C687]" />;
      case 5:
        return <Search className="w-5 h-5 text-[#E6C687]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#E6C687]" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#090A0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <AnimatedReveal animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
              <span>Professional Strengths</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#9E9A90]">Why Work With Muqadas</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight mb-6">
              Engineered for Longevity, Polish, and Client Peace of Mind
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.25}>
            <p className="text-base sm:text-lg text-[#CCC8BF] leading-relaxed">
              Every build is approached with rigorous engineering discipline: zero unnecessary plugin bloat, transparent timeline commitments, and pixel-precise execution.
            </p>
          </AnimatedReveal>
        </div>

        {/* 6 Grid Cards with Staggered Delays, Glass Shine, and Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRENGTHS_DATA.map((strength, index) => (
            <AnimatedReveal
              key={strength.title}
              animation="fade-up"
              delay={0.1 + index * 0.1}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="glass-panel p-7 rounded-2xl glass-shine flex flex-col justify-between h-full group border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.18)] transition-all duration-400 text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                      {getIcon(index)}
                    </div>
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#D4AF37] bg-white/[0.02] px-2 py-0.5 rounded border border-white/5">
                      {strength.metric}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-[#FFF8EB] mb-2.5 group-hover:text-[#E6C687] transition-colors">
                    {strength.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A9A59C] leading-relaxed group-hover:text-[#CCC8BF] transition-colors">
                    {strength.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#7F7B72]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span>Verified in Client Deliveries</span>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
