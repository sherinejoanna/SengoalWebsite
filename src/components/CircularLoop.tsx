import React, { useState } from "react";
import { motion } from "motion/react";
import { circularStages } from "../data";
import { ArrowRight } from "lucide-react";

export default function CircularLoop() {
  const [activeStage, setActiveStage] = useState<string>("fresh-oil");

  // A suite of custom hand-crafted sleek SVG illustrations to bypass generic icons
  const renderIllustration = (id: string, active: boolean) => {
    // Elegant colors matching our new premium system
    const strokeColor = active ? "#FFFFFF" : "#111111";
    const accentFill = active ? "#F5C542" : "#6FBF44";

    switch (id) {
      case "fresh-oil":
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-500">
            <path d="M40,25 C40,25 45,15 50,15 C55,15 60,25 60,25 L60,50 C60,62 50,72 50,72 C50,72 40,62 40,50 Z" fill="none" stroke={strokeColor} strokeWidth="3" />
            <circle cx="50" cy="53" r="10" fill="none" stroke={strokeColor} strokeWidth="2" />
            <circle cx="50" cy="82" r="4" fill={accentFill} />
            <path d="M47,35 L53,35" stroke={strokeColor} strokeWidth="2" />
          </svg>
        );
      case "collection":
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-500">
            <rect x="25" y="30" width="50" height="40" rx="6" fill="none" stroke={strokeColor} strokeWidth="3" />
            <path d="M50,12 L50,26" stroke={strokeColor} strokeWidth="2" strokeDasharray="2,2" />
            <path d="M44,22 L50,28 L56,22" fill="none" stroke={strokeColor} strokeWidth="2" />
            <path d="M35,45 Q50,55 65,45" fill="none" stroke={strokeColor} strokeWidth="2" />
            <circle cx="50" cy="50" r="5" fill={accentFill} />
          </svg>
        );
      case "transport":
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-500">
            <path d="M20,60 L80,60" stroke={strokeColor} strokeWidth="3" />
            <rect x="25" y="35" width="35" height="20" rx="3" fill="none" stroke={strokeColor} strokeWidth="2.5" />
            <rect x="60" y="42" width="15" height="13" rx="2" fill="none" stroke={strokeColor} strokeWidth="2.5" />
            <circle cx="35" cy="64" r="6" fill={accentFill} stroke={strokeColor} strokeWidth="2" />
            <circle cx="65" cy="64" r="6" fill={accentFill} stroke={strokeColor} strokeWidth="2" />
            <path d="M78,48 Q85,48 85,55" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          </svg>
        );
      case "refinement":
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-500">
            <line x1="30" y1="80" x2="70" y2="80" stroke={strokeColor} strokeWidth="3" />
            <rect x="40" y="20" width="20" height="55" fill="none" stroke={strokeColor} strokeWidth="3" />
            <line x1="40" y1="35" x2="52" y2="35" stroke={strokeColor} strokeWidth="2" />
            <line x1="48" y1="50" x2="60" y2="50" stroke={strokeColor} strokeWidth="2" />
            <line x1="40" y1="65" x2="52" y2="65" stroke={strokeColor} strokeWidth="2" />
            <circle cx="50" cy="12" r="3" fill={accentFill} />
            <circle cx="25" cy="50" r="4" fill="none" stroke={strokeColor} strokeWidth="1.5" />
            <path d="M25,54 L25,72 L38,72" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          </svg>
        );
      case "clean-fuel":
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-500">
            <path d="M50,20 C50,20 62,35 62,45 C62,55 50,62 50,62 C50,62 38,55 38,45 C38,35 50,20 50,20 Z" fill="none" stroke={strokeColor} strokeWidth="3" />
            <path d="M50,35 L46,45 L54,42 L50,52" fill="none" stroke={strokeColor} strokeWidth="2" />
            <path d="M25,75 Q50,65 75,75" fill="none" stroke={strokeColor} strokeWidth="2" />
          </svg>
        );
      case "global":
        return (
          <svg viewBox="0 0 100 100" className="w-16 h-16 transition-all duration-500">
            <circle cx="50" cy="50" r="30" fill="none" stroke={strokeColor} strokeWidth="3" />
            <path d="M20,50 Q50,75 80,50" fill="none" stroke={strokeColor} strokeWidth="2" />
            <path d="M20,50 Q50,25 80,50" fill="none" stroke={strokeColor} strokeWidth="2" />
            <line x1="50" y1="20" x2="50" y2="80" stroke={strokeColor} strokeWidth="2" />
            <circle cx="70" cy="30" r="4" fill={accentFill} />
            <circle cx="32" cy="65" r="4" fill={accentFill} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="loop" className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5 relative overflow-hidden">
      
      {/* Subtle line background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -100 300 Q 200 100 500 400 T 1200 200 T 1800 600"
            fill="none"
            stroke="#0F5D2F"
            strokeWidth="3"
            strokeDasharray="15,10"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content with tight baseline spacing */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
          <div className="space-y-6 max-w-[720px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
              02 / Signature Loop Ecosystem
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
              The Circular Journey of Spent Lipids
            </h2>
          </div>
          <p className="text-[#4A4A4A] max-w-sm text-[15px] font-medium leading-relaxed">
            Select phases in our localized infrastructure pipeline to trace how domestic kitchens turn wasted lipids into vital fuel.
          </p>
        </div>

        {/* Dynamic Expandable Cards Suite (FLEX DESKTOP / STACK MOBILE) */}
        <div 
          className="hidden lg:flex flex-row gap-6 h-[600px] w-full items-stretch"
        >
          {circularStages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <div
                key={stage.id}
                onMouseEnter={() => setActiveStage(stage.id)}
                className={`relative px-8 py-10 rounded-[24px] border transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between cursor-pointer overflow-hidden ${
                  isActive
                    ? "flex-[3.5] bg-[#0F5D2F] text-white border-[#0F5D2F] shadow-xl"
                    : "flex-[1] bg-white text-[#111111] border-brand-charcoal/5 hover:border-[#0F5D2F]/30 hover:shadow-md"
                }`}
              >
                {/* SVG Visual asset container */}
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-full transition-all duration-500 ${isActive ? "bg-white/10" : "bg-brand-offwhite"}`}>
                    {renderIllustration(stage.id, isActive)}
                  </div>
                  <span className={`font-display text-[54px] font-black leading-none ${isActive ? "text-white/20" : "text-brand-charcoal/10"}`}>
                    {String(stage.step).padStart(2, "0")}
                  </span>
                </div>

                {/* Narrative content block */}
                <div className="space-y-6">
                  <div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border mb-4 ${
                      isActive ? "border-brand-accent/50 text-brand-accent bg-white/5" : "border-brand-green/10 text-[#0F5D2F] bg-[#0F5D2F]/5"
                    }`}>
                      {stage.impactMetric}
                    </span>
                    <h3 className="font-display text-2xl font-bold leading-tight block">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Expanded parameters */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 text-[14px]"
                    >
                      <p className="text-white/95 leading-relaxed font-normal">
                        {stage.longDescription}
                      </p>
                      
                      <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold">
                          CORE STRATEGIC MANDATE
                        </span>
                        <p className="font-display italic text-[#FAD961] font-semibold">
                          "{stage.accentQuote}"
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {!isActive && (
                    <p className="text-xs text-[#4A4A4A] line-clamp-2 max-w-[200px] font-medium">
                      {stage.description}
                    </p>
                  )}
                </div>

                {/* Interactive slide arrow indicator */}
                <div className="flex justify-end pt-4">
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? "text-[#F5C542] rotate-90" : "text-brand-charcoal/30"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Cascade Stack (Accordion layout) */}
        <div className="lg:hidden flex flex-col gap-4">
          {circularStages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(stage.id === activeStage ? "" : stage.id)}
                className={`p-6 rounded-[24px] border transition-all duration-500 ${
                  isActive
                    ? "bg-[#0F5D2F] text-white border-[#0F5D2F] shadow-lg"
                    : "bg-white text-[#111111] border-brand-charcoal/5"
                }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${isActive ? "text-white bg-white/10" : "text-[#0F5D2F] bg-brand-[#0F5D2F]/5"}`}>
                      {String(stage.step).padStart(2, "0")}
                    </span>
                    <h3 className="font-display font-bold text-lg">{stage.title}</h3>
                  </div>
                  <div className="flex-shrink-0">
                    {renderIllustration(stage.id, isActive)}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-white/10 space-y-4"
                  >
                    <span className="inline-flex px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border border-brand-accent/50 text-brand-accent bg-white/5">
                      {stage.impactMetric}
                    </span>
                    
                    <p className="text-sm text-white/90 leading-relaxed font-normal">
                      {stage.longDescription}
                    </p>

                    <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                      <p className="text-[10px] uppercase font-mono tracking-widest text-[#FAD961] mb-1">
                        Core Philosophy
                      </p>
                      <p className="text-xs font-medium italic text-brand-gold">
                        "{stage.accentQuote}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
