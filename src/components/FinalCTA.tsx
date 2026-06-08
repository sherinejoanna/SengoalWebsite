import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Globe } from "lucide-react";

interface CTAProps {
  ctaImagePath: string;
}

export default function FinalCTA({ ctaImagePath }: CTAProps) {
  return (
    <section id="pledge" className="relative py-24 md:py-36 overflow-hidden bg-brand-offwhite border-t border-brand-charcoal/5">
      {/* Decorative clean outline grids matching light modern minimalism */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Container for content */}
        <div className="max-w-[720px] space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/5 border border-brand-green/15">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0F5D2F]">
              National Sustainable Development Alignment
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] uppercase tracking-[-0.03em] leading-[0.95]">
            Circular Today.<br />
            <span className="text-[#0F5D2F]">Greener Tomorrow.</span>
          </h2>

          <p className="text-[#4A4A4A] text-base md:text-lg font-medium leading-relaxed max-w-[620px] mx-auto">
            Join the Sengoal Commitment. Register your household, business, or shrine to trigger smart collection canister logistics, track your offsets, and build regional circular energy corridors.
          </p>

          {/* Simple Premium CTA Buttons - 48px height, rounded-full, 24px padding */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="[PLACEHOLDER_PLEDGE_URL]"
              className="h-12 inline-flex items-center justify-center px-6 rounded-full bg-[#0F5D2F] hover:bg-brand-forest text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Take The Pledge
            </a>
            <a
              href="mailto:partner@sengoal.com?subject=Strategic Partnership Proposal"
              className="h-12 inline-flex items-center justify-center px-6 rounded-full border border-brand-green/20 hover:border-[#0F5D2F] text-[#0F5D2F] font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>

          {/* Environmental metrics badge underneath the CTA to keep it engaging and elegant */}
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto pt-10 border-t border-brand-charcoal/5 font-mono text-left">
            <div>
              <div className="text-[10px] text-[#4A4A4A] uppercase tracking-widest font-bold flex items-center gap-1.5 mb-1.5">
                <Leaf className="w-3.5 h-3.5 text-brand-accent" />
                EST. OFFSET
              </div>
              <p className="text-xl font-bold text-[#111111]">2.8 kg CO₂</p>
              <p className="text-[10px] text-zinc-500 font-sans mt-1">Per litre of processed bio-fuel.</p>
            </div>
            <div>
              <div className="text-[10px] text-[#4A4A4A] uppercase tracking-widest font-bold flex items-center gap-1.5 mb-1.5">
                <Globe className="w-3.5 h-3.5 text-[#F5C542]" />
                WATER PURITY
              </div>
              <p className="text-xl font-bold text-[#111111]">100K Litres</p>
              <p className="text-[10px] text-zinc-500 font-sans mt-1">Saved from wastewater logging.</p>
            </div>
          </div>

          <div className="text-zinc-400 text-[10px] tracking-wider uppercase pt-6 font-mono">
            Sengoal Circular Infrastructure Index // Updated live.
          </div>

        </div>

      </div>
    </section>
  );
}
