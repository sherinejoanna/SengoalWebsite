import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  heroImagePath: string;
}

export default function Hero({ heroImagePath }: HeroProps) {
  // Use brighter generated image
  const resolvedHeroImg = "/src/assets/images/sengoal_refinery_1780903957652.png";

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-brand-offwhite">
      
      {/* Background Cinematic Visual with Smooth Zoom & Motion Hover Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <img
            src={resolvedHeroImg}
            alt="Brilliant golden organic stream transforming to clean sustainable energy in refined white structures"
            className="w-full h-full object-cover object-right-bottom md:object-center select-none scale-102"
            referrerPolicy="no-referrer"
          />
          {/* Subtle light elegant gradient overlay for perfect typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F5]/95 via-[#F8F8F5]/90 to-[#F8F8F5]/20 md:from-[#F8F8F5]/98 md:via-[#F8F8F5]/85 md:to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8F8F5] to-transparent pointer-events-none" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center">
        
        {/* Layout Grid: 55% Content (7 cols), 45% Space (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full my-auto">
          
          {/* Left Column: Content (55% on desktop) */}
          <div className="col-span-1 lg:col-span-7 max-w-[850px] py-8 rounded-3xl bg-white/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 md:p-8 lg:p-0 border border-white/40 lg:border-none">
            
            {/* Small Pledged Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/5 border border-brand-green/15 mb-6"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0F5D2F]">
                100+ Families Already Pledged
              </span>
            </motion.div>

            {/* Premium, mathematically adjusted typography: max-width 850px, clamp size, 4 lines max, perfect line-height */}
            <h2 className="font-display text-[111px] font-black uppercase tracking-[-0.05em] text-[#111111] leading-[0.92] mb-6 text-[clamp(2.8rem,7.5vw,6.5rem)]">
              <motion.span
                className="block overflow-hidden"
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ paddingBottom: "0.05em" }}
              >
                India's First
              </motion.span>
              <motion.span
                className="block overflow-hidden text-[#0F5D2F]"
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ paddingBottom: "0.05em" }}
              >
                Consumer Circular
              </motion.span>
              <motion.span
                className="block overflow-hidden"
                initial={{ y: "40%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ paddingBottom: "0.05em" }}
              >
                Energy Network
              </motion.span>
            </h2>

            {/* Subtext Summary - max-width 720px, responsive, clear contrast */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-[19px] text-[#4A4A4A] font-medium leading-relaxed mb-10 max-w-[580px]"
            >
              Turning household waste oil into cleaner communities, renewable fuel, and a greener future for India.
            </motion.p>

            {/* Action CTAs - 48px height, 999px border radius, 24px horizontal padding, 16px gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-row flex-wrap items-center gap-[16px]"
            >
              <a
                href="mailto:partner@sengoal.com?subject=Strategic Partnership Proposal"
                className="h-12 inline-flex items-center justify-center px-6 rounded-[999px] bg-[#0F5D2F] hover:bg-brand-forest text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Partner With Us
              </a>
              <a
                href="[PLACEHOLDER_PLEDGE_URL]"
                className="h-12 inline-flex items-center justify-center px-6 rounded-[999px] bg-white hover:bg-gray-50 border border-brand-green/20 text-[#0F5D2F] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                Take The Pledge
              </a>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Spatial breathing space */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="relative z-10 w-full flex justify-center py-4">
        <motion.a
          href="#problem"
          className="text-brand-forest/40 hover:text-brand-green p-2 transition-colors duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
}
