import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { technologyFeatures } from "../data";
import { Cpu, CheckCircle2, ChevronRight, Activity, Radio, Compass } from "lucide-react";

interface TechProps {
  techImagePath: string;
}

export default function SmartTechnology({ techImagePath }: TechProps) {
  const [selectedFeatureId, setSelectedFeatureId] = useState(technologyFeatures[0].id);

  const getFeatureIcon = (id: string, active: boolean) => {
    const cls = `w-5 h-5 transition-colors ${active ? "text-brand-accent scale-110" : "text-[#0F5D2F]"}`;
    switch (id) {
      case "automated-iot":
        return <Radio className={cls} />;
      case "smart-tracking":
        return <Cpu className={cls} />;
      case "compliance-monitoring":
        return <Activity className={cls} />;
      case "route-optimization":
        return <Compass className={cls} />;
      default:
        return <Cpu className={cls} />;
    }
  };

  const activeFeature = technologyFeatures.find((f) => f.id === selectedFeatureId) || technologyFeatures[0];

  return (
    <section id="technology" className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header content Block */}
        <div className="max-w-[720px] mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            09 / INTEGRATED HARDWARE STACK
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            Automated IoT Collection. Smart compliance grids.
          </h2>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
            Circularity succeeds when barriers to entry disintegrate. Sengoal deploys custom smart cabinets and software to digitize cooking oil, proving perfect traceability.
          </p>
        </div>

        {/* Dynamic Hardware Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Technical Buttons */}
          <div className="col-span-1 lg:col-span-5 order-2 lg:order-1 space-y-6">
            <p className="text-[10px] font-bold tracking-widest text-[#0F5D2F] uppercase">
              HARDWARE & SOFTWARE LAYERS
            </p>

            <div className="space-y-3">
              {technologyFeatures.map((feat) => {
                const isActive = feat.id === selectedFeatureId;
                return (
                  <button
                    key={feat.id}
                    onMouseEnter={() => setSelectedFeatureId(feat.id)}
                    onClick={() => setSelectedFeatureId(feat.id)}
                    className={`w-full p-5 rounded-[16px] border text-left transition-all duration-300 flex items-center justify-between focus:outline-none cursor-pointer ${
                      isActive
                        ? "bg-[#0F5D2F] text-white border-[#0F5D2F] shadow-md"
                        : "bg-white text-[#111111] border-brand-charcoal/5 hover:border-[#0F5D2F]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-all ${isActive ? "bg-white/10" : "bg-black/5"}`}>
                        {getFeatureIcon(feat.id, isActive)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-none uppercase">
                          {feat.title}
                        </h3>
                        <p className={`text-xs mt-1.5 transition-colors ${isActive ? "text-white/70" : "text-zinc-400"}`}>
                          {feat.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <ChevronRight className={`w-4 h-4 opacity-70 transition-transform ${isActive ? "text-brand-accent translate-x-1" : "text-zinc-300"}`} />
                  </button>
                );
              })}
            </div>

            {/* Dynamic detailed feature specifications card block representing the select features */}
            <div className="bg-[#0F5D2F]/5 border border-brand-green/10 rounded-[20px] p-6 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFeatureId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold font-mono">
                    Specifications Ledger
                  </p>
                  <h4 className="font-display font-bold text-[#111111] text-base leading-tight">
                    {activeFeature.subtitle}
                  </h4>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed font-medium">
                    {activeFeature.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase bg-[#0F5D2F]/10 border border-brand-green/10 text-[#0F5D2F] font-bold py-1.5 px-3 rounded-full mt-3 self-start max-w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>SPECIFICATION: {activeFeature.highlight}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: High-End Industrial Product Photographic Display with synced motion features */}
          <div className="col-span-1 lg:col-span-12 lg:col-start-7 lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-xl border border-brand-charcoal/5 bg-zinc-100">
              
              <img
                src={techImagePath}
                alt="Minimal futuristic smart oil collection container with clean premium industrial matte finishes"
                className="w-full h-full object-cover filter brightness-[0.95] select-none"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Corner status metadata banner representing IoT compliance */}
              <div className="absolute bottom-6 left-6 bg-black/80 border border-white/10 backdrop-blur-md px-4 py-3 rounded-xl flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#F5C542] font-semibold">
                    IOT DISPATCH PORT
                  </p>
                  <p className="text-xs font-semibold text-white">
                    Sengoal Smart Container Gen-3.
                  </p>
                </div>
              </div>

              {/* Vector blueprint info line graphic overlays */}
              <div className="absolute inset-0 border border-black/5 rounded-[24px] pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
