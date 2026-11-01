import React from "react";
import { cn } from "@/lib/utils";

export interface HandwrittenNoteProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "curved-left" | "curved-right" | "none";
  color?: "mustard" | "ink" | "pink" | "blue" | "terracotta";
  rotate?: "left" | "right" | "slight-left" | "slight-right" | "none";
  size?: "sm" | "md" | "lg" | "xl";
  withUnderline?: boolean;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  direction = "none",
  color = "ink",
  rotate = "left",
  size = "md",
  withUnderline = false,
  className,
  ...props
}) => {
  const rotateClasses = {
    left: "-rotate-3",
    "slight-left": "-rotate-1.5",
    none: "rotate-0",
    "slight-right": "rotate-1.5",
    right: "rotate-3",
  };

  const colorClasses = {
    mustard: "text-[#D4AB25]",
    ink: "text-ink",
    pink: "text-[#DC6B8C]",
    blue: "text-[#3B82F6]",
    terracotta: "text-[#D4AB25]",
  };

  const sizeClasses = {
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
    xl: "text-2xl md:text-3xl",
  };

  const renderArrow = (pos: "before" | "after") => {
    if (pos === "before" && (direction === "left" || direction === "up" || direction === "curved-left")) {
      if (direction === "curved-left") {
        return (
          <svg
            className="w-5 h-5 inline-block -translate-y-0.5 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        );
      }
      return (
        <span className="text-xl inline-block -translate-y-0.5 select-none" aria-hidden="true">
          {direction === "left" ? "←" : "↑"}
        </span>
      );
    }

    if (pos === "after" && (direction === "right" || direction === "down" || direction === "curved-right")) {
      if (direction === "curved-right") {
        return (
          <svg
            className="w-5 h-5 inline-block -translate-y-0.5 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        );
      }
      return (
        <span className="text-xl inline-block -translate-y-0.5 select-none" aria-hidden="true">
          {direction === "right" ? "→" : "↓"}
        </span>
      );
    }

    return null;
  };

  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-1.5 font-handwriting font-semibold select-none leading-none tracking-wide",
        rotateClasses[rotate],
        colorClasses[color],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {renderArrow("before")}
      <span>{children}</span>
      {renderArrow("after")}

      {/* Sketched Hand-drawn underline if enabled */}
      {withUnderline && (
        <svg
          className="absolute -bottom-2 left-0 w-full h-2 text-current overflow-visible pointer-events-none opacity-80"
          viewBox="0 0 100 8"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 5 C 25 2, 70 7, 99 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
};
