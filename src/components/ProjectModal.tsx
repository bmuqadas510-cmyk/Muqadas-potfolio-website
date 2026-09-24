import React, { useState } from 'react';
import { X, ExternalLink, Check, ShieldCheck, Laptop, Tablet, Smartphone, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-5xl bg-[#0E1015] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12151C] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[#D4AF37] text-sm">◈</span>
            <div>
              <p className="text-xs text-[#8F8B82] uppercase tracking-wider">Case Study Showcase</p>
              <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-[#FFF8EB]">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport simulation toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-[#1A1D24] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`p-1.5 rounded transition-colors ${
                  deviceView === 'desktop' ? 'bg-[#2B303C] text-[#E6C687]' : 'text-[#8F8B82] hover:text-[#CCC8BF]'
                }`}
                title="Desktop Viewport"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('tablet')}
                className={`p-1.5 rounded transition-colors ${
                  deviceView === 'tablet' ? 'bg-[#2B303C] text-[#E6C687]' : 'text-[#8F8B82] hover:text-[#CCC8BF]'
                }`}
                title="Tablet Viewport"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`p-1.5 rounded transition-colors ${
                  deviceView === 'mobile' ? 'bg-[#2B303C] text-[#E6C687]' : 'text-[#8F8B82] hover:text-[#CCC8BF]'
                }`}
                title="Mobile Viewport"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#CCC8BF] hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Simulated Viewport Stage */}
          <div className="w-full bg-[#08090C] rounded-xl p-4 sm:p-6 border border-white/5 flex items-center justify-center min-h-[260px] sm:min-h-[380px]">
            <div
              className={`transition-all duration-500 rounded-lg overflow-hidden border border-white/10 shadow-2xl relative ${
                deviceView === 'desktop'
                  ? 'w-full max-w-4xl aspect-[16/9]'
                  : deviceView === 'tablet'
                  ? 'w-3/4 max-w-lg aspect-[4/3]'
                  : 'w-1/2 max-w-xs aspect-[9/16]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                <span className="text-[10px] uppercase font-mono-code text-[#D4AF37] block">
                  {project.category} · Client: {project.client}
                </span>
                <p className="text-xs text-white/90 font-medium truncate">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            {/* Left Col: Executive Summary & Challenge/Solution */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-[#CCC8BF] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-xs font-semibold text-[#E6C687] uppercase tracking-wider mb-2">
                    The Challenge
                  </p>
                  <p className="text-xs text-[#A9A59C] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-xs font-semibold text-[#E6C687] uppercase tracking-wider mb-2">
                    Architectural Solution
                  </p>
                  <p className="text-xs text-[#A9A59C] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9E9A90] mb-3">
                  Delivered Outputs & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CCC8BF]">
                  {project.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Metadata, Results & Action */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Project Meta Card */}
              <div className="p-5 rounded-xl bg-[#12151C] border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                  <span className="text-[#8F8B82]">Client</span>
                  <span className="font-semibold text-[#EAE6DF]">{project.client}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                  <span className="text-[#8F8B82]">Timeline</span>
                  <span className="font-mono-code text-[#C5A880]">{project.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                  <span className="text-[#8F8B82]">Category</span>
                  <span className="text-[#D4AF37]">{project.category}</span>
                </div>
                <div>
                  <span className="text-xs text-[#8F8B82] block mb-2">Technologies</span>
                  <div className="text-xs text-[#CCC8BF]">
                    {project.technologies.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span className="text-[#EAE6DF]">{t}</span>
                        {idx < project.technologies.length - 1 && <span className="mx-1.5 text-white/20">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantified Metrics (Section 1.H Claim-to-Proof Adjacency) */}
              <div className="p-5 rounded-xl bg-[#12151C] border border-[#D4AF37]/20">
                <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-3">
                  Measured Impact
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {project.results.map((res, i) => (
                    <div key={i} className="p-2 rounded bg-black/30">
                      <p className="text-base font-serif-luxury font-bold text-[#FFF8EB]">{res.value}</p>
                      <p className="text-[10px] text-[#8F8B82] leading-tight mt-0.5">{res.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] hover:from-[#FFF5DC] hover:to-[#E6C687] rounded-xl shadow-lg transition-all"
              >
                Discuss Similar Project
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
