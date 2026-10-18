import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory or database data matching Abu Raihan's profile
export const profileData = {
  name: 'Abu Raihan',
  firstName: 'Abu',
  lastName: 'Raihan',
  brandWordmark: 'PORTFOLIOB®',
  personalWordmark: 'Abu Raihan®',
  role: 'Frontend Developer & Tech Developer',
  tagline: 'Diploma Engineer & Tech Developer building practical web applications, digital products, and IoT systems.',
  kickerHero: 'I BUILD PRACTICAL WEB APPLICATIONS, DIGITAL PRODUCTS, AND IOT SYSTEMS.',
  location: 'Rajshahi, Bangladesh',
  education: 'Diploma in Computer Science & Technology, Bangladesh Polytechnic Institute, Rajshahi',
  focus: 'Web Development · Networking · IoT · Practical System Engineering',
  email: 'raihanns143@gmail.com',
  linkedin: 'https://www.linkedin.com/in/md-abu-raihan-ns',
  github: 'https://github.com/raihanns143',
  aboutBio: `I have a strong foundation in Computer Science & Technology from Bangladesh Polytechnic Institute, Rajshahi, with a genuine interest in building practical software that solves real-world problems.

My interests span full-stack web development, network monitoring, and IoT systems. I enjoy understanding how systems work end-to-end—from frontend interfaces and backend APIs to local network packets and microcontroller hardware.

I learn primarily by building real projects. Rather than focusing only on theory, I spend my time coding, testing, debugging, and continuously improving functional applications.`,
  experienceYears: '3+',
  completedProjects: '37+',
  clientSatisfaction: '98%',
  collaborationRate: '100%',
};

export const projectsData = [
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

export const skillsData = [
  {
    category: 'Frontend Engineering',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Python', 'Flask', 'PHP', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'Prisma'],
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'IPv4', 'IPv6', 'NAT/PAT', 'Scapy'],
  },
  {
    category: 'IoT & Embedded',
    items: ['ESP32', 'Sensors', 'Blynk', 'Embedded C/C++'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Linux', 'VS Code'],
  },
];

// In-memory messages storage for contact form
const contactMessages: Array<{
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}> = [];

// REST API Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Abu Raihan Portfolio Node.js API',
  });
});

app.get('/api/profile', (req: Request, res: Response) => {
  res.json(profileData);
});

app.get('/api/projects', (req: Request, res: Response) => {
  res.json(projectsData);
});

app.get('/api/skills', (req: Request, res: Response) => {
  res.json(skillsData);
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields: name, email, and message.',
    });
  }

  // Simple email regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  const newMessage = {
    id: `msg_${Date.now()}`,
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    timestamp: new Date().toISOString(),
  };

  contactMessages.push(newMessage);

  return res.status(201).json({
    success: true,
    message: 'Thank you for reaching out! Abu Raihan will get back to you shortly.',
    data: { id: newMessage.id, timestamp: newMessage.timestamp },
  });
});

// Production static file serving
if (process.env.NODE_ENV === 'production') {
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Export for server runner
export default app;

const isDirectExecution = process.argv[1] && (process.argv[1].endsWith('server.ts') || process.argv[1].endsWith('server.js'));
if (isDirectExecution) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
