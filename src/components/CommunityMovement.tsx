import React from "react";
import { motion } from "motion/react";
import { Users, Star, Award, TrendingUp } from "lucide-react";

export default function CommunityMovement() {
  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Topic Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            07 / COLLECTIVE IMPACT SCALE
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase leading-tight">
            A Citizen-First Fuel Grid
          </h2>
          <div className="h-[2px] w-12 bg-brand-accent mx-auto" />
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] mx-auto font-medium">
            Every drop begins with family pledge networks. Track our incremental benchmarks as Sengoal expands from neighborhoods to metropolitan corridors.
          </p>
        </div>

        {/* Milestone Statistics Board (Apple / Nothing styled bento layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Milestone 1 */}
          <div className="bg-white border border-brand-charcoal/5 p-8 rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start font-bold">
              <span className="p-3 bg-[#0F5D2F]/10 text-[#0F5D2F] rounded-2xl">
                <Users className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F5D2F] font-bold bg-[#0F5D2F]/5 px-2.5 py-1 rounded-md border border-brand-green/10">
                Active Benchmark
              </span>
            </div>
            
            <div className="mt-8 space-y-2">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A4A4A]">
                PLEDGED NEIGHBORHOODS
              </p>
              <h3 className="font-display text-6xl lg:text-7xl font-black text-[#111111] tracking-tight leading-none uppercase">
                100+
              </h3>
              <p className="text-sm text-[#4A4A4A] font-medium leading-normal">
                Families Already Pledged and actively segregating spent lipids.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="bg-white border border-brand-charcoal/5 p-8 rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start font-bold">
              <span className="p-3 bg-brand-accent/10 text-[#0F5D2F] rounded-2xl">
                <Star className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F5D2F] font-bold bg-[#0F5D2F]/5 px-2.5 py-1 rounded-md border border-brand-green/10">
                Next Milestone
              </span>
            </div>
            
            <div className="mt-8 space-y-2">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A4A4A]">
                TARGET COMMITMENT UNITS
              </p>
              <h3 className="font-display text-6xl lg:text-7xl font-black text-[#0F5D2F] tracking-tight leading-none uppercase">
                1,000
              </h3>
              <p className="text-sm text-[#4A4A4A] font-medium leading-normal">
                Regional hubs active in South Indian cities within the coming quarter.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="bg-white border border-brand-charcoal/5 p-8 rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start font-bold">
              <span className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl">
                <Award className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold font-bold bg-brand-gold/5 px-2.5 py-1 rounded-md border border-brand-gold/10">
                Institutional Horizon
              </span>
            </div>
            
            <div className="mt-8 space-y-2">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#4A4A4A]">
                METROPOLITAN EMISSION CAPS
              </p>
              <h3 className="font-display text-6xl lg:text-7xl font-black text-[#111111] tracking-tight leading-none uppercase">
                10,000
              </h3>
              <p className="text-sm text-[#4A4A4A] font-medium leading-normal">
                Families bound to active drop-off loops to unlock regional refinery margins.
              </p>
            </div>
          </div>

        </div>

        {/* Elegant Animated Progress visualizer */}
        <div className="bg-[#0F5D2F] text-white rounded-[24px] p-8 md:p-12 border border-brand-green/10 relative overflow-hidden shadow-md">
          
          <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
            <TrendingUp className="w-96 h-96 -translate-y-20 translate-x-20 stroke-[0.5]" />
          </div>

          <div className="max-w-xl space-y-8 relative z-10">
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-widest text-brand-accent uppercase font-black bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                LIVE METRIC PROGRESS BAR
              </span>
              <h4 className="font-display text-2xl md:text-3xl font-black uppercase">
                Pledged Volume Index
              </h4>
              <p className="text-sm text-white/85 leading-relaxed font-medium">
                We are currently tracking at 10% of our domestic phase 2 infrastructure block. Every pledge directly mitigates local sewer lipid blockages.
              </p>
            </div>

            {/* Custom styled slider progress bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5 text-white/50 font-bold">
                  <span>PHASE 2 TARGET (1,000 FAMILIES)</span>
                  <span className="text-brand-accent">10% COMPLETE</span>
                </div>
                {/* Outlying bar */}
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "10%" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="h-full bg-brand-accent"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5 text-white/50 font-bold">
                  <span>METRO HORIZON (10,000 FAMILIES)</span>
                  <span className="text-brand-gold">1% COMPLETE</span>
                </div>
                {/* Outlying bar */}
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "1%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-brand-gold"
                  />
                </div>
              </div>
            </div>

            {/* Micro-metrics detail label footer */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/70">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              <span>Updating real-time ledger via pin code geolocation networks.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
