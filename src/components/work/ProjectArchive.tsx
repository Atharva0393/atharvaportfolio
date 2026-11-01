import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { PastelCard } from "@/components/ui/PastelCard";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  Sparkles,
  ArrowUpRight,
  Lock,
} from "lucide-react";

export const ProjectArchive: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "client">("all");

  const mindspaceProject = projects.find((p) => p.slug === "mindspace");
  const otherProjects = projects.filter((p) => p.slug !== "mindspace");

  const filteredProjects = otherProjects.filter((project) => {
    if (filter === "ai") {
      return (
        project.category.toLowerCase().includes("ai") ||
        project.technologies.some((t) => t.toLowerCase().includes("ai") || t.toLowerCase().includes("llm"))
      );
    }
    if (filter === "fullstack") {
      return (
        project.technologies.some((t) => t.toLowerCase().includes("postgres") || t.toLowerCase().includes("next.js") || t.toLowerCase().includes("prisma"))
      );
    }
    if (filter === "client") {
      return !project.isFeatured;
    }
    return true;
  });

  return (
    <div className="py-12 sm:py-20 bg-paper text-ink bg-ruled-paper min-h-screen">
      <Container width="editorial" className="space-y-16 sm:space-y-20">
        
        {/* ARCHIVE INTRODUCTION */}
        <Reveal className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <SectionLabel number="Archive" label="Selected Work" variant="pill" color="terracotta" />
            <HandwrittenNote direction="curved-right" rotate="left" color="terracotta" size="sm">
              7 real projects &bull; zero fabrication
            </HandwrittenNote>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-ink uppercase tracking-tight leading-[0.95]">
              Selected work. <br />
              <span className="text-terracotta italic font-normal tracking-normal">
                Real problems. Thoughtful engineering.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-ink/80 font-body leading-relaxed max-w-2xl">
              An engineering archive of production client web platforms, AI systems, and internal experimental software. Each project represents specific architectural decisions and solved friction.
            </p>
          </div>
        </Reveal>

        {/* FEATURED FLAGSHIP: MINDSPACE */}
        {mindspaceProject && (
          <Reveal delay={1} className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60 font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>Featured AI Flagship Project</span>
              </span>
              <span className="font-mono text-xs text-terracotta font-semibold">
                [In Active Alpha Testing]
              </span>
            </div>

            <PastelCard
              variant="lavender"
              radius="32"
              padding="generous"
              className="border-2 border-ink/20 shadow-ink-offset-md space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-neutralWhite text-ink font-bold border border-lavender-border">
                      {mindspaceProject.category}
                    </span>
                    <span className="font-mono text-xs text-lavender-dark font-semibold">
                      v2.4 Spec
                    </span>
                  </div>

                  <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-ink uppercase tracking-tight leading-tight">
                    {mindspaceProject.title}
                  </h2>

                  <p className="text-base sm:text-lg text-ink/90 font-medium font-body leading-relaxed">
                    {mindspaceProject.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-ink/75 font-body leading-relaxed">
                    Modern personal productivity is fragmented across disconnected note tools, habit trackers, and task managers. MINDSPACE acts as an active context engine that unifies local markdown notes with dynamic habit and task correlation routines.
                  </p>

                  {/* Architecture & Stack */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[11px] text-ink/60 uppercase tracking-wider block font-bold">
                      Verified Technology Architecture:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {mindspaceProject.technologies.map((t) => (
                        <span key={t} className="font-mono text-xs px-2.5 py-1 rounded bg-neutralWhite border border-ink/10 text-ink font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/work/${mindspaceProject.slug}`}
                      className="inline-flex items-center justify-center font-heading font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full bg-terracotta text-cream-50 hover:bg-terracotta-hover shadow-ink-offset-sm transition-all focus-ring"
                    >
                      <span>EXPLORE DEEP CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5" />
                    </Link>
                    <span className="text-xs font-mono text-ink/60">
                      Private Alpha &bull; Architecture Verified
                    </span>
                  </div>
                </div>

                {/* Right Interactive Visual Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-neutralWhite border border-ink/20 shadow-sm overflow-hidden p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-ink/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
                        <span className="w-2.5 h-2.5 rounded-full bg-peach" />
                        <span className="w-2.5 h-2.5 rounded-full bg-mint" />
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-ink/60">
                        <Lock className="w-3 h-3 text-terracotta" />
                        <span>mindspace.internal/alpha</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-mint/40 border border-mint-border text-xs font-body space-y-1">
                        <div className="flex items-center justify-between font-mono font-bold text-mint-dark">
                          <span>Cognitive Context Layer</span>
                          <span>99.9% Deterministic</span>
                        </div>
                        <p className="text-ink/80 text-[11px]">
                          Automated bidirectional wikilink graph linking habits with long-term goals.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-cream-50 border border-ink/10 space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-ink/70">
                          <span>Vector Latency:</span>
                          <span className="text-terracotta font-bold">14ms pgvector</span>
                        </div>
                        <div className="flex items-center justify-between text-ink/70">
                          <span>Active Indexed Nodes:</span>
                          <span className="text-ink font-semibold">342 Markdown Files</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <Link
                        to={`/work/${mindspaceProject.slug}`}
                        className="text-xs font-mono text-terracotta font-bold hover:underline"
                      >
                        Read Complete 10-Part Architectural Spec &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </PastelCard>
          </Reveal>
        )}

        {/* FILTER NAVIGATION TABS */}
        <section className="space-y-8 pt-6">
          <Reveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-ink/10">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-2xl sm:text-3xl text-ink uppercase tracking-tight">
                All Archive Projects
              </span>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-neutralWhite border border-ink/15 text-ink font-bold">
                {filteredProjects.length}
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  filter === "all"
                    ? "bg-ink text-cream-50 border-ink font-bold shadow-sm"
                    : "bg-neutralWhite text-ink/70 border-ink/15 hover:text-ink"
                }`}
              >
                All ({otherProjects.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("ai")}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  filter === "ai"
                    ? "bg-terracotta text-cream-50 border-terracotta font-bold shadow-sm"
                    : "bg-neutralWhite text-ink/70 border-ink/15 hover:text-ink"
                }`}
              >
                AI Engineering
              </button>
              <button
                type="button"
                onClick={() => setFilter("fullstack")}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  filter === "fullstack"
                    ? "bg-ink text-cream-50 border-ink font-bold shadow-sm"
                    : "bg-neutralWhite text-ink/70 border-ink/15 hover:text-ink"
                }`}
              >
                Full-Stack
              </button>
              <button
                type="button"
                onClick={() => setFilter("client")}
                className={`px-3 py-1.5 rounded-full border transition-all ${
                  filter === "client"
                    ? "bg-mint text-ink border-mint-border font-bold shadow-sm"
                    : "bg-neutralWhite text-ink/70 border-ink/15 hover:text-ink"
                }`}
              >
                Client Platforms
              </button>
            </div>
          </Reveal>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2 + 1) as any} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* BOTTOM RETURN BAR */}
        <div className="pt-12 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="font-heading font-bold text-lg text-terracotta hover:underline inline-flex items-center gap-2 focus-ring rounded"
          >
            <span>&larr; Return to Homepage</span>
          </Link>

          <Button href="/#contact" variant="primary" size="md" showArrow>
            DISCUSS A NEW PROJECT
          </Button>
        </div>

      </Container>
    </div>
  );
};
