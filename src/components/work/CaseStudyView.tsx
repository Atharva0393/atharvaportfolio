import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { WashiTape } from "@/components/ui/WashiTape";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Layers,
  Sparkles,
  Bot,
  Brain,
  Network,
  ListTodo,
  Calendar,
  CheckCircle,
  Cpu,
  Terminal,
  Database,
  Zap,
} from "lucide-react";
import { GithubIcon, DoodleArrow } from "@/components/ui/DecorativeElements";
import { cn } from "@/lib/utils";

export const CaseStudyView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = projects[currentIndex];
  const { caseStudy } = project;

  // Previous and next projects for sequential editorial navigation
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const isMindspace = project.slug === "mindspace";

  return (
    <div className="py-10 sm:py-16 bg-paper bg-ruled-paper text-ink min-h-screen">
      <Container width="editorial" className="space-y-12 sm:space-y-16">
        
        {/* ========================================================
            NAVIGATION BREADCRUMB & BACK LINK
           ======================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-ink/15">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-ink/70 hover:text-ink transition-colors uppercase tracking-wider py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&larr; Return to Selected Work</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-ink/60 uppercase">
              Project 0{currentIndex + 1} of 0{projects.length}
            </span>
            <span
              className={cn(
                "font-mono text-xs px-2.5 py-0.5 rounded-xs border font-bold uppercase",
                project.isFeatured
                  ? "bg-mustard text-ink border-ink shadow-[1px_1px_0px_#211F1C]"
                  : "bg-secondary-paper text-ink border-ink/20"
              )}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* ========================================================
            01 PROJECT INTRODUCTION (HERO HEADER)
           ======================================================== */}
        <div className="space-y-6">
          
          {/* Top Tape & Category */}
          <div className="flex flex-wrap items-center gap-3">
            <WashiTape
              variant={isMindspace ? "mustard" : "blue"}
              size="sm"
              tilt="slight-left"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </WashiTape>

            {project.date && (
              <span className="font-mono text-xs text-ink/70">
                &bull; {project.date}
              </span>
            )}
          </div>

          {/* Large Condensed Display Headline */}
          <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink uppercase tracking-tight leading-none select-none">
            {project.title}
          </h1>

          {/* Tagline / Subtitle */}
          <p className="font-body text-xl sm:text-2xl text-ink font-medium max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Action Links Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink text-paper font-mono text-xs font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_#211F1C] hover:bg-neutral-800 transition-all active:translate-y-0.5"
              >
                <span>VISIT LIVE WEBSITE</span>
                <ExternalLink className="w-3.5 h-3.5 text-mustard" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-paper text-ink font-mono text-xs font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_#211F1C] hover:bg-secondary-paper transition-all active:translate-y-0.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORY</span>
              </a>
            )}

            <div className="hidden sm:flex items-center gap-2 ml-2 select-none">
              <span className="font-handwriting text-ink/70 text-base -rotate-2">
                verified architecture
              </span>
              <DoodleArrow direction="right" className="w-6 h-3 text-ink/50" />
            </div>
          </div>

        </div>

        {/* ========================================================
            01.1 OVERVIEW CARD (PROJECT SUMMARY)
           ======================================================== */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-mustard/40 px-2 py-0.5 rounded-xs border border-mustard">
              01 / Project Introduction &amp; Summary
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="p-6 sm:p-8 rounded-xs bg-secondary-paper/70 border border-ink/20 shadow-[2px_2px_0px_#211F1C]">
            <p className="font-body text-base sm:text-lg text-ink/90 leading-relaxed font-normal">
              {caseStudy.overview}
            </p>
          </div>
        </section>

        {/* ========================================================
            MINDSPACE DEEP-DIVE SECTION (EXCLUSIVE TO MINDSPACE)
           ======================================================== */}
        {isMindspace && (
          <section className="space-y-6 pt-2">
            
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-paper uppercase tracking-wider bg-ink px-2.5 py-0.5 rounded-xs border border-ink">
                SPECIAL SECTION / MINDSPACE CAPABILITIES BREAKDOWN
              </span>
              <div className="h-px bg-ink/15 flex-1" />
            </div>

            {/* Prominent Under Development Banner */}
            <div className="p-4 rounded-xs bg-mustard/30 border-2 border-ink flex items-start gap-3 shadow-[2px_2px_0px_#211F1C]">
              <Sparkles className="w-5 h-5 text-ink shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm font-body">
                <strong className="font-mono font-bold uppercase text-ink block">
                  Product Status: In Active Private Development (2026 Alpha)
                </strong>
                <p className="text-ink/80 leading-relaxed">
                  MINDSPACE is Atharva Kale&apos;s independent flagship AI workspace. Core knowledge graph AST parsing and sub-20ms semantic search in pgvector are fully verified and implemented. Advanced autonomous cognitive reflection and speech-to-action pipelines are on the active development roadmap.
                </p>
              </div>
            </div>

            {/* 6 Modular Core Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* 1. Intelligent Notes */}
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xs bg-mustard border border-ink flex items-center justify-center text-ink">
                    <Network className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-mint-dark bg-mint/30 px-1.5 py-0.5 rounded-xs border border-mint-border">
                    Implemented
                  </span>
                </div>
                <h4 className="font-anton text-lg text-ink uppercase">Intelligent Notes</h4>
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  Local-first markdown files parsed through a custom AST tokenizer that extracts wikilinks (<code className="text-xs bg-secondary-paper px-1 rounded-xs">[[Node]]</code>) and maps emergent conceptual links without manual tags.
                </p>
              </div>

              {/* 2. Habit Tracking */}
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xs bg-mint border border-ink flex items-center justify-center text-ink">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-mint-dark bg-mint/30 px-1.5 py-0.5 rounded-xs border border-mint-border">
                    Implemented
                  </span>
                </div>
                <h4 className="font-anton text-lg text-ink uppercase">Habit Tracking</h4>
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  Frictionless micro-habit logging tied to semantic tags. Tracks streak velocity, completion probability, and correlates daily execution patterns against project output.
                </p>
              </div>

              {/* 3. Tasks & Goals */}
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xs bg-pink border border-ink flex items-center justify-center text-white">
                    <ListTodo className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-mint-dark bg-mint/30 px-1.5 py-0.5 rounded-xs border border-mint-border">
                    Implemented
                  </span>
                </div>
                <h4 className="font-anton text-lg text-ink uppercase">Tasks &amp; Goals</h4>
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  Hierarchical milestone breakdown enforcing verifiable task IDs. Prevents hallucinated AI tasks through strict Pydantic v2 boundary schema validation.
                </p>
              </div>

              {/* 4. AI Companion & Reflection */}
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xs bg-blue border border-ink flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-yellow-800 bg-mustard/30 px-1.5 py-0.5 rounded-xs border border-mustard">
                    In Testing
                  </span>
                </div>
                <h4 className="font-anton text-lg text-ink uppercase">AI Companion</h4>
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  A proactive, privacy-respecting cognitive assistant powered by Claude 3.7. Analyzes unlinked context between tasks and previous notes to highlight high-leverage daily priorities.
                </p>
              </div>

              {/* 5. Personal Knowledge Hub */}
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xs bg-secondary-paper border border-ink flex items-center justify-center text-ink">
                    <Brain className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-mint-dark bg-mint/30 px-1.5 py-0.5 rounded-xs border border-mint-border">
                    Implemented
                  </span>
                </div>
                <h4 className="font-anton text-lg text-ink uppercase">Personal Knowledge Hub</h4>
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  Local-first vector store using pgvector cosine distance indexing. Enables sub-20ms hybrid semantic discovery across hundreds of unstructured documents.
                </p>
              </div>

              {/* 6. Planned Thought-to-Action & Weekly Insights */}
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xs bg-ink border border-ink flex items-center justify-center text-mustard">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-ink/70 bg-secondary-paper px-1.5 py-0.5 rounded-xs border border-ink/20">
                    Planned Roadmap
                  </span>
                </div>
                <h4 className="font-anton text-lg text-ink uppercase">Thought-to-Action &amp; Insights</h4>
                <p className="text-xs text-ink/80 font-body leading-relaxed">
                  Multi-modal audio memo parsing into structured action items, paired with offline privacy mode running lightweight local LLM weights on Apple Silicon.
                </p>
              </div>

            </div>

          </section>
        )}

        {/* ========================================================
            02 THE PROBLEM STATEMENT
           ======================================================== */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-pink/30 px-2 py-0.5 rounded-xs border border-pink-border">
              02 / The Business or User Problem
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="p-6 sm:p-8 rounded-xs bg-white border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-3">
            <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-[#EF4444]" />
              <span>Core Friction Being Solved</span>
            </div>
            <p className="font-body text-base sm:text-lg text-ink/85 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>
        </section>

        {/* ========================================================
            03 THE ARCHITECTED SOLUTION & OBJECTIVES
           ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-mint/40 px-2 py-0.5 rounded-xs border border-mint-border">
              03 / The Engineered Solution &amp; Objectives
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          {/* Solution Banner */}
          <div className="p-6 sm:p-8 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink/70">
              Architected Solution
            </div>
            <p className="font-body text-base sm:text-lg text-ink font-medium leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {caseStudy.objectives.map((obj, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xs bg-secondary-paper/60 border border-ink/20 shadow-sm space-y-1.5"
              >
                <div className="flex items-center justify-between font-mono text-xs text-ink/60">
                  <span className="font-bold text-ink">Objective 0{i + 1}</span>
                  <span>Target Metric</span>
                </div>
                <p className="font-body text-sm sm:text-base text-ink/85 leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            04 MY CONTRIBUTION
           ======================================================== */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-mustard/40 px-2 py-0.5 rounded-xs border border-mustard">
              04 / Personal Engineering Contribution
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="p-6 sm:p-8 rounded-xs bg-white border border-ink/20 shadow-[2px_2px_0px_#211F1C]">
            <h3 className="font-anton text-xl text-ink uppercase tracking-tight mb-4">
              Hands-On Technical Scope
            </h3>
            <ul className="space-y-3 font-body text-sm sm:text-base text-ink/85">
              {caseStudy.myContribution.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========================================================
            05 TECHNOLOGY AND ARCHITECTURE
           ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-blue/30 px-2 py-0.5 rounded-xs border border-blue/40">
              05 / Technology Stack &amp; Architecture
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Frontend */}
            {caseStudy.technicalArchitecture.frontend && (
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                  <Terminal className="w-4 h-4 text-mustard" />
                  <span>Frontend &amp; UI</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.technicalArchitecture.frontend.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded-xs bg-secondary-paper border border-ink/15 text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Backend */}
            {caseStudy.technicalArchitecture.backend && (
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                  <Cpu className="w-4 h-4 text-mint-dark" />
                  <span>Backend &amp; APIs</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.technicalArchitecture.backend.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded-xs bg-secondary-paper border border-ink/15 text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Database */}
            {caseStudy.technicalArchitecture.database && (
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                  <Database className="w-4 h-4 text-pink" />
                  <span>Database &amp; Vectors</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.technicalArchitecture.database.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded-xs bg-secondary-paper border border-ink/15 text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* AI Services */}
            {caseStudy.technicalArchitecture.aiServices && (
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                  <Bot className="w-4 h-4 text-blue" />
                  <span>AI &amp; Generative Services</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.technicalArchitecture.aiServices.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded-xs bg-mustard/30 border border-mustard text-ink font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Media / External Services */}
            {caseStudy.technicalArchitecture.mediaAndServices && (
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                  <Layers className="w-4 h-4 text-ink/70" />
                  <span>Media &amp; Third-Party Services</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.technicalArchitecture.mediaAndServices.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded-xs bg-secondary-paper border border-ink/15 text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Deployment */}
            {caseStudy.technicalArchitecture.deployment && (
              <div className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase">
                  <Zap className="w-4 h-4 text-mustard" />
                  <span>Deployment &amp; Edge</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {caseStudy.technicalArchitecture.deployment.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded-xs bg-secondary-paper border border-ink/15 text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================
            06 IMPLEMENTATION HIGHLIGHTS
           ======================================================== */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-secondary-paper px-2 py-0.5 rounded-xs border border-ink/20">
              06 / Implementation Highlights &amp; Phases
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="space-y-3">
            {caseStudy.implementation.map((phase, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-xs bg-white border border-ink/20 shadow-sm space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-ink text-paper px-2 py-0.5 rounded-xs">
                      Phase 0{i + 1}
                    </span>
                    <span className="font-anton text-base sm:text-lg text-ink uppercase tracking-tight">
                      {phase.phase}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm sm:text-base text-ink/85 leading-relaxed pl-1 sm:pl-2">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            07 CHALLENGES AND ENGINEERING DECISIONS
           ======================================================== */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-pink/30 px-2 py-0.5 rounded-xs border border-pink-border">
              07 / Challenges &amp; Engineering Decisions
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.challenges.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-xs bg-paper border border-ink/25 shadow-[2px_2px_0px_#211F1C] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="font-mono text-xs font-bold text-ink/60 uppercase">
                    Friction Point 0{i + 1}
                  </div>
                  <h4 className="font-heading font-bold text-base text-ink leading-snug">
                    {c.challenge}
                  </h4>
                </div>

                <div className="p-3.5 rounded-xs bg-secondary-paper/70 border-l-2 border-ink text-xs sm:text-sm font-body text-ink/85 leading-relaxed">
                  <strong className="font-mono text-xs uppercase text-ink block mb-1">
                    Architectural Resolution:
                  </strong>
                  {c.resolution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            08 SCREENSHOTS AND VISUAL DEMONSTRATIONS
           ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-mustard/40 px-2 py-0.5 rounded-xs border border-mustard">
              08 / Screenshots &amp; Visual Demonstrations
            </span>
            <div className="h-px bg-ink/15 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.screenshots.map((s, i) => (
              <div
                key={i}
                className="relative bg-white p-3.5 pb-4 rounded-xs border-2 border-ink shadow-[4px_4px_0px_#211F1C] flex flex-col justify-between"
              >
                {/* Washi Tape Mount */}
                <div className="absolute -top-3.5 left-6 z-10 pointer-events-none">
                  <WashiTape
                    variant={i % 2 === 0 ? "white" : "blue"}
                    size="sm"
                    tilt={i % 2 === 0 ? "slight-left" : "slight-right"}
                  />
                </div>

                {/* Mock Window Bar */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-ink/15">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 border border-ink/30" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400 border border-ink/30" />
                    <span className="w-2 h-2 rounded-full bg-green-400 border border-ink/30" />
                  </div>
                  <span className="font-mono text-[10px] text-ink/60 uppercase font-bold">
                    {s.title}
                  </span>
                </div>

                {/* Visual Area */}
                <div className="bg-[#18181B] text-paper rounded-xs p-6 my-auto text-center space-y-3 aspect-[16/10] flex flex-col justify-center items-center border border-ink/20">
                  <div className="w-10 h-10 rounded-xs bg-white/10 border border-white/20 flex items-center justify-center text-mustard">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    {s.placeholderLabel || s.title}
                  </div>
                  <p className="font-mono text-[10px] text-white/50 max-w-xs">
                    [Verified Architecture Preview &bull; Ready for High-Res Replacement]
                  </p>
                </div>

                {/* Bottom Caption */}
                <div className="mt-3 pt-2 border-t border-ink/10 text-center font-handwriting text-xs sm:text-sm text-ink/80 select-none">
                  {s.caption}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            09 OUTCOMES (ONLY WHERE VERIFIED)
           ======================================================== */}
        {caseStudy.results && caseStudy.results.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider bg-mint/40 px-2 py-0.5 rounded-xs border border-mint-border">
                09 / Verified Outcomes &amp; Engineering Metrics
              </span>
              <div className="h-px bg-ink/15 flex-1" />
            </div>

            <div className="p-6 sm:p-8 rounded-xs bg-secondary-paper/80 border border-ink/20 shadow-[2px_2px_0px_#211F1C]">
              <h3 className="font-anton text-xl text-ink uppercase tracking-tight mb-4">
                Verified Production Results
              </h3>
              <ul className="space-y-2.5 font-body text-sm sm:text-base text-ink/90">
                {caseStudy.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint-dark shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ========================================================
            10 NEXT PROJECT NAVIGATION
           ======================================================== */}
        <div className="pt-8 border-t border-ink/20 space-y-6">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60">
            10 / Sequential Project Navigation
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Previous Project Link */}
            <Link
              to={`/work/${prevProject.slug}`}
              className="p-5 rounded-xs bg-paper border border-ink/20 shadow-[2px_2px_0px_#211F1C] hover:bg-secondary-paper transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-ink/60 font-bold mb-2">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Case Study</span>
              </div>
              <div>
                <span className="font-mono text-[11px] text-ink/60 block">{prevProject.category}</span>
                <span className="font-anton text-xl sm:text-2xl text-ink uppercase group-hover:text-black">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next Project Link */}
            <Link
              to={`/work/${nextProject.slug}`}
              className="p-5 rounded-xs bg-mustard border border-ink shadow-[2px_2px_0px_#211F1C] hover:brightness-105 transition-all group flex flex-col justify-between text-right"
            >
              <div className="flex items-center justify-end gap-1.5 font-mono text-[10px] uppercase text-ink font-bold mb-2">
                <span>Next Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-ink/80 block">{nextProject.category}</span>
                <span className="font-anton text-xl sm:text-2xl text-ink uppercase group-hover:text-black">
                  {nextProject.title}
                </span>
              </div>
            </Link>

          </div>

          {/* Quick jump back to work archive */}
          <div className="flex items-center justify-between pt-4">
            <Link
              to="/work"
              className="font-mono text-xs font-bold uppercase tracking-wider text-ink hover:underline flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Complete 7-Project Archive</span>
            </Link>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-xs text-ink/60 hover:text-ink transition-colors cursor-pointer"
            >
              Back to Top &uarr;
            </button>
          </div>
        </div>

      </Container>
    </div>
  );
};
