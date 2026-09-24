import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedReveal } from './AnimatedReveal';

interface ProjectEstimatorProps {
  onApplyEstimate: (details: { service: string; message: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [projectType, setProjectType] = useState<'wordpress' | 'corporate' | 'ecommerce' | 'landing' | 'speed'>('wordpress');
  const [pageScope, setPageScope] = useState<'1-3' | '4-7' | '8-15' | '15+'>('4-7');
  const [features, setFeatures] = useState<string[]>(['speed', 'responsive']);

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Estimate turnaround calculation
  const getTurnaround = () => {
    let baseDays = 10;
    if (projectType === 'landing') baseDays = 5;
    if (projectType === 'corporate') baseDays = 14;
    if (projectType === 'ecommerce') baseDays = 21;
    if (projectType === 'speed') baseDays = 4;

    if (pageScope === '1-3') baseDays = Math.max(4, baseDays - 3);
    if (pageScope === '8-15') baseDays += 5;
    if (pageScope === '15+') baseDays += 10;

    return `${baseDays} – ${baseDays + 5} Business Days`;
  };

  const handleApply = () => {
    const typeLabel = {
      wordpress: 'Custom WordPress Website Build',
      corporate: 'Business Corporate Website',
      ecommerce: 'WooCommerce E-Commerce Store',
      landing: 'High-Conversion Landing Page',
      speed: 'Website Speed & Maintenance Tuning',
    }[projectType];

    const featureNames = features.map((f) => {
      if (f === 'speed') return 'Speed & Core Web Vitals Optimization';
      if (f === 'responsive') return 'Mobile & Tablet Fluid Adaptations';
      if (f === 'seo') return 'Basic SEO Structure';
      if (f === 'ecommerce') return 'Payment Gateway & Checkout';
      if (f === 'custom_fields') return 'Custom Post Types / Fields';
      return f;
    }).join(', ');

    const prefilledMessage = `Hello Muqadas, I would like to inquire about a ${typeLabel}. 
Scope: Approximately ${pageScope} pages.
Desired Key Features: ${featureNames}.
Target Timeline: ${getTurnaround()}.
Looking forward to discussing the project specifications.`;

    onApplyEstimate({
      service: typeLabel,
      message: prefilledMessage,
    });
  };

  return (
    <section className="relative py-20 bg-[#090A0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimatedReveal animation="scale-in" delay={0.1}>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden glass-shine">
            
            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left: Interactive Controls */}
              <div className="lg:col-span-8 text-left">
                <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Scope Planner</span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span className="text-[#9E9A90]">Project Estimator</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#FFF8EB] mb-6">
                  Configure Your Project Requirements
                </h3>

                {/* Step 1: Project Type */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-[#A9A59C] mb-3">
                    1. Select Project Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'wordpress', label: 'WordPress Custom' },
                      { id: 'corporate', label: 'Business / Corporate' },
                      { id: 'ecommerce', label: 'WooCommerce Store' },
                      { id: 'landing', label: 'Landing Page' },
                      { id: 'speed', label: 'Speed & Maintenance' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setProjectType(item.id as any)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all duration-300 cursor-pointer ${
                          projectType === item.id
                            ? 'bg-[#212631] text-[#FFF6E5] border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                            : 'bg-[#12151B] text-[#9E9A90] border-white/5 hover:border-white/20'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Page Scope */}
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-[#A9A59C] mb-3">
                    2. Approximate Page Volume
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {(['1-3', '4-7', '8-15', '15+'] as const).map((scope) => (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => setPageScope(scope)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all duration-300 cursor-pointer ${
                          pageScope === scope
                            ? 'bg-[#212631] text-[#FFF6E5] border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                            : 'bg-[#12151B] text-[#9E9A90] border-white/5 hover:border-white/20'
                        }`}
                      >
                        {scope} Pages
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Key Features Checklist */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A9A59C] mb-3">
                    3. Key Architectural Requirements
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'responsive', label: 'Mobile-First Responsive Testing' },
                      { id: 'speed', label: 'Speed & Core Web Vitals Optimization' },
                      { id: 'seo', label: 'Basic SEO & Metadata Setup' },
                      { id: 'custom_fields', label: 'Custom Post Types / Fields' },
                    ].map((feat) => {
                      const isSelected = features.includes(feat.id);
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => toggleFeature(feat.id)}
                          className={`px-3 py-2 text-xs font-medium rounded-lg border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-[#212631] text-[#FFF6E5] border-[#D4AF37]/80 shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                              : 'bg-[#12151B] text-[#9E9A90] border-white/5 hover:border-white/20'
                          }`}
                        >
                          <span>{feat.label}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right: Instant Estimate Card */}
              <div className="lg:col-span-4 bg-[#12151C] p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/35 flex flex-col justify-between h-full text-left shadow-xl">
                <div>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Estimated Schedule</span>
                  </div>

                  <div className="py-4 border-b border-white/10">
                    <motion.p
                      key={getTurnaround()}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#FFF8EB]"
                    >
                      {getTurnaround()}
                    </motion.p>
                    <p className="text-xs text-[#8F8B82] mt-1">
                      Based on agile sprints with client milestone reviews.
                    </p>
                  </div>

                  <div className="py-4 space-y-2 text-xs text-[#CCC8BF]">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Includes design to WordPress conversion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Cross-browser & mobile testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>30 days post-launch support guarantee</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={handleApply}
                    className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] hover:from-[#FFF5DC] hover:to-[#E6C687] rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply Scope to Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
