import React from "react";

interface SengoalLogoProps {
  variant?: "full" | "icon" | "horizontal";
  theme?: "light" | "dark";
  height?: number | string;
  mobileHeight?: number | string;
}

export default function SengoalLogo({
  variant = "full",
  theme = "light",
  height = 42,
  mobileHeight = 32,
}: SengoalLogoProps) {
  // Brand colors:
  // Primary Deep Green: #0F5D2F
  // Light / Accent Green: #6FBF44
  // Golden Energy: #F5C542
  const textPrimary = theme === "light" ? "text-brand-forest" : "text-brand-offwhite";
  const textSecondary = theme === "light" ? "text-brand-forest/60" : "text-brand-offwhite/50";

  // Unique IDs for SVG gradients to prevent rendering clashes
  const gradGreenId = `greenGrad-${theme}`;
  const gradGoldId = `goldGrad-${theme}`;

  const renderIcon = () => (
    <svg
      viewBox="0 0 160 80"
      className="inline-block flex-shrink-0"
      style={{
        height: "1em",
        width: "auto",
        verticalAlign: "middle",
      }}
      aria-hidden="true"
    >
      <defs>
        {/* Deep Green to Accent Green Gradient for Infinity loop */}
        <linearGradient id={gradGreenId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#07371D" />
          <stop offset="40%" stopColor="#0F5D2F" />
          <stop offset="100%" stopColor="#6FBF44" />
        </linearGradient>

        {/* Golden energy gradient for oil drop */}
        <linearGradient id={gradGoldId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAD961" />
          <stop offset="100%" stopColor="#F5C542" />
        </linearGradient>
      </defs>

      {/* Infinity Symbol representing Circular Economy */}
      <path
        d="M 45 40 C 45 23.4 58.4 10 75 10 C 91.6 10 101.4 25.5 115 40 C 128.6 54.5 138.4 70 155 70 C 171.6 70 185 56.6 185 40 C 185 23.4 171.6 10 155 10"
        transform="translate(-30, 0)"
        fill="none"
        stroke={`url(#${gradGreenId})`}
        strokeWidth="11"
        strokeLinecap="round"
      />
      
      {/* Dynamic leaf sprouted inside the right loop */}
      <path
        d="M 125 40 C 125 30 135 25 142 32 C 142 32 138 41 129 42 Z"
        fill="#6FBF44"
        transform="translate(-30, 0)"
      />

      {/* Golden Cooking Oil Drop right in the center transition of the loop */}
      <path
        d="M 110 32 C 110 32 116 42 116 46 C 116 50 112 54 108 54 C 104 54 100 50 100 46 C 100 42 110 32 110 32 Z"
        fill={`url(#${gradGoldId})`}
        transform="translate(-14, -2)"
      />
    </svg>
  );

  const parsedHeight = typeof height === "number" ? `${height}px` : height;
  const parsedMobileHeight = typeof mobileHeight === "number" ? `${mobileHeight}px` : mobileHeight;

  if (variant === "icon") {
    return (
      <div 
        style={{ 
          "--h-desktop": parsedHeight, 
          "--h-mobile": parsedMobileHeight 
        } as React.CSSProperties} 
        className="h-[var(--h-mobile)] md:h-[var(--h-desktop)] flex items-center justify-center aspect-[2/1]"
      >
        {renderIcon()}
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div 
        style={{ 
          "--h-desktop": parsedHeight, 
          "--h-mobile": parsedMobileHeight 
        } as React.CSSProperties} 
        className={`flex items-center gap-1.5 h-[var(--h-mobile)] md:h-[var(--h-desktop)] ${textPrimary}`}
      >
        <span className="h-full aspect-[2/1] flex items-center justify-center text-[var(--h-mobile)] md:text-[var(--h-desktop)]">
          {renderIcon()}
        </span>
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display font-semibold tracking-tight text-xl md:text-2xl leading-none">Sengoal</span>
          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] mt-1 font-medium text-brand-accent whitespace-nowrap">
            CIRCULAR TODAY.<br />GREENER TOMORROW.
          </span>
        </div>
      </div>
    );
  }

  // Full original logo variant as shown in user prompt attachment: circular container, infinity, leaf, oil drop
  // "Sengoal" under it, and below "CIRCULAR TODAY. GREENER TOMORROW."
  return (
    <div className="flex flex-col items-center text-center">
      {/* Outer elegant pill/rounded container matching the uploaded asset style */}
      <div className={`p-8 rounded-[48px] border border-brand-green/20 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-700`}>
        <div className="text-[64px] md:text-[80px] w-auto h-[1em] flex items-center justify-center text-[#0F5D2F]">
          {renderIcon()}
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-brand-forest mt-4 leading-none">
          Sengoal
        </h1>
        
        <div className="h-[1px] w-24 bg-brand-green/20 my-4" />
        
        <p className="text-[9px] md:text-[11px] font-bold tracking-[0.25em] text-brand-forest uppercase mt-4">
          CIRCULAR TODAY.<br />GREENER TOMORROW.
        </p>
      </div>
    </div>
  );
}
