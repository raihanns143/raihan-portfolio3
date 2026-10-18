import React from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { PageView } from '../types/portfolio';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AvatarGraphic } from './AvatarGraphic';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const featuredProject = PROJECTS[0]; // FreshMart Pro

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] hero-grid-bg text-white overflow-hidden flex flex-col justify-between select-none">
      {/* Decorative Grid Crosshairs matching the video (+ symbols at intersections) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[80px] left-[15%] text-white/30 text-xl font-mono">+</div>
        <div className="absolute top-[80px] right-[25%] text-white/30 text-xl font-mono">+</div>
        <div className="absolute top-[280px] left-[35%] text-white/30 text-xl font-mono">+</div>
        <div className="absolute top-[480px] right-[10%] text-white/30 text-xl font-mono">+</div>
        <div className="absolute bottom-[100px] left-[20%] text-white/30 text-xl font-mono">+</div>
        <div className="absolute bottom-[100px] right-[40%] text-white/30 text-xl font-mono">+</div>
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 flex-1 flex flex-col justify-between relative z-10">
        
        {/* Top Header Row / Kicker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Kicker Text */}
          <div className="lg:col-span-5 space-y-2">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-white/95 uppercase max-w-sm leading-relaxed">
              {PERSONAL_INFO.kickerHero}
            </p>
          </div>

          {/* Right Floating Project Badge (matching 00:02 in video) */}
          <div className="hidden md:flex lg:col-span-7 justify-end">
            <div
              onClick={() => onSelectProject(featuredProject.id)}
              className="group cursor-pointer bg-white p-3 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 w-52 border border-white/40"
            >
              <div className="aspect-square w-full rounded overflow-hidden bg-gradient-to-tr from-orange-100 to-amber-50 relative mb-2.5 flex items-center justify-center">
                {/* Clean decorative graphic / project preview */}
                <div className="w-24 h-24 rounded-full border-4 border-[#DE4A20]/20 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DE4A20] to-[#E45325] shadow-lg flex items-center justify-center text-white text-xs font-bold text-center px-1">
                    FreshMart Pro
                  </div>
                </div>
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono">
                  LIVE
                </div>
              </div>

              <div className="flex items-center justify-between text-slate-900 px-1">
                <span className="text-xs font-bold uppercase tracking-wider group-hover:text-[#DE4A20] transition-colors">
                  FRESHMART PRO
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  /E-Commerce
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center / Bottom Layout with Giant Typography and Portrait */}
        <div className="relative mt-8 sm:mt-12 flex-1 flex flex-col justify-end">
          
          {/* Portrait in Center (Parallax / Absolute placement behind giant text) */}
          <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-2xl h-[360px] sm:h-[460px] lg:h-[540px] flex items-end justify-center pointer-events-none">
            <div className="relative w-full h-full flex items-end justify-center">
              {/* Soft backlighting halo */}
              <div className="absolute bottom-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-black/20 blur-3xl" />
              
              {/* Abu Raihan Portrait Component */}
              <AvatarGraphic
                className="w-full h-full max-h-[500px] object-contain drop-shadow-2xl"
                alt="Abu Raihan - Frontend Developer & Tech Developer"
                size="hero"
              />
            </div>
          </div>

          {/* Foreground Giant Text & Floating CTA Strip */}
          <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 -mt-16 sm:-mt-24">
            
            {/* Giant Architectural Name Typography */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-white/80 block">
                ©2026
              </span>
              <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.85] uppercase drop-shadow-md">
                RAIHAN
              </h1>
            </div>

            {/* Bottom Right Floating "Let's Talk" Card (matching video 00:02 - 00:07) */}
            <div className="w-full sm:w-auto self-end">
              <div
                onClick={() => onNavigate('contact')}
                className="group cursor-pointer bg-[#0E0E10] text-white p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-2xl flex items-center justify-between gap-4 hover:border-[#DE4A20] transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg overflow-hidden border border-white/20 bg-slate-800 shrink-0">
                    <AvatarGraphic size="sm" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono text-white/60">Let's Talk</span>
                      <Sparkles className="w-3 h-3 text-[#DE4A20]" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-white group-hover:text-[#DE4A20] transition-colors leading-tight">
                      Abu Raihan
                    </h3>
                    <p className="text-[11px] text-white/50 leading-tight">
                      Frontend & IoT Engineer
                    </p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#DE4A20] flex items-center justify-center text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Subtle Bar */}
      <div className="w-full bg-black/15 border-t border-white/10 py-2.5 px-4 text-center">
        <p className="text-xs text-white/80 font-mono tracking-wider">
          COMPUTER SCIENCE & TECHNOLOGY · BANGLADESH POLYTECHNIC INSTITUTE, RAJSHAHI
        </p>
      </div>
    </section>
  );
};
