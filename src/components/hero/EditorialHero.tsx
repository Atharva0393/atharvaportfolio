import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WashiTape } from "@/components/ui/WashiTape";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { SketchedFrame } from "@/components/ui/SketchedFrame";
import { TargetSticker, FlowerSticker, DoodleArrow } from "@/components/ui/DecorativeElements";
import { cn } from "@/lib/utils";

export const EditorialHero: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#work") || document.querySelector("#mindspace");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper bg-ruled-paper pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-ink/15"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP METADATA & ACADEMIC LINE */}
        <div className="text-center mb-5 sm:mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-xs bg-secondary-paper/80 border border-ink/20 text-[10px] sm:text-xs font-mono text-ink/80 uppercase tracking-wider sm:tracking-widest shadow-[1px_1px_0px_#211F1C] max-w-full">
            <span className="w-2 h-2 rounded-full bg-mustard border border-ink/40 animate-pulse shrink-0" />
            <span className="hidden sm:inline">COMPUTER SCIENCE ENGINEERING &bull; CLASS OF 2027</span>
            <span className="sm:hidden">CS ENGINEERING &bull; 2027</span>
          </div>
        </div>

        {/* HERO SCRAPBOOK COMPOSITION (CENTERED) */}
        <div className="flex flex-col items-center text-center">
          
          {/* FLOATING TOP STICKERS / TAPES & HANDWRITTEN NOTE */}
          <div className="w-full max-w-xl flex items-center justify-between mb-2 sm:mb-3 px-1 sm:px-6 relative select-none">
            
            {/* Top-Left Tape: AI ENGINEERING */}
            <div className="transform -rotate-2 hover:-rotate-1 transition-transform">
              <WashiTape color="mint" size="sm" tilt="flat">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink font-bold">
                  AI ENGINEERING
                </span>
              </WashiTape>
            </div>

            {/* Center Handwritten Annotation with Curved Arrow */}
            <div className="flex flex-col items-center -mb-2">
              <span className="font-handwriting text-ink/80 text-sm sm:text-lg -rotate-3">
                my name is
              </span>
              <svg
                viewBox="0 0 32 20"
                fill="none"
                stroke="currentColor"
                className="w-4 h-2.5 sm:w-5 sm:h-3 text-ink/70 -rotate-6"
                aria-hidden="true"
              >
                <path
                  d="M4 2 C 12 1, 20 8, 26 16 M 18 16 L 26 16 L 26 8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Top-Right Tape: SOFTWARE DEVELOPER */}
            <div className="transform rotate-2 hover:rotate-1 transition-transform">
              <WashiTape color="pink" size="sm" tilt="flat">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink font-bold">
                  SOFTWARE DEV
                </span>
              </WashiTape>
            </div>

          </div>

          {/* CENTRAL NAME BOX IN SKETCHED FRAME */}
          <div className="relative inline-block my-2 sm:my-3 max-w-full">
            
            <SketchedFrame
              variant="pencil"
              className="bg-paper/90 px-4 sm:px-12 md:px-16 py-2.5 sm:py-5 border-2 border-ink shadow-[3px_3px_0px_#211F1C]"
            >
              <h1 className="font-anton text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-none select-none">
                ATHARVA KALE
              </h1>
            </SketchedFrame>

            {/* Bottom-Left Attached Sticker: PRODUCT BUILDER with pointer line */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-0 sm:-left-6 transform -rotate-3 z-20">
              <StickerBadge variant="mustard" size="xs" glyph="sparkle" className="sm:px-3 sm:py-1 sm:text-xs">
                PRODUCT BUILDER
              </StickerBadge>
            </div>

            {/* Bottom-Right Attached Sticker: AI & SYSTEMS */}
            <div className="absolute -bottom-3 sm:-bottom-4 right-0 sm:-right-6 transform rotate-3 z-20">
              <StickerBadge variant="mint" size="xs" glyph="star" className="sm:px-3 sm:py-1 sm:text-xs">
                AI &amp; SYSTEMS
              </StickerBadge>
            </div>

          </div>

          {/* STATUS PILL (UNDER NAME FRAME) */}
          <div className="mt-5 sm:mt-6 mb-6 sm:mb-10 max-w-full px-2">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-paper border border-ink text-[11px] sm:text-xs font-mono text-ink shadow-[1px_1px_0px_#211F1C]">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse shrink-0" />
              <span className="font-semibold uppercase tracking-wide truncate">
                OPEN TO NEW WORK AND GOOD PROBLEMS
              </span>
            </div>
          </div>

          {/* HEADLINE STATEMENT WITH FLANKING CIRCULAR HEADSHOT STICKERS */}
          <div className="relative w-full max-w-3xl px-2 sm:px-8 my-2 sm:my-4">
            
            {/* Left Circular Photo Sticker */}
            <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-20">
              <div className="group relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-mustard bg-mustard/20 p-0.5 shadow-[2px_2px_0px_#211F1C] overflow-hidden transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <img
                    src="/atharva-headshot.png"
                    alt="Atharva Kale"
                    className="w-full h-full object-cover object-top rounded-full"
                    loading="eager"
                  />
                </div>
                {/* Micro tape on top of sticker */}
                <span className="absolute -top-1 left-2 w-5 h-2 bg-white/70 border border-ink/30 -rotate-12 pointer-events-none" />
              </div>
            </div>

            {/* Right Circular Photo Sticker */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-20">
              <div className="group relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-pink bg-pink/20 p-0.5 shadow-[2px_2px_0px_#211F1C] overflow-hidden transform rotate-6 group-hover:rotate-0 transition-transform">
                  <img
                    src="/atharva-headshot.png"
                    alt="Atharva Kale"
                    className="w-full h-full object-cover object-center rounded-full scale-105"
                    loading="eager"
                  />
                </div>
                {/* Micro tape on top of sticker */}
                <span className="absolute -top-1 right-2 w-5 h-2 bg-white/70 border border-ink/30 rotate-12 pointer-events-none" />
              </div>
            </div>

            {/* Mobile inline avatar */}
            <div className="sm:hidden flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full border-2 border-mustard p-0.5 shadow-[2px_2px_0px_#211F1C] overflow-hidden">
                <img
                  src="/atharva-headshot.png"
                  alt="Atharva Kale"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
            </div>

            {/* Editorial Statement */}
            <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink tracking-tight uppercase leading-[1.15] text-center select-none px-4">
              <span className="inline-block">
                I DESIGN AND BUILD SOFTWARE THAT
                <TargetSticker className="w-6 h-6 sm:w-8 sm:h-8 inline-block -translate-y-1 ml-1" />
              </span>
              <br className="hidden sm:inline" />
              <span className="inline-block mt-1 sm:mt-0">
                SOLVES REAL PROBLEMS.
                <FlowerSticker className="w-6 h-6 sm:w-8 sm:h-8 inline-block -translate-y-1 ml-1" />
              </span>
            </h2>

          </div>

          {/* SUPPORTING TEXT */}
          <div className="max-w-xl mx-auto mt-4 sm:mt-5 mb-8 text-center px-4">
            <p className="font-body text-base sm:text-lg text-ink/80 leading-relaxed">
              I build{" "}
              <span className="bg-mustard/30 px-1 py-0.5 rounded-xs font-medium text-ink border-b border-mustard">
                AI-powered products
              </span>
              , intelligent systems and thoughtful digital experiences.
            </p>
          </div>

          {/* TWO COMPACT CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            
            {/* Primary Black Pill CTA: GET IN TOUCH */}
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-7 py-3 rounded-full bg-ink text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider",
                "border border-ink shadow-[2px_2px_0px_#211F1C] hover:bg-neutral-800",
                "transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
              )}
            >
              <span className="text-white">GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-mustard" />
            </a>

            {/* Secondary Mustard Pill CTA: EXPLORE MY WORK */}
            <a
              href="#work"
              onClick={handleScrollToWork}
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-7 py-3 rounded-full bg-mustard text-ink font-mono text-xs sm:text-sm font-bold uppercase tracking-wider",
                "border border-ink shadow-[2px_2px_0px_#211F1C] hover:brightness-105",
                "transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
              )}
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4 text-ink" />
            </a>

          </div>

          {/* SUBTLE SCROLL INDICATOR */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center gap-1.5 select-none">
            <span className="font-handwriting text-ink/70 text-base -rotate-2">
              scroll to explore
            </span>
            <a
              href="#work"
              onClick={handleScrollToWork}
              className="group flex flex-col items-center cursor-pointer p-1"
              aria-label="Scroll to projects"
            >
              <DoodleArrow direction="down-curved" className="w-8 h-6 text-ink/60 group-hover:text-ink group-hover:scale-105 transition-all" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
