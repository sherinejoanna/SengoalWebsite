import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { investorMilestones } from "../data";
import { DollarSign, Landmark, TrendingUp, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function InvestorVision() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const getPhaseColor = (idx: number) => {
    switch (idx) {
      case 0:
        return "bg-brand-accent/10 border-brand-green/20 text-[#0F5D2F]";
      case 1:
        return "bg-[#0F5D2F]/10 border-brand-green/20 text-[#0F5D2F]";
      case 2:
        return "bg-brand-gold/10 border-brand-gold/20 text-brand-gold";
      default:
        return "bg-[#0F5D2F]/10 border-brand-green/20 text-[#0F5D2F]";
    }
  };

  const currentPhase = investorMilestones[activePhaseIndex];

  return (
    <section id="investors" className="py-16 md:py-24 lg:py-[120px] bg-[#F8F8F5] text-[#111111] relative overflow-hidden border-b border-brand-charcoal/5">
      {/* Decorative back grids to match Nothing and Apple website layouts */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Premium Title */}
        <div className="max-w-[720px] mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            10 / STRATEGIC INVESTMENT BLUEPRINT
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-3xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            Waste Into Infrastructure.<br />
            Infrastructure Into Clean Energy.
          </h2>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
            Sengoal builds high-yielding ESG infrastructure. We secure localized raw material margins, transform them dynamically with modular chemical processes, and satisfy binding global purchasing pipelines.
          </p>
        </div>

        {/* Master Roadmap Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Phase Indicators triggers */}
          <div className="col-span-1 lg:col-span-12 lg:col-span-4 space-y-4">
            <p className="text-[10px] font-bold tracking-widest text-[#0F5D2F] uppercase">
              STRATEGIC SCALING TIMELINE
            </p>

            <div className="flex flex-col gap-3">
              {investorMilestones.map((milestone, idx) => {
                const isActive = idx === activePhaseIndex;
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActivePhaseIndex(idx)}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`p-6 rounded-[16px] border text-left transition-all duration-350 focus:outline-none flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#0F5D2F] border-[#0F5D2F] text-white shadow-sm"
                        : "bg-white border-brand-charcoal/5 text-[#111111] hover:border-[#0F5D2F]/30"
                    }`}
                  >
                    <div>
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isActive ? "border-white/20 text-white" : "border-brand-charcoal/10 text-[#4A4A4A]"
                      }`}>
                        PHASE 0{idx + 1}
                      </span>
                      <h3 className="font-display font-black text-base md:text-lg mt-2 tracking-tight uppercase leading-none">
                        {milestone.title.split(" ").slice(1).join(" ") || milestone.title}
                      </h3>
                      <p className={`text-xs mt-1.5 font-medium ${isActive ? "text-white/70" : "text-zinc-400"}`}>{milestone.subtitle}</p>
                    </div>
                    
                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? "text-brand-accent translate-x-1 -translate-y-1" : "text-zinc-300"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Interactive Phase Information Board */}
          <div className="col-span-1 lg:col-span-12 lg:col-span-8">
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between h-full min-h-[460px] shadow-sm">
              
              {/* Dynamic details entry animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhaseIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  
                  {/* Phase badge header */}
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <span className={`inline-flex px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getPhaseColor(activePhaseIndex)}`}>
                      {currentPhase.phase}
                    </span>
                    
                    <div className="flex items-center gap-2 text-xs font-mono text-[#0F5D2F] font-bold">
                      <Landmark className="w-4 h-4" />
                      <span>SECURE ESG DEEP INFRASTRUCTURE</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-2xl sm:text-3.5xl font-black tracking-tight text-[#111111] leading-tight uppercase">
                      {currentPhase.title}
                    </h3>
                    <p className="italic text-xs font-mono tracking-widest uppercase text-[#0F5D2F] font-bold">
                      {currentPhase.subtitle}
                    </p>
                    <p className="text-base text-[#4A4A4A] leading-relaxed max-w-xl font-medium">
                      {currentPhase.description}
                    </p>
                  </div>

                  {/* Operational and economic targets boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-brand-charcoal/10">
                    
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#F5C542] flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 stroke-[2.5]" />
                        CORE REVENUE CHANNEL
                      </p>
                      <p className="text-sm font-semibold text-[#111111] leading-snug">
                        {currentPhase.revenueSource}
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#0F5D2F] flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
                        ECONOMIC OUTCOME
                      </p>
                      <p className="text-sm font-semibold text-[#111111] leading-snug">
                        {currentPhase.valuationImpact}
                      </p>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Roadmap step footer selectors */}
              <div className="mt-12 flex justify-between items-center border-t border-brand-charcoal/10 pt-6 flex-wrap gap-4">
                <span className="text-[10px] font-mono text-zinc-400">
                  Sengoal Energy Inc. Institutional Schedulers // All Rights Audited.
                </span>
                
                <div className="flex gap-2.5">
                  <button
                    disabled={activePhaseIndex === 0}
                    onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                    className="p-2.5 rounded-full border border-brand-charcoal/10 bg-brand-offwhite hover:bg-zinc-100 disabled:opacity-20 transition-all focus:outline-none cursor-pointer"
                    aria-label="Previous Phase"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#111111]" />
                  </button>
                  <button
                    disabled={activePhaseIndex === investorMilestones.length - 1}
                    onClick={() => setActivePhaseIndex((prev) => Math.min(investorMilestones.length - 1, prev + 1))}
                    className="p-2.5 rounded-full border border-brand-charcoal/10 bg-brand-offwhite hover:bg-zinc-100 disabled:opacity-20 transition-all focus:outline-none cursor-pointer"
                    aria-label="Next Phase"
                  >
                    <ChevronRight className="w-4 h-4 text-[#111111]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
