import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { PastelCard } from "@/components/ui/PastelCard";
import { Reveal } from "@/components/ui/Reveal";
import {
  Bot,
  BrainCircuit,
  Database,
  FileSpreadsheet,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

interface AiCapability {
  id: string;
  title: string;
  tag: string;
  description: string;
  experienceFocus: string;
  icon: React.ReactNode;
  variant: "mint" | "lavender" | "peach" | "white" | "cream";
}

const aiCapabilities: AiCapability[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    tag: "Tool Calling & Reflection",
    description: "Designing autonomous multi-step agents that execute tools, monitor intermediate output, and self-correct before final delivery.",
    experienceFocus: "Built multi-agent supervisors with deterministic boundary controls and state machine fallbacks.",
    icon: <Bot className="w-5 h-5 text-terracotta" />,
    variant: "white",
  },
  {
    id: "llm-integration",
    title: "LLM Integration",
    tag: "Structured Outputs & Routing",
    description: "Integrating frontier LLMs (Claude, OpenAI) with strict schema enforcement (Zod / Pydantic), prompt caching, and cost-aware model routing.",
    experienceFocus: "Zero-hallucination pipelines returning guaranteed type-safe JSON objects directly to UI components.",
    icon: <BrainCircuit className="w-5 h-5 text-lavender-dark" />,
    variant: "lavender",
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation",
    tag: "Embeddings & pgvector",
    description: "Developing semantic retrieval systems connecting private unstructured knowledge stores to LLM generation via vector indexing.",
    experienceFocus: "Implemented semantic vector stores with hybrid search (dense embeddings + BM25 keyword matching).",
    icon: <Database className="w-5 h-5 text-mint-dark" />,
    variant: "mint",
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    tag: "Unstructured to Structured",
    description: "Extracting tables, metadata, and nested relationships from complex unstructured documents, PDFs, and invoices into relational databases.",
    experienceFocus: "Automated document ingestion pipelines normalizing raw business paperwork into clean PostgreSQL rows.",
    icon: <FileSpreadsheet className="w-5 h-5 text-peach-dark" />,
    variant: "peach",
  },
  {
    id: "ai-assisted-dev",
    title: "AI-Assisted Development",
    tag: "Agentic Pair Programming",
    description: "Accelerating full-stack development cycles with agentic coding environments, synthetic test data generation, and rapid architectural iteration.",
    experienceFocus: "Daily practitioner utilizing agentic IDEs to multiply engineering throughput without sacrificing type safety.",
    icon: <Code2 className="w-5 h-5 text-ink" />,
    variant: "white",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    tag: "ComfyUI & Event Loops",
    description: "Chaining generative vision nodes in ComfyUI, webhook triggers, background task queues, and automated multi-modal generation pipelines.",
    experienceFocus: "Orchestrated end-to-end generative media workflows producing thousands of brand and product creative assets.",
    icon: <Workflow className="w-5 h-5 text-terracotta" />,
    variant: "cream",
  },
];

export const AiEngineeringSection: React.FC = () => {
  return (
    <section id="engineering" className="py-20 sm:py-28 border-b border-ink/15 bg-paper bg-ruled-paper relative">
      <Container width="editorial" className="space-y-12">
        
        {/* Section Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <SectionLabel number="04" label="AI Engineering Capabilities" variant="technical" color="terracotta" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-ink tracking-tight uppercase leading-[0.98]">
              Applied Intelligence. <br />
              <span className="text-terracotta italic font-normal tracking-normal">
                Deterministic Execution.
              </span>
            </h2>
          </div>

          <HandwrittenNote direction="curved-right" rotate="left" color="terracotta" size="sm">
            Supported by actual shipped systems
          </HandwrittenNote>
        </Reveal>

        {/* 6 Modular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((cap, index) => (
            <Reveal key={cap.id} delay={(index % 3 + 1) as any}>
              <PastelCard
                variant={cap.variant}
                radius="28"
                padding="default"
                interactive
                className="flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-ink/10">
                    <span className="p-2.5 rounded-2xl bg-neutralWhite border border-ink/10 shadow-sm">
                      {cap.icon}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink/60 font-semibold px-2 py-0.5 rounded-md bg-neutralWhite/70 border border-ink/10">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-black text-xl text-ink uppercase tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-ink/80 font-body leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Experience Snippet */}
                <div className="mt-6 pt-3 border-t border-ink/10">
                  <div className="flex items-start gap-1.5 text-xs font-mono text-ink/70">
                    <Sparkles className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                    <span>{cap.experienceFocus}</span>
                  </div>
                </div>
              </PastelCard>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
};

