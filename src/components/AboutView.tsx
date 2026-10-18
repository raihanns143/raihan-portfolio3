import React, { useState } from 'react';
import { PERSONAL_INFO, FAQS, ACHIEVEMENTS } from '../data/portfolioData';
import { PageView } from '../types/portfolio';
import { Plus, Minus, ArrowUpRight, GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react';
import { AvatarGraphic } from './AvatarGraphic';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-slate-900 animate-in fade-in duration-300">
      
      {/* 1. Header Banner & Title (matching video 00:40) */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-[#DE4A20] font-bold tracking-widest uppercase block mb-3">
              {PERSONAL_INFO.personalWordmark}
            </span>
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-slate-900 uppercase leading-[0.88]">
              ABOUT ME.
            </h1>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              ©2026 (EXPLORE BACKGROUND)
            </span>
          </div>
        </div>

        {/* Horizontal Photo Strip (matching 00:41) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 shadow-md">
            <AvatarGraphic className="w-full h-full object-cover" alt="Abu Raihan" />
          </div>
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
              alt="Engineering & Code"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
              alt="Network Monitoring"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
              alt="IoT & Hardware"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Core Narrative (matching 00:42 - 00:43) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="max-w-4xl space-y-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
            ENGINEERING PHILOSOPHY
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.05] uppercase">
            ABU RAIHAN BELIEVES PRACTICAL SOFTWARE SOLVES REAL-WORLD CHALLENGES.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              I have a strong foundation in Computer Science & Technology from Bangladesh Polytechnic Institute, Rajshahi, with a genuine interest in building practical software that solves real-world problems.
            </p>
            <p>
              My interests span full-stack web development, network monitoring, and IoT systems. I enjoy understanding how systems work end-to-end—from front-end interfaces and backend APIs to local network packets and microcontroller hardware.
            </p>
            <p>
              I learn primarily by building real projects. Rather than focusing only on theory, I spend my time coding, testing, debugging, and continuously improving functional applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#DE4A20]" />
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase">Education</p>
                <p className="font-bold text-sm text-slate-900">Diploma in Computer Science & Technology</p>
                <p className="text-xs text-slate-600">Bangladesh Polytechnic Institute, Rajshahi</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#DE4A20]" />
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase">Location & Base</p>
                <p className="font-bold text-sm text-slate-900">Rajshahi, Bangladesh</p>
                <p className="text-xs text-slate-600">Available for Global Remote Engineering</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid (matching 00:43) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16 mt-16 border-t border-slate-200">
          <div>
            <div className="font-display font-black text-4xl sm:text-5xl text-slate-900 font-mono-num">
              {PERSONAL_INFO.completedProjects}
            </div>
            <p className="font-display font-bold text-sm text-slate-900 mt-1 uppercase">Successful Projects</p>
            <p className="text-xs text-slate-500 mt-1">Built across full-stack web, IoT & networking</p>
          </div>

          <div>
            <div className="font-display font-black text-4xl sm:text-5xl text-slate-900 font-mono-num">
              {PERSONAL_INFO.experienceYears}
            </div>
            <p className="font-display font-bold text-sm text-slate-900 mt-1 uppercase">Years Building</p>
            <p className="text-xs text-slate-500 mt-1">Hands-on coding, debugging, and shipping</p>
          </div>

          <div>
            <div className="font-display font-black text-4xl sm:text-5xl text-slate-900 font-mono-num">
              {PERSONAL_INFO.clientSatisfaction}
            </div>
            <p className="font-display font-bold text-sm text-slate-900 mt-1 uppercase">Satisfaction Rate</p>
            <p className="text-xs text-slate-500 mt-1">Focused on clean code & timely delivery</p>
          </div>

          <div>
            <div className="font-display font-black text-4xl sm:text-5xl text-slate-900 font-mono-num">
              100%
            </div>
            <p className="font-display font-bold text-sm text-slate-900 mt-1 uppercase">Practical Focus</p>
            <p className="text-xs text-slate-500 mt-1">End-to-end system understanding</p>
          </div>
        </div>
      </section>

      {/* 3. Achievements Section (Dark section matching video 00:45 - 00:48) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0E10] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-xs font-mono font-medium text-[#FFA675] uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-[#DE4A20]" />
              HONORS & RECOGNITION
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-white uppercase leading-[0.95]">
              ABU RAIHAN® <br />
              <span className="text-white/40">ACHIEVEMENTS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#DE4A20] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#DE4A20] mb-6">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white uppercase leading-snug mb-3">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>{item.category}</span>
                  <span className="text-[#DE4A20] font-bold">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion (matching video 00:58 - 01:01) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-slate-900 uppercase leading-[0.95]">
              FREQUENT <br />
              <span className="text-slate-400">QUESTIONS.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.id} className="py-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-slate-400 font-bold">
                        {faq.number}
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#DE4A20] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1 rounded bg-slate-100 text-slate-600 group-hover:bg-[#DE4A20] group-hover:text-white transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pl-8 pr-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Bottom Navigation CTA */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-2xl text-slate-900">
            Ready to collaborate or hire?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Let's discuss your web application, API requirements, or IoT deployment.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-[#0E0E10] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] transition-colors shadow-md flex items-center gap-2"
        >
          <span>GET IN TOUCH NOW</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>

    </div>
  );
};
