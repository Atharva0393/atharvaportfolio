import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  isExternal?: boolean;
  showArrow?: boolean;
  arrowDirection?: "up-right" | "right" | "down";
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "mustard"
    | "black"
    | "black-pill"
    | "paper-outline"
    | "sticker"
    | "pastel-mint"
    | "pastel-lavender"
    | "pastel-peach";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "sm" | "md" | "none";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  isExternal = false,
  showArrow = false,
  arrowDirection = "up-right",
  variant = "primary",
  size = "md",
  rounded = "full",
  icon,
  className,
  children,
  onClick,
  ...props
}) => {
  const roundedClasses = {
    full: "rounded-full",
    sm: "rounded-sm",
    md: "rounded-md",
    none: "rounded-none",
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5 min-h-[34px]",
    md: "px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base gap-2 min-h-[42px]",
    lg: "px-6 sm:px-7 py-3 text-base sm:text-lg gap-2.5 min-h-[48px]",
  };

  const variantClasses = {
    primary: cn(
      "bg-ink text-paper font-medium",
      "hover:bg-neutral-800 hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.99]",
      "border border-ink"
    ),
    secondary: cn(
      "bg-paper text-ink font-medium border border-ink/20",
      "hover:bg-secondary-paper hover:border-ink hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.99]"
    ),
    mustard: cn(
      "bg-mustard text-ink font-medium border border-ink",
      "hover:brightness-105 hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.99]"
    ),
    black: cn(
      "bg-ink text-paper font-medium border border-ink",
      "hover:bg-neutral-800 hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.99]"
    ),
    "black-pill": cn(
      "bg-ink text-paper font-medium border border-ink tracking-wide text-xs uppercase px-5 py-2",
      "hover:bg-neutral-800 hover:shadow-offset-sm hover:-translate-y-0.5",
      "active:translate-y-0 active:shadow-none"
    ),
    "paper-outline": cn(
      "bg-paper text-ink font-medium border border-ink/40",
      "hover:border-ink hover:bg-secondary-paper hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:shadow-none active:scale-[0.99]"
    ),
    sticker: cn(
      "bg-paper text-ink font-mono text-xs uppercase font-medium border border-ink/60",
      "hover:border-ink hover:bg-mustard hover:shadow-offset-sm hover:-translate-y-0.5",
      "active:translate-y-0 active:shadow-none"
    ),
    outline: cn(
      "bg-transparent text-ink font-medium border border-ink/30",
      "hover:bg-ink hover:text-paper hover:border-ink hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:scale-[0.99]"
    ),
    ghost: cn(
      "bg-transparent text-ink font-medium border border-transparent",
      "hover:text-ink hover:bg-black/5",
      "active:scale-[0.99]"
    ),
    "pastel-mint": cn(
      "bg-mint text-ink font-medium border border-ink/20",
      "hover:brightness-95 hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:scale-[0.99]"
    ),
    "pastel-lavender": cn(
      "bg-lavender text-ink font-medium border border-ink/20",
      "hover:brightness-95 hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:scale-[0.99]"
    ),
    "pastel-peach": cn(
      "bg-peach text-ink font-medium border border-ink/20",
      "hover:brightness-95 hover:shadow-offset-sm hover:-translate-x-0.5 hover:-translate-y-0.5",
      "active:translate-x-0 active:translate-y-0 active:scale-[0.99]"
    ),
  };

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center font-body tracking-tight select-none cursor-pointer",
    "transition-all duration-200 ease-out",
    "focus-ring",
    "disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none",
    roundedClasses[rounded],
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const renderArrow = () => {
    if (!showArrow) return null;

    if (arrowDirection === "right") {
      return (
        <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-1">
          <ArrowRight className="w-4 h-4 transition-transform duration-200" aria-hidden="true" />
        </span>
      );
    }

    if (arrowDirection === "down") {
      return (
        <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-y-0.5">
          <ArrowDown className="w-4 h-4 transition-transform duration-200" aria-hidden="true" />
        </span>
      );
    }

    return (
      <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200" aria-hidden="true" />
      </span>
    );
  };

  const content = (
    <>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {renderArrow()}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={onClick as any}
        >
          {content}
        </a>
      );
    }

    // Client-side SPA navigation for internal routes without hash
    if (href.startsWith("/") && !href.includes("#") && !href.endsWith(".pdf")) {
      return (
        <Link to={href} className={baseClasses} onClick={onClick as any}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={baseClasses} onClick={onClick as any}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
};
