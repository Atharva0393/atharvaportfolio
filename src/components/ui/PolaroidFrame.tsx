import React from "react";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

export interface PolaroidFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  caption?: string;
  tilt?: "left" | "right" | "slight-left" | "slight-right" | "none";
  tapePosition?: "both" | "top-both" | "top-left" | "top-right" | "top-center" | "none";
  tapeColor?: "white" | "blue" | "mustard" | "pink" | "mint";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Scrapbook polaroid photo frame with white paper borders, tape, and subtle drop shadow.
 */
export const PolaroidFrame: React.FC<PolaroidFrameProps> = ({
  src,
  alt = "Scrapbook photo",
  caption,
  tilt = "slight-left",
  tapePosition = "top-both",
  tapeColor = "blue",
  className,
  children,
  ...props
}) => {
  const tiltStyles = {
    none: "rotate-0",
    "slight-left": "-rotate-3 hover:-rotate-1",
    left: "-rotate-6 hover:-rotate-3",
    "slight-right": "rotate-3 hover:rotate-1",
    right: "rotate-6 hover:rotate-3",
  };

  return (
    <div
      className={cn(
        "relative p-3 pb-5 bg-white border border-ink/20 shadow-[3px_3px_0px_rgba(33,31,28,0.15)] rounded-xs inline-block transition-transform duration-300",
        tiltStyles[tilt],
        className
      )}
      {...props}
    >
      {/* Top Tape Decorations */}
      {tapePosition === "top-left" && (
        <div className="absolute -top-3 -left-3 z-10 pointer-events-none">
          <WashiTape variant={tapeColor} size="sm" tilt="left" />
        </div>
      )}
      {tapePosition === "top-right" && (
        <div className="absolute -top-3 -right-3 z-10 pointer-events-none">
          <WashiTape variant={tapeColor} size="sm" tilt="right" />
        </div>
      )}
      {tapePosition === "top-center" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <WashiTape variant={tapeColor} size="md" tilt="flat" />
        </div>
      )}
      {tapePosition === "top-both" && (
        <>
          <div className="absolute -top-3 -left-3 z-10 pointer-events-none">
            <WashiTape variant={tapeColor} size="sm" tilt="left" />
          </div>
          <div className="absolute -top-3 -right-3 z-10 pointer-events-none">
            <WashiTape variant={tapeColor} size="sm" tilt="right" />
          </div>
        </>
      )}
      {tapePosition === "both" && (
        <>
          <div className="absolute -top-3 -left-3 z-10 pointer-events-none">
            <WashiTape variant={tapeColor} size="sm" tilt="left" />
          </div>
          <div className="absolute -bottom-3 -right-3 z-10 pointer-events-none">
            <WashiTape variant={tapeColor} size="sm" tilt="slight-right" />
          </div>
        </>
      )}

      {/* Photo Content */}
      <div className="bg-secondary-paper/40 border border-ink/10 overflow-hidden rounded-xs">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        ) : (
          children
        )}
      </div>

      {/* Handwritten Caption */}
      {caption && (
        <div className="mt-2.5 text-center font-handwriting text-ink/80 text-sm leading-tight select-none">
          {caption}
        </div>
      )}
    </div>
  );
};
