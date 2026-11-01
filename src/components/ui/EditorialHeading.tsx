import React from "react";
import { cn } from "@/lib/utils";

export interface EditorialHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  size?: "display-2xl" | "display-xl" | "display-lg" | "h1" | "h2" | "h3" | "h4";
  as?: "h1" | "h2" | "h3" | "h4" | "div";
  children: React.ReactNode;
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  level = 1,
  size,
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || (`h${level}` as const);

  const sizeClasses = {
    "display-2xl": "text-display-2xl font-bold tracking-tighter",
    "display-xl": "text-display-xl font-bold tracking-tight",
    "display-lg": "text-display-lg font-bold tracking-tight",
    h1: "text-heading-1 font-bold tracking-tight",
    h2: "text-heading-2 font-semibold tracking-tight",
    h3: "text-heading-3 font-semibold",
    h4: "text-heading-4 font-medium",
  };

  const defaultSize = size || (level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4");

  return (
    <Component
      className={cn(
        "font-heading text-ink text-balance",
        sizeClasses[defaultSize],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Editorial Highlight word/phrase in terracotta italic
 */
export const Highlight: React.FC<{
  children: React.ReactNode;
  italic?: boolean;
  className?: string;
}> = ({ children, italic = true, className }) => {
  return (
    <span
      className={cn(
        "text-terracotta inline-block transition-colors duration-200",
        italic && "italic font-normal tracking-normal",
        className
      )}
    >
      {children}
    </span>
  );
};

