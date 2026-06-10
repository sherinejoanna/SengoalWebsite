import React, { useState } from "react";
import { globalImpactNodes } from "../data";
import { Globe, Target, Zap } from "lucide-react";

export default function GlobalImpact() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("india");

  const currentNode = globalImpactNodes.find((n) => n.id === selectedNodeId) || globalImpactNodes[0];

  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite text-[#111111] relative overflow-hidden border-b border-brand-charcoal/5">
      {/* Absolute decorative ambient glow sphere element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/5 filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section headings */}
        <div className="max-w-[720px] mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            06 / GLOBAL INDUSTRIAL FOOTPRINT
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            Connecting Supply to Global Aviation Demand.
          </h2>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
            Sengoal intercepts regional oil streams, converting them locally then dispatching premium biofuels directly to compliance-driven international airports and maritime corridors.
          </p>
        </div>

        {/* Dynamic Map and Information Matrix split view */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel: Vector coordinate mapping frame */}
          <div className="col-span-1 lg:col-span-8 bg-white border border-brand-charcoal/5 rounded-[24px] p-8 relative overflow-hidden aspect-[16/9] flex flex-col justify-between shadow-sm">
            
            {/* Minimalist World Map Vector projection SVG background */}
            <div className="absolute inset-4 opacity-30 pointer-events-none">
              <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
                {/* Continents rendered as simple grid coordinate patterns to feel futuristic */}
                <path
                  d="M150,150 Q180,140 220,180 T260,240 T280,300 M50,120 Q100,100 130,130 T120,200 Z"
                  stroke="#0F5D2F"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                />
                <path
                  d="M400,100 Q450,120 500,80 T560,110 T600,180 T680,140 M420,180 Q460,240 500,220 T540,260 T580,310 Z"
                  stroke="#0F5D2F"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                />
                <path
                  d="M750,250 Q800,220 830,280 T880,300 T900,380 M780,320 Q820,380 840,420 Z"
                  stroke="#0F5D2F"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                />
                {/* Glowing communication curves (connections between nodes) */}
                <path d="M 620 320 Q 420 160 200 160" stroke="#F5C542" strokeWidth="1.5" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M 620 320 Q 560 280 440 260" stroke="#F5C542" strokeWidth="1.5" strokeDasharray="5,5" />
                <path d="M 620 320 Q 680 340 740 360" stroke="#0F5D2F" strokeWidth="1.5" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Title on map board */}
            <div className="relative z-10 flex items-center gap-2 bg-[#0F5D2F]/5 border border-brand-green/10 backdrop-blur-md px-4 py-2 rounded-xl self-start">
              <Globe className="w-4 h-4 text-[#0F5D2F] animate-spin" style={{ animationDuration: "12s" }} />
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#0F5D2F] font-bold">
                Sengoal B2B Bunkering Corridor
              </span>
            </div>

            {/* Dynamic node coordinate points absolutely relative mapped */}
            <div className="absolute inset-0 z-20">
              {globalImpactNodes.map((node) => {
                const isActive = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className="absolute group focus:outline-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hover:scale-125 cursor-pointer"
                    style={{ left: `${node.coords.x}%`, top: `${node.coords.y}%` }}
                  >
                    {/* Coordinate node markers */}
                    <span className={`relative flex h-5 w-5 items-center justify-center transition-colors duration-300 ${isActive ? "text-brand-gold" : "text-[#0F5D2F]"}`}>
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                        <line x1="8" y1="0" x2="8" y2="16" />
                        <line x1="0" y1="8" x2="16" y2="8" />
                      </svg>
                    </span>

                    {/* Simple Tooltip Label above node */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-8 bg-[#111111]/95 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {node.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Coordinates overlay summary */}
            <div className="relative z-10 self-start text-[9px] font-mono text-zinc-400">
              AXIS // SYSTEM CORE: MULTI-REGIONAL LIQUID EXTRACTIONS
            </div>
          </div>

          {/* Right Panel: Selected node detailed profile */}
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Quick interactive Selector */}
            <div className="flex gap-2 p-1.5 rounded-[12px] border border-brand-charcoal/5 bg-white overflow-x-auto">
              {globalImpactNodes.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNodeId(n.id)}
                  className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                    n.id === selectedNodeId
                      ? "bg-[#0F5D2F] text-white shadow-sm"
                      : "text-zinc-500 hover:text-[#111111]"
                  }`}
                >
                  {n.id}
                </button>
              ))}
            </div>

            {/* Profile cardboard */}
            <div className="bg-white text-[#111111] p-8 rounded-[24px] space-y-6 shadow-sm border border-brand-charcoal/5 flex-grow flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0F5D2F]/10 text-[#0F5D2F] text-[9px] font-bold uppercase tracking-wider rounded-full border border-brand-green/10">
                  <Target className="w-3.5 h-3.5 text-brand-accent" />
                  {currentNode.partnershipType}
                </span>

                <h3 className="font-display text-2xl font-black text-[#111111] uppercase tracking-tight">
                  {currentNode.name}
                </h3>

                <p className="text-sm text-[#4A4A4A] leading-relaxed font-medium">
                  {currentNode.role}
                </p>
              </div>

              {/* Statistical projection outputs */}
              <div className="pt-6 border-t border-brand-charcoal/10 space-y-4">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-1">
                    PROJECTED IMPACT TARGET
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-[#0F5D2F]">
                      {currentNode.metrics}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-brand-offwhite rounded-xl border border-brand-charcoal/5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0F5D2F] text-white">
                    <Zap className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-widest text-[#0F5D2F]">
                      Compliance Class
                    </p>
                    <p className="text-xs font-semibold text-[#111111]">
                      Fully EN14214 & ASTMD7566 Compliant
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
