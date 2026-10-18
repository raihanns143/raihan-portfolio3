import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-slate-900 py-24 sm:py-32 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
              COLLABORATION MATTERS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-slate-900 uppercase leading-[0.95]">
              WHAT MY <br />
              <span className="text-slate-400">CLIENTS SAY.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-500 uppercase max-w-xs text-right hidden md:block">
            CREATING THOUGHTFUL AND USER-FOCUSED SYSTEMS THAT HELP BRANDS GROW.
          </p>
        </div>

        {/* Testimonial Cards Grid (matching video 00:26) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#DE4A20]/20 mb-3" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs uppercase">
                  {testimonial.name.slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
