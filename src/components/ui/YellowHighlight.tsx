import React from "react";
import { cn } from "@/lib/utils";

export interface YellowHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "pill" | "marker" | "box" | "sticker";
  rotate?: "left" | "right" | "none";
  className?: string;
  children: React.ReactNode;
}

/**
 * Mustard-yellow highlight label matching the retro scrapbook editorial identity.
 */
export const YellowHighlight: React.FC<YellowHighlightProps> = ({
  variant = "pill",
  rotate = "none",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    pill: "px-2.5 py-0.5 rounded-full bg-mustard text-ink border border-ink/80 text-xs font-mono font-bold shadow-[1px_1px_0px_#211F1C]",
    box: "px-3 py-1 rounded-sm bg-mustard text-ink border border-ink/90 font-mono text-xs font-bold shadow-[2px_2px_0px_#211F1C]",
    marker: "bg-mustard/60 px-1.5 py-0.5 rounded-xs text-ink font-semibold",
    sticker: "px-2.5 py-1 bg-mustard text-ink border border-dashed border-ink/60 font-mono text-xs shadow-sm",
  };

  const rotateStyles = {
    none: "rotate-0",
    left: "-rotate-2",
    right: "rotate-2",
  };

  return (
    <span
      className={cn(
        "inline-block select-none",
        variantStyles[variant],
        rotateStyles[rotate],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

