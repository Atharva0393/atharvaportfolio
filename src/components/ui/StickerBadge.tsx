import React from "react";
import { cn } from "@/lib/utils";

export interface StickerBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "mustard" | "pink" | "mint" | "blue" | "paper" | "black";
  size?: "xs" | "sm" | "md";
  glyph?: "star" | "flower" | "target" | "heart" | "quotes" | "sparkle";
  rotate?: "left" | "right" | "none";
  interactive?: boolean;
  children: React.ReactNode;
}

/**
 * Colorful scrapbook candy sticker badge with crisp borders and micro-glyphs.
 */
export const StickerBadge: React.FC<StickerBadgeProps> = ({
  variant = "mustard",
  size = "sm",
  glyph,
  rotate = "none",
  interactive = false,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    mustard: "bg-mustard text-ink border-ink shadow-[2px_2px_0px_#211F1C]",
    pink: "bg-pink text-white border-ink shadow-[2px_2px_0px_#211F1C]",
    mint: "bg-mint text-ink border-ink shadow-[2px_2px_0px_#211F1C]",
    blue: "bg-blue text-white border-ink shadow-[2px_2px_0px_#211F1C]",
    paper: "bg-paper text-ink border-ink shadow-[2px_2px_0px_#211F1C]",
    black: "bg-ink text-paper border-ink shadow-[2px_2px_0px_#F5CC45]",
  };

  const sizeStyles = {
    xs: "px-2 py-0.5 text-[10px] gap-1 font-mono font-bold rounded-xs",
    sm: "px-3 py-1 text-xs gap-1.5 font-mono font-bold rounded-xs",
    md: "px-4 py-1.5 text-sm gap-2 font-mono font-bold rounded-xs",
  };

  const rotateStyles = {
    none: "rotate-0",
    left: "-rotate-2 hover:-rotate-3",
    right: "rotate-2 hover:rotate-3",
  };

  const renderGlyph = () => {
    switch (glyph) {
      case "target":
        return <span className="inline-block w-2.5 h-2.5 rounded-full border border-current bg-white/80" />;
      case "star":
        return <span className="text-xs leading-none">★</span>;
      case "flower":
        return <span className="text-xs leading-none">✿</span>;
      case "heart":
        return <span className="text-xs leading-none">♥</span>;
      case "quotes":
        return <span className="text-xs leading-none font-serif">“</span>;
      case "sparkle":
        return <span className="text-xs leading-none">✦</span>;
      default:
        return null;
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center border font-mono select-none tracking-tight transition-transform duration-150",
        interactive && "cursor-pointer hover:scale-105 active:scale-95 active:shadow-none",
        variantStyles[variant],
        sizeStyles[size],
        rotateStyles[rotate],
        className
      )}
      {...props}
    >
      {renderGlyph()}
      <span>{children}</span>
    </span>
  );
};
