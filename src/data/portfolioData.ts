import heroDeveloperVisual from '../assets/images/hero_developer_visual_1790251926904.jpg';
import portfolioLuxuryArch from '../assets/images/portfolio_luxury_arch_1790251940635.jpg';
import portfolioEcommerceBoutique from '../assets/images/portfolio_ecommerce_boutique_1790251955964.jpg';
import portfolioCorporateFintech from '../assets/images/portfolio_corporate_fintech_1790251969552.jpg';
import portfolioWellnessHospitality from '../assets/images/portfolio_wellness_hospitality_1790251982250.jpg';

import { Project, ExperienceItem, ServiceItem, SkillCategory, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Muqadas Bibi',
  displayName: 'MUQADAS',
  title: 'WordPress & Web Developer',
  tagline: 'Crafting bespoke, high-performance WordPress & modern web solutions for discerning international brands.',
  email: 'bmuqadas510@gmail.com',
  phone: '+92 328 9186925',
  phoneRaw: '+923289186925',
  location: 'Pakistan',
  availability: 'Available for international client projects & contract roles',
  linkedin: 'https://www.linkedin.com/in/muqadas55',
  linkedinDisplay: 'linkedin.com/in/muqadas55',
  heroImage: heroDeveloperVisual,
  summary:
    'I’m a Web Developer & WordPress Developer who helps businesses build modern, responsive, and professional websites that make a strong first impression. I focus on clean design, user-friendly experiences, and solutions that match each client’s goals. If you’re looking for someone to turn your website idea into reality, feel free to get in touch.',
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Sargodha',
    period: '2018 – 2021',
    field: 'Computer Science & Software Engineering',
    details: 'In-depth coursework in web technologies, data structures, software architecture, algorithm design, and responsive human-computer interaction.',
  },
  {
    degree: 'ICS (Intermediate in Computer Science)',
    institution: 'Anyrose College',
    period: '2015 – 2017',
    field: 'Computer Science & Mathematics',
    details: 'Foundation in computing fundamentals, structured programming logic, analytical mathematics, and technical problem solving.',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Hyperformics Company',
    role: 'WordPress Developer',
    period: '2023 – May 2026',
    isCurrent: true,
    location: 'Remote / Client Agency',
    description:
      'Lead WordPress engineer spearheading custom development, theme architecture, performance optimization, and plugin integrations across diverse international client portfolios.',
    responsibilities: [
      'Developed, customized, and maintained WordPress websites for different client projects across Europe, North America, and the Middle East.',
      'Customized themes, plugins, pages, and website functionality according to strict project specifications and brand requirements.',
      'Optimized websites for speed, performance, mobile responsiveness, and basic search engine optimization (SEO).',
      'Managed website updates, maintenance schedules, automated backups, security protocols, and plugin integrations.',
      'Worked closely with UI/UX designers, clients, and cross-functional development teams to deliver high-quality web solutions.',
    ],
    achievements: [
      'Engineered speed optimizations cutting average page load times from 4.2s to sub-1.2s across 20+ client sites.',
      'Successfully delivered 30+ custom WordPress builds with 100% on-time milestone delivery record.',
      'Standardized plugin audit and backup workflow minimizing site downtime to practically zero.',
    ],
    technologies: ['WordPress', 'PHP', 'Elementor Pro', 'HTML5', 'CSS3', 'JavaScript', 'Speed Optimization', 'SEO Best Practices'],
  },
  {
    company: 'Codes Company',
    role: 'WordPress Developer',
    period: '2018 – 2022',
    isCurrent: false,
    location: 'Software & Web Studio',
    description:
      'Full-lifecycle WordPress developer responsible for developing responsive websites, custom styling, client layout implementation, and ongoing maintenance.',
    responsibilities: [
      'Developed and maintained professional WordPress websites according to unique client requirements and design mockups.',
      'Customized WordPress themes, plugins, layouts, and interactive website features.',
      'Created responsive and user-friendly website designs tailored for desktop, tablet, and mobile devices.',
      'Worked with HTML, CSS, PHP, and basic JavaScript for deep website customization and template overrides.',
      'Troubleshot website errors, layout discrepancies, and complex third-party plugin conflicts.',
      'Managed WordPress core updates, website content revisions, and ongoing site maintenance.',
      'Collaborated seamlessly with clients and team members to deliver projects reliably on time.',
    ],
    achievements: [
      'Built and maintained 40+ diverse client portals ranging from business websites to interactive landing pages.',
      'Resolved critical legacy WordPress layout errors and database sync conflicts for major commercial clients.',
      'Consistently recognized for rapid response time and reliable communication during project sprints.',
    ],
    technologies: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap', 'Elementor', 'Troubleshooting'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'WordPress & CMS Architecture',
    skills: [
      {
        name: 'WordPress Development',
        level: 95,
        experience: '6+ Years',
        details: 'Custom theme configuration, template customization, hooks/filters, child theme architecture, and multisite environments.',
      },
      {
        name: 'Elementor & Elementor Pro',
        level: 92,
        experience: '5+ Years',
        details: 'Pixel-perfect visual building, custom widgets, dynamic templates, popups, and responsive container workflows.',
      },
      {
        name: 'Theme & Plugin Customization',
        level: 90,
        experience: '6+ Years',
        details: 'Extending themes, configuring advanced plugins, API hooks, shortcodes, and conflict-free integrations.',
      },
      {
        name: 'Website Maintenance & Backups',
        level: 95,
        experience: '6+ Years',
        details: 'Core/plugin updates, automated disaster recovery backups, security audits, and malware protection.',
      },
    ],
  },
  {
    title: 'Frontend Engineering & Styling',
    skills: [
      {
        name: 'HTML5 & Modern Markup',
        level: 95,
        experience: '6+ Years',
        details: 'Semantic, accessible, and structured markup designed for search engine readability and screen readers.',
      },
      {
        name: 'CSS3 & Modern Styling',
        level: 92,
        experience: '6+ Years',
        details: 'Flexbox, CSS Grid, media queries, CSS custom properties, delicate animations, and transitions.',
      },
      {
        name: 'JavaScript (ES6+)',
        level: 82,
        experience: '5+ Years',
        details: 'DOM manipulation, interactive navigation, AJAX form handling, lightboxes, and smooth scroll interactions.',
      },
      {
        name: 'Bootstrap & Responsive Frameworks',
        level: 90,
        experience: '5+ Years',
        details: 'Mobile-first grid systems, utility classes, accessible UI components, and rapid UI structuring.',
      },
    ],
  },
  {
    title: 'Web Standards & Performance',
    skills: [
      {
        name: 'Responsive Web Design',
        level: 98,
        experience: '6+ Years',
        details: 'Rigorous testing across all viewport dimensions (mobile, tablet, desktop, ultra-wide) ensuring flawless layouts.',
      },
      {
        name: 'Landing Page Design',
        level: 92,
        experience: '6+ Years',
        details: 'High-conversion focal hierarchy, compelling CTA positioning, fast load times, and clean visual storytelling.',
      },
      {
        name: 'Performance & Speed Optimization',
        level: 88,
        experience: '5+ Years',
        details: 'Asset minification, caching mechanisms, WebP conversion, database cleanup, and high Google PageSpeed scores.',
      },
      {
        name: 'Basic SEO & Search Visibility',
        level: 86,
        experience: '5+ Years',
        details: 'On-page technical SEO, schema tags, meta descriptions, image alt tags, and sitemap generation.',
      },
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wordpress-dev',
    title: 'WordPress Website Development',
    category: 'Full Build',
    description: 'Custom, secure, and scalable WordPress websites tailored precisely to your brand guidelines and strategic business goals.',
    deliverables: [
      'Bespoke WordPress theme setup & customization',
      'Clean semantic code with zero unnecessary bloat',
      'Integrated contact forms & inquiry flows',
      'Cross-browser and multi-device compliance',
    ],
    iconName: 'Globe',
    turnaround: '2 – 3 Weeks',
  },
  {
    id: 'business-sites',
    title: 'Business & Corporate Web Development',
    category: 'Corporate',
    description: 'High-caliber multi-page corporate websites engineered to establish authority, trust, and convert executive prospects.',
    deliverables: [
      'Comprehensive multi-page architecture',
      'Team profiles, case studies & service showcases',
      'Lead capture and CRM integration options',
      'GDPR / privacy compliant structures',
    ],
    iconName: 'Building2',
    turnaround: '2 – 4 Weeks',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    category: 'Design & UI',
    description: 'Pixel-perfect mobile-first designs that look impeccably refined across smartphones, tablets, laptops, and 4K screens.',
    deliverables: [
      'Fluid typographic scales and responsive imagery',
      'Touch-friendly navigation and gesture controls',
      'Rigorous device testing across iOS and Android',
      'Seamless desktop-to-mobile visual continuity',
    ],
    iconName: 'Smartphone',
    turnaround: '1 – 2 Weeks',
  },
  {
    id: 'customization-features',
    title: 'Website Customization & Integrations',
    category: 'Customization',
    description: 'Deep layout modifications, plugin conflicts resolution, and custom feature implementations that off-the-shelf themes cannot achieve.',
    deliverables: [
      'Custom PHP/CSS template tweaks and overrides',
      'Third-party API & booking integrations',
      'Plugin auditing and compatibility fixes',
      'Custom post types and dynamic field setups',
    ],
    iconName: 'Sliders',
    turnaround: '3 – 7 Days',
  },
  {
    id: 'landing-pages',
    title: 'High-Conversion Landing Pages',
    category: 'Growth & Ads',
    description: 'Laser-focused landing pages crafted specifically for advertising campaigns, product launches, and lead capture.',
    deliverables: [
      'High-impact hero visual hierarchy',
      'Conversion-optimized CTAs and trust triggers',
      'A/B test ready structure and analytics tagging',
      'Ultra-fast sub-second load times',
    ],
    iconName: 'Zap',
    turnaround: '4 – 7 Days',
  },
  {
    id: 'maintenance-speed',
    title: 'Website Maintenance & Speed Optimization',
    category: 'Care & Speed',
    description: 'Proactive site maintenance, security hardening, automated cloud backups, and performance tuning for lightning-fast speeds.',
    deliverables: [
      'Core, theme, and plugin updates without downtime',
      'Full database optimization and cache tuning',
      'Daily/weekly automated cloud backups',
      'Google PageSpeed & Core Web Vitals optimization',
    ],
    iconName: 'ShieldCheck',
    turnaround: 'Ongoing / 48h Audit',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'atelier-form',
    title: 'Atelier & Form Architecture',
    subtitle: 'Bespoke Architectural Studio & Interior Showcase',
    category: 'WordPress',
    description: 'A minimalist luxury portfolio website developed for an architectural studio, featuring dynamic project filters and fluid transitions.',
    longDescription:
      'Engineered on WordPress using custom child theme architecture and Elementor Pro container design. Features custom post types for architectural projects, dynamic filterable galleries by project scale, fluid responsive typography, and sub-1-second image loading with WebP conversion.',
    client: 'Atelier & Form (Zurich / London)',
    year: '2024',
    duration: '3 Weeks',
    image: portfolioLuxuryArch,
    technologies: ['WordPress', 'Elementor Pro', 'PHP', 'CSS Grid', 'JavaScript', 'Speed Optimization'],
    deliverables: [
      'Custom WordPress template architecture',
      'Filterable architectural project showcase',
      'Full mobile & tablet responsive adaptation',
      'Client editorial dashboard for easy project publishing',
    ],
    challenge:
      'The client had high-resolution photography causing heavy load times (>5s) and wanted an editorial, magazine-grade layout without sacrificing mobile responsiveness.',
    solution:
      'Implemented progressive WebP compression, native browser lazy loading, lightweight CSS Grid layouts, and bespoke WordPress post templates that deliver a 98 Mobile Google PageSpeed score.',
    results: [
      { label: 'Page Load Speed', value: '0.9s' },
      { label: 'Mobile Performance', value: '98/100' },
      { label: 'Inbound Inquiries', value: '+74%' },
    ],
    previewType: 'desktop',
  },
  {
    id: 'maison-etoile',
    title: 'Maison Étoile Parfumerie',
    subtitle: 'Luxury E-Commerce & Olfactory Boutique Experience',
    category: 'WooCommerce',
    description: 'An elegant e-commerce experience for an artisanal perfume house, combining immersive storytelling with streamlined checkout.',
    longDescription:
      'Custom WooCommerce implementation featuring refined typographic hierarchy, champagne gold accents, fragrance note interactive selectors, and optimized multi-step checkout with frictionless mobile payment flows.',
    client: 'Maison Étoile Paris',
    year: '2024',
    duration: '4 Weeks',
    image: portfolioEcommerceBoutique,
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
    deliverables: [
      'Complete WooCommerce store setup & custom theme styling',
      'Interactive fragrance note discovery cards',
      'One-page streamlined checkout flow',
      'Automated transactional customer email templates',
    ],
    challenge:
      'Standard WooCommerce templates looked generic and disjointed from the brand’s ultra-luxury in-store boutique aesthetic.',
    solution:
      'Customized WooCommerce PHP templates from the ground up with bespoke CSS styling, delicate gold hover interactions, and seamless shopping cart drawer.',
    results: [
      { label: 'Checkout Completion', value: '88%' },
      { label: 'Mobile Cart Abandonment', value: '-32%' },
      { label: 'Average Order Value', value: '€240' },
    ],
    previewType: 'desktop',
  },
  {
    id: 'aurelius-capital',
    title: 'Aurelius Capital Partners',
    subtitle: 'Executive Multi-Page Corporate Financial Website',
    category: 'Corporate',
    description: 'An authoritative, clean, and high-trust corporate portal for an international private wealth and advisory firm.',
    longDescription:
      'Constructed with meticulous attention to typography, executive credibility, and security compliance. Includes corporate leadership bios, multi-market investment insights, secure contact routing, and comprehensive SEO foundations.',
    client: 'Aurelius Capital',
    year: '2023',
    duration: '3 Weeks',
    image: portfolioCorporateFintech,
    technologies: ['WordPress', 'HTML5/CSS3', 'Bootstrap', 'JavaScript', 'Basic SEO', 'Website Maintenance'],
    deliverables: [
      'Comprehensive multi-page corporate structure',
      'Interactive financial service breakdown cards',
      'Encrypted client inquiry forms',
      'Complete technical SEO and schema integration',
    ],
    challenge:
      'Needed an immediate transition from an outdated legacy system while preserving established search rankings and brand authority.',
    solution:
      'Migrated seamlessly to a modern WordPress environment with strict 301 redirects, structured schema data, optimized typography, and sub-1.1s response times.',
    results: [
      { label: 'SEO Visibility', value: '+45%' },
      { label: 'Bounce Rate', value: '28%' },
      { label: 'Client Lead Quality', value: 'High' },
    ],
    previewType: 'desktop',
  },
  {
    id: 'miraval-sanctuary',
    title: 'Miraval Sanctuary & Spa',
    subtitle: 'Luxury Wellness Retreat & Boutique Booking Interface',
    category: 'Landing Page',
    description: 'A serene, visually stunning retreat portal featuring custom treatment menu displays and frictionless booking reservation flows.',
    longDescription:
      'Bespoke WordPress build designed with calming visual rhythm, subtle glassmorphism cards, and an integrated reservation booking experience for wellness packages and private suites.',
    client: 'Miraval Wellness Retreat',
    year: '2023',
    duration: '2.5 Weeks',
    image: portfolioWellnessHospitality,
    technologies: ['WordPress', 'Elementor', 'HTML5', 'CSS3', 'Responsive Design', 'JavaScript'],
    deliverables: [
      'Immersive visual story layout with video/photo integration',
      'Interactive spa treatments and retreat package builder',
      'Direct WhatsApp and calendar reservation inquiry hook',
      'Full cross-device responsive layout',
    ],
    challenge:
      'Guests booking via mobile previously abandoned reservations due to cluttered forms and broken layout scaling on smaller screens.',
    solution:
      'Designed a clean, thumb-friendly mobile-first booking experience with single-tap package selection and instant confirmation feedback.',
    results: [
      { label: 'Mobile Bookings', value: '+115%' },
      { label: 'Session Duration', value: '3m 45s' },
      { label: 'Customer Rating', value: '5.0 ★' },
    ],
    previewType: 'desktop',
  },
];

export const STRENGTHS_DATA = [
  {
    title: 'Clean & Modern Code',
    description: 'Every line of code is structured, semantic, and maintainable. No bloated plugins or messy template hacks.',
    metric: 'Zero Clutter',
  },
  {
    title: '100% Responsive Design',
    description: 'Tested rigorously across iPhone, Android, iPads, laptops, and ultra-wide screens for guaranteed visual perfection.',
    metric: 'Mobile-First',
  },
  {
    title: 'Client-Focused Approach',
    description: 'Your strategic business objectives drive every layout decision, button placement, and feature integration.',
    metric: 'Goal Aligned',
  },
  {
    title: 'Speed & Core Web Vitals',
    description: 'Optimized image pipelines, clean CSS, and database tuning to ensure fast sub-second loading speeds.',
    metric: 'Sub-1s Load',
  },
  {
    title: 'Reliable Communication',
    description: 'Transparent milestone updates, daily progress visibility, and respectful adherence to deadlines.',
    metric: 'On-Time',
  },
  {
    title: 'Post-Launch Reliability',
    description: 'Continuous site maintenance, plugin audits, and automated backups so your business runs without disruption.',
    metric: '24/7 Peace of Mind',
  },
];
