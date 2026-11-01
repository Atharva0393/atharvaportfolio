import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { WashiTape } from "@/components/ui/WashiTape";
import { FolderTabCard } from "@/components/ui/FolderTabCard";
import { DoodleArrow } from "@/components/ui/DecorativeElements";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock,
  Bot
} from "lucide-react";

export const SelectedWorkSection: React.FC = () => {
  const mindspace = projects.find((p) => p.slug === "mindspace")!;
  const meraki = projects.find((p) => p.slug === "meraki")!;
  const chess = projects.find((p) => p.slug === "the-chess-project")!;
  const yachts = projects.find((p) => p.slug === "chicago-yachts")!;
  const payzero = projects.find((p) => p.slug === "payzero")!;
  const yogesh = projects.find((p) => p.slug === "yogesh-plastics")!;
  const interviewAi = projects.find((p) => p.slug === "interview-ai")!;

  return (
    <section
      id="work"
      className="py-16 sm:py-24 border-b border-ink/15 bg-paper bg-ruled-paper relative overflow-hidden"
    >
      {/* Anchor for mindspace links */}
      <div id="mindspace" className="absolute -top-12 left-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================
            SECTION HEADING: FEATURED WORKS (MATCHING PANEL 3)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-ink/15 pb-6">
          <div className="space-y-2">
            
            {/* Handwritten Annotation */}
            <div className="flex items-center gap-2 select-none">
              <span className="font-handwriting text-ink/75 text-base sm:text-lg -rotate-2">
                explore my work!
              </span>
              <DoodleArrow direction="right" className="w-8 h-4 text-ink/60 -rotate-3" />
            </div>

            {/* Large Bold Condensed Display Typography */}
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink uppercase leading-none select-none">
              FEATURED WORKS
            </h2>
          </div>

          {/* Archive Link & Project Count */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ink/60 uppercase tracking-wider hidden sm:inline">
              07 Selected Projects
            </span>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-mustard border border-ink text-xs font-mono font-bold uppercase tracking-wider text-ink shadow-[1px_1px_0px_#211F1C] hover:brightness-105 transition-all"
            >
              <span>Full Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ========================================================
            01 MINDSPACE — SIGNATURE BLACK CUTOUT PANEL (PANEL 4 TOP)
           ======================================================== */}
        <div className="relative pt-2">
          
          {/* Folder Cutout Container in Contrasting Black */}
          <div className="relative border-2 border-ink bg-[#121214] text-paper rounded-sm shadow-[4px_4px_0px_#F5CC45] overflow-hidden">
            
            {/* Top Cutout Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/15 px-6 sm:px-8 py-3 bg-[#1A191D]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-mustard animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-mustard">
                  PROJECT 01 &bull; FLAGSHIP AI PRODUCT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-white/60">
                  &bull; ACTIVE ROADMAP 2026
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider bg-mustard text-ink font-bold px-2 py-0.5 rounded-xs">
                  In Development
                </span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Product Information & Architecture */}
              <div className="lg:col-span-6 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-mustard">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI-POWERED COGNITIVE WORKSPACE</span>
                  </div>

                  <h3 className="font-anton text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-paper leading-none">
                    MINDSPACE
                  </h3>

                  <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                    &ldquo;An AI-powered personal productivity workspace connecting intelligent notes, habits, tasks, goals and personal knowledge.&rdquo;
                  </p>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="p-4 rounded-xs bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm font-body">
                  <div className="font-mono text-[11px] text-mustard uppercase font-bold tracking-wider">
                    The Problem Being Solved
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Modern knowledge work is fragmented across disconnected note apps, habit trackers, and task boards. MINDSPACE acts as an active intelligence layer linking daily micro-habits to accumulated notes and long-term milestones.
                  </p>
                </div>

                {/* Implemented vs Planned Capabilities */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-start gap-2 text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                    <span><strong className="text-paper">Implemented:</strong> Local markdown parser, wikilink graph resolution, sub-20ms semantic search in pgvector.</span>
                  </div>
                  <div className="flex items-start gap-2 text-white/70">
                    <Clock className="w-4 h-4 text-mustard shrink-0 mt-0.5" />
                    <span><strong className="text-mustard">Planned:</strong> Cognitive reflection agent detecting correlation loops between habit velocity and deep work.</span>
                  </div>
                </div>

                {/* Verified Tech Stack */}
                <div className="space-y-1.5 pt-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                    Verified Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {mindspace.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-xs bg-white/10 border border-white/20 text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/work/mindspace"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-mustard hover:brightness-105 text-ink font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#211F1C] active:translate-y-0.5"
                  >
                    <span>VIEW CASE STUDY &bull; SPEC</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-white/70 hover:text-white transition-colors"
                  >
                    <span>Request Demo Access &rarr;</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Overlapping Photographic Preview with Washi Tape */}
              <div className="lg:col-span-6 relative flex justify-center">
                
                {/* Main Application Preview Frame */}
                <div className="relative w-full max-w-lg bg-white p-3 pb-4 rounded-xs border-2 border-ink shadow-[6px_6px_0px_rgba(0,0,0,0.5)]">
                  
                  {/* Top White Washi Tape */}
                  <div className="absolute -top-3.5 left-10 z-20 pointer-events-none">
                    <WashiTape variant="white" size="md" tilt="slight-left" />
                  </div>
                  <div className="absolute -top-3.5 right-10 z-20 pointer-events-none">
                    <WashiTape variant="white" size="md" tilt="slight-right" />
                  </div>

                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink/15 text-ink">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-ink/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-ink/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-ink/40" />
                      <span className="ml-2 font-mono text-[10px] text-ink/70">mindspace.app/workspace</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-xs bg-mustard text-ink font-bold">
                      Design Preview
                    </span>
                  </div>

                  {/* High-Fidelity Cognitive OS Workspace Mockup */}
                  <div className="bg-[#18181B] text-paper rounded-xs p-4 space-y-4 font-mono text-xs border border-ink/30">
                    
                    {/* Top Stats Bar */}
                    <div className="grid grid-cols-3 gap-2 pb-3 border-b border-white/10 text-center">
                      <div className="p-2 rounded-xs bg-white/5 border border-white/10">
                        <div className="text-[10px] text-white/50 uppercase">Indexed Notes</div>
                        <div className="text-base font-bold text-mustard">340 Nodes</div>
                      </div>
                      <div className="p-2 rounded-xs bg-white/5 border border-white/10">
                        <div className="text-[10px] text-white/50 uppercase">Vector Latency</div>
                        <div className="text-base font-bold text-mint">&lt; 18ms</div>
                      </div>
                      <div className="p-2 rounded-xs bg-white/5 border border-white/10">
                        <div className="text-[10px] text-white/50 uppercase">Habit Velocity</div>
                        <div className="text-base font-bold text-pink">92% Target</div>
                      </div>
                    </div>

                    {/* Active Context Nodes */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-white/60">
                        <span>Active Semantic Graph Connections</span>
                        <span className="text-mustard">pgvector Cosine Sim</span>
                      </div>
                      <div className="p-3 rounded-xs bg-black/40 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">[[Engineering Architecture 2026]]</span>
                          <span className="text-[10px] text-mint">0.89 sim</span>
                        </div>
                        <p className="text-[11px] text-white/70 font-body">
                          &ldquo;Synthesizing agentic memory pipelines with deterministic prompt boundary validation.&rdquo;
                        </p>
                        <div className="flex flex-wrap gap-1 text-[9px]">
                          <span className="px-1.5 py-0.5 rounded-xs bg-white/10 text-white/80">#vector-index</span>
                          <span className="px-1.5 py-0.5 rounded-xs bg-white/10 text-white/80">#fastapi</span>
                          <span className="px-1.5 py-0.5 rounded-xs bg-mustard/20 text-mustard">#priority-high</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom AI Synthesis Prompt */}
                    <div className="p-2.5 rounded-xs bg-mustard/10 border border-mustard/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] text-mustard">
                        <Bot className="w-3.5 h-3.5" />
                        <span>Cognitive Reflection: 3 tasks aligned with project milestone</span>
                      </div>
                      <span className="text-[10px] text-white/60">&rarr;</span>
                    </div>

                  </div>

                  {/* Caption */}
                  <div className="mt-2.5 text-center font-handwriting text-ink/80 text-xs sm:text-sm select-none">
                    MINDSPACE Cognitive Workspace &bull; Verified Alpha UI Preview
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================
            02 MERAKI — SIGNATURE MUSTARD YELLOW CUTOUT PANEL (PANEL 4 BOTTOM)
           ======================================================== */}
        <div className="relative pt-2">
          
          <div className="relative border-2 border-ink bg-mustard text-ink rounded-sm shadow-[4px_4px_0px_#211F1C] overflow-hidden">
            
            {/* Top Cutout Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-ink/20 px-6 sm:px-8 py-3 bg-[#EAB308]/60">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ink" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  PROJECT 02 &bull; CLIENT SHOWCASE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-ink/70">
                  &bull; DERBY, UNITED KINGDOM &bull; 2024
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider bg-ink text-paper font-bold px-2 py-0.5 rounded-xs">
                  Production
                </span>
              </div>
            </div>

            {/* Main Grid */}
            <div className="p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Meraki Details */}
              <div className="lg:col-span-6 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink text-paper text-xs font-mono font-medium">
                    <span>ARCHITECTURE &amp; SPATIAL PLATFORM</span>
                  </div>

                  <h3 className="font-anton text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-ink leading-none">
                    MERAKI DESIGNS
                  </h3>

                  <p className="font-body text-base sm:text-lg text-ink font-medium leading-relaxed">
                    High-end digital flagship for an architectural design and residential property development studio in Derby, United Kingdom.
                  </p>
                </div>

                <div className="p-4 rounded-xs bg-paper/70 border border-ink/20 space-y-2 text-xs sm:text-sm font-body">
                  <div className="font-mono text-[11px] text-ink uppercase font-bold tracking-wider">
                    Client Problem &amp; Architecture
                  </div>
                  <p className="text-ink/80 leading-relaxed">
                    Replaced a static, heavy studio site with a high-performance Next.js application presenting 3D architectural renders, planning permission portfolios, and Supabase project archives with fluid editorial animations.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink/60 font-semibold">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {meraki.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-xs bg-paper border border-ink/20 text-ink font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/work/meraki"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink hover:bg-neutral-800 text-paper font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#211F1C] active:translate-y-0.5"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 text-mustard" />
                  </Link>

                  {meraki.liveUrl && (
                    <a
                      href={meraki.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono text-ink font-bold hover:underline"
                    >
                      <span>meraki-designs.vercel.app</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: Architectural Image Preview with Washi Tape */}
              <div className="lg:col-span-6 relative flex justify-center">
                
                <div className="relative w-full max-w-lg bg-white p-3 pb-4 rounded-xs border-2 border-ink shadow-[6px_6px_0px_#211F1C]">
                  
                  {/* Top White Washi Tape */}
                  <div className="absolute -top-3.5 left-12 z-20 pointer-events-none">
                    <WashiTape variant="white" size="md" tilt="slight-left" />
                  </div>
                  <div className="absolute -top-3.5 right-12 z-20 pointer-events-none">
                    <WashiTape variant="white" size="md" tilt="slight-right" />
                  </div>

                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink/15 text-ink">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
                      <span className="ml-2 font-mono text-[10px] text-ink/70">meraki-designs.vercel.app</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-xs bg-ink text-paper font-bold">
                      Shipped
                    </span>
                  </div>

                  {/* Architectural Platform Mockup */}
                  <div className="bg-[#1C1B1F] text-paper rounded-xs p-5 space-y-4 font-mono text-xs border border-ink/30 aspect-[16/10] flex flex-col justify-between">
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <span className="text-[10px] text-mustard uppercase font-bold">MONOGRAPH 04</span>
                        <div className="text-sm font-serif italic text-white">The Birchwood Residence &bull; Derby UK</div>
                      </div>
                      <span className="text-[10px] text-white/50 font-mono">3,850 SQ FT</span>
                    </div>

                    {/* Spatial Blueprint Graphic */}
                    <div className="p-4 rounded-xs bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-white/60">
                        <span>PLANNING PERMISSION APPROVED</span>
                        <span className="text-mint">SUPERIOR ENERGY RATING A</span>
                      </div>
                      <div className="h-14 border border-dashed border-white/20 flex items-center justify-center text-white/40 text-[10px]">
                        [ 3D Render &amp; Spatial Blueprint Viewport ]
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-white/60 pt-1">
                      <span>Supabase Project Archive</span>
                      <span>Next.js 14 App Router</span>
                    </div>

                  </div>

                  {/* Caption */}
                  <div className="mt-2.5 text-center font-handwriting text-ink/80 text-xs sm:text-sm select-none">
                    Meraki Designs Studio Portfolio &bull; Architectural Platform Preview
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================
            03 & 04 SIDE-BY-SIDE ASYMMETRIC FOLDER TAB CARDS (PANEL 3)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-2">
          
          {/* CARD 03: THE CHESS PROJECT (SECONDARY PAPER FOLDER TAB) */}
          <FolderTabCard
            variant="secondary"
            tabLabel="• 03 / EDTECH PLATFORM · 2024"
            tabColor="mustard"
            withTape
            tapeColor="blue"
            className="flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              
              {/* Taped Photo Preview Frame */}
              <div className="relative bg-white p-3 pb-4 rounded-xs border border-ink/20 shadow-sm">
                
                {/* Washi Tape */}
                <div className="absolute -top-3 left-6 z-10 pointer-events-none">
                  <WashiTape variant="blue" size="sm" tilt="left" />
                </div>
                <div className="absolute -top-3 right-6 z-10 pointer-events-none">
                  <WashiTape variant="blue" size="sm" tilt="right" />
                </div>

                {/* Simulated Student Portal & Video Player */}
                <div className="bg-[#18181B] text-paper rounded-xs p-4 aspect-[16/10] flex flex-col justify-between border border-ink/20">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                    <span className="text-mustard font-bold">THE CHESS PROJECT &bull; ACADEMY</span>
                    <span className="bg-mint/20 text-mint px-1.5 py-0.5 rounded-xs">Tokenized DRM</span>
                  </div>

                  <div className="space-y-2 py-2">
                    <div className="text-xs font-semibold text-white">Mastering Sicilian Defense &bull; Batch B</div>
                    <div className="h-10 border border-white/20 rounded-xs flex items-center justify-center text-white/50 text-[10px] font-mono">
                      [ Bunny Stream Player &bull; Signed Token Playback ]
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-white/60 pt-1 border-t border-white/10">
                    <span>Razorpay Webhook Verified</span>
                    <span>PostgreSQL &bull; Prisma ORM</span>
                  </div>
                </div>

                <div className="mt-2 text-center font-handwriting text-xs text-ink/75">
                  Student Learning Dashboard &bull; Secure Video Portal
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-ink/70 font-semibold">
                    {chess.category}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-paper rounded-xs border border-ink/20 font-bold">
                    Shipped
                  </span>
                </div>

                <h3 className="font-anton text-3xl sm:text-4xl text-ink uppercase tracking-tight">
                  <Link to="/work/the-chess-project" className="hover:text-black">
                    THE CHESS PROJECT
                  </Link>
                </h3>

                <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed">
                  Full-stack learning platform centralizing coaching curricula, secure signed video playback via Bunny Stream API, and automated Razorpay payments.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                  {chess.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-paper border border-ink/20 rounded-xs text-ink">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-ink/15 mt-6 flex items-center justify-between">
              <Link
                to="/work/the-chess-project"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:underline"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {chess.liveUrl && (
                <a
                  href={chess.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink/60 hover:text-ink flex items-center gap-1"
                >
                  <span>thechessproject.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </FolderTabCard>

          {/* CARD 04: CHICAGO YACHTS (BLACK FOLDER TAB) */}
          <FolderTabCard
            variant="black"
            tabLabel="• 04 / LUXURY CHARTER · 2024"
            tabColor="black"
            withTape
            tapeColor="mustard"
            className="flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              
              {/* Taped Photo Preview Frame */}
              <div className="relative bg-white p-3 pb-4 rounded-xs border border-ink/20 shadow-sm text-ink">
                
                {/* Washi Tape */}
                <div className="absolute -top-3 left-6 z-10 pointer-events-none">
                  <WashiTape variant="mustard" size="sm" tilt="left" />
                </div>
                <div className="absolute -top-3 right-6 z-10 pointer-events-none">
                  <WashiTape variant="mustard" size="sm" tilt="right" />
                </div>

                {/* Simulated Fleet Booking Catalog */}
                <div className="bg-[#1C1B1F] text-paper rounded-xs p-4 aspect-[16/10] flex flex-col justify-between border border-ink/20">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                    <span className="text-mustard font-bold">CHICAGO YACHTS &bull; FLEET CATALOG</span>
                    <span className="text-white/60">Lake Michigan</span>
                  </div>

                  <div className="space-y-2 py-2">
                    <div className="text-xs font-semibold text-white">52&apos; Luxury Sea Ray &bull; Captained</div>
                    <div className="h-10 border border-white/20 rounded-xs flex items-center justify-center text-white/50 text-[10px] font-mono">
                      [ Interactive Hourly Duration &amp; Amenity Selector ]
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-white/60 pt-1 border-t border-white/10">
                    <span>Direct Inquiry Routing</span>
                    <span>Next.js &bull; Responsive UI</span>
                  </div>
                </div>

                <div className="mt-2 text-center font-handwriting text-xs text-ink/75">
                  Private Fleet Booking Catalog &bull; Hourly Rate Selector
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/70 font-semibold">
                    {yachts.category}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-white/10 rounded-xs text-white/80 font-bold">
                    Shipped
                  </span>
                </div>

                <h3 className="font-anton text-3xl sm:text-4xl text-paper uppercase tracking-tight">
                  <Link to="/work/chicago-yachts" className="hover:text-mustard transition-colors">
                    CHICAGO YACHTS
                  </Link>
                </h3>

                <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                  Responsive yacht rental and nautical charter booking platform for Lake Michigan, streamlining vessel amenity comparisons and event routing.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                  {yachts.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-white/10 border border-white/20 rounded-xs text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/15 mt-6 flex items-center justify-between">
              <Link
                to="/work/chicago-yachts"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-mustard hover:underline"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {yachts.liveUrl && (
                <a
                  href={yachts.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/60 hover:text-white flex items-center gap-1"
                >
                  <span>chicago-yachts.vercel.app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </FolderTabCard>

        </div>

        {/* ========================================================
            05 & 06 TWO-COLUMN ALTERNATING EDITORIAL LAYOUTS
           ======================================================== */}
        <div className="space-y-8 pt-4">
          
          {/* 05 PAYZERO INFRASTRUCTURE */}
          <div className="p-6 sm:p-8 rounded-xs border border-ink/25 bg-secondary-paper/70 shadow-[3px_3px_0px_#211F1C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Solar Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white p-3 pb-4 rounded-xs border border-ink/20 shadow-sm">
                  <div className="absolute -top-3 left-8 z-10 pointer-events-none">
                    <WashiTape variant="mint" size="sm" tilt="left" />
                  </div>

                  <div className="bg-[#141E18] text-paper rounded-xs p-4 aspect-[16/10] flex flex-col justify-between border border-ink/20">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                      <span className="text-mint font-bold">PAYZERO &bull; SOLAR MODEL</span>
                      <span className="text-white/60">India Energy</span>
                    </div>

                    <div className="space-y-1.5 py-2">
                      <div className="text-[11px] font-mono text-white/70">Sanctioned Load: 120 kW</div>
                      <div className="text-xs font-bold text-mint">Annual Savings: &#8377;14,80,000</div>
                      <div className="text-[10px] text-white/50 font-mono">Est. Payback Period: 3.2 Years</div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono text-white/60 pt-1 border-t border-white/10">
                      <span>Real-time ROI Calculation</span>
                      <span>Next.js &bull; Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="mt-2 text-center font-handwriting text-xs text-ink/75">
                    Payzero Interactive Solar ROI Calculator
                  </div>
                </div>
              </div>

              {/* Right Column: Project Information */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-mint-dark uppercase tracking-wider bg-mint/30 px-2 py-0.5 rounded-xs border border-mint-border">
                    PROJECT 05 &bull; 2024
                  </span>
                  <span className="font-mono text-xs text-ink/60 uppercase">Clean Energy</span>
                </div>

                <h3 className="font-anton text-3xl sm:text-4xl text-ink uppercase tracking-tight">
                  <Link to="/work/payzero" className="hover:text-black">
                    PAYZERO INFRASTRUCTURE
                  </Link>
                </h3>

                <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed">
                  High-performance commercial solar energy platform featuring mathematical ROI estimation models, kilowatt sizing calculations, and automated enterprise audit requests.
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                  {payzero.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-paper border border-ink/20 rounded-xs text-ink">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    to="/work/payzero"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:underline"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {payzero.liveUrl && (
                    <a
                      href={payzero.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-ink/60 hover:text-ink flex items-center gap-1"
                    >
                      <span>payzero-black.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* 06 YOGESH PLASTICS (REVERSED TWO-COLUMN) */}
          <div className="p-6 sm:p-8 rounded-xs border border-ink/25 bg-paper shadow-[3px_3px_0px_#211F1C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Project Information */}
              <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-mustard/30 px-2 py-0.5 rounded-xs border border-mustard">
                    PROJECT 06 &bull; 2024
                  </span>
                  <span className="font-mono text-xs text-ink/60 uppercase">Manufacturing &bull; B2B</span>
                </div>

                <h3 className="font-anton text-3xl sm:text-4xl text-ink uppercase tracking-tight">
                  <Link to="/work/yogesh-plastics" className="hover:text-black">
                    YOGESH PLASTICS
                  </Link>
                </h3>

                <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed">
                  B2B industrial component catalog and manufacturing pipeline for precision polymer injection molding, machinery tonnage breakdowns, and direct RFQ procurement.
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                  {yogesh.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-secondary-paper border border-ink/20 rounded-xs text-ink">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    to="/work/yogesh-plastics"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:underline"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {yogesh.githubUrl && (
                    <a
                      href={yogesh.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-ink/60 hover:text-ink flex items-center gap-1"
                    >
                      <span>GitHub Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Industrial Mockup */}
              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="bg-white p-3 pb-4 rounded-xs border border-ink/20 shadow-sm">
                  <div className="absolute -top-3 right-8 z-10 pointer-events-none">
                    <WashiTape variant="pink" size="sm" tilt="right" />
                  </div>

                  <div className="bg-[#1C1B1F] text-paper rounded-xs p-4 aspect-[16/10] flex flex-col justify-between border border-ink/20">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono">
                      <span className="text-mustard font-bold">YOGESH PLASTICS &bull; SPEC</span>
                      <span className="text-white/60">Machinery Matrix</span>
                    </div>

                    <div className="space-y-1.5 py-2 font-mono text-[10px]">
                      <div className="text-white font-semibold">Tonnage Range: 50T &ndash; 650T</div>
                      <div className="text-white/70">Materials: PP, ABS, Nylon-6, Polycarbonate</div>
                      <div className="text-mint">Direct CAD / RFQ Submission Pipeline</div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono text-white/60 pt-1 border-t border-white/10">
                      <span>B2B Industrial Catalog</span>
                      <span>Next.js &bull; TypeScript</span>
                    </div>
                  </div>

                  <div className="mt-2 text-center font-handwriting text-xs text-ink/75">
                    Yogesh Plastics Industrial Machinery &bull; RFQ Catalog
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================
            07 INTERVIEWAI — AI ENGINEERING LAB PANEL
           ======================================================== */}
        <div className="pt-2">
          
          <FolderTabCard
            variant="paper"
            tabLabel="• 07 / AI ENGINEERING LAB · 2025"
            tabColor="mint"
            withTape
            tapeColor="mustard"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/40 border border-mint-border text-xs font-mono font-bold text-ink">
                  <Bot className="w-3.5 h-3.5 text-mint-dark" />
                  <span>AI MOCK INTERVIEW &amp; PERFORMANCE EVALUATION</span>
                </div>

                <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-ink uppercase tracking-tight">
                  <Link to="/work/interview-ai" className="hover:text-black">
                    INTERVIEWAI
                  </Link>
                </h3>

                <p className="font-body text-base text-ink/80 leading-relaxed">
                  An AI-driven mock interview platform that simulates real software engineering technical rounds, evaluates candidate responses, and generates granular diagnostic feedback rubrics using structured LLM schemas.
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-1">
                  {interviewAi.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-secondary-paper border border-ink/20 rounded-xs text-ink font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/work/interview-ai"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-paper font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 shadow-[2px_2px_0px_#211F1C]"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-mustard" />
                  </Link>

                  {interviewAi.liveUrl && (
                    <a
                      href={interviewAi.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-ink/70 hover:text-ink flex items-center gap-1 font-bold"
                    >
                      <span>interview-ai-kohl-nu.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Simulation Console Preview */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white p-3 pb-4 rounded-xs border border-ink/20 shadow-sm">
                  <div className="absolute -top-3 right-6 z-10 pointer-events-none">
                    <WashiTape variant="blue" size="sm" tilt="slight-right" />
                  </div>

                  <div className="bg-[#18181B] text-paper rounded-xs p-4 space-y-3 font-mono text-xs border border-ink/20 aspect-[16/11] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
                      <span className="text-mustard font-bold">INTERVIEW CONSOLE &bull; ACTIVE</span>
                      <span className="text-mint">Gemini Pro API</span>
                    </div>

                    <div className="space-y-1.5 py-1">
                      <div className="text-[11px] text-white font-semibold">Q: Implement an LRU Cache in O(1)</div>
                      <div className="p-2 rounded-xs bg-white/5 border border-white/10 text-[10px] text-white/70">
                        &ldquo;Candidate identified doubly-linked list + hash map. Diagnostic Score: 4.8 / 5.0&rdquo;
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[9px] pt-1 border-t border-white/10 text-white/60">
                      <span>Structured JSON Rubric</span>
                      <span>Vercel Edge Network</span>
                    </div>
                  </div>

                  <div className="mt-2 text-center font-handwriting text-xs text-ink/75">
                    InterviewAI Diagnostic Performance Scorecard Preview
                  </div>
                </div>
              </div>

            </div>
          </FolderTabCard>

        </div>

        {/* ========================================================
            BOTTOM ARCHIVE CALLOUT STRIP
           ======================================================== */}
        <div className="pt-8 border-t border-ink/15 text-center">
          <div className="p-6 sm:p-8 rounded-xs bg-secondary-paper/60 border border-ink/20 shadow-[2px_2px_0px_#211F1C] max-w-3xl mx-auto space-y-4">
            <span className="font-handwriting text-ink/75 text-lg -rotate-2 block">
              looking for more details?
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl text-ink uppercase tracking-tight">
              EXPLORE THE COMPLETE DIGITAL ARCHIVE
            </h4>
            <p className="font-body text-sm sm:text-base text-ink/80 max-w-xl mx-auto">
              Every project includes an in-depth breakdown of business problems, technical architecture diagrams, challenge resolutions, and verified code links.
            </p>
            <div className="pt-2">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-mustard hover:brightness-105 text-ink font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_#211F1C] active:translate-y-0.5"
              >
                <span>OPEN PROJECT ARCHIVE &bull; 7 CASE STUDIES</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
