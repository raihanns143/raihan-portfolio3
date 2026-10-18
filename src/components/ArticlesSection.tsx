import React, { useState } from 'react';
import { ARTICLES } from '../data/portfolioData';
import { TechArticle } from '../types/portfolio';
import { ArrowUpRight, X, Clock, Calendar } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<TechArticle | null>(null);

  return (
    <section id="articles" className="w-full bg-[#F4F4F6] text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-200/70 border border-slate-300 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
              TECH INSIGHTS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-slate-900 uppercase leading-[0.95]">
              LATEST ENGINEERING <br />
              <span className="text-slate-400">INSIGHTS.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-slate-500 uppercase max-w-xs text-right hidden md:block">
            EXPLORE ARCHITECTURAL PATTERNS, NETWORKING PROTOCOLS & REACT OPTIMIZATIONS.
          </p>
        </div>

        {/* 3 Articles Grid (matching video 00:33) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-mono text-xs border border-white/10">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#DE4A20]" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#DE4A20] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#DE4A20] transition-colors">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-2.5 py-1 rounded bg-[#DE4A20]/10 text-[#DE4A20] text-xs font-mono font-bold uppercase">
                {selectedArticle.category}
              </span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-4">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pb-6 mb-6 border-b border-slate-100">
              <span>Author: {selectedArticle.author}</span>
              <span>·</span>
              <span>Published: {selectedArticle.date}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold uppercase hover:bg-[#DE4A20] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
