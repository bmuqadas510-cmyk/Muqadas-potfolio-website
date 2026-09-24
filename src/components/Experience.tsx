import React, { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Trophy } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { AnimatedReveal } from './AnimatedReveal';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Progressive illumination of timeline line as user scrolls through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="experience" ref={containerRef} className="relative py-24 sm:py-32 bg-[#090A0C] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <AnimatedReveal animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
              <span>Career Progression</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#9E9A90]">Verified Experience</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight mb-6">
              Proven Track Record in WordPress & Web Engineering
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.25}>
            <p className="text-base sm:text-lg text-[#CCC8BF] leading-relaxed">
              Hands-on technical roles delivering complex client portals, custom theme architectures, performance turnarounds, and cross-functional web deployments.
            </p>
          </AnimatedReveal>
        </div>

        {/* Modern Vertical Timeline with Progressive Illumination Line */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 space-y-12">
          
          {/* Base background timeline track */}
          <div className="absolute left-0 sm:left-4 md:left-5 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Progressively illuminating gold glowing timeline bar */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-0 sm:left-4 md:left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] shadow-[0_0_12px_#D4AF37] z-10"
          />

          {EXPERIENCE_DATA.map((exp, index) => (
            <AnimatedReveal
              key={exp.company}
              animation="fade-up"
              delay={0.15 + index * 0.2}
              className="relative group [perspective:1000px]"
            >
              <div className="relative">
                
                {/* Timeline Marker Node with pulse glow */}
                <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#090A0C] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20 transition-all duration-300 group-hover:scale-125 group-hover:border-[#FFF0D0]">
                  <span className="w-2 h-2 rounded-full bg-[#E6C687] group-hover:bg-[#FFF0D0] transition-colors" />
                </div>

                {/* Main Card with 3D tilt and soft luxury glow */}
                <motion.div
                  whileHover={{
                    y: -4,
                    rotateX: 1.5,
                    rotateY: -1,
                    transition: { duration: 0.35, ease: 'easeOut' },
                  }}
                  className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/45 group-hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] transition-all duration-500 glass-shine"
                >
                  
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[#D4AF37] mb-1">
                        <span className="font-semibold tracking-wider uppercase">{exp.company}</span>
                        {exp.isCurrent && (
                          <>
                            <span aria-hidden="true" className="text-white/20">·</span>
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              Recent / Active
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#FFF8EB] group-hover:text-[#E6C687] transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Metadata with separate subtle fade */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A9A59C]">
                      <div className="flex items-center gap-1.5 font-mono-code text-[#E6C687] bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{exp.period}</span>
                      </div>
                      <span aria-hidden="true" className="text-white/20">·</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Brief Role Context */}
                  <p className="py-4 text-sm text-[#CCC8BF] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Two-Column Detail */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                    
                    {/* Responsibilities */}
                    <div className="lg:col-span-7">
                      <h4 className="text-xs uppercase tracking-wider text-[#9E9A90] font-semibold mb-3 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Core Responsibilities</span>
                      </h4>
                      <ul className="space-y-2.5 text-xs text-[#CCC8BF]">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div className="lg:col-span-5 bg-white/[0.02] p-4 sm:p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-[#E6C687] font-semibold mb-3 flex items-center gap-1.5">
                          <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#CCC8BF]">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#D4AF37] font-bold">›</span>
                              <span className="leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies unboxed list */}
                      <div className="mt-4 pt-3 border-t border-white/5">
                        <p className="text-[11px] text-[#8F8B82] uppercase tracking-wider mb-2">Technologies Utilized</p>
                        <div className="text-xs text-[#A9A59C]">
                          {exp.technologies.map((tech, idx) => (
                            <React.Fragment key={tech}>
                              <span className="text-[#EAE6DF] hover:text-[#D4AF37] transition-colors">{tech}</span>
                              {idx < exp.technologies.length - 1 && (
                                <span className="mx-1.5 text-white/20">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                </motion.div>
              </div>
            </AnimatedReveal>
          ))}

        </div>

      </div>
    </section>
  );
};
