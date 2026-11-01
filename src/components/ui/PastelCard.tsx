import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface PastelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "mint"
    | "lavender"
    | "peach"
    | "white"
    | "cream"
    | "paper"
    | "secondary"
    | "mustard"
    | "black";
  radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "24" | "28" | "32";
  padding?: "none" | "compact" | "default" | "generous";
  interactive?: boolean;
  shadow?: "none" | "sm" | "offset-sm" | "offset-md" | "offset-lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const PastelCard: React.FC<PastelCardProps> = ({
  variant = "paper",
  radius = "md",
  padding = "default",
  interactive = false,
  shadow = "none",
  href,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const variantClasses: Record<string, string> = {
    paper: "bg-paper text-ink border-ink/20",
    secondary: "bg-secondary-paper text-ink border-ink/20",
    mustard: "bg-mustard text-ink border-ink",
    black: "bg-ink text-paper border-ink",
    mint: "bg-mint/40 text-ink border-mint-border/60",
    lavender: "bg-lavender text-ink border-lavender-border/50",
    peach: "bg-peach text-ink border-peach-border/50",
    white: "bg-white text-ink border-ink/15",
    cream: "bg-secondary-paper text-ink border-ink/15",
  };

  const radiusClasses: Record<string, string> = {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "24": "rounded-lg", // Updated for retro editorial paper aesthetic (was bubbly 24px)
    "28": "rounded-xl", // Updated for retro editorial paper aesthetic (was bubbly 28px)
    "32": "rounded-xl",
  };

  const shadowClasses: Record<string, string> = {
    none: "",
    sm: "shadow-sm",
    "offset-sm": "shadow-offset-sm",
    "offset-md": "shadow-offset-md",
    "offset-lg": "shadow-offset-lg",
  };

  const paddingClasses = {
    none: "p-0",
    compact: "p-4 sm:p-5",
    default: "p-6 sm:p-8",
    generous: "p-8 sm:p-10 lg:p-12",
  };

  const interactiveClasses = interactive
    ? "transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset-md hover:border-ink cursor-pointer will-change-transform active:translate-x-0 active:translate-y-0 active:shadow-none"
    : "";

  const combinedClasses = cn(
    "relative border overflow-hidden",
    variantClasses[variant] || variantClasses.paper,
    radiusClasses[radius] || radiusClasses.md,
    paddingClasses[padding],
    shadowClasses[shadow],
    interactiveClasses,
    "focus-ring",
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(combinedClasses, "block")}
        >
          {children}
        </a>
      );
    }
    if (href.startsWith("/") && !href.includes("#")) {
      return (
        <Link to={href} className={cn(combinedClasses, "block")}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cn(combinedClasses, "block")}>
        {children}
      </a>
    );
  }

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};
