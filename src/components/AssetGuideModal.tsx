import React, { useState } from 'react';
import { X, Check, Copy, FileCode, Image, Link, Sparkles } from 'lucide-react';

interface AssetGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateAvatarUrl?: (url: string) => void;
}

export const AssetGuideModal: React.FC<AssetGuideModalProps> = ({
  isOpen,
  onClose,
  onUpdateAvatarUrl,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [customAvatarInput, setCustomAvatarInput] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleApplyCustomAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    if (customAvatarInput && onUpdateAvatarUrl) {
      onUpdateAvatarUrl(customAvatarInput);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#121216] text-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/15 p-6 sm:p-8 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DE4A20]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFA675]">
                গাইড ও কাস্টমাইজেশন নির্দেশিকা
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
              Personal Assets, Images & Links Guide
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Photo Previewer */}
        <div className="py-6 border-b border-white/10">
          <h3 className="font-display font-bold text-base text-white mb-2 flex items-center gap-2">
            <Image className="w-4 h-4 text-[#DE4A20]" />
            ১. লাইভ ছবি পরিবর্তন পরীক্ষা (Live Image Switch)
          </h3>
          <p className="text-xs text-white/70 mb-4 leading-relaxed">
            আপনার আপলোডকৃত ছবি বা যেকোনো ইমেজ URL এখানে পেস্ট করে তৎক্ষণাৎ পোর্টফোলিওর হিরো সেকশনে প্রিভিউ দেখতে পারেন:
          </p>
          <form onSubmit={handleApplyCustomAvatar} className="flex gap-2">
            <input
              type="text"
              placeholder="https://example.com/my-photo.jpg"
              value={customAvatarInput}
              onChange={(e) => setCustomAvatarInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#DE4A20]"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-[#DE4A20] hover:bg-[#C23A14] text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors"
            >
              প্রয়োগ করুন
            </button>
          </form>
        </div>

        {/* Code Customization Breakdown */}
        <div className="py-6 space-y-6">
          <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
            <FileCode className="w-4 h-4 text-[#DE4A20]" />
            ২. কোন ফাইল ও লাইনে নিজের তথ্য পরিবর্তন করবেন (Exact Locations)
          </h3>

          {/* Location 1: portfolioData.ts */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#FFA675] font-bold">
                📁 src/data/portfolioData.ts
              </span>
              <button
                onClick={() => handleCopy('src/data/portfolioData.ts', 'path1')}
                className="text-[11px] font-mono text-white/50 hover:text-white flex items-center gap-1"
              >
                {copiedKey === 'path1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                Copy Path
              </button>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              এই ফাইলটিতে আপনার সমস্ত ব্যক্তিগত তথ্য, বায়ো, শিক্ষা, সোশ্যাল লিঙ্ক, প্রজেক্ট এবং সার্ভিস সেন্ট্রালাইজড আছে:
            </p>
            <div className="bg-black/60 p-3 rounded-lg font-mono text-[11px] text-slate-300 space-y-1">
              <div><span className="text-purple-400">name</span>: <span className="text-emerald-300">'Abu Raihan'</span>,</div>
              <div><span className="text-purple-400">email</span>: <span className="text-emerald-300">'raihanns143@gmail.com'</span>,</div>
              <div><span className="text-purple-400">linkedin</span>: <span className="text-emerald-300">'https://www.linkedin.com/in/md-abu-raihan-ns'</span>,</div>
              <div><span className="text-purple-400">github</span>: <span className="text-emerald-300">'https://github.com/raihanns143'</span>,</div>
              <div><span className="text-purple-400">heroPhotoUrl</span>: <span className="text-emerald-300">'/assets/my-photo.jpg'</span>,</div>
            </div>
          </div>

          {/* Location 2: server.ts */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#FFA675] font-bold">
                📁 server.ts (Node.js & Express API)
              </span>
              <button
                onClick={() => handleCopy('server.ts', 'path2')}
                className="text-[11px] font-mono text-white/50 hover:text-white flex items-center gap-1"
              >
                {copiedKey === 'path2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                Copy Path
              </button>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Node.js Express ব্যাকএন্ড সার্ভারটিতে REST API এন্ডপয়েন্টগুলি রয়েছে:
            </p>
            <ul className="text-xs text-white/70 space-y-1 font-mono list-disc list-inside">
              <li><code className="text-emerald-300">GET /api/profile</code> — Abu Raihan প্রোফাইল ডাটা</li>
              <li><code className="text-emerald-300">GET /api/projects</code> — প্রজেক্টসমূহ ও লাইভ লিঙ্ক</li>
              <li><code className="text-emerald-300">POST /api/contact</code> — কন্টাক্ট ফর্ম মেসেজ হ্যান্ডলার</li>
            </ul>
          </div>

          {/* Location 3: Project Links & Images */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <span className="font-mono text-xs text-[#FFA675] font-bold block">
              🔗 ৩. নতুন প্রজেক্ট বা লিঙ্ক যুক্ত করার নিয়ম
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              <code className="text-purple-300">PROJECTS</code> অ্যারেতে প্রতিটি প্রজেক্টের <code className="text-emerald-300">title</code>, <code className="text-emerald-300">liveUrl</code>, <code className="text-emerald-300">githubUrl</code>, এবং <code className="text-emerald-300">image</code> দেওয়া আছে। আপনার নতুন কোনো লাইভ লিংক বা গিটহাব রিপো তৈরি হলে শুধু এই ফিল্ডগুলো আপডেট করলেই পুরো অ্যাপে স্বয়ংক্রিয়ভাবে আপডেট হয়ে যাবে।
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-white text-slate-900 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] hover:text-white transition-colors"
          >
            বুঝেছি, বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
