import React from "react";
import { cn } from "@/lib/utils";

export interface WashiTapeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "blue" | "mustard" | "pink" | "mint";
  color?: "white" | "blue" | "mustard" | "pink" | "mint";
  size?: "sm" | "md" | "lg";
  tilt?: "left" | "right" | "slight-left" | "slight-right" | "flat";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Reusable translucent washi tape strip for scrapbook photos, notes, and containers.
 */
export const WashiTape: React.FC<WashiTapeProps> = ({
  variant = "white",
  color,
  size = "md",
  tilt = "slight-left",
  className,
  children,
  ...props
}) => {
  const chosenVariant = color || variant;

  const variantStyles = {
    white: "bg-white/80 border-white/60 text-ink/80",
    blue: "bg-[#7799E8]/80 border-[#6287DE]/60 text-white",
    mustard: "bg-[#F5CC45]/85 border-[#DEB52E]/70 text-ink",
    pink: "bg-[#F28AA8]/80 border-[#DC6B8C]/60 text-white",
    mint: "bg-[#9FD8C0]/85 border-[#76BEA0]/70 text-ink",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 min-w-[56px] min-h-[18px] text-[10px]",
    md: "px-3 py-1 min-w-[80px] min-h-[22px] text-xs",
    lg: "px-4 py-1.5 min-w-[110px] min-h-[26px] text-xs sm:text-sm",
  };

  const tiltStyles = {
    left: "-rotate-6",
    "slight-left": "-rotate-2",
    flat: "rotate-0",
    "slight-right": "rotate-2",
    right: "rotate-6",
  };

  return (
    <div
      className={cn(
        "select-none backdrop-blur-[1px] shadow-[0_1px_3px_rgba(33,31,28,0.12)] border border-t-white/40",
        "relative inline-flex items-center justify-center font-mono font-medium transition-transform duration-200",
        variantStyles[chosenVariant],
        sizeStyles[size],
        tiltStyles[tilt],
        className
      )}
      aria-hidden={children ? undefined : "true"}
      {...props}
    >
      {/* Subtle jagged/torn tape edges on ends */}
      <span className="absolute -left-0.5 top-0 bottom-0 w-1 bg-inherit opacity-80" />
      <span className="absolute -right-0.5 top-0 bottom-0 w-1 bg-inherit opacity-80" />
      {children}
    </div>
  );
};
