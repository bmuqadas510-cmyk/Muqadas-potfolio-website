import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { AnimatedReveal } from './AnimatedReveal';

interface ProjectsProps {
  onContactClick: () => void;
}

// Interactive 3D Card with cursor tracking and image zoom
const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
}> = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group glass-panel rounded-2xl overflow-hidden flex flex-col cursor-pointer border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_60px_-15px_rgba(212,175,55,0.22)] transition-shadow duration-500 glass-shine"
    >
      {/* Media Container with Image Zoom and Overlay Transition */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0F14]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay transition on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1015] via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />

        {/* Quick overlay trigger */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-[#0E1015]/90 border border-[#D4AF37]/60 text-xs font-semibold text-[#FFF8EB] flex items-center gap-2 shadow-2xl backdrop-blur-md"
          >
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>View Case Study & Preview</span>
          </motion.span>
        </div>

        {/* Top Corner Metadata */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#D4AF37] bg-[#090A0C]/85 px-2.5 py-1 rounded backdrop-blur-md border border-white/10 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Box */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
        <div>
          <p className="text-xs text-[#8F8B82] uppercase tracking-wider mb-1">
            {project.client} · {project.year}
          </p>
          
          {/* Project Title Reveal */}
          <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#FFF8EB] group-hover:text-[#E6C687] transition-colors duration-300 mb-3">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A9A59C] leading-relaxed mb-6 group-hover:text-[#CCC8BF] transition-colors">
            {project.description}
          </p>
        </div>

        <div>
          {/* Technology tags with subtle fade & dot separators */}
          <div className="text-xs text-[#7F7B72] pb-6 mb-6 border-b border-white/5 flex flex-wrap items-center">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-[#CCC8BF] group-hover:text-[#FFF8EB] transition-colors duration-300">
                  {tech}
                </span>
                {idx < project.technologies.length - 1 && (
                  <span className="mx-1.5 text-white/20">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Card Action Button with upward slide animation */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#8F8B82] font-mono-code">
              Duration: {project.duration}
            </span>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E6C687] group-hover:text-[#FFF8EB] transition-colors">
              <span className="relative">
                View Project
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E6C687] group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onContactClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'WordPress', 'WooCommerce', 'Corporate', 'Landing Page'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#090A0C] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <AnimatedReveal animation="fade-up" delay={0.05}>
              <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
                <span>Curated Portfolio</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-[#9E9A90]">Featured Works</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal animation="fade-up" delay={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight">
                Selected WordPress & Web Engineering Projects
              </h2>
            </AnimatedReveal>
          </div>

          {/* Interactive Category Filter Tabs */}
          <AnimatedReveal animation="fade-left" delay={0.2}>
            <div className="flex items-center gap-1.5 p-1.5 bg-[#12151C] rounded-xl border border-white/10 overflow-x-auto shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] text-[#090A0C] shadow-md'
                      : 'text-[#9E9A90] hover:text-[#EAE6DF] hover:bg-white/[0.04]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        {/* Modern 2-Column Luxury Grid with 3D Tilt and Card Stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <AnimatedReveal
              key={project.id}
              animation="fade-up"
              delay={0.1 + idx * 0.15}
              className="[perspective:1000px]"
            >
              <ProjectCard
                project={project}
                onClick={() => setActiveModalProject(project)}
              />
            </AnimatedReveal>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onContactClick={onContactClick}
        />
      )}
    </section>
  );
};
