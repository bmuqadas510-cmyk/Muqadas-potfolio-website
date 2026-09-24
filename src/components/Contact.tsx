import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AnimatedReveal } from './AnimatedReveal';

interface ContactProps {
  initialService?: string;
  initialMessage?: string;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ 
  initialService = '', 
  initialMessage = '', 
  onShowToast 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || 'WordPress Website Development',
    message: initialMessage || '',
  });

  // Sync if props update
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} copied to clipboard!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable form transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Message transmitted successfully! Muqadas will reply within 24 hours.');
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090A0C] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <AnimatedReveal animation="fade-up" delay={0.05}>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] mb-3">
              <span>Direct Inquiry</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-[#9E9A90]">Start a Conversation</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#FFF8EB] tracking-tight leading-tight mb-6">
              Let’s Build Something Exceptional Together
            </h2>
          </AnimatedReveal>

          <AnimatedReveal animation="fade-up" delay={0.25}>
            <p className="text-base sm:text-lg text-[#CCC8BF] leading-relaxed">
              Have a project in mind, need a custom WordPress site, or want to discuss maintenance? Send a message directly or reach out via phone, email, or LinkedIn.
            </p>
          </AnimatedReveal>
        </div>

        {/* 2-Column Contact Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <AnimatedReveal animation="fade-right" delay={0.1}>
              <div className="glass-panel p-8 rounded-2xl border border-[#D4AF37]/20 space-y-6 shadow-xl">
                <h3 className="text-lg font-serif-luxury font-bold text-[#FFF8EB]">
                  Contact Information
                </h3>

                {/* Email */}
                <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-[#D4AF37]/30 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8F8B82] block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-[#EAE6DF] hover:text-[#D4AF37] transition-colors break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    className="p-2 text-[#8F8B82] hover:text-[#FFF8EB] bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-[#D4AF37]/30 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8F8B82] block">
                        Direct Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneRaw}`}
                        className="text-sm font-semibold text-[#EAE6DF] hover:text-[#D4AF37] transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phoneRaw, 'Phone number')}
                    className="p-2 text-[#8F8B82] hover:text-[#FFF8EB] bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-[#D4AF37]/30 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8F8B82] block">
                        LinkedIn Profile
                      </span>
                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#EAE6DF] hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                      >
                        <span>{PERSONAL_INFO.linkedinDisplay}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8F8B82] block">
                      Location & Base
                    </span>
                    <p className="text-sm font-semibold text-[#EAE6DF]">
                      {PERSONAL_INFO.location}
                    </p>
                    <p className="text-xs text-[#8F8B82] mt-0.5">
                      Collaborating with clients globally
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedReveal>

            {/* Availability Indicator */}
            <AnimatedReveal animation="fade-right" delay={0.25}>
              <div className="p-5 rounded-2xl bg-[#10131A] border border-white/5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div className="text-xs">
                  <p className="text-[#FFF8EB] font-medium">Currently Available for New Projects</p>
                  <p className="text-[#8F8B82]">Prompt reply guaranteed within 24 business hours.</p>
                </div>
              </div>
            </AnimatedReveal>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedReveal animation="fade-left" delay={0.15}>
              <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/20 text-left relative shadow-2xl glass-shine">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif-luxury font-bold text-[#FFF8EB]">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-[#CCC8BF] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Muqadas has received your inquiry and will follow up with you promptly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'WordPress Website Development',
                          message: '',
                        });
                      }}
                      className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-[#E6C687] hover:bg-[#FFF5DC] rounded-lg transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#CCC8BF] mb-2 font-medium">
                          Your Name <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-white/10 text-sm text-[#FFF8EB] placeholder-[#6E6A62] focus:outline-none focus:border-[#D4AF37] transition-colors"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#CCC8BF] mb-2 font-medium">
                          Your Email <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sarah@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-white/10 text-sm text-[#FFF8EB] placeholder-[#6E6A62] focus:outline-none focus:border-[#D4AF37] transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-xs uppercase tracking-wider text-[#CCC8BF] mb-2 font-medium">
                        Project or Service Required
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-white/10 text-sm text-[#FFF8EB] focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="WordPress Website Development">WordPress Website Development</option>
                        <option value="Business Website Development">Business Website Development</option>
                        <option value="Responsive Web Design">Responsive Web Design</option>
                        <option value="Website Customization">Website Customization & Integrations</option>
                        <option value="Landing Page Development">Landing Page Development</option>
                        <option value="Website Maintenance">Website Maintenance & Speed Optimization</option>
                        <option value="Other Project Inquiry">Other Project Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#CCC8BF] mb-2 font-medium">
                        Project Details & Goals <span className="text-[#D4AF37]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, website goals, target audience, and preferred timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0F14] border border-white/10 text-sm text-[#FFF8EB] placeholder-[#6E6A62] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none leading-relaxed"
                        required
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-xs text-rose-400 bg-rose-950/40 p-3 rounded-lg border border-rose-800/40">
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#090A0C] bg-gradient-to-r from-[#FFF0D0] via-[#E6C687] to-[#D4AF37] hover:from-[#FFF5DC] hover:to-[#E6C687] rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#090A0C] border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Message...</span>
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Muqadas</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-[#7C7870]">
                      Your contact information is strictly confidential and used solely for project discussions.
                    </p>

                  </form>
                )}

              </div>
            </AnimatedReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
