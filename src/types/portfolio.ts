export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'WordPress' | 'WooCommerce' | 'Corporate' | 'Landing Page';
  description: string;
  longDescription: string;
  client: string;
  year: string;
  duration: string;
  image: string;
  technologies: string[];
  deliverables: string[];
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  previewType: 'desktop' | 'mobile' | 'tablet';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  iconName: string;
  turnaround: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    details: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  field: string;
  details: string;
}
