import { Project, Service, Testimonial, TechArticle, PricingPlan, FAQItem, AchievementItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'ABU RAIHAN',
  firstName: 'Abu',
  lastName: 'Raihan',
  brandWordmark: 'PORTFOLIOB®',
  personalWordmark: 'Abu Raihan®',
  displayTitle: 'MICHAEL®', // preserved as an homage or replaceable toggle
  role: 'Frontend Developer & Tech Developer',
  tagline: 'Diploma Engineer & Tech Developer building practical web applications, digital products, and IoT systems.',
  kickerHero: 'I BUILD PRACTICAL WEB APPLICATIONS, DIGITAL PRODUCTS, AND IOT SYSTEMS.',
  location: 'Rajshahi, Bangladesh',
  education: 'Diploma in Computer Science & Technology, Bangladesh Polytechnic Institute, Rajshahi',
  focus: 'Web Development · Networking · IoT · Practical System Engineering',
  email: 'raihanns143@gmail.com',
  phone: '+880 1700-000000',
  linkedin: 'https://www.linkedin.com/in/md-abu-raihan-ns',
  github: 'https://github.com/raihanns143',
  website: 'https://github.com/raihanns143',
  aboutBio: `I have a strong foundation in Computer Science & Technology from Bangladesh Polytechnic Institute, Rajshahi, with a genuine interest in building practical software that solves real-world problems.

My interests span full-stack web development, network monitoring, and IoT systems. I enjoy understanding how systems work end-to-end—from front-end interfaces and backend APIs to local network packets and microcontroller hardware.

I learn primarily by building real projects. Rather than focusing only on theory, I spend my time coding, testing, debugging, and continuously improving functional applications.`,
  experienceYears: '3+',
  completedProjects: '37+',
  clientSatisfaction: '98%',
  collaborationRate: '100%',
  // High quality portrait representation assets
  avatarUrl: '/assets/raihan-avatar.png',
  heroPhotoUrl: '/assets/raihan-hero.png',
  monogramUrl: '/assets/ar-monogram.svg',
};

