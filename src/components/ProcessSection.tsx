import React from 'react';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'PROTOTYPING',
    tagline: 'Requirements & Foundations',
    description: 'Understanding user intents, specifications, and device constraints through rapid wireframes and architectural scoping.',
  },
  {
    number: '02',
    title: 'WIREFRAMING',
    tagline: 'System & Schema Design',
    description: 'Structuring clean modular React components, TypeScript models, database schemas, and intuitive responsive grids.',
  },
  {
    number: '03',
    title: 'ENGINEERING',
    tagline: 'Full-Stack Implementation',
    description: 'Developing high-performance UI, Express & Flask APIs, TCP/IP packet inspectors, and microcontroller C++ firmware.',
  },
  {
    number: '04',
    title: 'IMPROVEMENT',
    tagline: 'Benchmarking & Delivery',
    description: 'Refining software through continuous multi-device testing, latency audits, and automated deployment pipelines.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
            MY WORKFLOW
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-slate-900 uppercase leading-[0.95]">
            ENGINEERING PROCESS <br />
            <span className="text-slate-400">THAT WORKS.</span>
          </h2>
        </div>

        {/* 4 Dark Cards in a Row (matching video 00:20) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#0E0E10] text-white p-8 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between group hover:border-[#DE4A20] transition-colors duration-200"
            >
              <div>
                {/* Red Diamond & Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-4 h-4 rotate-45 bg-[#DE4A20] rounded-[2px]" />
                  <span className="font-mono text-xs text-white/40 font-semibold">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl tracking-tight text-white mb-2 uppercase group-hover:text-[#DE4A20] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-4 uppercase">
                  {step.tagline}
                </p>
              </div>

              <p className="text-xs text-white/70 leading-relaxed pt-4 border-t border-white/5">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
