import React from "react";
import { Link } from "react-router-dom";
import { WashiTape } from "@/components/ui/WashiTape";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DoodleArrow } from "@/components/ui/DecorativeElements";
import { Monitor, GraduationCap, ArrowRight } from "lucide-react";

export const IntroductionSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b border-ink/15 bg-paper bg-ruled-paper relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* TOP ROW: SECTION LABEL & HANDWRITTEN ANNOTATION */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel
            number="01"
            label="A LITTLE ABOUT ME"
            variant="tape-pill"
            color="mustard"
          />

          {/* Top-left handwritten scribble with arrow pointing to the intro */}
          <div className="hidden sm:flex items-center gap-2 select-none">
            <span className="font-handwriting text-ink/75 text-lg -rotate-3">
              about me!
            </span>
            <DoodleArrow direction="right" className="w-8 h-4 text-ink/60 -rotate-6" />
          </div>
        </div>

        {/* OUTLINED HEADING LABEL WITH TOP WASHI TAPE (MATCHING PANEL 2) */}
        <div className="flex justify-center select-none pt-2">
          <div className="relative inline-block">
            {/* Blue Washi Tape taped across top edge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <WashiTape variant="blue" size="sm" tilt="flat" />
            </div>

            {/* Outlined "what's up" Badge */}
            <div className="px-5 py-1.5 rounded-xs border border-ink bg-paper shadow-[2px_2px_0px_#211F1C] text-center">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-ink">
                what&apos;s up
              </span>
            </div>
          </div>
        </div>

        {/* ASYMMETRICAL EDITORIAL SCRAPBOOK COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT PHOTOGRAPHIC FRAME: ATHARVA'S REAL HEADSHOT POLAROID */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="max-w-[240px] sm:max-w-[260px] w-full">
              <PolaroidFrame
                src="/atharva-headshot.png"
                alt="Atharva Kale — Computer Science Engineering"
                caption="Atharva &bull; 2027"
                tilt="slight-left"
                tapePosition="top-both"
                tapeColor="blue"
                className="w-full"
              />
            </div>
          </div>

          {/* CENTER: PERSONAL INTRODUCTION & COLORFUL SKILL STICKERS */}
          <div className="lg:col-span-6 space-y-6 text-center order-1 lg:order-2 px-2 sm:px-4">
            
            {/* The Personal Statement */}
            <div className="space-y-4">
              <p className="font-body text-lg sm:text-xl lg:text-2xl text-ink font-medium leading-relaxed">
                I&apos;m Atharva — a Computer Science Engineering student and independent product builder interested in{" "}
                <span className="bg-mustard/30 px-1.5 py-0.5 rounded-xs border-b border-mustard font-semibold">
                  AI
                </span>
                ,{" "}
                <span className="bg-mint/30 px-1.5 py-0.5 rounded-xs border-b border-mint-border font-semibold">
                  software engineering
                </span>{" "}
                and solving real-world problems. ✨
              </p>

              <p className="font-body text-base sm:text-lg text-ink/80 leading-relaxed font-normal">
                I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone&apos;s day easier. 🥪 Whether it&apos;s orchestrating deterministic LLM pipelines or architecting full-stack applications, I focus on building software that is rock-solid beneath the surface and effortless on top.
              </p>
            </div>

            {/* COLORFUL CANDY SKILL STICKERS (PANEL 2 INSPIRATION) */}
            <div className="pt-3 space-y-2.5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-ink/60">
                Core Capabilities &amp; Toolbox
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                <StickerBadge variant="mustard" size="sm" glyph="sparkle" interactive>
                  AI Engineering
                </StickerBadge>

                <StickerBadge variant="mint" size="sm" glyph="target" interactive>
                  Full-Stack Development
                </StickerBadge>

                <StickerBadge variant="pink" size="sm" glyph="flower" interactive>
                  Product Development
                </StickerBadge>

                <StickerBadge variant="blue" size="sm" glyph="quotes" interactive>
                  RAG &amp; LLMs
                </StickerBadge>

                <StickerBadge variant="mustard" size="sm" glyph="star" interactive>
                  Software Architecture
                </StickerBadge>

                <StickerBadge variant="mint" size="sm" glyph="target" interactive>
                  Problem Solving
                </StickerBadge>
              </div>
            </div>

          </div>

          {/* RIGHT PHOTOGRAPHIC FRAME: WORKSPACE SETUP PLACEHOLDER */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end order-3 lg:translate-y-6">
            <div className="max-w-[240px] sm:max-w-[260px] w-full">
              <PolaroidFrame
                caption="my workspace (setup placeholder)"
                tilt="slight-right"
                tapePosition="top-both"
                tapeColor="mustard"
                className="w-full"
              >
                {/* Clearly Identifiable Coding Workspace Placeholder Graphic */}
                <div className="bg-[#1A191D] text-paper p-4 aspect-[4/5] flex flex-col justify-between border border-ink/40 select-none">
                  {/* Fake IDE window bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    </div>
                    <span className="font-mono text-[9px] text-white/50">workspace.ts</span>
                  </div>

                  {/* Terminal / Code mockup lines */}
                  <div className="space-y-1.5 py-3 font-mono text-[10px] text-left">
                    <div className="text-white/40">// Engineering desk setup</div>
                    <div className="text-[#9FD8C0]">const builder = &apos;Atharva&apos;;</div>
                    <div className="text-[#F5CC45]">const stack = [&apos;Next.js&apos;, &apos;AI&apos;];</div>
                    <div className="text-[#F28AA8]">await shipSolution();</div>
                    <div className="h-2 w-16 bg-white/20 rounded-xs animate-pulse" />
                  </div>

                  {/* Placeholder label note */}
                  <div className="border-t border-white/10 pt-2 flex items-center justify-between text-white/60">
                    <div className="flex items-center gap-1 text-[10px] font-mono">
                      <Monitor className="w-3.5 h-3.5 text-mustard" />
                      <span>Desk Setup</span>
                    </div>
                    <span className="text-[9px] font-mono uppercase bg-white/10 px-1 py-0.5 rounded-xs text-white/80">
                      Placeholder
                    </span>
                  </div>
                </div>
              </PolaroidFrame>
            </div>
          </div>

        </div>

        {/* PRESERVED BIOGRAPHY & EDUCATION DETAIL CARD */}
        <div className="pt-6 border-t border-ink/15">
          <div className="p-5 sm:p-6 rounded-xs bg-secondary-paper/70 border border-ink/20 shadow-[2px_2px_0px_#211F1C] flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xs bg-mustard border border-ink flex items-center justify-center text-ink shrink-0 shadow-[1px_1px_0px_#211F1C]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                    EDUCATION
                  </span>
                  <span className="text-ink/40 font-mono text-xs">&bull;</span>
                  <span className="font-mono text-xs text-ink/70">Class of 2027</span>
                </div>
                <h3 className="font-heading font-black text-base sm:text-lg text-ink uppercase">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <p className="text-xs sm:text-sm text-ink/70 font-body">
                  Independent builder developing real-world AI pipelines, software architectures, and production client applications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-start md:self-auto pt-2 md:pt-0">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-paper hover:bg-ink hover:text-paper text-ink font-mono text-xs font-bold uppercase tracking-wider border border-ink shadow-[1px_1px_0px_#211F1C] transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Full Story &amp; Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
