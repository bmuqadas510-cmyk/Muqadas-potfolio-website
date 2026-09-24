import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Code, Languages, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#0F1117] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141822] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-[#D4AF37]">◈</span>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FFF8EB]">
              Official Verified Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#EAE6DF] hover:text-[#FFF8EB] border border-white/10 hover:border-[#D4AF37]/40 rounded-lg bg-white/5 transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A9A59C] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0D0F14] text-[#EAE6DF] print:bg-white print:text-black">
          
          {/* Top Title Banner */}
          <div className="border-b border-[#D4AF37]/25 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif-luxury font-extrabold tracking-wider text-[#FFF8EB] print:text-black">
                MUQADAS BIBI
              </h1>
              <p className="text-sm uppercase tracking-widest text-[#E6C687] font-semibold mt-1 print:text-amber-800">
                WordPress & Web Developer
              </p>
            </div>
            
            <div className="text-xs text-[#A9A59C] space-y-1 font-mono-code print:text-neutral-700">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+92 328 9186925</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>bmuqadas510@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pakistan</span>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>linkedin.com/in/muqadas55</span>
              </p>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3 flex items-center gap-2 print:text-amber-800">
              <span>PROFILE SUMMARY</span>
            </h2>
            <p className="text-sm text-[#CCC8BF] leading-relaxed print:text-neutral-800">
              I’m a Web Developer & WordPress Developer who helps businesses build modern, responsive, and professional websites that make a strong first impression. I focus on clean design, user-friendly experiences, and solutions that match each client’s goals. If you’re looking for someone to turn your website idea into reality, feel free to message me.
            </p>
          </div>

          {/* Two Columns: Left column (Experience) & Right column (Education, Skills, Languages) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Experience (col-span-8) */}
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-4 flex items-center gap-2 print:text-amber-800">
                <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                <span>WORK EXPERIENCE</span>
              </h2>

              {/* Job 1 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[#FFF8EB] print:text-black">Hyperformics Company</h3>
                    <p className="text-xs text-[#E6C687] font-medium print:text-amber-800">WordPress Developer</p>
                  </div>
                  <span className="text-xs font-mono-code text-[#A9A59C]">2023 – May 2026</span>
                </div>
                <ul className="space-y-2 text-xs text-[#CCC8BF] print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Developed, customized, and maintained WordPress websites for different client projects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Customized themes, plugins, pages, and website functionality according to project requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Optimized websites for speed, performance, responsiveness, and basic SEO.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Managed website updates, maintenance, backups, and plugin integrations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Worked closely with designers, clients, and development teams to deliver high-quality websites.</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[#FFF8EB] print:text-black">Codes Company</h3>
                    <p className="text-xs text-[#E6C687] font-medium print:text-amber-800">WordPress Developer</p>
                  </div>
                  <span className="text-xs font-mono-code text-[#A9A59C]">2018 – 2022</span>
                </div>
                <ul className="space-y-2 text-xs text-[#CCC8BF] print:text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Developed and maintained professional WordPress websites according to client requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Customized WordPress themes, plugins, layouts, and website features.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Created responsive and user-friendly website designs for desktop, tablet, and mobile.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Worked with HTML, CSS, PHP, and basic JavaScript for website customization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Troubleshot website errors, layout issues, and plugin conflicts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Managed WordPress updates, website content, and ongoing maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] mt-0.5">•</span>
                    <span>Collaborated with clients and team members to deliver projects on time.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Education, Skills, Languages (col-span-4) */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Education */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3 flex items-center gap-2 print:text-amber-800">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>EDUCATION</span>
                </h2>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-semibold text-[#FFF8EB] print:text-black">University of Sargodha</p>
                    <p className="text-[#E6C687]">Bachelor of Computer Science</p>
                    <p className="text-[#8F8B82] font-mono-code mt-1">2018 – 2021</p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-semibold text-[#FFF8EB] print:text-black">Anyrose College</p>
                    <p className="text-[#E6C687]">ICS (Computer Science)</p>
                    <p className="text-[#8F8B82] font-mono-code mt-1">2015 – 2017</p>
                  </div>
                </div>
              </div>

              {/* Skills from CV */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3 flex items-center gap-2 print:text-amber-800">
                  <Code className="w-4 h-4 text-[#D4AF37]" />
                  <span>VERIFIED SKILLS</span>
                </h2>
                <div className="flex flex-wrap gap-1.5 text-xs text-[#CCC8BF] leading-relaxed">
                  {[
                    'WordPress',
                    'Web Development',
                    'Frontend Development',
                    'HTML / CSS',
                    'JavaScript',
                    'Landing Page Design',
                    'Elementor',
                    'Basic SEO',
                    'Responsive Design',
                    'Bootstrap',
                    'Website Maintenance',
                  ].map((s, idx) => (
                    <span key={s} className="bg-white/[0.04] px-2.5 py-1 rounded border border-white/5 text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages from CV */}
              <div>
                <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-3 flex items-center gap-2 print:text-amber-800">
                  <Languages className="w-4 h-4 text-[#D4AF37]" />
                  <span>LANGUAGES</span>
                </h2>
                <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs space-y-1">
                  <p className="text-[#FFF8EB] font-medium">• English (Professional)</p>
                  <p className="text-[#FFF8EB] font-medium">• Urdu (Native)</p>
                </div>
              </div>

            </div>

          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
            <p className="text-xs text-[#8F8B82]">
              Direct contact: +92 328 9186925 · bmuqadas510@gmail.com
            </p>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] rounded-lg shadow"
            >
              Hire Muqadas For Your Project
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
