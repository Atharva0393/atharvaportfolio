import React from "react";
import { ArrowUpRight, Check, Sparkles, Terminal, Activity, Lock } from "lucide-react";
import { Dot } from "@/components/ui/DecorativeElements";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";

export const EngineeringVisualComposition: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[520px] mx-auto select-none">
      
      {/* 1. CONTINUOUS ROTATING CIRCULAR TYPOGRAPHY SEAL */}
      <div className="absolute -top-5 right-0 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 z-30 pointer-events-none">
        <div className="relative w-full h-full animate-spin-slow">
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full fill-current text-ink overflow-visible"
            aria-hidden="true"
          >
            <path
              id="seal-text-path"
              d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
              fill="none"
            />
            <text className="text-[10px] font-mono tracking-[0.24em] font-bold uppercase">
              <textPath href="#seal-text-path" startOffset="0%">
                • ATHARVA KALE • AI SYSTEMS • CODE •
              </textPath>
            </text>
          </svg>
        </div>
        {/* Central Terracotta Star Badge */}
        <div className="absolute inset-0 m-auto w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-terracotta flex items-center justify-center text-cream font-mono font-bold text-xs shadow-sm">
          *
        </div>
      </div>

      {/* 2. MAIN BROWSER-WINDOW STYLE PRODUCT PREVIEW */}
      <div className="relative rounded-3xl bg-neutralWhite border border-ink/20 shadow-ink-offset-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-ink-offset-lg">
        
        {/* Browser Top Bar */}
        <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-cream-100 border-b border-ink/10 flex items-center justify-between">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta border border-ink/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-peach border border-ink/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-mint border border-ink/30" />
          </div>

          {/* Minimalist URL Address Pill */}
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-neutralWhite border border-ink/10 text-[10px] sm:text-[11px] font-mono text-ink/70 mx-2 truncate">
            <Lock className="w-3 h-3 text-terracotta shrink-0" />
            <span className="truncate">mindspace.systems/ai-agent</span>
          </div>

          {/* Live System Status */}
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-mint-dark font-semibold shrink-0">
            <Dot size="sm" color="mint" pulse />
            <span>99.9% ONLINE</span>
          </div>
        </div>

        {/* Browser Canvas Body: MINDSPACE App Simulation */}
        <div className="p-5 sm:p-6 space-y-4 bg-neutralWhite">
          
          {/* App Header & Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-terracotta/10 text-terracotta">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-ink leading-tight">
                  MINDSPACE // COGNITIVE OS
                </div>
                <div className="font-mono text-[10px] text-ink/50">
                  v2.4 &bull; Deterministic Agent Pipeline
                </div>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-mint text-mint-dark border border-mint-border font-mono text-[10px] font-bold">
              ACTIVE
            </span>
          </div>

          {/* Pipeline Visual Node Flow */}
          <div className="p-3.5 rounded-2xl bg-cream-50 border border-ink/10 space-y-2.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-ink/60">
              <span className="uppercase tracking-wider">Execution Pipeline</span>
              <span className="text-terracotta font-semibold">14ms Inference</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-neutralWhite border border-ink/10 flex flex-col items-center justify-center">
                <span className="font-mono text-[9px] text-ink/50 uppercase">01 Input</span>
                <span className="font-heading font-semibold text-[11px] text-ink mt-0.5 truncate w-full">Context Graph</span>
              </div>
              <div className="p-2 rounded-xl bg-lavender/40 border border-lavender-border flex flex-col items-center justify-center">
                <span className="font-mono text-[9px] text-lavender-dark uppercase">02 Neural</span>
                <span className="font-heading font-semibold text-[11px] text-ink mt-0.5 truncate w-full">ComfyUI + LLM</span>
              </div>
              <div className="p-2 rounded-xl bg-mint/50 border border-mint-border flex flex-col items-center justify-center">
                <span className="font-mono text-[9px] text-mint-dark uppercase">03 Deliver</span>
                <span className="font-heading font-semibold text-[11px] text-ink mt-0.5 truncate w-full">Verified UI</span>
              </div>
            </div>
          </div>

          {/* Technical Telemetry Strip */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-cream-100/60 border border-ink/10 space-y-1">
              <span className="font-mono text-[10px] text-ink/50 uppercase block">Model Architecture</span>
              <div className="font-heading font-bold text-ink text-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>Multi-Modal Agent</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cream-100/60 border border-ink/10 space-y-1">
              <span className="font-mono text-[10px] text-ink/50 uppercase block">System Precision</span>
              <div className="font-heading font-bold text-ink text-xs flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-mint-dark" />
                <span>Zero Hallucination UI</span>
              </div>
            </div>
          </div>

          {/* Code/Output Status Line */}
          <div className="px-3.5 py-2.5 rounded-xl bg-ink text-cream-50 font-mono text-[11px] flex items-center justify-between">
            <div className="flex items-center gap-2 truncate">
              <span className="text-terracotta font-bold">&gt;</span>
              <span className="truncate">build.runPipeline(&quot;MindspaceAI&quot;)</span>
            </div>
            <div className="flex items-center gap-1 text-mint shrink-0 font-semibold text-[10px]">
              <Check className="w-3.5 h-3.5" />
              <span>PASS</span>
            </div>
          </div>

        </div>

        {/* Browser Footer Pill */}
        <div className="px-5 py-2.5 bg-cream-100 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-ink/60">
          <span>Target: Next.js &bull; PyTorch &bull; FastAPI</span>
          <span className="flex items-center gap-1 text-terracotta font-semibold">
            Explore Demo <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>

      {/* 3. FLOATING BADGE 1: TACTILE TECH ACCENT */}
      <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutralWhite border-2 border-ink shadow-ink-offset-sm z-20 flex items-center gap-2 sm:gap-2.5 animate-float-gentle max-w-[calc(100%-16px)]">
        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-terracotta animate-pulse shrink-0" />
        <span className="font-mono text-[11px] sm:text-xs font-bold text-ink uppercase tracking-wider truncate">
          AI Systems &bull; Software Craft
        </span>
      </div>

      {/* 4. FLOATING HANDWRITTEN ANNOTATION */}
      <div className="absolute -top-7 left-4 z-20 hidden sm:block">
        <HandwrittenNote direction="curved-right" rotate="left" color="terracotta" size="md">
          Real software architecture
        </HandwrittenNote>
      </div>

    </div>
  );
};

