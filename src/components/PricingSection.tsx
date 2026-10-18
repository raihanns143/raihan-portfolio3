import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/portfolioData';
import { ArrowUpRight, Zap, Check } from 'lucide-react';
import { PageView } from '../types/portfolio';

interface PricingSectionProps {
  onNavigate: (page: PageView) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  return (
    <section className="w-full bg-white text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header + Toggle (matching video 00:27 - 00:29) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
              PRICING & ENGAGEMENT
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-slate-900 uppercase leading-[0.95]">
              SIMPLE PLANS <br />
              <span className="text-slate-400">FOR EVERY NEED.</span>
            </h2>
          </div>

          {/* Toggle Buttons: MONTHLY vs PROJECT BASED */}
          <div className="flex items-center p-1 bg-slate-100 border border-slate-200 rounded-lg self-start md:self-end">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors rounded-md ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors rounded-md ${
                billingCycle === 'project'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              PROJECT BASED
            </button>
          </div>
        </div>

        {/* Pricing Cards (Dark cards matching video 00:28 - 00:31) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'project' ? plan.priceProject : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 bg-[#0E0E10] text-white border flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
                  plan.highlight
                    ? 'border-[#DE4A20] shadow-2xl ring-1 ring-[#DE4A20]'
                    : 'border-white/10 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Plan Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-white/90">
                      {plan.deliveryTime} DELIVERY
                    </span>
                    <span className="text-[10px] font-mono text-[#DE4A20]">
                      {plan.revisions} REVISIONS
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl tracking-tight text-white mb-2 uppercase">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/60 mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="py-4 border-y border-white/10 mb-6">
                    <div className="font-display font-black text-4xl sm:text-5xl text-white font-mono-num">
                      {price}
                    </div>
                    <span className="text-[11px] font-mono text-white/40 uppercase">
                      {billingCycle === 'project' ? 'One-time investment' : 'Billed on sprint basis'}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                        <Check className="w-4 h-4 text-[#DE4A20] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Satisfaction Box + Button */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5">
                    <Zap className="w-4 h-4 text-[#DE4A20] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-mono font-bold uppercase text-white tracking-wider">
                        SATISFACTION GUARANTEE
                      </p>
                      <p className="text-[10px] text-white/60 leading-tight">
                        We are committed to delivering high-quality engineering work that exceeds expectations.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-white text-slate-900 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] hover:text-white transition-all shadow-md group"
                  >
                    <span>GET STARTED</span>
                    <div className="w-6 h-6 rounded bg-[#DE4A20] group-hover:bg-white text-white group-hover:text-[#DE4A20] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
