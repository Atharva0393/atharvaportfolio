import React from "react";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

export interface FolderTabCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "paper" | "secondary" | "mustard" | "black";
  tabLabel?: string;
  tabColor?: "paper" | "secondary" | "mustard" | "black" | "blue" | "pink" | "mint";
  tabPosition?: "left" | "right";
  withTape?: boolean;
  tapeColor?: "white" | "blue" | "mustard" | "pink";
  className?: string;
  children: React.ReactNode;
}

/**
 * Retro asymmetric folder-tab cutout container matching the scrapbook editorial identity.
 */
export const FolderTabCard: React.FC<FolderTabCardProps> = ({
  variant = "paper",
  tabLabel,
  tabColor = "mustard",
  tabPosition = "left",
  withTape = false,
  tapeColor = "white",
  className,
  children,
  ...props
}) => {
  const containerVariants = {
    paper: "bg-paper text-ink border-ink/25 shadow-ink-offset-sm",
    secondary: "bg-paper-secondary text-ink border-ink/30 shadow-ink-offset-sm",
    mustard: "bg-mustard text-ink border-ink shadow-ink-offset-md",
    black: "bg-ink-pure text-paper border-ink shadow-mustard-offset",
  };

  const tabVariants = {
    paper: "bg-paper text-ink border-ink/25",
    secondary: "bg-paper-secondary text-ink border-ink/30",
    mustard: "bg-mustard text-ink border-ink font-bold",
    black: "bg-ink-pure text-paper border-ink font-bold",
    blue: "bg-blue text-white border-ink font-bold",
    pink: "bg-pink text-white border-ink font-bold",
    mint: "bg-mint text-ink border-ink font-bold",
  };

  return (
    <div className={cn("relative mt-4", className)} {...props}>
      {/* Tape decoration if enabled */}
      {withTape && (
        <div className="absolute -top-3.5 right-6 z-20">
          <WashiTape variant={tapeColor} size="md" tilt="slight-right" />
        </div>
      )}

      {/* Protruding Index Tab */}
      {tabLabel && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-4 py-1.5 border-t border-x rounded-t-sm font-mono text-xs uppercase tracking-wider select-none",
            tabPosition === "left" ? "ml-0" : "ml-auto mr-4",
            tabVariants[tabColor]
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          <span>{tabLabel}</span>
        </div>
      )}

      {/* Main Container Body */}
      <div
        className={cn(
          "relative border rounded-b-sm rounded-tr-sm p-6 sm:p-8 lg:p-10 transition-all duration-200",
          tabPosition === "right" && "rounded-tl-sm rounded-tr-none",
          containerVariants[variant]
        )}
      >
        {children}
      </div>
    </div>
  );
};

