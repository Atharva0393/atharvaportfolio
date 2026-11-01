import React from "react";
import { cn } from "@/lib/utils";

export interface SketchedFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "pencil" | "mustard" | "dashed";
  className?: string;
  children: React.ReactNode;
}

/**
 * Hand-drawn pencil/marker outlined frame for hero wordmark and key callouts.
 */
export const SketchedFrame: React.FC<SketchedFrameProps> = ({
  variant = "pencil",
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    pencil: "border-[1.5px] border-ink/80 shadow-[1px_1px_0px_#211F1C] bg-transparent",
    mustard: "border-2 border-mustard shadow-[2px_2px_0px_#211F1C] bg-mustard/10",
    dashed: "border-[1.5px] border-dashed border-ink/60 bg-paper-secondary/40",
  };

  return (
    <div
      className={cn(
        "relative rounded-xs p-4 sm:p-6 transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Corner pencil marks */}
      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-ink" />
      <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-ink" />
      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-ink" />
      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-ink" />

      {children}
    </div>
  );
};

