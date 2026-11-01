import React from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial Dot Indicator (Notebook status dot)
 */
export const Dot: React.FC<{
  size?: "sm" | "md" | "lg";
  color?: "mustard" | "pink" | "mint" | "blue" | "ink" | "terracotta" | "lavender";
  className?: string;
  pulse?: boolean;
}> = ({ size = "md", color = "mustard", className, pulse = false }) => {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2.5 h-2.5",
    lg: "w-3.5 h-3.5",
  };

  const colorClasses = {
    mustard: "bg-mustard",
    pink: "bg-pink",
    mint: "bg-mint",
    blue: "bg-blue",
    ink: "bg-ink",
    terracotta: "bg-mustard",
    lavender: "bg-blue",
  };

  return (
    <span
      className={cn(
        "inline-block rounded-full select-none",
        sizeClasses[size],
        colorClasses[color],
        pulse && "animate-pulse",
        className
      )}
      aria-hidden="true"
    />
  );
};

/**
 * Editorial Star / Asterisk
 */
export const EditorialAsterisk: React.FC<{
  size?: "sm" | "md" | "lg";
  color?: "mustard" | "pink" | "mint" | "blue" | "ink" | "terracotta" | "lavender" | "peach";
  className?: string;
}> = ({ size = "md", color = "mustard", className }) => {
  const sizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  const colorClasses = {
    mustard: "text-mustard",
    pink: "text-pink",
    mint: "text-mint",
    blue: "text-blue",
    ink: "text-ink",
    terracotta: "text-mustard",
    lavender: "text-blue",
    peach: "text-pink",
  };

  return (
    <svg
      className={cn(sizeClasses[size], colorClasses[color], "inline-block select-none", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.6 7.4L21 11l-7.4 1.6L12 20l-1.6-7.4L3 11l7.4-1.6L12 2z" />
    </svg>
  );
};

/**
 * Retro Target Sticker Glyph (Mint green bullseye icon seen in Panel 1)
 */
export const TargetSticker: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <span className={cn("inline-flex items-center justify-center align-middle mx-1", className)} aria-hidden="true">
    <svg viewBox="0 0 24 24" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#9FD8C0" stroke="#211F1C" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" fill="#F8F7F1" stroke="#211F1C" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" fill="#211F1C" />
    </svg>
  </span>
);

/**
 * Retro Flower Sticker Glyph (Pink flower icon seen in Panel 1)
 */
export const FlowerSticker: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <span className={cn("inline-flex items-center justify-center align-middle mx-1 text-pink", className)} aria-hidden="true">
    <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#F5CC45" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="12" cy="5" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="12" cy="19" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="5" cy="12" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="19" cy="12" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="7" cy="7" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="17" cy="7" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="7" cy="17" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
      <circle cx="17" cy="17" r="3.2" fill="#F28AA8" stroke="#211F1C" strokeWidth="1.2" />
    </svg>
  </span>
);

/**
 * Hand-Drawn Doodle Arrow
 */
export const DoodleArrow: React.FC<{
  direction?: "right" | "left" | "down-curved";
  className?: string;
}> = ({ direction = "right", className = "w-12 h-6" }) => {
  if (direction === "down-curved") {
    return (
      <svg
        viewBox="0 0 54 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("text-ink select-none overflow-visible", className)}
        aria-hidden="true"
      >
        <path d="M4 4 C 18 2, 38 8, 44 24 M 36 20 L 44 25 L 48 16" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-ink select-none overflow-visible", className)}
      aria-hidden="true"
    >
      <path d="M2 8 C 16 6, 32 6, 44 8 M 38 3 L 45 8 L 38 13" />
    </svg>
  );
};

/**
 * Subtle Editorial Corner Cross (+)
 */
export const CornerCross: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <span
      className={cn("font-mono text-xs text-ink/40 select-none", className)}
      aria-hidden="true"
    >
      +
    </span>
  );
};

/**
 * GitHub Brand SVG Icon
 */
export const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Editorial Hairline Divider with optional central dot
 */
export const HairlineDivider: React.FC<{
  withDot?: boolean;
  className?: string;
}> = ({ withDot = false, className }) => {
  if (withDot) {
    return (
      <div className={cn("relative flex items-center justify-center my-8", className)}>
        <div className="w-full border-t border-ink/15" />
        <span className="absolute px-3 bg-paper">
          <Dot size="sm" color="mustard" />
        </span>
      </div>
    );
  }

  return <hr className={cn("border-t border-ink/15 my-8", className)} />;
};
