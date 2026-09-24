import React from 'react';
import { GraduationCap, Globe2, Sparkles, Check, FileText, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { AnimatedReveal } from './AnimatedReveal';

interface AboutProps {
  onOpenCvModal: () => void;
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal, onContactClick }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#090A0C] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header with Sequential Stagger */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <AnimatedReveal animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
              <span>Curriculum & Background</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#9E9A90]">About Muqadas</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight mb-6">
              Engineering High-Performance Web Presences with WordPress Precision
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.25}>
            <p className="text-base sm:text-lg text-[#CCC8BF] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </AnimatedReveal>

          {/* Self-drawing decorative golden line */}
          <div className="mt-8 overflow-hidden h-[1.5px] w-full max-w-md bg-white/5 relative">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF0D0] to-transparent shadow-[0_0_10px_#D4AF37]"
            />
          </div>
        </div>

        {/* 3-Column Luxury Architecture Cards with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Academic & CS Pedigree */}
          <AnimatedReveal animation="fade-up" delay={0.1} className="h-full">
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover glass-shine flex flex-col justify-between h-full group hover:border-[#D4AF37]/40 transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-[#E6C687]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#FFF8EB] mb-2 group-hover:text-[#E6C687] transition-colors">
                  Education & Computing Foundation
                </h3>
                <p className="text-xs text-[#9E9A90] mb-6">
                  Accredited academic degrees grounding web development in computer science principles.
                </p>

                <div className="space-y-4">
                  {EDUCATION_DATA.map((item, idx) => (
                    <div key={idx} className="pb-3 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-[#EAE6DF]">{item.degree}</span>
                        <span className="text-[#C5A880] font-mono-code">{item.period}</span>
                      </div>
                      <p className="text-xs text-[#D4AF37] mb-1">{item.institution}</p>
                      <p className="text-[11px] text-[#8F8B82] leading-normal">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#8F8B82]">Rigorous CS Theory</span>
                <span className="text-xs text-[#E6C687] font-medium">100% Verified</span>
              </div>
            </div>
          </AnimatedReveal>

          {/* Card 2: Core Focus & Methodology */}
          <AnimatedReveal animation="fade-up" delay={0.25} className="h-full">
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover glass-shine flex flex-col justify-between h-full group hover:border-[#D4AF37]/40 transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-[#E6C687]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#FFF8EB] mb-2 group-hover:text-[#E6C687] transition-colors">
                  Development Philosophy
                </h3>
                <p className="text-xs text-[#9E9A90] mb-6">
                  Bridging clean visual aesthetics with lightweight, lightning-fast architecture.
                </p>

                <ul className="space-y-3.5 text-xs text-[#CCC8BF]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Clean Code Over Bloat:</strong> Custom child themes and CSS rather than stacking 40 conflicting plugins.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Mobile-First Architecture:</strong> Crafted for touchscreens first, scaling up effortlessly to desktop.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Client Independence:</strong> Intuitive admin controls so you can update text and images with zero hassle.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span><strong>Performance First:</strong> Core Web Vitals optimization baked in before site launch.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#8F8B82]">Speed Benchmark</span>
                <span className="text-xs text-[#E6C687] font-medium">&lt; 1.5s Load Time</span>
              </div>
            </div>
          </AnimatedReveal>

          {/* Card 3: Global Reach & International Collaboration */}
          <AnimatedReveal animation="fade-up" delay={0.4} className="h-full">
            <div className="glass-panel p-8 rounded-2xl glass-panel-hover glass-shine flex flex-col justify-between h-full group hover:border-[#D4AF37]/40 transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Globe2 className="w-6 h-6 text-[#E6C687]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#FFF8EB] mb-2 group-hover:text-[#E6C687] transition-colors">
                  Global Collaboration
                </h3>
                <p className="text-xs text-[#9E9A90] mb-6">
                  Partnering with overseas founders, digital agencies, and enterprise clients.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#9E9A90] block text-[11px] uppercase tracking-wider mb-1">Languages</span>
                    <p className="text-[#EAE6DF] font-medium flex items-center gap-2">
                      <span>English</span>
                      <span className="text-white/20">/</span>
                      <span>Urdu</span>
                    </p>
                    <p className="text-[11px] text-[#8F8B82] mt-0.5">Fluent technical & written client communication</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#9E9A90] block text-[11px] uppercase tracking-wider mb-1">Timezone Flexibility</span>
                    <p className="text-[#EAE6DF] font-medium">Coordinated International Overlap</p>
                    <p className="text-[11px] text-[#8F8B82] mt-0.5">Smooth workflow across EU, UK, US, and Middle East hours</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#9E9A90] block text-[11px] uppercase tracking-wider mb-1">Location & Base</span>
                    <p className="text-[#EAE6DF] font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-[#8F8B82]">Current Status</span>
                <span className="text-xs text-emerald-400 font-medium">● Available for Projects</span>
              </div>
            </div>
          </AnimatedReveal>

        </div>

        {/* Action bar below cards with scale reveal */}
        <AnimatedReveal animation="scale-in" delay={0.45}>
          <div className="p-6 rounded-2xl bg-[#0D0F14] border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#FFF8EB]">Looking for a dedicated WordPress Specialist?</p>
                <p className="text-xs text-[#9E9A90]">Review the complete official curriculum vitae or initiate a project conversation.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenCvModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#EAE6DF] hover:text-[#FFF8EB] border border-white/15 hover:border-[#D4AF37]/50 rounded-lg bg-white/[0.02] hover:bg-[#D4AF37]/10 transition-all hover:scale-[1.02]"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Examine Full CV</span>
              </button>
              <button
                onClick={onContactClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all"
              >
                <span>Initiate Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
};
