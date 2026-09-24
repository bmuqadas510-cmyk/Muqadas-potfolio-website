import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080A] border-t border-[#D4AF37]/15 py-14 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand lockup */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#D4AF37] font-semibold text-lg">◈</span>
              <span className="text-xl font-serif-luxury font-bold tracking-wider text-[#FFF8EB]">
                Muqadas — WordPress & Web Developer
              </span>
            </div>
            <p className="text-xs text-[#8F8B82] max-w-md leading-relaxed">
              Crafting bespoke, responsive, and performance-tuned WordPress websites for forward-thinking international clients and agencies.
            </p>
          </div>

          {/* Social and Communication Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-[#A9A59C] hover:text-[#FFF8EB] transition-colors"
              title="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-[#A9A59C] hover:text-[#FFF8EB] transition-colors"
              title="Call or WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-[#A9A59C] hover:text-[#FFF8EB] transition-colors"
              title="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37]/30 border border-[#D4AF37]/40 text-[#FFF8EB] transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F6B62]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Muqadas Bibi. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Based in {PERSONAL_INFO.location}</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenCvModal}
              className="text-[#A9A59C] hover:text-[#D4AF37] transition-colors"
            >
              Curriculum Vitae
            </button>
            <span aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9A59C] hover:text-[#D4AF37] transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
