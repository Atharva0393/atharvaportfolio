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
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Search,
  FileSpreadsheet,
  Workflow,
  Server,
  Zap,
} from "lucide-react";

export const AiEngineeringPage: React.FC = () => {
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
              Deep Technical Spec
            </span>
          </div>
        </div>

        {/* HERO TITLE & INTRO */}
        <Reveal className="space-y-6">
          <div className="flex items-center gap-3">
            <SectionLabel number="04" label="Technical Capabilities" variant="pill" color="terracotta" />
            <CornerCross />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-ink uppercase tracking-tight leading-[0.95]">
            Engineering intelligence. <br />
            <span className="text-terracotta italic font-normal tracking-normal">
              Built on solid foundations.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-ink/80 font-heading font-medium max-w-3xl leading-snug">
            A comprehensive breakdown of my technical stack, system architecture capabilities, and principled approach to AI-assisted software engineering.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button href="#ai-assisted-philosophy" variant="primary" size="md">
              MY AI-ASSISTED PHILOSOPHY &darr;
            </Button>
            <Button href="/work" variant="secondary" size="md">
              SEE APPLIED PROJECTS &rarr;
            </Button>
            <HandwrittenNote direction="none" rotate="left" color="terracotta" size="sm" className="hidden sm:inline-flex">
              Zero fake proficiency percentages
            </HandwrittenNote>
          </div>
        </Reveal>

        {/* 01: AI ENGINEERING */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4 pb-2">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider block">
                Pillar 01 / Artificial Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink uppercase tracking-tight">
                AI Engineering
              </h2>
            </div>
            <span className="font-mono text-xs text-ink/50 uppercase hidden sm:inline">
              Prompt Pipelines &bull; RAG &bull; Agents
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* LLM Integrations */}
            <PastelCard variant="lavender" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-heading font-bold text-lg text-ink">LLM Integrations</span>
                <BrainCircuit className="w-5 h-5 text-lavender-dark" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Production integration of frontier models (Claude, OpenAI) utilizing structured JSON outputs, prompt caching, and cost-effective multi-model routing based on task complexity.
              </p>
              <div className="pt-2 font-mono text-xs text-lavender-dark font-semibold">
                Strict Schema Enforcement
              </div>
            </PastelCard>

            {/* Gemini */}
            <PastelCard variant="peach" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-heading font-bold text-lg text-ink">Gemini</span>
                <Sparkles className="w-5 h-5 text-terracotta" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Leveraging Google Gemini models for large-context multimodal reasoning, document ingestion, visual analysis, and long-context processing with high throughput.
              </p>
              <div className="pt-2 font-mono text-xs text-terracotta font-semibold">
                Multimodal &bull; Long Context Window
              </div>
            </PastelCard>

            {/* Retrieval-Augmented Generation (RAG) */}
            <PastelCard variant="mint" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-heading font-bold text-lg text-ink">RAG Systems</span>
                <Search className="w-5 h-5 text-mint-dark" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Building robust context-retrieval architectures: recursive document chunking, semantic similarity re-ranking, and dynamic prompt injection to ground LLMs in private data.
              </p>
              <div className="pt-2 font-mono text-xs text-mint-dark font-semibold">
                Hybrid Search &bull; Context Window Packing
              </div>
            </PastelCard>

            {/* Embeddings */}
            <PastelCard variant="white" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-heading font-bold text-lg text-ink">Dense Embeddings</span>
                <Database className="w-5 h-5 text-ink" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Generating and indexing dense semantic vector embeddings in PostgreSQL via <code className="font-mono text-xs bg-cream px-1 py-0.5 rounded">pgvector</code> for sub-20ms semantic search across notes and knowledge bases.
              </p>
              <div className="pt-2 font-mono text-xs text-ink/70 font-semibold">
                Cosine Distance &bull; HNSW Indexing
              </div>
            </PastelCard>

            {/* Document Processing */}
            <PastelCard variant="cream" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-heading font-bold text-lg text-ink">Document Processing</span>
                <FileSpreadsheet className="w-5 h-5 text-terracotta" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Extracting structured data from raw unstructured PDFs, receipts, and technical forms into normalized database rows with schema validation and error fallback boundaries.
              </p>
              <div className="pt-2 font-mono text-xs text-terracotta font-semibold">
                Table Parsing &bull; Schema Normalization
              </div>
            </PastelCard>

            {/* Agentic Workflows */}
            <PastelCard variant="lavender" radius="28" padding="default" className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-ink/10">
                <span className="font-heading font-bold text-lg text-ink">Agentic Workflows</span>
                <Workflow className="w-5 h-5 text-lavender-dark" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Architecting autonomous agents equipped with tool calling, scratchpad memory, and reflection loops that inspect tool execution and self-correct deterministically.
              </p>
              <div className="pt-2 font-mono text-xs text-lavender-dark font-semibold">
                Tool Calling &bull; Reflection Loops
              </div>
            </PastelCard>

          </div>
        </section>

        {/* 02: SOFTWARE ENGINEERING */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4 pb-2">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider block">
                Pillar 02 / Systems &amp; Application Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink uppercase tracking-tight">
                Software Engineering
              </h2>
            </div>
            <span className="font-mono text-xs text-ink/50 uppercase hidden sm:inline">
              React &bull; Next.js &bull; TypeScript &bull; Python
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* React */}
            <PastelCard variant="white" radius="28" padding="default" className="space-y-2.5">
              <div className="font-heading font-bold text-lg text-ink flex items-center justify-between">
                <span>React</span>
                <Code2 className="w-5 h-5 text-terracotta" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Deep mastery of modern functional React, custom hooks composition, component lifecycle, state colocation, and concurrent UI rendering patterns.
              </p>
            </PastelCard>

            {/* Next.js */}
            <PastelCard variant="mint" radius="28" padding="default" className="space-y-2.5">
              <div className="font-heading font-bold text-lg text-ink flex items-center justify-between">
                <span>Next.js (App Router)</span>
                <Zap className="w-5 h-5 text-mint-dark" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Production architecture with Next.js 15/16: React Server Components (RSC), Server Actions, dynamic segment routing, Turbopack, and edge runtime optimizations.
              </p>
            </PastelCard>

            {/* TypeScript */}
            <PastelCard variant="lavender" radius="28" padding="default" className="space-y-2.5">
              <div className="font-heading font-bold text-lg text-ink flex items-center justify-between">
                <span>TypeScript</span>
                <Terminal className="w-5 h-5 text-lavender-dark" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Strict type discipline across all projects. Zero-any policy, generic interfaces, Discriminated Unions, and runtime schema sync using Zod.
              </p>
            </PastelCard>

            {/* Python */}
            <PastelCard variant="cream" radius="28" padding="default" className="space-y-2.5">
              <div className="font-heading font-bold text-lg text-ink flex items-center justify-between">
                <span>Python</span>
                <Cpu className="w-5 h-5 text-terracotta" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Building high-performance asynchronous microservices with FastAPI, Pydantic v2 strict models, and data transformation scripts for AI pipelines.
              </p>
            </PastelCard>

            {/* REST APIs */}
            <PastelCard variant="peach" radius="28" padding="default" className="space-y-2.5">
              <div className="font-heading font-bold text-lg text-ink flex items-center justify-between">
                <span>REST APIs</span>
                <Server className="w-5 h-5 text-peach-dark" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Designing clean, idempotent RESTful endpoints with intuitive URI schemes, semantic HTTP status codes, structured JSON error payloads, and JWT auth cookies.
              </p>
            </PastelCard>

            {/* Backend Systems */}
            <PastelCard variant="white" radius="28" padding="default" className="space-y-2.5">
              <div className="font-heading font-bold text-lg text-ink flex items-center justify-between">
                <span>Backend Systems</span>
                <Layers className="w-5 h-5 text-ink" />
              </div>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Relational schema modeling with Prisma ORM, background worker loops, secure payment webhook settlement (Razorpay), and third-party media CDN pipelines.
              </p>
            </PastelCard>

          </div>
        </section>

        {/* 03: DATA & INFRASTRUCTURE */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4 pb-2">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider block">
                Pillar 03 / Persistence &amp; Cloud Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink uppercase tracking-tight">
                Data &amp; Infrastructure
              </h2>
            </div>
            <span className="font-mono text-xs text-ink/50 uppercase hidden sm:inline">
              PostgreSQL &bull; Supabase &bull; SQLite &bull; Vercel
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            
            <div className="p-5 rounded-2xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2 text-center">
              <div className="font-mono text-xs font-bold text-terracotta uppercase">SQL</div>
              <h3 className="font-heading font-bold text-base text-ink">Relational SQL</h3>
              <p className="text-xs text-ink/70 font-body">Schema design, foreign key constraints, indexes, joins, and ACID compliance.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2 text-center">
              <div className="font-mono text-xs font-bold text-mint-dark uppercase">Postgres</div>
              <h3 className="font-heading font-bold text-base text-ink">PostgreSQL</h3>
              <p className="text-xs text-ink/70 font-body">Primary database of choice, complex queries, jsonb, and pgvector extension.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2 text-center">
              <div className="font-mono text-xs font-bold text-lavender-dark uppercase">BaaS</div>
              <h3 className="font-heading font-bold text-base text-ink">Supabase</h3>
              <p className="text-xs text-ink/70 font-body">Managed PostgreSQL, Row-Level Security (RLS), real-time events, and storage buckets.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2 text-center">
              <div className="font-mono text-xs font-bold text-peach-dark uppercase">MySQL</div>
              <h3 className="font-heading font-bold text-base text-ink">MySQL</h3>
              <p className="text-xs text-ink/70 font-body">Structured database administration, normalization, and relational modeling.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2 text-center">
              <div className="font-mono text-xs font-bold text-ink/60 uppercase">Embedded</div>
              <h3 className="font-heading font-bold text-base text-ink">SQLite</h3>
              <p className="text-xs text-ink/70 font-body">Embedded local databases for local-first testing and desktop productivity utilities.</p>
            </div>

            <div className="p-5 rounded-2xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2 text-center">
              <div className="font-mono text-xs font-bold text-terracotta uppercase">Edge</div>
              <h3 className="font-heading font-bold text-base text-ink">Vercel</h3>
              <p className="text-xs text-ink/70 font-body">Edge deployment, preview branches, serverless functions, custom domains, and SSL.</p>
            </div>

          </div>
        </section>

        {/* 04: ENGINEERING WORKFLOW */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4 pb-2">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider block">
                Pillar 04 / Quality, Process &amp; Tooling
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink uppercase tracking-tight">
                Engineering Workflow
              </h2>
            </div>
            <span className="font-mono text-xs text-ink/50 uppercase hidden sm:inline">
              Git &bull; Pair Agents &bull; Testing &bull; Reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-terracotta font-mono font-bold text-xs uppercase">
                <GitBranch className="w-4 h-4" />
                <span>Git &amp; GitHub</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-ink">Version Control Discipline</h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Clean semantic commits, isolated feature branches, pull request reviews, and continuous integration workflows for production deployments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-mint-dark font-mono font-bold text-xs uppercase">
                <Sparkles className="w-4 h-4" />
                <span>AI Coding Agents</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-ink">Agentic Pair Programming</h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Utilizing agentic IDEs (Antigravity IDE, Windsurf, Claude Code) to rapidly scaffold boilerplate, explore alternative patterns, and accelerate debugging.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-lavender-dark font-mono font-bold text-xs uppercase">
                <Terminal className="w-4 h-4" />
                <span>Systematic Debugging</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-ink">Root Cause Diagnosis</h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Tracing runtime exceptions, inspecting network payloads, analyzing server log telemetry, and creating minimal reproducible test cases before patching.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-peach-dark font-mono font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Validation &amp; Testing</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-ink">Deterministic Verification</h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Validating edge cases, network timeout handling, database transaction rollbacks, and schema regression tests on dynamic prompt outputs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-ink font-mono font-bold text-xs uppercase">
                <Code2 className="w-4 h-4" />
                <span>Code Review</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-ink">Architectural Scrutiny</h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Rigorous review standards focusing on maintainability, cognitive load, separation of concerns, and eliminating unnecessary external dependencies.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-neutralWhite border border-ink/15 shadow-sm space-y-2.5">
              <div className="flex items-center gap-2 text-terracotta font-mono font-bold text-xs uppercase">
                <Layers className="w-4 h-4" />
                <span>Architecture Planning</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-ink">Design Before Code</h3>
              <p className="text-sm text-ink/80 font-body leading-relaxed">
                Drafting data contracts, schema diagrams, and endpoint specifications before writing code to guarantee modularity and prevent costly rewrites.
              </p>
            </div>

          </div>
        </section>

        {/* SPECIAL SECTION: HOW ATHARVA APPROACHES AI-ASSISTED SOFTWARE ENGINEERING */}
        <section id="ai-assisted-philosophy" className="space-y-6 pt-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider">
              Special Editorial Perspective
            </span>
            <div className="h-px bg-ink/10 flex-1" />
          </div>

          <div className="p-8 sm:p-12 lg:p-16 rounded-4xl bg-neutralWhite border-2 border-ink/20 shadow-ink-offset-md space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-terracotta font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-peach/40 border border-peach-border">
                <EditorialAsterisk size="sm" color="terracotta" />
                <span>Operational Principle</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-ink uppercase tracking-tight leading-tight">
                How I Approach AI-Assisted Software Engineering
              </h2>

              <p className="text-lg sm:text-xl text-ink/85 font-heading font-semibold max-w-3xl leading-relaxed">
                AI coding agents are powerful amplifiers of human intent, but they are not engineers. Here is my operational philosophy on leveraging AI responsibly:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm text-ink/80 font-body">
              
              <div className="p-6 rounded-2xl bg-cream-50 border border-ink/10 space-y-3">
                <div className="font-heading font-bold text-lg text-ink flex items-center gap-2">
                  <span className="font-mono text-xs text-terracotta font-bold px-2 py-0.5 rounded bg-terracotta/10">01</span>
                  <span>The Human Retains Accountability</span>
                </div>
                <p className="leading-relaxed">
                  I treat AI coding agents as brilliant, high-speed junior pair programmers. They scaffold boilerplate, draft alternative algorithms, and surface edge cases. However, I read every line, understand every branch, and take 100% architectural accountability for every commit.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cream-50 border border-ink/10 space-y-3">
                <div className="font-heading font-bold text-lg text-ink flex items-center gap-2">
                  <span className="font-mono text-xs text-mint-dark font-bold px-2 py-0.5 rounded bg-mint/40">02</span>
                  <span>Schema-Driven Boundaries</span>
                </div>
                <p className="leading-relaxed">
                  AI outputs can hallucinate; type systems cannot. Every AI pipeline I build is sealed inside strict Zod or Pydantic schemas. If an AI response drifts by a single key or data type, the parser fails closed immediately before reaching production state.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-cream-50 border border-ink/10 space-y-3">
                <div className="font-heading font-bold text-lg text-ink flex items-center gap-2">
                  <span className="font-mono text-xs text-lavender-dark font-bold px-2 py-0.5 rounded bg-lavender/40">03</span>
                  <span>Architecture Before Prompting</span>
                </div>
                <p className="leading-relaxed">
                  Prompting without an architectural plan creates unmaintainable spaghetti code. I define database schemas, component boundaries, and state flows on paper first. Once the architecture is solid, AI is employed to accelerate the execution of that plan.
                </p>
              </div>

            </div>

            {/* Bottom Callout Banner */}
            <div className="p-5 rounded-2xl bg-mint/40 border border-mint-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-ink">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-mint-dark" />
                <span className="font-bold">Summary: Velocity multiplied by 5x &bull; Quality and rigor strictly preserved</span>
              </div>
              <HandwrittenNote direction="none" rotate="right" color="terracotta" size="sm">
                Taste &bull; Judgment &bull; Execution
              </HandwrittenNote>
            </div>

          </div>
        </section>

        {/* BOTTOM RETURN BAR */}
        <div className="pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/about"
            className="font-heading font-bold text-lg text-terracotta hover:underline inline-flex items-center gap-2 focus-ring rounded"
          >
            <span>&larr; Read About Atharva&apos;s Background &amp; Philosophy</span>
          </Link>

          <Button href="/#contact" variant="primary" size="md" showArrow>
            DISCUSS AN ENGINEERING ROLE
          </Button>
        </div>

      </Container>
    </div>
  );
};

