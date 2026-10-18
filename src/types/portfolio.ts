export interface Project {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  projectSampleTitle: string;
  projectSampleUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface TechArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceProject: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  highlight?: boolean;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  year: string;
  iconType: 'star' | 'circle' | 'leaf' | 'sparkle';
}

export type PageView = 'home' | 'about' | 'services' | 'blogs' | 'contact';
