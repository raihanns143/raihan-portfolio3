import React from 'react';
import { Star, Zap, Shield, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AvatarGraphic } from './AvatarGraphic';

export const WhyChooseMeSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
            WHY CHOOSE ME
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-[0.95] max-w-4xl">
            FOCUSED ON <br />
            <span className="text-slate-400">ENGINEERING THAT</span> <br />
            DELIVERS RESULTS.
          </h2>
        </div>

        {/* Bento Grid (matching video 00:21 - 00:22) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Experience */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#DE4A20]" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  DEVELOPMENT EXPERIENCE
                </span>
              </div>
              <div className="font-display font-black text-6xl text-slate-900 mb-3 font-mono-num">
                {PERSONAL_INFO.experienceYears}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Continuous hands-on software development, network analysis, and hardware prototyping.
            </p>
          </div>

          {/* Bento Item 2: Visual Creator Card */}
          <div className="md:col-span-4 rounded-2xl overflow-hidden bg-slate-900 relative shadow-md border border-slate-200 min-h-[220px]">
            <AvatarGraphic className="w-full h-full object-cover" alt="Abu Raihan" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono text-[#FFA675] uppercase tracking-wider">
                Full-Stack Tech Developer
              </span>
              <p className="font-display font-bold text-base leading-tight">
                Abu Raihan
              </p>
            </div>
          </div>

          {/* Bento Item 3: Fast & Reliable */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-[#DE4A20]" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  FAST & RELIABLE
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Agile & Communicative
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Maintaining an efficient, transparent workflow with frequent commits and clear documentation.
            </p>
          </div>

          {/* Bento Item 4: Satisfaction */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  CLIENT SATISFACTION
                </span>
              </div>
              <div className="font-display font-black text-6xl text-slate-900 mb-3 font-mono-num">
                {PERSONAL_INFO.clientSatisfaction}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Focused on delivering results that meet user and technical performance benchmarks.
            </p>
          </div>

          {/* Bento Item 5: Featured Collaborator Review */}
          <div className="md:col-span-8 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-slate-700 ml-2">
                  5.0 / 5.0
                </span>
              </div>
              <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                "Abu Raihan delivered an outstanding web application that exceeded our expectations. Clean architecture, high-performance rendering, and prompt delivery. Highly recommended for any serious web or IoT project."
              </blockquote>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                TH
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Tanvir Hossain</p>
                <p className="text-[11px] text-slate-500 font-mono">Lead Project Coordinator · Tech Innovators</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
