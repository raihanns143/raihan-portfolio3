import React from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { PageView } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageView) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white text-slate-900 animate-in fade-in duration-300">
      
      {/* Title Header Banner (matching video 01:16) */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#DE4A20] font-bold tracking-widest uppercase block mb-3">
              {PERSONAL_INFO.personalWordmark}
            </span>
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-slate-900 uppercase leading-[0.88]">
              SERVICES.
            </h1>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              ©2026 (SCROLL TO EXPAND)
            </span>
          </div>
        </div>
      </section>

      {/* Expanded Services List (matching video 01:17 - 01:24) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="p-8 sm:p-12 rounded-2xl bg-[#FAFAFA] border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-slate-400 transition-colors duration-200"
          >
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#DE4A20]">
                  {service.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Core Engineering Capability
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
                {service.title}
              </h2>

              <p className="text-sm font-bold uppercase tracking-wider text-slate-700 font-mono">
                {service.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="pt-4">
                <a
                  href={service.projectSampleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] transition-colors shadow-sm group"
                >
                  <span>VIEW REFERENCE PROJECT</span>
                  <div className="w-5 h-5 rounded bg-[#DE4A20] group-hover:bg-white text-white group-hover:text-[#DE4A20] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-md relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase text-[#FFA675]">
                    Production Benchmark
                  </span>
                  <p className="font-display font-bold text-base leading-tight">
                    {service.projectSampleTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-2xl text-slate-900">
            Have a custom requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            I can develop tailored web applications, IoT devices, or network tools.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-[#0E0E10] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] transition-colors shadow-md flex items-center gap-2"
        >
          <span>REQUEST A QUOTE</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
