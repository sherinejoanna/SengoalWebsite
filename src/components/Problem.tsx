import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface ProblemProps {
  kitchenImagePath: string;
}

function Counter({ value, duration = 2, suffix = "", prefix = "" }: { value: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = (end - start) / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount((prev) => {
          const nextVal = prev + increment;
          return nextVal > end ? end : nextVal;
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const displayVal = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={nodeRef} className="font-display">
      {prefix}
      {displayVal}
      {suffix}
    </span>
  );
}

export default function Problem({ kitchenImagePath }: ProblemProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="problem" 
      className="py-16 md:py-24 lg:py-[120px] bg-brand-offwhite border-b border-brand-charcoal/5" 
      ref={containerRef}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Topic Header Grid */}
        <div className="mb-16 md:mb-24 max-w-[720px] space-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0F5D2F]">
            01 / Background Crisis
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight uppercase">
            The invisible organic waste tracing silently into regional waters.
          </h2>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Interactive Scrolling Statistics */}
          <div className="col-span-1 lg:col-span-7 space-y-16">
            
            {/* Stat 1 */}
            <div className="border-l border-brand-green/30 pl-8 space-y-6">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#111111] leading-none flex items-baseline">
                <Counter value={6.2} suffix=" Billion" />
                <span className="text-xl md:text-2xl font-bold text-[#0F5D2F] ml-3">Litres</span>
              </div>
              <p className="font-display text-[19px] font-bold text-[#111111] leading-[1.3]">
                Used cooking oil (UCO) generated every single year in India.
              </p>
              <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
                An astronomical volume of waste hydrocarbons that is either swept down household plumbing sewers, spoiling pipelines, or recycled illegally back into commercial food cycles.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="border-l border-brand-accent/30 pl-8 space-y-6">
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F5D2F] leading-none">
                <Counter value={3} suffix="x Higher" />
              </div>
              <p className="font-display text-[19px] font-bold text-[#111111] leading-[1.3]">
                Acreage score of severe long-term cardiovascular health risk.
              </p>
              <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
                Repeated reheating of cooking lipids produces dangerous aldehydes, trans-fats, and heavy cyclic polar compounds that damage regional well-being when recycled.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="border-l border-brand-gold/40 pl-8 space-y-6">
              <div className="font-display text-[28px] md:text-4xl font-black text-brand-gold leading-none">
                UNREGULATED CHAINS
              </div>
              <p className="font-display text-[19px] font-bold text-[#111111] leading-[1.3]">
                Drainage disposal & malicious recycling of contaminated fats.
              </p>
              <p className="text-[15px] text-[#4A4A4A] leading-relaxed max-w-[580px] font-medium">
                Domestic cooking oil represents a major threat, clogging urban drainage municipal corridors and returning as unsafe adulterated cooking agents.
              </p>
            </div>

          </div>

          {/* Right Column: Immersive Photographic Asset */}
          <div className="col-span-1 lg:col-span-5">
            <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-xl bg-brand-forest/5">
              <motion.div
                initial={{ scale: 1.08, filter: "brightness(0.9) blur(4px)" }}
                animate={isInView ? { scale: 1, filter: "brightness(1) blur(0px)" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <img
                  src={kitchenImagePath}
                  alt="Kitchen showing boiling cooking oils under cinematic moody lights"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Photo caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-brand-accent font-bold mb-1">
                    Kitchen Sourcing Core
                  </p>
                  <p className="text-xs opacity-90 max-w-sm">
                    Reheating oils beyond standard smoke thresholds generates highly toxic compounds.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
