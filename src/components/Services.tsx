import React from 'react';
import { 
  Globe, 
  Building2, 
  Smartphone, 
  Sliders, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/portfolioData';
import { AnimatedReveal } from './AnimatedReveal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#E6C687]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#E6C687]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#E6C687]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#E6C687]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#E6C687]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#E6C687]" />;
      default:
        return <Globe className="w-6 h-6 text-[#E6C687]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#090A0C] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <AnimatedReveal animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
              <span>Specialized Offerings</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#9E9A90]">Client Services</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight mb-6">
              Bespoke Web Development Tailored to Global Standards
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.25}>
            <p className="text-base sm:text-lg text-[#CCC8BF] leading-relaxed">
              From complete initial WordPress deployments to speed tuning and complex layout adjustments, explore end-to-end services crafted for enduring quality.
            </p>
          </AnimatedReveal>
        </div>

        {/* 6-Card Modern Grid with Hover Lift, Shimmer, Icon Scale and Border Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <AnimatedReveal
              key={service.id}
              animation="fade-up"
              delay={0.1 + index * 0.1}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
                className="glass-panel p-8 rounded-2xl glass-shine flex flex-col justify-between group h-full border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 hover:shadow-[0_20px_45px_-12px_rgba(212,175,55,0.2)] hover:bg-[#151821]/80 transition-all duration-500 text-left"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-400">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono-code text-[#C5A880] bg-white/[0.02] px-2.5 py-1 rounded border border-white/5">
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-[#FFF8EB] mb-3 group-hover:text-[#E6C687] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A9A59C] leading-relaxed mb-6 group-hover:text-[#CCC8BF] transition-colors">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2 text-xs text-[#CCC8BF]">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 border-t border-white/5">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-[#EAE6DF] hover:text-[#FFF8EB] py-2.5 px-3.5 rounded-lg bg-white/[0.02] hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.12)] cursor-pointer"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>

              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