export const PROJECTS: Project[] = [
  {
    id: 'freshmart',
    title: 'FreshMart Pro',
    category: 'E-Commerce Platform',
    categoryTag: '/E-Commerce',
    description: 'High-performance online grocery store featuring dynamic cart management, instant item search, category filtering, and responsive mobile checkout.',
    liveUrl: 'https://freshmart-roan.vercel.app/',
    githubUrl: 'https://github.com/raihanns143/freshmart',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'State Management'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'smart-network-monitor',
    title: 'Smart Network Monitor & Device Tracker',
    category: 'Networking & Security',
    categoryTag: '/Networking',
    description: 'Real-time local network packet inspector and device tracking tool analyzing TCP/IP packets, subnet allocations, and active client connectivity.',
    liveUrl: 'https://smart-network-monitor-alpha.vercel.app/',
    githubUrl: 'https://github.com/raihanns143/Smart-network-monitor',
    technologies: ['Python', 'Scapy', 'TCP/IP', 'Web Dashboard', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'bloodon',
    title: 'BloodOn',
    category: 'Healthcare & Social Impact',
    categoryTag: '/Healthcare',
    description: 'Emergency blood donor connection network engineered to rapidly link patients with voluntary donors based on blood group and district availability.',
    liveUrl: 'https://bloodon.vercel.app/',
    githubUrl: 'https://github.com/raihanns143/bloodon',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Database', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'vibe',
    title: 'Vibe',
    category: 'Web Application',
    categoryTag: '/Web App',
    description: 'Modern, fluid digital experience application with interactive audio-visual components, engaging transitions, and ultra-responsive layout.',
    liveUrl: 'https://vibe-blond-one.vercel.app/',
    githubUrl: 'https://github.com/raihanns143/Vibe',
    technologies: ['React', 'Tailwind CSS', 'Motion', 'Modern Web APIs'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'news-today',
    title: 'News Today',
    category: 'Digital Journalism',
    categoryTag: '/Media & Portal',
    description: 'Editorial news platform delivering curated daily news feeds, category breakdowns, clean typography, and fast page loads.',
    liveUrl: 'https://dailynews-bpi.vercel.app/',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'REST API Integration'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80',
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    number: '001',
    title: 'UI/UX & FRONTEND DEVELOPMENT',
    tagline: 'CRAFTING INTUITIVE DIGITAL EXPERIENCES THAT CONNECT USERS WITH PRODUCTS EFFORTLESSLY.',
    description: 'Engineering responsive, pixel-perfect user interfaces using modern React, Next.js, and Tailwind CSS with silky transitions and clean state logic.',
    tags: ['React & Next.js', 'TypeScript', 'Clean Wireframing', 'Fluid Responsive Layout', 'Gesture & Motion'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    projectSampleTitle: 'FreshMart Pro Web UI',
    projectSampleUrl: 'https://freshmart-roan.vercel.app/',
  },
  {
    number: '002',
    title: 'FULL-STACK & BACKEND APIS',
    tagline: 'DESIGNING RESILIENT BACKEND ARCHITECTURES BUILT FOR SPEED, DATA INTEGRITY, AND EVERYDAY USE.',
    description: 'Building RESTful APIs with Python, Flask, Node.js, and structured relational databases (PostgreSQL & MySQL) with reliable authentication and validation.',
    tags: ['Node.js & Flask', 'REST APIs', 'PostgreSQL / MySQL', 'Prisma ORM', 'Database Modeling'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    projectSampleTitle: 'BloodOn API & Platform',
    projectSampleUrl: 'https://bloodon.vercel.app/',
  },
  {
    number: '003',
    title: 'IOT & EMBEDDED SYSTEMS',
    tagline: 'SHAPING CONNECTED HARDWARE PRODUCTS FROM MICROCONTROLLER CODE TO CLOUD DASHBOARD.',
    description: 'Integrating ESP32 microcontrollers, hardware sensors, and cloud communication via Blynk and custom REST/MQTT web interfaces.',
    tags: ['ESP32 / Microcontrollers', 'Hardware Sensors', 'Blynk IoT Platform', 'Embedded C/C++', 'End-to-End Testing'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    projectSampleTitle: 'IoT Telemetry Prototype',
    projectSampleUrl: 'https://smart-network-monitor-alpha.vercel.app/',
  },
  {
    number: '004',
    title: 'NETWORK MONITORING & AUTOMATION',
    tagline: 'BUILDING PURPOSEFUL NETWORK PACKET ANALYSIS AND DEVICE DISCOVERY WORKFLOWS.',
    description: 'Deep network packet tracking, subnet probing, and automation scripts using Python Scapy, Linux tools, and diagnostic web monitors.',
    tags: ['TCP/IP & IPv4/IPv6', 'Scapy Packet Analysis', 'Linux CLI Tools', 'Device Tracker', 'Traffic Auditing'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    projectSampleTitle: 'Smart Network Monitor',
    projectSampleUrl: 'https://smart-network-monitor-alpha.vercel.app/',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Frontend Engineering',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Python', 'Flask', 'PHP', 'Node.js', 'REST APIs', 'Authentication'],
  },
  {
    category: 'Databases & Storage',
    items: ['MySQL', 'PostgreSQL', 'Prisma ORM', 'Schema Modeling'],
  },
  {
    category: 'Networking & Security',
    items: ['TCP/IP', 'IPv4 / IPv6', 'NAT / PAT', 'Scapy Probing', 'Subnet Tracking'],
  },
  {
    category: 'IoT & Embedded',
    items: ['ESP32', 'Sensors Integration', 'Blynk Cloud', 'Embedded C/C++'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Linux / Bash', 'VS Code', 'Vercel Deployment'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Tanvir Hossain',
    role: 'Lead Project Coordinator',
    company: 'Tech Innovators BD',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Abu Raihan delivered an outstanding web application that perfectly matched our practical requirements. His attention to detail, code structure, and responsive UI exceeded expectations.',
  },
  {
    id: 't2',
    name: 'Sazzad Ahmed',
    role: 'Senior Software Engineer',
    company: 'Rajshahi Tech Community',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Working with Abu Raihan was seamless. He understands the entire stack from the frontend interface down to network packets and microcontrollers. Very rare and valuable skillset.',
  },
  {
    id: 't3',
    name: 'Farhana Yeasmin',
    role: 'Product Designer',
    company: 'Creative Labs',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    content: 'Abu Raihan turned our wireframes into living, functional web experiences without missing a beat. Highly reliable, communicative, and passionate about shipping clean work.',
  },
];

export const ARTICLES: TechArticle[] = [
  {
    id: 'network-packet-tracking',
    title: 'Building Real-Time Network Packet Trackers with Python & Scapy',
    excerpt: 'How to capture, analyze, and display local subnet network traffic on an interactive web dashboard.',
    category: 'Networking',
    date: 'Jun 13, 2026',
    author: 'Abu Raihan',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    content: [
      'Understanding packet flows inside a local area network is essential for debugging latency, identifying rogue devices, and measuring subnet health.',
      'By pairing Python Scapy packet sniffing with a lightweight Flask or Node.js web server, we can broadcast live device MAC/IP pairings and throughput metrics to a reactive Tailwind dashboard.',
      'This tutorial steps through creating socket handlers, filtering ARP/ICMP packets, and preventing browser UI thread lockups during heavy packet bursts.'
    ],
  },
  {
    id: 'react-19-clean-architecture',
    title: 'The First Impression Effect in UI/UX & Web Performance',
    excerpt: 'Why the first screen in a user journey makes or breaks the entire product experience.',
    category: 'Design & Code',
    date: 'May 28, 2026',
    author: 'Abu Raihan',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    content: [
      'In high-growth digital products, users formulate subconscious judgements within the first 150 milliseconds of interacting with a page.',
      'Strategic layout symmetry, instantaneous font loading, and eliminating layout shifts (CLS) create an aura of professional trustworthiness.',
      'We examine real-world benchmarks from FreshMart Pro and modern e-commerce checkouts to demonstrate how component-level optimizations elevate user conversions.'
    ],
  },
  {
    id: 'esp32-iot-web-integration',
    title: 'Connecting ESP32 Microcontrollers to Web Apps: End-to-End Guide',
    excerpt: 'Bridge hardware sensors with cloud dashboards using REST endpoints and clean state synchronization.',
    category: 'IoT & Hardware',
    date: 'May 10, 2026',
    author: 'Abu Raihan',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    content: [
      'Physical computing becomes exponentially more valuable when telemetry flows into accessible, beautiful web applications.',
      'Using the ESP32 Wi-Fi module with custom C++ firmware, we can collect sensor data, format it into lightweight JSON payloads, and post it to secure cloud endpoints.',
      'This architectural breakdown explores connection resilience, deep sleep battery optimization, and real-time dashboard visualization.'
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'BASIC WEB PACKAGE',
    tagline: 'Ideal for landing pages, portfolio sites, or quick MVP sprint.',
    priceMonthly: '$150/Mo',
    priceProject: '$200/Project',
    deliveryTime: '1-2 Weeks',
    revisions: 'Up to 3',
    features: [
      'Homepage + up to 2 inner pages',
      'Custom React & Tailwind setup',
      'Mobile-optimized responsive design',
      'Initial performance & SEO tuning',
      'Clean modular source code',
      '1 Month complimentary support',
    ],
    highlight: false,
  },
  {
    id: 'professional',
    name: 'COMPLETE FULL-STACK PACKAGE',
    tagline: 'End-to-end web application with database, authentication, and REST APIs.',
    priceMonthly: '$250/Mo',
    priceProject: '$350/Project',
    deliveryTime: '2-3 Weeks',
    revisions: 'Unlimited',
    features: [
      'Complete web app with dynamic data',
      'PostgreSQL / MySQL database integration',
      'REST API routes & authentication',
      'Optimized state management',
      'Custom admin or client dashboard',
      'Continuous deployment setup (Vercel/Cloud)',
      '3 Months technical support',
    ],
    highlight: true,
  },
  {
    id: 'iot-specialized',
    name: 'IOT & NETWORK SYSTEM',
    tagline: 'Specialized hardware integration, packet monitor, or custom telemetry solution.',
    priceMonthly: '$400/Mo',
    priceProject: '$500/Project',
    deliveryTime: '3-4 Weeks',
    revisions: 'Unlimited',
    features: [
      'ESP32 firmware & sensor wiring guide',
      'Cloud telemetry & web dashboard sync',
      'Custom network monitor / packet tool',
      'Real-time status indicators & alerts',
      'Full architectural documentation',
      'Hardware & software debugging sessions',
      '6 Months priority maintenance',
    ],
    highlight: false,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '1.',
    question: 'WHAT SERVICES DO YOU OFFER?',
    answer: 'I specialize in frontend web development (React, Next.js, Tailwind CSS), backend API development (Node.js, Python, Flask, PostgreSQL), network packet monitoring, and ESP32 IoT hardware integrations.',
  },
  {
    id: 'faq-2',
    number: '2.',
    question: 'WHAT IS YOUR TYPICAL ENGINEERING PROCESS FROM START TO FINISH?',
    answer: 'Every project begins with requirement discovery and architecture design. From there, I move to rapid UI prototyping, modular component development, backend API connection, thorough multi-device testing, and clean deployment.',
  },
  {
    id: 'faq-3',
    number: '3.',
    question: 'WILL I BE INVOLVED IN THE PROCESS ALONG THE WAY?',
    answer: 'Yes, absolutely. I maintain clear, frequent communication with GitHub progress, milestone previews on Vercel, and regular feedback iterations to ensure the end product aligns with your vision.',
  },
  {
    id: 'faq-4',
    number: '4.',
    question: 'WHAT FILES & DELIVERABLES WILL I RECEIVE WHEN THE PROJECT IS COMPLETE?',
    answer: 'You will receive clean, well-documented source code in a GitHub repository, deployment configuration, database schemas, README instructions, and live hosting setup ready for production.',
  },
  {
    id: 'faq-5',
    number: '5.',
    question: 'DO YOU OFFER REVISIONS AFTER THE SYSTEM IS DELIVERED?',
    answer: 'Yes. Every project includes structured post-launch revision and debugging support to ensure everything runs smoothly in real production environments.',
  },
  {
    id: 'faq-6',
    number: '6.',
    question: 'CAN YOU WORK WITH AN EXISTING CODEBASE OR HARDWARE PROTOTYPE?',
    answer: 'Yes! I can refactor existing code, optimize frontend performance, design new REST APIs, or interface web platforms with your existing microcontroller hardware.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'a1',
    title: 'FEATURED FULL-STACK BUILDER OF THE YEAR',
    category: 'Computer Technology Award',
    year: '2025',
    iconType: 'star',
  },
  {
    id: 'a2',
    title: 'EXCELLENCE IN IOT & HARDWARE PROTOTYPING',
    category: 'Engineering Recognition',
    year: '2025',
    iconType: 'circle',
  },
  {
    id: 'a3',
    title: 'BEST PRACTICAL SYSTEM ENGINEERING PROJECT',
    category: 'Bangladesh Polytechnic Institute',
    year: '2024',
    iconType: 'leaf',
  },
  {
    id: 'a4',
    title: 'INNOVATIVE NETWORK MONITORING TOOLKIT',
    category: 'Open Source Community Recognition',
    year: '2026',
    iconType: 'sparkle',
  },
];
