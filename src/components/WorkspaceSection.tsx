import React, { useState } from 'react';
import { Terminal, Laptop, Monitor, Play, CheckCircle } from 'lucide-react';

export const WorkspaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'terminal'>('editor');

  return (
    <section className="w-full bg-[#101014] text-white py-24 sm:py-32 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono font-medium text-white/80 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
              ENGINEERING WORKSPACE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter text-white uppercase leading-[0.95]">
              DEVELOPER IN ACTION <br />
              <span className="text-white/40">& LIVE CODE ARCHITECTURE.</span>
            </h2>
          </div>

          {/* Interactive Screen Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg">
            <button
              onClick={() => setActiveTab('editor')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'editor' ? 'bg-[#DE4A20] text-white font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>VS Code / TypeScript</span>
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'preview' ? 'bg-[#DE4A20] text-white font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Web Interface</span>
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'terminal' ? 'bg-[#DE4A20] text-white font-bold' : 'text-white/70 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Network Telemetry</span>
            </button>
          </div>
        </div>

        {/* High-Fidelity Framed Dual-Monitor Display Frame (matching video 00:23 / 00:55) */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-black/80 border border-white/15 shadow-2xl relative p-3 sm:p-6">
          
          {/* Top Window Chrome */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-white/40 ml-3">
                workspace://abu-raihan/engineering-core
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-white/50">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                SYSTEM LIVE
              </span>
              <span>BRANCH: main</span>
            </div>
          </div>

          {/* Screen Content Based on Active Tab */}
          <div className="bg-[#0B0C10] rounded-xl p-4 sm:p-8 min-h-[360px] sm:min-h-[440px] font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto">
            {activeTab === 'editor' && (
              <div className="space-y-2">
                <div className="text-slate-500">// Abu Raihan — Practical Full-Stack & IoT Core</div>
                <div><span className="text-purple-400">import</span> &#123; <span className="text-amber-300">createEngine</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@raihan/core'</span>;</div>
                <div><span className="text-purple-400">import</span> &#123; <span className="text-amber-300">ESP32Controller</span>, <span className="text-amber-300">ScapySniffer</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@raihan/hardware'</span>;</div>
                <br />
                <div><span className="text-blue-400">export const</span> <span className="text-yellow-300">portfolioEngine</span> = <span className="text-blue-400">new</span> <span className="text-amber-300">createEngine</span>(&#123;</div>
                <div className="pl-6"><span className="text-slate-400">developer</span>: <span className="text-emerald-300">'Abu Raihan'</span>,</div>
                <div className="pl-6"><span className="text-slate-400">discipline</span>: [<span className="text-emerald-300">'React 19'</span>, <span className="text-emerald-300">'Next.js'</span>, <span className="text-emerald-300">'Tailwind CSS'</span>, <span className="text-emerald-300">'Node/Express'</span>],</div>
                <div className="pl-6"><span className="text-slate-400">hardwareStack</span>: [<span className="text-emerald-300">'ESP32'</span>, <span className="text-emerald-300">'TCP/IP Packet Tracker'</span>, <span className="text-emerald-300">'Blynk IoT'</span>],</div>
                <div className="pl-6"><span className="text-slate-400">education</span>: <span className="text-emerald-300">'Bangladesh Polytechnic Institute, Rajshahi'</span>,</div>
                <div className="pl-6"><span className="text-slate-400">philosophy</span>: <span className="text-emerald-300">'Learn by building real, production-ready systems'</span>,</div>
                <div>&#125;);</div>
                <br />
                <div className="text-slate-500">// Bootstrapping active production services</div>
                <div><span className="text-blue-400">await</span> portfolioEngine.<span className="text-yellow-300">deployProjects</span>([</div>
                <div className="pl-6"><span className="text-emerald-300">'FreshMart Pro'</span>, <span className="text-emerald-300">'Smart Network Monitor'</span>, <span className="text-emerald-300">'BloodOn'</span>, <span className="text-emerald-300">'Vibe'</span></div>
                <div>]);</div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#DE4A20] flex items-center justify-center font-bold text-white text-xs">
                      FM
                    </div>
                    <div>
                      <div className="font-bold text-white">FreshMart Pro — Live E-Commerce</div>
                      <div className="text-xs text-white/60">https://freshmart-roan.vercel.app/</div>
                    </div>
                  </div>
                  <a
                    href="https://freshmart-roan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-[#DE4A20] text-white text-xs font-mono font-bold hover:bg-[#C23A14]"
                  >
                    Open Live App
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                      SN
                    </div>
                    <div>
                      <div className="font-bold text-white">Smart Network Monitor & Device Tracker</div>
                      <div className="text-xs text-white/60">https://smart-network-monitor-alpha.vercel.app/</div>
                    </div>
                  </div>
                  <a
                    href="https://smart-network-monitor-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-mono font-bold hover:bg-blue-700"
                  >
                    Open Live App
                  </a>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center font-bold text-white text-xs">
                      BO
                    </div>
                    <div>
                      <div className="font-bold text-white">BloodOn — Emergency Donor Matching</div>
                      <div className="text-xs text-white/60">https://bloodon.vercel.app/</div>
                    </div>
                  </div>
                  <a
                    href="https://bloodon.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-red-600 text-white text-xs font-mono font-bold hover:bg-red-700"
                  >
                    Open Live App
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'terminal' && (
              <div className="space-y-2 text-emerald-400">
                <div>raihan@dev-station:~$ ./network-sniffer.py --interface eth0 --subnet 192.168.1.0/24</div>
                <div className="text-slate-400">[INFO] Initializing raw socket packet capture engine...</div>
                <div className="text-slate-400">[INFO] Scapy packet filtering activated (TCP, UDP, ARP, ICMP)</div>
                <div>[2026-10-18 10:14:22] TCP Packet: 192.168.1.42:443 &rarr; 192.168.1.1:54210 [ACK, PSH] Len=1420</div>
                <div>[2026-10-18 10:14:23] Device Detected: ESP32-WROOM-32 (MAC: 24:6F:28:1A:C9:80) IP: 192.168.1.108</div>
                <div>[2026-10-18 10:14:24] ESP32 Telemetry: Temperature=28.4°C Humidity=62% RSSI=-54dBm</div>
                <div className="text-yellow-400">[OK] Broadcast synced with web dashboard successfully. Zero dropped packets.</div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
