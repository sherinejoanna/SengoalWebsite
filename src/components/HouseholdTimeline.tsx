import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { householdTimelineSteps } from "../data";
import { ChevronRight, ArrowRight, Home, Battery, Fuel, PlaneTakeoff, ShieldAlert } from "lucide-react";

interface TimelineProps {
  heroImage: string;
  kitchenImage: string;
  refineryImage: string;
  techImage: string;
  templeImage: string;
}

export default function HouseholdTimeline({
  heroImage,
  kitchenImage,
  refineryImage,
  techImage,
  templeImage,
}: TimelineProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Map step index to our actual high-grade generated image paths
  const getImageForIndex = (index: number) => {
    switch (index) {
      case 0:
        return kitchenImage; // domestic kitchen cooking scene
      case 1:
        return techImage; // smart collection container
      case 2:
        return refineryImage; // bio-refinery plant
      case 3:
        return heroImage; // golden oil transform to green power
      case 4:
        return templeImage; // holy flames representing clean burning (or general SAF soaring)
      default:
        return kitchenImage;
    }
  };

  const getStepIcon = (index: number, active: boolean) => {
    const cls = `w-5 h-5 transition-transform ${active ? "text-brand-accent scale-110" : "text-zinc-400"}`;
    switch (index) {
      case 0:
        return <Home className={cls} />;
      case 1:
        return <ShieldAlert className={cls} />;
      case 2:
        return <Battery className={cls} />;
      case 3:
        return <Fuel className={cls} />;
      case 4:
        return <PlaneTakeoff className={cls} />;
      default:
        return <ChevronRight className={cls} />;
    }
  };

  const currentStep = householdTimelineSteps[activeStepIndex];

  return (
    <section className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="max-w-[720px] mb-16 md:mb-24 space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            04 / From Household To Clean Fuel
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            Tracing Sengoal's circular flight path.
          </h2>
          <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
            See the exact progression a single cup of domestic cooking oil takes from local Indian kitchens into sustainable aviation engines.
          </p>
        </div>

        {/* Large Storyboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Indicator and details panel */}
          <div className="col-span-1 lg:col-span-5 space-y-8">
            
            {/* Interactive Progress Line */}
            <div className="relative border-l border-brand-charcoal/10 space-y-1">
              {householdTimelineSteps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveStepIndex(idx)}
                    onClick={() => setActiveStepIndex(idx)}
                    className="w-full text-left py-4 pl-6 relative group block focus:outline-none cursor-pointer"
                  >
                    {/* Glowing active node dot */}
                    <div className={`absolute -left-[4.5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                      isActive ? "bg-brand-accent scale-[1.75]" : "bg-zinc-300 group-hover:bg-[#0F5D2F]"
                    }`} />
                    
                    <div className="flex items-center gap-3">
                      {getStepIcon(idx, isActive)}
                      <span className={`text-[10px] font-mono tracking-widest font-bold transition-colors ${
                        isActive ? "text-[#0F5D2F]" : "text-zinc-400"
                      }`}>
                        STEP {step.stepNumber}
                      </span>
                    </div>

                    <h3 className={`text-base font-bold font-display mt-1 transition-colors ${
                      isActive ? "text-[#111111]" : "text-zinc-500 group-hover:text-[#111111]"
                    }`}>
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Custom Narrative detailed quote block */}
            <div className="bg-white rounded-[24px] p-8 border border-brand-charcoal/5 shadow-sm min-h-[200px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <span className="text-[10px] font-bold uppercase text-[#0F5D2F] tracking-widest block font-mono">
                    {currentStep.badge}
                  </span>
                  <p className="text-sm font-bold text-[#111111]">
                    {currentStep.subtitle}
                  </p>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed font-medium">
                    {currentStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Visualizer Image screen sync with Framer Motion fade-transitions */}
          <div className="col-span-1 lg:col-span-12 lg:col-start-7 lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden shadow-xl bg-zinc-100">
              
              {/* Picture screen slider */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStepIndex}
                  src={getImageForIndex(activeStepIndex)}
                  alt={currentStep.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Glowing decorative frame boundary info */}
              <div className="absolute inset-0 border border-black/5 rounded-[24px] pointer-events-none" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[9px] font-mono tracking-widest text-white uppercase">
                Interactive Visual Portal
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
