import React, { useState } from "react";
import { motion } from "motion/react";
import { templeStages } from "../data";
import { ArrowRight, Heart } from "lucide-react";

interface TempleProps {
  templeImagePath: string;
}

export default function TempleLoop({ templeImagePath }: TempleProps) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="temple" className="py-16 md:py-24 lg:py-[120px] bg-brand-charcoal text-brand-offwhite relative overflow-hidden border-b border-brand-charcoal/5">
      {/* Mystical decorative gradient background backing glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-gold/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-accent/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Core Topic Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gold flex items-center justify-center gap-2">
            05 / SACRED CIRCULARITY
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            The Temple's Waste Returns As Its Light
          </h2>
          <div className="h-[2px] w-12 bg-brand-gold mx-auto" />
          <p className="text-[15px] text-[#A0A0A0] leading-relaxed max-w-[580px] mx-auto font-medium">
            South Indian temple fuel offerings undergo premium micro-refinement, returning to sanctify domestic altars and shrine halls as clean, soot-free Deepam light.
          </p>
        </div>

        {/* Master Temple Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Atmospheric glow image representing temple environment */}
          <div className="col-span-1 lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-brand-gold/20 shadow-[0_0_50px_rgba(245,197,66,0.15)] group bg-zinc-900">
              <img
                src={templeImagePath}
                alt="South Indian Temple brass oil lamps glowing at sunset in warm gold editorial lighting"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.75] select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle gold glow shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-brand-gold/5" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-brand-charcoal/80 border border-brand-gold/20 backdrop-blur-md p-5 rounded-2xl">
                <span className="text-[9px] font-mono tracking-widest text-[#F5C542] font-black uppercase">
                  South Indian Shrine Network
                </span>
                <p className="text-sm font-semibold text-white mt-1 leading-tight">
                  Over 450 regional holy sites have completed the circular soot-free commitment.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Interactive Holy Stages checklist */}
          <div className="col-span-1 lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                THE FIVE INTEGRATED PATHWAYS
              </p>
              
              <div className="space-y-4">
                {templeStages.map((stage) => {
                  const isActive = stage.step === activeStep;
                  return (
                    <div
                      key={stage.step}
                      onMouseEnter={() => setActiveStep(stage.step)}
                      onClick={() => setActiveStep(stage.step)}
                      className={`p-5 rounded-[16px] border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-brand-forest/20 border-brand-gold text-brand-offwhite shadow-[0_4px_24px_rgba(245,197,66,0.08)]"
                          : "bg-white/[0.02] border-white/5 text-brand-offwhite/50 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className={`text-[11px] font-mono font-bold w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                            isActive ? "bg-brand-gold text-brand-charcoal border-brand-gold" : "bg-white/5 border-white/10 text-white/70"
                          }`}>
                            0{stage.step}
                          </span>
                          <div>
                            <h3 className={`font-display font-bold text-base transition-colors ${isActive ? "text-white" : "text-brand-offwhite/80"}`}>
                              {stage.title}
                            </h3>
                            <p className="text-xs text-brand-offwhite/60 mt-1">{stage.subtitle}</p>
                          </div>
                        </div>

                        <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-brand-gold rotate-90" : "text-brand-offwhite/20"}`} />
                      </div>

                      {/* Animated expandable container detail list */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 pt-4 border-t border-brand-gold/10 text-xs md:text-sm text-brand-offwhite/85 space-y-3"
                        >
                          <p className="leading-relaxed font-light">{stage.description}</p>
                          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-gold/5 border border-brand-gold/15 text-brand-gold font-mono text-[10px] uppercase font-bold tracking-wider">
                            <Heart className="w-3.5 h-3.5 fill-brand-gold shrink-0 animate-pulse" />
                            <span>OUTCOME: {stage.offeringType}</span>
                          </div>
                        </motion.div>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
