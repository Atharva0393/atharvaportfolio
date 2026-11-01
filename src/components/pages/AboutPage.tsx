import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PastelCard } from "@/components/ui/PastelCard";
import { Button } from "@/components/ui/Button";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { EditorialAsterisk, CornerCross } from "@/components/ui/DecorativeElements";
import { Reveal } from "@/components/ui/Reveal";
import {
  GraduationCap,
  Terminal,
  Code2,
  Compass,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-paper text-ink bg-ruled-paper min-h-screen">
      <Container width="editorial" className="space-y-16 sm:space-y-24">
        
        {/* TOP BREADCRUMB */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink/10">
          <Link
            to="/"
            className="text-sm font-mono text-ink/70 hover:text-terracotta transition-colors focus-ring rounded py-1"
          >
            &larr; Return to Homepage
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-neutralWhite border border-ink/15 text-ink font-semibold">
              B.Tech CSE &bull; Class of 2027
            </span>
          </div>
        </div>

        {/* HERO TITLE & INTRO */}
        <Reveal className="space-y-6">
          <div className="flex items-center gap-3">
            <SectionLabel number="About" label="Personal Biography" variant="pill" color="terracotta" />
            <CornerCross />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-ink uppercase tracking-tight leading-[0.95]">
            An engineer by education. <br />
            <span className="text-terracotta italic font-normal tracking-normal">
              A builder by instinct.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-ink/80 font-heading font-medium max-w-3xl leading-snug">
            I am Atharva Kale — a Computer Science Engineering student graduating in 2027, building at the intersection of AI engineering, full-stack systems, and art-directed product craft.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button href="/#contact" variant="primary" size="md" showArrow>
              START A CONVERSATION
            </Button>
            <Button href="/work" variant="secondary" size="md">
              VIEW SHIPPED PROJECTS &rarr;
            </Button>
            <HandwrittenNote direction="none" rotate="left" color="terracotta" size="sm" className="hidden sm:inline-flex">
              Building real systems since day one
            </HandwrittenNote>
          </div>
        </Reveal>

        {/* 1. EDUCATION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
              01 / Academic Foundation
            </span>
            <div className="h-px bg-ink/10 flex-1" />
          </div>

          <PastelCard variant="white" radius="32" padding="generous" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-ink/10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-peach/50 border border-peach-border flex items-center justify-center text-terracotta">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-heading font-black text-2xl text-ink uppercase">
                    Bachelor of Technology in Computer Science &amp; Engineering
                  </h2>
                  <span className="font-mono text-xs text-ink/60">
                    Expected Graduation: Summer 2027 &bull; Undergraduate Program
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs px-3 py-1 rounded-full bg-cream-100 border border-ink/10 text-ink/80 font-bold self-start sm:self-auto">
                Current CS Student
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-ink/80 font-body">
              <div className="space-y-2">
                <span className="font-mono text-xs text-ink/50 uppercase font-bold block">
                  Core Computer Science Coursework
                </span>
                <p className="leading-relaxed">
                  Rigorous academic study across Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Software Engineering methodologies.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-ink/50 uppercase font-bold block">
                  Practical Application
                </span>
                <p className="leading-relaxed">
                  Rather than treating theory as isolated exam questions, I immediately apply academic concepts — algorithms, database normalization, relational constraints, and protocol design — into deployed web platforms and production architectures.
                </p>
              </div>
            </div>
          </PastelCard>
        </section>

        {/* 2. DEVELOPMENT JOURNEY */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
              02 / Development Journey
            </span>
            <div className="h-px bg-ink/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Stage 1 */}
            <PastelCard variant="peach" radius="28" padding="default" className="space-y-3">
              <span className="font-mono text-xs font-bold text-terracotta px-2.5 py-0.5 rounded-full bg-neutralWhite border border-peach-border inline-block">
                Stage 01 &bull; Foundations
              </span>
              <h3 className="font-heading font-bold text-xl text-ink">
                From Syntax to Real Systems
              </h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Started by mastering core programming in Python and TypeScript. Moving rapidly past tutorial sandboxes, I focused on understanding how data flows across client, server, and persistent database layers.
              </p>
            </PastelCard>

            {/* Stage 2 */}
            <PastelCard variant="mint" radius="28" padding="default" className="space-y-3">
              <span className="font-mono text-xs font-bold text-mint-dark px-2.5 py-0.5 rounded-full bg-neutralWhite border border-mint-border inline-block">
                Stage 02 &bull; Client Delivery
              </span>
              <h3 className="font-heading font-bold text-xl text-ink">
                Shipping for Real Businesses
              </h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Transitioned into building client solutions. Shipped real-world web applications for clean energy infrastructure (Payzero), architectural studios (Meraki UK), chess academies (The Chess Project), and industrial manufacturing (Yogesh Plastics).
              </p>
            </PastelCard>

            {/* Stage 3 */}
            <PastelCard variant="lavender" radius="28" padding="default" className="space-y-3">
              <span className="font-mono text-xs font-bold text-lavender-dark px-2.5 py-0.5 rounded-full bg-neutralWhite border border-lavender-border inline-block">
                Stage 03 &bull; AI Systems
              </span>
              <h3 className="font-heading font-bold text-xl text-ink">
                Applied AI &amp; Product Craft
              </h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Deepened focus into frontier AI: building deterministic agent pipelines, semantic vector search engines, and launching flagship independent products like MINDSPACE and InterviewAI.
              </p>
            </PastelCard>

          </div>
        </section>

        {/* 3. PRODUCT-BUILDING EXPERIENCE */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
              03 / Product-Building Experience
            </span>
            <div className="h-px bg-ink/10 flex-1" />
          </div>

          <PastelCard variant="white" radius="32" padding="generous" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-ink uppercase">
                End-to-End Ownership: From Scoping to Production
              </h2>
              <p className="text-base text-ink/80 font-body leading-relaxed max-w-3xl">
                My product experience has been shaped through genuine, self-directed client projects and independent software ventures. I operate as a complete product engineer:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-cream-50 border border-ink/10 space-y-2">
                <span className="p-2 rounded-xl bg-neutralWhite border border-ink/10 inline-block text-terracotta">
                  <Compass className="w-5 h-5" />
                </span>
                <h4 className="font-heading font-bold text-base text-ink">Requirement Scoping</h4>
                <p className="text-xs text-ink/70 font-body leading-relaxed">
                  Interrogating client workflows, translating vague business requests into modular technical requirements, and identifying high-friction user bottlenecks.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-cream-50 border border-ink/10 space-y-2">
                <span className="p-2 rounded-xl bg-neutralWhite border border-ink/10 inline-block text-mint-dark">
                  <Terminal className="w-5 h-5" />
                </span>
                <h4 className="font-heading font-bold text-base text-ink">Database &amp; API Design</h4>
                <p className="text-xs text-ink/70 font-body leading-relaxed">
                  Normalizing relational PostgreSQL schemas, writing Prisma models, designing idempotent REST endpoints, and enforcing strict type contracts with Zod.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-cream-50 border border-ink/10 space-y-2">
                <span className="p-2 rounded-xl bg-neutralWhite border border-ink/10 inline-block text-lavender-dark">
                  <Layers className="w-5 h-5" />
                </span>
                <h4 className="font-heading font-bold text-base text-ink">Editorial UI Systems</h4>
                <p className="text-xs text-ink/70 font-body leading-relaxed">
                  Designing cohesive design tokens, warm tactile color palettes, responsive layouts, and accessible keyboard focus states that reject generic dashboard templates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-cream-50 border border-ink/10 space-y-2">
                <span className="p-2 rounded-xl bg-neutralWhite border border-ink/10 inline-block text-ink">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h4 className="font-heading font-bold text-base text-ink">Production Deployment</h4>
                <p className="text-xs text-ink/70 font-body leading-relaxed">
                  Configuring edge hosting, automated Git push previews on Vercel, DNS records, SSL certificates, payment webhooks, and third-party media CDNs.
                </p>
              </div>

            </div>
          </PastelCard>
        </section>

        {/* 4. ENGINEERING INTERESTS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
              04 / Technical Interests &amp; Active Explorations
            </span>
            <div className="h-px bg-ink/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <PastelCard variant="cream" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-terracotta" />
                <h3 className="font-heading font-bold text-xl text-ink">
                  Autonomous Agent Workflows &amp; Tool Calling
                </h3>
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Exploring multi-step agent supervisors that use tools, inspect execution output, reflect upon failures, and self-correct deterministically without human micromanagement.
              </p>
            </PastelCard>

            <PastelCard variant="mint" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-mint-dark" />
                <h3 className="font-heading font-bold text-xl text-ink">
                  Local-First Knowledge &amp; Vector Databases
                </h3>
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Investigating offline-capable local Markdown graph stores, dense vector indexing with pgvector, and hybrid search pipelines that respect user privacy.
              </p>
            </PastelCard>

            <PastelCard variant="lavender" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-lavender-dark" />
                <h3 className="font-heading font-bold text-xl text-ink">
                  Generative Vision Pipelines &amp; ComfyUI
                </h3>
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Chaining custom nodes in ComfyUI, fine-tuning visual aesthetics, and creating automated visual asset generation pipelines for commercial and creative projects.
              </p>
            </PastelCard>

            <PastelCard variant="white" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-ink" />
                <h3 className="font-heading font-bold text-xl text-ink">
                  Developer Ergonomics &amp; Type Safety
                </h3>
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Obsessed with clean codebases: end-to-end type safety from database models to UI props, modular atomic architecture, and eliminating spaghetti logic.
              </p>
            </PastelCard>

          </div>
        </section>

        {/* 5. PROFESSIONAL PHILOSOPHY */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
              05 / Professional Philosophy
            </span>
            <div className="h-px bg-ink/10 flex-1" />
          </div>

          <div className="p-8 sm:p-12 rounded-4xl bg-neutralWhite border border-ink/15 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2">
              <EditorialAsterisk size="sm" color="terracotta" />
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                The Personal Engineering Creed
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-ink uppercase tracking-tight leading-snug">
                &ldquo;Engineering is measured by the clarity of the problem solved, not the complexity of the stack.&rdquo;
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm text-ink/80 font-body">
                <div className="space-y-1.5">
                  <strong className="text-ink font-heading font-bold block text-base">01 &bull; Determinism Over Magic</strong>
                  <p className="leading-relaxed">
                    AI models are powerful probability engines, but software needs certainty. I enforce strict schemas and verification checks on every AI integration.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <strong className="text-ink font-heading font-bold block text-base">02 &bull; Craft &amp; Purpose</strong>
                  <p className="leading-relaxed">
                    Ugly, neglected interfaces disrespect the user&apos;s attention. Clean editorial design and thoughtful tactile typography elevate good engineering into great products.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <strong className="text-ink font-heading font-bold block text-base">03 &bull; Continuous Honesty</strong>
                  <p className="leading-relaxed">
                    Never fabricate metrics, claim unverified traffic, or pretend a prototype is a scaled enterprise system. True engineering credibility is earned through transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM ACTION BAR */}
        <div className="pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/engineering"
            className="font-heading font-bold text-lg text-terracotta hover:underline inline-flex items-center gap-2 focus-ring rounded"
          >
            <span>Explore Technical Stack &amp; AI Capabilities &rarr;</span>
          </Link>

          <Button href="/#contact" variant="primary" size="md" showArrow>
            GET IN TOUCH
          </Button>
        </div>

      </Container>
    </div>
  );
};
