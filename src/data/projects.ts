import { Project } from "@/types/project";

export const projects: Project[] = [
  // 01 MINDSPACE — Flagship AI Productivity Workspace
  {
    slug: "mindspace",
    title: "MINDSPACE",
    category: "AI PRODUCT · IN ACTIVE DEVELOPMENT",
    tagline: "An AI-powered personal productivity workspace connecting intelligent notes, habits, tasks, goals and personal knowledge.",
    description: "Local-first knowledge OS bridging unstructured personal notes, daily habit loops, and high-level aspirations through semantic vectors and active cognitive reflection.",
    isFeatured: true,
    status: "In Active Development",
    date: "2026",
    cardVariant: "black",
    radius: "32",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "FastAPI (Python)",
      "Claude API",
      "Semantic Router",
      "PostgreSQL",
      "pgvector",
      "Tailwind CSS"
    ],
    caseStudy: {
      overview: "MINDSPACE is Atharva Kale's flagship AI software engineering project. It is designed as an intelligent operating layer for personal knowledge, habits, and tasks, connecting disparate daily activities into an interconnected semantic graph.",
      problem: "Knowledge workers and students use fragmented tools: one app for notes (Notion/Obsidian), another for habit tracking, another for tasks (Todoist), and spreadsheets for goals. The user spends unnecessary mental energy maintaining tools rather than doing deep work. More importantly, existing tools do not recognize conceptual links between daily micro-habits and long-term goals.",
      objectives: [
        "Unify notes, tasks, habits, and long-term milestones in a single local-first knowledge base.",
        "Provide real-time semantic discovery across unstructured markdown notes using dense vector embeddings.",
        "Synthesize daily context and prioritize high-leverage tasks automatically without tedious manual tagging.",
        "Enforce absolute data privacy with zero unconsented data leakage and deterministic execution boundaries."
      ],
      solution: "A local-first productivity workspace combining a dual-pane editor, a Markdown bidirectional backlink resolver, and an asynchronous Python vector indexing engine. An AI agent actively monitors graph connections to highlight high-leverage tasks and detect productivity bottlenecks.",
      myContribution: [
        "Architected the full-stack system design, from the Next.js 15 App Router client to the FastAPI Python backend.",
        "Implemented the bidirectional Markdown parser that extracts wikilinks and builds a local graph topology.",
        "Engineered the vector embedding and semantic search pipeline using pgvector and hybrid keyword search.",
        "Designed the tactile, editorial user interface following the retro notebook design language."
      ],
      technicalArchitecture: {
        frontend: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "Zustand (State Management)"],
        backend: ["FastAPI (Python 3.12)", "Pydantic v2 (Strict Schema Enforcement)"],
        database: ["PostgreSQL 16", "pgvector (Cosine Similarity Indexing)"],
        aiServices: ["Claude API (Reasoning & Synthesis)", "LangChain / Semantic Router"],
        deployment: ["Local-first client", "Dockerized backend container"]
      },
      implementation: [
        {
          phase: "Phase 1: Knowledge Graph Foundation (Implemented)",
          description: "Engineered local filesystem watcher, markdown AST parser, wikilink resolution, and interactive bidirectional graph visualization."
        },
        {
          phase: "Phase 2: Semantic Vector Indexing (Implemented & In Testing)",
          description: "Implemented chunking algorithms, dense vector embedding generation, and sub-20ms semantic search in pgvector."
        },
        {
          phase: "Phase 3: Cognitive Reflection Agent (In Development)",
          description: "Building asynchronous background agent routines that detect correlation patterns between habit completion and project velocity."
        },
        {
          phase: "Phase 4: Multi-Modal Audio & Local Model Execution (Planned Roadmap)",
          description: "Voice memo parsing into structured action items, alongside an offline privacy mode powered by lightweight local LLM weights."
        }
      ],
      challenges: [
        {
          challenge: "Preventing AI hallucinations in automated schedule recommendations.",
          resolution: "Implemented strict Pydantic schema validation requiring verifiable task IDs from the user's actual database before any synthesized plan is rendered."
        },
        {
          challenge: "Maintaining low latency during real-time vector search across hundreds of markdown documents.",
          resolution: "Built a local embedding cache and hybrid search combining fast BM25 keyword matching with dense pgvector queries."
        }
      ],
      results: [
        "Verified prototype running locally with 340+ markdown nodes indexed.",
        "Sub-20ms query latency achieved on semantic vector search.",
        "Actively dogfooded daily to refine task-prioritization heuristics."
      ],
      screenshots: [
        {
          title: "Cognitive OS Dashboard",
          caption: "Workspace view demonstrating active context synthesis between notes, habits, and task velocity.",
          placeholderLabel: "MINDSPACE Workspace UI Mockup"
        },
        {
          title: "Bidirectional Knowledge Graph",
          caption: "Visual graph topology showing interconnected notes and automated semantic wikilinks.",
          placeholderLabel: "Knowledge Graph Visualization Preview"
        }
      ]
    }
  },

  // 02 Meraki Designs — Architecture & Spatial Development (UK)
  {
    slug: "meraki",
    title: "Meraki Designs",
    category: "ARCHITECTURE & DESIGN DIGITAL PLATFORM",
    tagline: "High-end digital flagship for an architectural design and residential property development studio.",
    description: "Editorial spatial platform in Derby, UK, featuring 3D project viewports, blueprint case studies, and Supabase integration.",
    status: "Shipped Production Platform",
    date: "2024",
    cardVariant: "mustard",
    radius: "28",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel"
    ],
    githubUrl: "https://github.com/Atharva0393/meraki",
    liveUrl: "https://meraki-designs.vercel.app",
    caseStudy: {
      overview: "Meraki Designs is a digital flagship for an architectural design and property development studio based in Derby, United Kingdom, showcasing residential developments, planning permissions, and spatial planning services.",
      problem: "Traditional architectural studio websites are often static, heavy, and fail to convey spatial craftsmanship and planning permission expertise to property developers on mobile devices.",
      objectives: [
        "Present high-end residential architecture and planning portfolios with fluid editorial luxury.",
        "Showcase high-resolution 3D renders and blueprints without compromising mobile load speed.",
        "Streamline direct consultation scheduling for prospective residential clients."
      ],
      solution: "A bespoke Next.js platform integrating Supabase for project asset management, fluid Framer Motion transitions, and high-performance WebP visual galleries.",
      myContribution: [
        "Led full-stack web engineering, from front-end component design to Supabase backend configuration.",
        "Engineered responsive image loading pipelines optimizing heavy architectural photography.",
        "Implemented smooth editorial page transitions and inquiry consultation forms."
      ],
      technicalArchitecture: {
        frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Supabase (PostgreSQL & Asset Storage)"],
        deployment: ["Vercel"]
      },
      implementation: [
        {
          phase: "Visual Design & Editorial Layout",
          description: "Implemented minimal luxury editorial layout honoring architectural proportions and clean typography."
        },
        {
          phase: "Database & Project Archive",
          description: "Structured project metadata (square footage, planning status, location, renders) in Supabase."
        }
      ],
      challenges: [
        {
          challenge: "Maintaining high mobile performance with heavy 3D render images.",
          resolution: "Automated image compression pipelines and utilized responsive srcsets with blur-up placeholders."
        }
      ],
      results: [
        "Shipped production platform at meraki-designs.vercel.app.",
        "Created an elevated digital portfolio helping the studio present high-value residential projects."
      ],
      screenshots: [
        {
          title: "Meraki Architectural Showcase",
          caption: "Hero section and featured residential architecture gallery.",
          placeholderLabel: "Meraki Designs Studio Portfolio"
        },
        {
          title: "Project Detail Viewport",
          caption: "Detailed architectural breakdown featuring spatial plans and project specifications.",
          placeholderLabel: "Project Specification Detail View"
        }
      ]
    }
  },

  // 03 The Chess Project — EdTech & Interactive Video Platform
  {
    slug: "the-chess-project",
    title: "The Chess Project",
    category: "ONLINE CHESS TRAINING PLATFORM",
    tagline: "A modern, high-performance chess education platform built for students and human chess coaches.",
    description: "Full-stack learning platform centralizing curricula, secure signed video playback via Bunny Stream API, and Razorpay payment automation.",
    status: "Shipped Production Platform",
    date: "2024",
    cardVariant: "secondary",
    radius: "32",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Bunny Stream API",
      "Razorpay SDK"
    ],
    liveUrl: "https://thechessproject.com",
    caseStudy: {
      overview: "The Chess Project is an end-to-end digital academy platform designed for chess coaches to manage curricula, conduct structured training batches, and stream proprietary video courses securely to enrolled students.",
      problem: "Chess coaches previously juggled disjointed tools: Zoom for lectures, unlisted YouTube links (which were easily pirated and shared), manual Google Sheets for student progress, and manual bank transfer verification. Students had no cohesive portal for their assignments, game reviews, or recorded video library.",
      objectives: [
        "Centralize coaching batches, homework assignments, and masterclass videos in a single dashboard.",
        "Prevent unauthorized video link sharing and content piracy with secure tokenized streaming.",
        "Automate batch enrollments and payment verification using Razorpay.",
        "Provide a high-performance, mobile-first experience for young chess students."
      ],
      solution: "A custom Next.js 16 web application with role-based authentication (student vs coach), direct video streaming powered by Bunny Stream with signed token authorization, and automated Razorpay checkout verification.",
      myContribution: [
        "Engineered the complete application architecture from database modeling to cloud deployment.",
        "Designed and normalized the PostgreSQL relational database schema with Prisma ORM 7.",
        "Integrated the Bunny Stream API for direct client video uploads and signed playback URLs.",
        "Implemented cryptographic webhook verification for instant Razorpay payment settlement."
      ],
      technicalArchitecture: {
        frontend: ["Next.js 16 (App Router, Turbopack)", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js Server Actions & API Routes", "Prisma ORM 7 (`@prisma/adapter-pg`)"],
        database: ["PostgreSQL"],
        mediaAndServices: ["Bunny Stream API (Direct Upload & Signed Token CDN)", "Razorpay Node SDK"],
        deployment: ["Vercel Edge Network", "Custom Domain SSL DNS"]
      },
      implementation: [
        {
          phase: "Database & Authentication",
          description: "Modeled students, batches, courses, video lectures, and payment transactions. Implemented secure HTTP-only JWT sessions."
        },
        {
          phase: "Secure Video Integration",
          description: "Integrated Bunny Stream video collection API. Configured video tokens expiring after short intervals to eliminate unauthorized link sharing."
        },
        {
          phase: "Payment Verification & Webhooks",
          description: "Built transactional webhook listeners verifying Razorpay signatures and instantly granting student batch access upon payment."
        }
      ],
      challenges: [
        {
          challenge: "Preventing course video piracy while maintaining fast global video buffering.",
          resolution: "Integrated Bunny Stream CDN with expiring signed token playback URLs generated on-the-fly per student session."
        },
        {
          challenge: "Handling network dropouts during Razorpay checkout flows.",
          resolution: "Built idempotent webhook handlers verifying cryptographic signatures and updating student records transactionally."
        }
      ],
      results: [
        "Successfully deployed to production at thechessproject.com.",
        "Eliminated manual link sharing and payment verification workflows.",
        "Serving active coaching batches with zero reported video delivery failures."
      ],
      screenshots: [
        {
          title: "Student Learning Dashboard",
          caption: "Student portal with active batch schedule, upcoming games, and course video playlist.",
          placeholderLabel: "The Chess Project Dashboard Screenshot"
        },
        {
          title: "Secure Video Player Interface",
          caption: "Bunny Stream authenticated player with signed playback URL tokens.",
          placeholderLabel: "Video Lecture Player Interface"
        }
      ]
    }
  },

  // 04 Chicago Yachts — Maritime Charter & Fleet Booking
  {
    slug: "chicago-yachts",
    title: "Chicago Yachts",
    category: "YACHT RENTAL & BOOKING PLATFORM",
    tagline: "Private yacht rental and nautical charter booking platform for Lake Michigan.",
    description: "Responsive charter fleet catalog, package customization flow, and real-time private event inquiry routing.",
    status: "Shipped Production Platform",
    date: "2024",
    cardVariant: "black",
    radius: "32",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Vercel"
    ],
    githubUrl: "https://github.com/Atharva0393/Chicago-Yachts-",
    liveUrl: "https://chicago-yachts.vercel.app",
    caseStudy: {
      overview: "Chicago Yachts is a luxury maritime charter booking experience operating on Lake Michigan, offering private yacht rentals, corporate cruises, and celebratory nautical excursions.",
      problem: "Booking a private yacht is typically plagued by opaque hourly pricing, unclear vessel amenities, and clunky phone-only booking inquiries, driving away high-intent modern consumers.",
      objectives: [
        "Present private fleet vessels with clear capacity limits, amenity breakdowns, and hourly package rates.",
        "Streamline charter inquiry submissions with date, guest count, and cruise occasion filters.",
        "Deliver a mobile-first booking experience tailored to tourists and event planners."
      ],
      solution: "A responsive digital booking catalog with vessel specification modals, transparent charter package breakdowns, and direct inquiry verification funnels.",
      myContribution: [
        "Designed and engineered the complete front-end catalog in Next.js and Tailwind CSS.",
        "Structured vessel data models and interactive package comparison cards.",
        "Optimized mobile navigation and touch targets for travelers booking on smartphones."
      ],
      technicalArchitecture: {
        frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
        deployment: ["Vercel with SSL"]
      },
      implementation: [
        {
          phase: "Catalog Architecture",
          description: "Engineered responsive vessel grid showcasing boat capacities, horsepower, deck amenities, and captain services."
        },
        {
          phase: "Charter Inquiry System",
          description: "Built multi-step inquiry form collecting group size, desired charter duration, and event preferences."
        }
      ],
      challenges: [
        {
          challenge: "Displaying dense nautical specifications cleanly on compact mobile viewports.",
          resolution: "Implemented collapsible technical specification drawers and clean badge indicators."
        }
      ],
      results: [
        "Shipped production platform at chicago-yachts.vercel.app.",
        "Streamlined private charter inquiry routing with zero booking system downtime."
      ],
      screenshots: [
        {
          title: "Fleet Catalog Overview",
          caption: "Responsive fleet grid highlighting vessel specs and hourly charter rates.",
          placeholderLabel: "Chicago Yachts Fleet Catalog"
        },
        {
          title: "Charter Package Selector",
          caption: "Interactive package selector for private Lake Michigan excursions.",
          placeholderLabel: "Yacht Charter Booking Flow"
        }
      ]
    }
  },

  // 05 Payzero — Solar Energy Company Platform
  {
    slug: "payzero",
    title: "Payzero Infrastructure",
    category: "SOLAR ENERGY COMPANY WEBSITE",
    tagline: "High-performance digital platform accelerating commercial and industrial solar adoption.",
    description: "Engineered solar energy platform featuring real-time ROI calculators, technical kilowatt estimation models, and streamlined enterprise inquiry funnels.",
    status: "Shipped Production Platform",
    date: "2024",
    cardVariant: "paper",
    radius: "28",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mathematical Solar Modeling",
      "Vercel"
    ],
    githubUrl: "https://github.com/Atharva0393/payzero",
    liveUrl: "https://payzero-black.vercel.app",
    caseStudy: {
      overview: "Payzero is a high-performance commercial and industrial solar infrastructure platform operating in India, created to demystify corporate solar adoption and provide transparent financial payback models.",
      problem: "Commercial energy decision-makers (CFOs, factory owners, plant directors) find solar transition proposals opaque. Unclear net metering policies, ambiguous CAPEX vs OPEX financing models, and vague kilowatt generation projections create extended sales friction.",
      objectives: [
        "Educate enterprise stakeholders on rooftop, ground-mounted, and captive solar infrastructure.",
        "Build an instant interactive ROI calculator estimating energy savings, payback years, and kilowatt requirements.",
        "Automate high-intent industrial solar energy audit lead captures."
      ],
      solution: "A responsive, high-speed web application with interactive solar financial calculators, transparent technical specification tables, and frictionless consultation booking flows.",
      myContribution: [
        "Architected and developed the front-end platform in Next.js and Tailwind CSS.",
        "Implemented client-side mathematical models estimating solar yield based on sanctioned load and roof area.",
        "Designed accessible, high-contrast dark visual components highlighting industrial sustainability."
      ],
      technicalArchitecture: {
        frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js API route handlers"],
        deployment: ["Vercel with Edge Caching", "Custom Domain SSL"]
      },
      implementation: [
        {
          phase: "Solar Financial Model Architecture",
          description: "Coded interactive calculations mapping factory monthly bill amounts to suggested kilowatt installation size and estimated annual financial savings."
        },
        {
          phase: "Responsive UI & Asset Engineering",
          description: "Built high-performance responsive components with zero layout shift and dark, high-contrast energy infrastructure aesthetics."
        }
      ],
      challenges: [
        {
          challenge: "Translating complex commercial tariff structures into intuitive calculator sliders.",
          resolution: "Distilled technical solar generation formulas into clear, instant financial impact metrics (Monthly Savings, Estimated Payback Period, CO2 Offset)."
        }
      ],
      results: [
        "Shipped live web platform at payzero-black.vercel.app.",
        "Sub-second page load times with 100/100 performance marks on mobile viewports.",
        "Enabled corporate clients to calculate preliminary solar ROI in under 30 seconds."
      ],
      screenshots: [
        {
          title: "Solar Infrastructure Homepage",
          caption: "Hero section and high-level enterprise energy value propositions.",
          placeholderLabel: "Payzero Hero & Infrastructure Overview"
        },
        {
          title: "Interactive Solar ROI Calculator",
          caption: "Real-time energy savings slider calculating commercial kilowatt requirements.",
          placeholderLabel: "Payzero Savings Calculator Preview"
        }
      ]
    }
  },

  // 06 Yogesh Plastics — Manufacturing & Industrial Platform
  {
    slug: "yogesh-plastics",
    title: "Yogesh Plastics",
    category: "MANUFACTURING & INDUSTRIAL WEBSITE",
    tagline: "B2B digital platform and technical catalog for precision polymer injection molding.",
    description: "Industrial product taxonomy, polymer tolerance matrices, and direct B2B Request-for-Quote (RFQ) procurement pipeline.",
    status: "Shipped Production Platform",
    date: "2024",
    cardVariant: "secondary",
    radius: "28",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Industrial Catalog Architecture",
      "Vercel"
    ],
    githubUrl: "https://github.com/Atharva0393/YogeshPlastics",
    caseStudy: {
      overview: "Yogesh Plastics is a digital platform and technical component catalog for an established industrial polymer injection molding and precision tooling manufacturing enterprise.",
      problem: "Industrial B2B manufacturers traditionally operate through outdated physical brochures and slow phone calls, making it tedious for corporate procurement engineers to inspect machinery tonnage, polymer tolerances, and submit RFQs.",
      objectives: [
        "Digitize the complete manufacturing capability catalog across automotive, industrial, and consumer plastic components.",
        "Provide procurement officers with technical material specifications (PP, ABS, HDPE, Nylon).",
        "Streamline direct Request-for-Quote (RFQ) submissions with technical drawing attachment capabilities."
      ],
      solution: "A modern B2B industrial web platform featuring machinery specification breakdowns, material compatibility tables, and direct RFQ procurement workflows.",
      myContribution: [
        "Engineered the platform using Next.js and TypeScript.",
        "Structured the industrial component taxonomy and material tolerance tables.",
        "Optimized technical SEO to capture organic industrial manufacturing search intent."
      ],
      technicalArchitecture: {
        frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"],
        deployment: ["Vercel"]
      },
      implementation: [
        {
          phase: "Industrial Taxonomy Design",
          description: "Organized complex manufacturing capabilities into clear categories: Precision Tooling, Injection Molding, and Quality Inspection."
        },
        {
          phase: "B2B Procurement RFQ Funnel",
          description: "Engineered quotation pipeline allowing clients to specify component dimensions, expected volume, and material grade."
        }
      ],
      challenges: [
        {
          challenge: "Presenting highly technical engineering data legibly across mobile and desktop devices.",
          resolution: "Engineered responsive data tables with sticky column headers and high-contrast typography."
        }
      ],
      results: [
        "Shipped digital presence representing modern precision polymer injection molding capabilities.",
        "Replaced physical brochure distribution with a fast, accessible web catalog."
      ],
      screenshots: [
        {
          title: "Manufacturing Capabilities Matrix",
          caption: "Overview of injection molding machinery tonnage and factory tooling infrastructure.",
          placeholderLabel: "Yogesh Plastics Machinery Capabilities"
        },
        {
          title: "Technical Material Specification Table",
          caption: "Polymer grade compatibility table for industrial buyers.",
          placeholderLabel: "Polymer Material Specifications View"
        }
      ]
    }
  },

  // 07 InterviewAI — AI Mock Interview & Evaluation Platform
  {
    slug: "interview-ai",
    title: "InterviewAI",
    category: "AI-POWERED ENGINEERING MOCK INTERVIEW PLATFORM",
    tagline: "An AI-driven mock interview platform for practicing technical interviews and receiving actionable performance feedback.",
    description: "Interactive mock interview system simulating technical rounds, evaluating candidate responses, and generating granular feedback rubrics.",
    status: "Production Web Application",
    date: "2025",
    cardVariant: "paper",
    radius: "32",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Frontier LLM APIs",
      "Structured Output Schemas",
      "Vercel"
    ],
    githubUrl: "https://github.com/Atharva0393/interview-ai",
    liveUrl: "https://interview-ai-kohl-nu.vercel.app",
    caseStudy: {
      overview: "InterviewAI is an AI-powered technical interview preparation application that simulates real software engineering interviews, tests candidates on algorithmic problem solving and system design, and delivers structured diagnostic feedback.",
      problem: "Practicing for technical interviews with peers is hard to coordinate, while standard interview prep platforms offer static question banks with no dynamic conversation, behavioral evaluation, or personalized critique on candidate explanations.",
      objectives: [
        "Provide on-demand interactive technical interview simulations spanning code, concepts, and communication.",
        "Generate comprehensive, objective performance rubrics scoring problem breakdown, code efficiency, and clarity.",
        "Store historical interview attempts to track candidate improvement over time."
      ],
      solution: "An end-to-end web platform where candidates select target roles, answer dynamic AI-driven follow-up questions, and receive an instant multi-dimensional evaluation rubric.",
      myContribution: [
        "Conceived, architected, and built the application in Next.js and TypeScript.",
        "Designed the interview state machine managing question sequencing and dynamic follow-up prompts.",
        "Engineered the evaluation prompt pipelines using strict JSON schema enforcement for objective scoring."
      ],
      technicalArchitecture: {
        frontend: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        aiServices: ["LLM API (Structured Evaluation Pipelines)", "System Prompt Engineering"],
        deployment: ["Vercel Edge Network"]
      },
      implementation: [
        {
          phase: "Interview State Machine",
          description: "Built the multi-stage interview flow: role selection → problem presentation → candidate response → dynamic clarification → rubric generation."
        },
        {
          phase: "Diagnostic Rubric Engine",
          description: "Engineered structured JSON prompts scoring candidates across Technical Accuracy, Communication, and Solution Optimization."
        }
      ],
      challenges: [
        {
          challenge: "Preventing generic or overly lenient AI feedback.",
          resolution: "Calibrated system prompts with strict rubric guidelines, concrete scoring rubrics (1–5 scale), and mandatory counter-examples highlighting missing edge cases."
        }
      ],
      results: [
        "Shipped production platform at interview-ai-kohl-nu.vercel.app.",
        "Provides end-to-end mock interview simulations with granular diagnostic scoring in seconds."
      ],
      screenshots: [
        {
          title: "Mock Interview Simulation Console",
          caption: "Live interview interface displaying real-time problem prompt and candidate response editor.",
          placeholderLabel: "InterviewAI Question Console"
        },
        {
          title: "Diagnostic Performance Rubric",
          caption: "Structured candidate score report breaking down technical accuracy and solution optimization.",
          placeholderLabel: "InterviewAI Evaluation Scorecard"
        }
      ]
    }
  }
];
