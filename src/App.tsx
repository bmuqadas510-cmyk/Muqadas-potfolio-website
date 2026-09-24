import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active section observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3800);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setInquiryMessage(`Hello Muqadas, I would like to inquire about your ${serviceTitle} service. Please let me know your availability for a kickoff consultation.`);
    scrollToContact();
  };

  const handleApplyEstimate = (details: { service: string; message: string }) => {
    setSelectedService(details.service);
    setInquiryMessage(details.message);
    scrollToContact();
    showToast('Calculated scope transferred to inquiry form.');
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#EAE6DF] font-sans antialiased selection:bg-[#D4AF37]/25 selection:text-[#FFF5DC] relative">
      
      {/* Luxury Custom Cursor (Desktop fine pointer) */}
      <CustomCursor />

      {/* Fixed Sticky Luxury Navigation Bar */}
      <Navbar
        onOpenCvModal={() => setCvModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onWorkClick={scrollToProjects}
          onContactClick={scrollToContact}
        />

        {/* About Me Section */}
        <About
          onOpenCvModal={() => setCvModalOpen(true)}
          onContactClick={scrollToContact}
        />

        {/* Experience Timeline */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Selected Projects Showcase */}
        <Projects onContactClick={scrollToContact} />

        {/* Why Work With Me */}
        <WhyWorkWithMe />

        {/* Interactive Scope & Timeline Estimator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* Contact Section */}
        <Contact
          initialService={selectedService}
          initialMessage={inquiryMessage}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Official Verified CV Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        onContactClick={() => {
          setCvModalOpen(false);
          scrollToContact();
        }}
      />

      {/* Toast Notification Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
