import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { AnimatedReveal } from './AnimatedReveal';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#090A0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <AnimatedReveal animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
              <span>Technical Capabilities</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#9E9A90]">Grounded in CV</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight mb-6">
              Mastery Across Modern Web & WordPress Architecture
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.25}>
            <p className="text-base sm:text-lg text-[#CCC8BF] leading-relaxed">
              Delivering robust solutions using industry-standard web engineering languages, modern responsive design systems, and deep WordPress customization.
            </p>
          </AnimatedReveal>
        </div>

        {/* Functional Interactive Category Selector */}
        <AnimatedReveal animation="fade-up" delay={0.3}>
          <div className="flex items-center gap-2 p-1.5 bg-[#12141A] rounded-xl border border-white/10 w-fit mb-12 overflow-x-auto max-w-full">
            {SKILL_CATEGORIES.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === index
                    ? 'bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] text-[#090A0C] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'text-[#A9A59C] hover:text-[#FFF8EB] hover:bg-white/[0.04]'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </AnimatedReveal>

        {/* Skills Grid with Animated Card Stagger and Live Percentage Width Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-panel p-6 sm:p-7 rounded-2xl glass-panel-hover glass-shine flex flex-col justify-between group hover:border-[#D4AF37]/45 hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.18)] transition-all duration-300"
              >
                <div>
                  {/* Header with Title and Unboxed Experience */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-serif-luxury font-bold text-[#FFF8EB] group-hover:text-[#E6C687] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono-code text-[#D4AF37] bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                      {skill.experience}
                    </span>
                  </div>

                  {/* Progress Bar Container with Smooth Spring Filling from 0 */}
                  <div className="w-full bg-[#181B22] h-1.5 rounded-full overflow-hidden mb-4 border border-white/5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + idx * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="bg-gradient-to-r from-[#C5A880] via-[#E6C687] to-[#D4AF37] h-full rounded-full shadow-[0_0_8px_#D4AF37]"
                    />
                  </div>

                  {/* Technical Details Description */}
                  <p className="text-xs text-[#CCC8BF] leading-relaxed mb-4">
                    {skill.details}
                  </p>
                </div>

                {/* Bottom Unboxed Metric */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8F8B82]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Production Grade</span>
                  </span>
                  <span className="font-mono-code text-[#EAE6DF] font-semibold">
                    {skill.level}% Proficiency
                  </span>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Holistic Tech Stack Cloud */}
        <AnimatedReveal animation="scale-in" delay={0.4}>
          <div className="mt-16 p-8 rounded-2xl bg-[#0D0F14] border border-[#D4AF37]/15 text-center shadow-xl">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
              Comprehensive Technical Repertoire
            </p>
            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#CCC8BF] max-w-4xl mx-auto">
              <span className="text-[#FFF8EB] font-medium">WordPress Core</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Elementor Pro</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">HTML5 Semantic</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">CSS3 Flex/Grid</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">JavaScript</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Bootstrap</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">PHP Customization</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Responsive Web Design</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Landing Page Design</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Basic SEO</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Website Maintenance</span>
              <span className="text-white/20">·</span>
              <span className="text-[#FFF8EB] font-medium">Speed Optimization</span>
            </div>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
};
