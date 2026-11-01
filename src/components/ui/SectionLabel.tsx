import React from "react";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: string | number;
  label: string;
  variant?: "pill" | "subtle" | "technical" | "tape-pill" | "mustard";
  color?: "ink" | "mustard" | "mint" | "pink" | "blue" | "terracotta" | "lavender" | "peach";
  withDot?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  variant = "pill",
  color = "mustard",
  withDot = true,
  className,
  ...props
}) => {
  const formattedNumber =
    typeof number === "number" ? String(number).padStart(2, "0") : number;

  if (variant === "tape-pill") {
    return (
      <div className={cn("relative inline-block mt-2 select-none", className)} {...props}>
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
          <WashiTape variant="blue" size="sm" tilt="flat" />
        </div>
        <div className="px-4 py-1.5 rounded-sm bg-white border border-ink/80 text-xs font-mono font-bold text-ink shadow-[1px_1px_0px_#211F1C]">
          {label}
        </div>
      </div>
    );
  }

  const colorVariants: Record<string, { pill: string; subtle: string; technical: string; dot: string }> = {
    ink: {
      pill: "bg-ink text-paper border-ink",
      subtle: "text-ink border-ink/20 bg-ink/5",
      technical: "text-ink/80",
      dot: "bg-mustard",
    },
    mustard: {
      pill: "bg-mustard text-ink border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-mustard-border bg-mustard/30",
      technical: "text-ink font-bold",
      dot: "bg-mustard",
    },
    terracotta: {
      pill: "bg-mustard text-ink border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-mustard-border bg-mustard/30",
      technical: "text-ink font-bold",
      dot: "bg-mustard",
    },
    mint: {
      pill: "bg-mint text-ink border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-mint-border bg-mint/40",
      technical: "text-mint-dark",
      dot: "bg-mint-dark",
    },
    pink: {
      pill: "bg-pink text-white border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-pink-border bg-pink/40",
      technical: "text-pink-dark",
      dot: "bg-pink",
    },
    blue: {
      pill: "bg-blue text-white border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-blue-border bg-blue/40",
      technical: "text-blue-dark",
      dot: "bg-blue",
    },
    lavender: {
      pill: "bg-blue text-white border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-blue-border bg-blue/40",
      technical: "text-blue-dark",
      dot: "bg-blue",
    },
    peach: {
      pill: "bg-pink text-white border-ink font-bold shadow-[1px_1px_0px_#211F1C]",
      subtle: "text-ink border-pink-border bg-pink/40",
      technical: "text-pink-dark",
      dot: "bg-pink",
    },
  };

  const selectedColor = colorVariants[color] || colorVariants.mustard;

  if (variant === "technical") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider",
          selectedColor.technical,
          className
        )}
        {...props}
      >
        {withDot && (
          <span
            className={cn("w-1.5 h-1.5 rounded-full", selectedColor.dot)}
            aria-hidden="true"
          />
        )}
        {formattedNumber && (
          <span className="font-semibold text-mustard">[{formattedNumber}]</span>
        )}
        <span>{label}</span>
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-sm border text-xs font-medium font-mono uppercase tracking-wider",
          selectedColor.subtle,
          className
        )}
        {...props}
      >
        {withDot && (
          <span
            className={cn("w-1.5 h-1.5 rounded-full", selectedColor.dot)}
            aria-hidden="true"
          />
        )}
        {formattedNumber && <span>{formattedNumber} —</span>}
        <span>{label}</span>
      </div>
    );
  }

  // Default: pill / notebook sticker label
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-xs border text-xs font-mono font-bold uppercase tracking-wider select-none",
        selectedColor.pill,
        className
      )}
      {...props}
    >
      {withDot && (
        <span
          className={cn("w-2 h-2 rounded-full", selectedColor.dot)}
          aria-hidden="true"
        />
      )}
      {formattedNumber && <span>{formattedNumber} /</span>}
      <span>{label}</span>
    </div>
  );
};
