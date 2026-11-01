import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "narrow" | "editorial" | "container" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  width = "editorial",
  className,
  children,
  ...props
}) => {
  const widthClasses = {
    narrow: "max-w-narrow",
    editorial: "max-w-editorial",
    container: "max-w-container",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
        widthClasses[width],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

