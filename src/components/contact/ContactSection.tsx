import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { WashiTape } from "@/components/ui/WashiTape";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { DoodleArrow, GithubIcon, CornerCross } from "@/components/ui/DecorativeElements";
import {
  ExternalLink,
  Download,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Send,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "kaleatharva1710@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-paper bg-ruled-paper border-b border-ink/15 relative overflow-hidden"
    >
      <Container width="editorial">
        
        {/* ========================================================
            BOLD MUSTARD-YELLOW PAPER PANEL (MATCHING DESIGN REFERENCE)
           ======================================================== */}
        <div className="relative rounded-sm p-6 sm:p-10 lg:p-14 bg-mustard text-ink border-2 border-ink shadow-[5px_5px_0px_#211F1C] overflow-hidden">
          
          {/* Top Washi Tapes pinned across the container top */}
          <div className="absolute -top-3.5 left-10 z-20 pointer-events-none">
            <WashiTape variant="white" size="md" tilt="slight-left" />
          </div>
          <div className="absolute -top-3.5 right-10 z-20 pointer-events-none">
            <WashiTape variant="blue" size="md" tilt="slight-right" />
          </div>

          {/* Corner Registration Marks */}
          <CornerCross className="absolute top-3 left-3 text-ink/40 text-sm" />
          <CornerCross className="absolute top-3 right-3 text-ink/40 text-sm" />
          <CornerCross className="absolute bottom-3 left-3 text-ink/40 text-sm" />
          <CornerCross className="absolute bottom-3 right-3 text-ink/40 text-sm" />

          {/* Top Header Tag & Handwritten Annotation */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10 select-none">
            <div className="flex items-center gap-2">
              <StickerBadge variant="paper" size="sm" glyph="sparkle">
                LET&apos;S CONNECT
              </StickerBadge>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/80 font-bold hidden sm:inline">
                &bull; OPEN FOR NEW CHALLENGES
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-handwriting text-ink text-base sm:text-lg -rotate-2">
                say hello!
              </span>
              <DoodleArrow direction="right" className="w-6 h-3 text-ink -rotate-6" />
            </div>
          </div>

          {/* Main 2-Column Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HEADLINE, SUPPORTING TEXT & PRIMARY ACTIONS */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink uppercase tracking-tight leading-[0.98] select-none">
                  GOT SOMETHING <br />
                  INTERESTING IN MIND?
                </h2>

                <p className="font-body text-lg sm:text-xl text-ink/90 font-medium leading-relaxed max-w-xl">
                  &ldquo;Let&apos;s turn an interesting problem into something worth building.&rdquo;
                </p>

                <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed max-w-lg">
                  Whether you are building an AI product, scaling a full-stack platform, or exploring ambitious software engineering collaborations — I am always excited to talk.
                </p>
              </div>

              {/* Action Buttons: Email CTA & Resume Download */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                
                {/* Primary Black Pill CTA */}
                <a
                  href={`mailto:${email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-ink text-paper font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_#211F1C] hover:bg-neutral-800 transition-all active:translate-y-0.5 active:shadow-none cursor-pointer"
                >
                  <Send className="w-4 h-4 text-mustard" />
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4 text-mustard" />
                </a>

                {/* Resume Download Pill */}
                <a
                  href="/Atharva_Kale_Resume.pdf"
                  download="Atharva_Kale_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-paper hover:bg-white text-ink font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_#211F1C] transition-all active:translate-y-0.5 active:shadow-none"
                >
                  <Download className="w-4 h-4 text-ink" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>

              </div>

              {/* Status Note */}
              <div className="flex items-center gap-2 pt-1 font-mono text-xs text-ink/80">
                <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
                <span className="font-medium">Direct founder &bull; engineer response within 24 hours</span>
              </div>

            </div>

            {/* RIGHT COLUMN: VERIFIED DIRECT CONTACT & DEVELOPER PROFILES */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-xs bg-paper border-2 border-ink shadow-[3px_3px_0px_#211F1C] space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-ink/15">
                <span className="font-mono text-xs uppercase tracking-wider text-ink font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-mustard fill-mustard" />
                  <span>DIRECT CONTACT CHANNELS</span>
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-mint px-2 py-0.5 rounded-xs border border-ink text-ink">
                  Verified
                </span>
              </div>

              {/* Email Address with Copy Button */}
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] text-ink/60 uppercase font-bold block">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xs bg-secondary-paper/80 border border-ink/20">
                  <a
                    href={`mailto:${email}`}
                    className="font-mono text-xs sm:text-sm text-ink hover:underline font-bold truncate focus-ring rounded"
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-xs bg-paper hover:bg-mustard border border-ink text-ink transition-colors shrink-0 shadow-sm focus-ring cursor-pointer"
                    aria-label="Copy email address"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-green-700 font-bold" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-ink" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="font-mono text-[10px] text-green-800 font-bold block">
                    &bull; Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Developer Profiles: GitHub & LinkedIn */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[11px] text-ink/60 uppercase font-bold block">
                  Developer Profiles
                </span>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  
                  {/* GitHub */}
                  <a
                    href="https://github.com/Atharva0393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xs bg-secondary-paper/80 border border-ink/20 hover:border-ink hover:bg-mustard transition-all flex items-center justify-between group shadow-sm"
                  >
                    <span className="flex items-center gap-2 font-bold text-ink">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/atharvak07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xs bg-secondary-paper/80 border border-ink/20 hover:border-ink hover:bg-mustard transition-all flex items-center justify-between group shadow-sm"
                  >
                    <span className="flex items-center gap-2 font-bold text-ink">
                      <ExternalLink className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                </div>
              </div>

              {/* Reliability Assurance Note */}
              <div className="pt-3 border-t border-ink/15 space-y-1 text-xs font-mono text-ink/75">
                <div className="flex items-center gap-1.5 font-bold text-ink">
                  <ShieldCheck className="w-4 h-4 text-green-700 shrink-0" />
                  <span>Engineering Integrity Guarantee</span>
                </div>
                <div className="text-[11px] text-ink/60 pl-5.5">
                  Based in India &bull; Available for remote &amp; hybrid roles globally.
                </div>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};
