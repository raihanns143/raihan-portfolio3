import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Network, 
  Terminal, 
  Server, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const TECH_ITEMS = [
  { name: 'React 19', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Node.js & Express', icon: Server },
  { name: 'Python & Flask', icon: Code2 },
  { name: 'PostgreSQL & MySQL', icon: Database },
  { name: 'Prisma ORM', icon: Database },
  { name: 'TCP/IP & Scapy', icon: Network },
  { name: 'ESP32 & IoT', icon: Cpu },
  { name: 'Linux / Bash', icon: Terminal },
  { name: 'Git & GitHub', icon: ShieldCheck },
  { name: 'RESTful APIs', icon: Zap },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#121216] border-y border-white/10 py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50">
          Core Technologies & Engineering Stack
        </span>
        <span className="text-xs font-mono text-[#DE4A20]">
          PRACTICAL · RELIABLE · SCALABLE
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite marquee track */}
        <div className="flex shrink-0 items-center gap-8 animate-marquee">
          {TECH_ITEMS.concat(TECH_ITEMS).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#DE4A20]/40 transition-colors shrink-0"
              >
                <Icon className="w-4 h-4 text-[#DE4A20]" />
                <span className="text-sm font-semibold tracking-tight text-white/80 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
