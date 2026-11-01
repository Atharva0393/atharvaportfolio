import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HandwrittenNote } from "@/components/ui/HandwrittenNote";
import { EditorialAsterisk } from "@/components/ui/DecorativeElements";
import { Reveal } from "@/components/ui/Reveal";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  accent: "terracotta" | "mint" | "lavender" | "peach";
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the problem.",
    subtitle: "Diagnosis Before Syntax",
    description: "Every line of code is a liability unless it solves a genuine bottleneck. Before opening an editor, I interrogate assumptions, map the real user workflow, and define what success looks like in plain language.",
    tag: "First Principles Discovery",
    accent: "terracotta",
  },
  {
    number: "02",
    title: "Break down the requirements.",
    subtitle: "Deconstruct Complexity",
    description: "Ambiguity kills momentum. I dissect large challenges into modular, independent sub-problems: data models, API boundaries, state machines, and UX states. Clear requirements make implementation deterministic.",
    tag: "Modular Specification",
    accent: "peach",
  },
  {
    number: "03",
    title: "Design the solution.",
    subtitle: "Architecture & Ergonomics",
    description: "Architecting clean schemas, selecting the right tool for the job (relational vs vector, server vs client), and designing minimal editorial ergonomics. Form and engineering discipline reinforce each other.",
    tag: "Systems Design",
    accent: "lavender",
  },
  {
    number: "04",
    title: "Build with AI and engineering discipline.",
    subtitle: "Accelerated Precision",
    description: "I leverage agentic AI to write boilerplate, synthesize test cases, and explore implementations rapidly — while keeping strict human oversight on type safety, architectural boundaries, and performance.",
    tag: "Agentic Acceleration",
    accent: "mint",
  },
  {
    number: "05",
    title: "Test and validate.",
    subtitle: "Zero Hallucination Tolerance",
    description: "Code must hold up in the wild. Testing against edge cases, network timeouts, bad inputs, and schema drift. In AI applications, this means deterministic regression tests on prompt outputs.",
    tag: "Verification & Integrity",
    accent: "terracotta",
  },
  {
    number: "06",
    title: "Ship and improve.",
    subtitle: "Continuous Momentum",
    description: "Real software lives in production. Automated CI/CD pipelines, instant preview deployments, monitoring telemetry, and rapid user feedback loops to refine the product continuously.",
    tag: "Production Delivery",
    accent: "mint",
  },
];

export const EngineeringPhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 sm:py-28 border-b border-ink/15 bg-paper bg-ruled-paper relative">
      <Container width="editorial" className="space-y-16">
        
        {/* Section Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <SectionLabel number="05" label="Engineering Philosophy" variant="pill" color="terracotta" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-ink tracking-tight uppercase leading-[0.98]">
              More than writing code. <br />
              <span className="text-terracotta italic font-normal tracking-normal">
                Understanding why it needs to exist.
              </span>
            </h2>
          </div>

          <HandwrittenNote direction="curved-right" rotate="right" color="terracotta" size="sm">
            Disciplined product execution
          </HandwrittenNote>
        </Reveal>

        {/* EDITORIAL PROCESS TIMELINE (NOT GENERIC ICON CARDS) */}
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {steps.map((step, idx) => (
            <Reveal
              key={step.number}
              delay={(idx % 2 + 1) as any}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-neutralWhite/40 transition-colors duration-200 px-2 sm:px-4 rounded-2xl"
            >
              {/* Step Number Column */}
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-3xl sm:text-4xl font-bold text-terracotta select-none">
                  {step.number}
                </span>
                <span className="font-mono text-xs text-ink/40 tracking-widest uppercase">
                  / 06
                </span>
              </div>

              {/* Title & Tag Column */}
              <div className="lg:col-span-4 space-y-1.5">
                <span className="font-mono text-xs text-ink/60 uppercase tracking-wider block font-semibold">
                  {step.subtitle}
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-ink uppercase tracking-tight group-hover:text-terracotta transition-colors">
                  {step.title}
                </h3>
                <span className="inline-block mt-2 font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-cream-100 border border-ink/10 text-ink/70">
                  {step.tag}
                </span>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-6 space-y-2">
                <p className="text-base text-ink/80 font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Editorial Pullquote / Synthesis Banner */}
        <Reveal delay={1}>
          <div className="p-8 sm:p-12 rounded-4xl bg-neutralWhite border border-ink/15 shadow-sm text-center space-y-4">
            <div className="inline-flex items-center gap-2">
              <EditorialAsterisk size="sm" color="terracotta" />
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60 font-semibold">
                The Guiding Standard
              </span>
              <EditorialAsterisk size="sm" color="terracotta" />
            </div>

            <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-ink max-w-3xl mx-auto leading-snug">
              &ldquo;Great engineering isn&apos;t measured by lines of code, but by the weight of problems lifted off the user&apos;s shoulders.&rdquo;
            </p>

            <div className="pt-2">
              <HandwrittenNote direction="none" rotate="left" color="terracotta" size="md">
                Atharva Kale — 2026
              </HandwrittenNote>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
};

