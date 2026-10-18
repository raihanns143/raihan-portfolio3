import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = SERVICES[activeServiceIndex];

  return (
    <section id="services" className="w-full bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
            OUR SERVICES
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-[0.95] max-w-4xl">
            POWERFUL <br />
            <span className="text-slate-400">ENGINEERING SERVICES</span> <br />
            FOR YOUR VISION.
          </h2>
        </div>

        {/* Services Interactive Grid: Left Items + Right Dynamic Preview (matching 00:11-00:13) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Numbered Service Accordion Items */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {SERVICES.map((service, index) => {
              const isSelected = activeServiceIndex === index;
              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  onClick={() => setActiveServiceIndex(index)}
                  className={`py-8 cursor-pointer transition-colors duration-200 group ${
                    isSelected ? 'opacity-100' : 'opacity-65 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      {service.number}
                    </span>
                    <h3 className={`font-display font-black text-2xl sm:text-3xl tracking-tight uppercase transition-colors ${
                      isSelected ? 'text-[#DE4A20]' : 'text-slate-900 group-hover:text-[#DE4A20]'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  {/* Clean unboxed tags with subtle outline */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href={service.projectSampleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#DE4A20] transition-colors"
                    >
                      <span>SAMPLE: {service.projectSampleTitle}</span>
                      <div className="w-5 h-5 rounded bg-[#DE4A20] text-white flex items-center justify-center">
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Media Spotlight */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl relative group">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-900">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating overlay badge matching video */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-mono text-[11px] border border-white/10">
                  {activeService.number} / CORE DISCIPLINE
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FFA675] mb-1">
                    Featured Output
                  </p>
                  <p className="font-display font-bold text-lg leading-tight mb-2">
                    {activeService.projectSampleTitle}
                  </p>
                  <a
                    href={activeService.projectSampleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-[#DE4A20] hover:text-white transition-colors"
                  >
                    <span>Inspect Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Service Details Bar */}
              <div className="p-5 bg-white border-t border-slate-100">
                <p className="text-xs font-mono text-slate-500 leading-relaxed uppercase">
                  {activeService.tagline}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
