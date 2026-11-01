import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
}

/**
 * Editorial scroll-reveal wrapper using native IntersectionObserver.
 * High-performance, zero external animation dependencies, accessible with prefers-reduced-motion.
 */
export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, render immediately without transitions
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", delayClass, className)}
      {...props}
    >
      {children}
    </div>
  );
};

