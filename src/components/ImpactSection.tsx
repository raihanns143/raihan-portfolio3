import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { AvatarGraphic } from './AvatarGraphic';

export const ImpactSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker Tag */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
            BETTER DIGITAL JOURNEYS
          </span>
        </div>

        {/* Main Grid: Headline + Visual Anchor + Bio & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Headline & Photo Showcase */}
          <div className="lg:col-span-7 space-y-10">
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-[0.95]">
              MY IMPACT <br />
              <span className="text-slate-400">THROUGH PRACTICAL</span> <br />
              ENGINEERING.
            </h2>

            {/* Stylized Photo Card with framing (matching 00:09) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-4">
              <div className="sm:col-span-7 relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative shadow-xl border border-slate-200/80">
                  <AvatarGraphic
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Abu Raihan"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono text-[#FFA675]">ABU RAIHAN · 2026</p>
                    <p className="font-display font-bold text-base">Diploma Engineer & Tech Developer</p>
                  </div>
                </div>
              </div>

              {/* Center Asterisk / Geometric Icon */}
              <div className="sm:col-span-5 flex flex-col justify-center items-center sm:items-start text-slate-400 space-y-4">
                <div className="w-16 h-16 rounded-full border border-slate-300 flex items-center justify-center text-slate-800">
                  <Sparkles className="w-8 h-8 text-[#DE4A20]" />
                </div>
                <p className="text-xs font-mono text-slate-500 text-center sm:text-left leading-relaxed">
                  BRIDGING FRONTEND INTERFACES, BACKEND APIS & HARDWARE PACKETS.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy & Metrics Cards */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            {/* Bio Introduction */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#DE4A20] font-semibold">
                About the Developer
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Hi, I'm <strong className="text-slate-900 font-semibold">Abu Raihan</strong>, a Frontend Developer and Tech Developer with a strong foundation in Computer Science & Technology from Bangladesh Polytechnic Institute, Rajshahi.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rather than focusing only on theory, I spend my time building practical software that solves real-world problems—from responsive web interfaces to local network packet tools and microcontroller hardware.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Rajshahi, Bangladesh · Open for Global Collaboration</span>
              </div>
            </div>

            {/* Metrics Rows (matching video 00:09 37+ Projects / 70+ Clients) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="font-display font-black text-5xl text-slate-900 font-mono-num">
                  {PERSONAL_INFO.completedProjects}
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
                  PROJECTS COMPLETED
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Successfully completed across full-stack web, networking tools, and IoT devices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="font-display font-black text-5xl text-slate-900 font-mono-num">
                  {PERSONAL_INFO.clientSatisfaction}
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  SATISFACTION RATE
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivering clean, robust, and well-documented software that meets user needs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
