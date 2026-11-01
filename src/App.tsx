import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { projects } from "./data/projects";
import { Navbar } from "./components/navigation/Navbar";
import { EditorialHero } from "./components/hero/EditorialHero";
import {
  IntroductionSection,
  SelectedWorkSection,
  AiEngineeringSection,
  EngineeringPhilosophySection,
} from "./components/sections";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/layout/Footer";

// Lazy-loaded route components for optimal initial bundle performance
const ProjectArchive = React.lazy(() =>
  import("./components/work/ProjectArchive").then((m) => ({ default: m.ProjectArchive }))
);
const CaseStudyView = React.lazy(() =>
  import("./components/work/CaseStudyView").then((m) => ({ default: m.CaseStudyView }))
);
const AboutPage = React.lazy(() =>
  import("./components/pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const AiEngineeringPage = React.lazy(() =>
  import("./components/pages/AiEngineeringPage").then((m) => ({ default: m.AiEngineeringPage }))
);

/**
 * Handles smooth anchor scroll when navigating from other pages or switching routes
 */
const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let retries = 0;
      const scrollToTarget = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (retries < 6) {
          retries++;
          setTimeout(scrollToTarget, 50);
        }
      };
      setTimeout(scrollToTarget, 60);
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return null;
};

/**
 * Dynamically updates document.title based on the active route for SEO
 */
const RouteTitleManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      document.title = "Atharva Kale — AI Systems Engineer & Full-Stack Developer";
    } else if (path === "/work") {
      document.title = "Selected Work & Case Studies — Atharva Kale";
    } else if (path.startsWith("/work/")) {
      const slug = path.replace("/work/", "");
      const project = projects.find((p) => p.slug === slug);
      if (project) {
        document.title = `${project.title} — Case Study | Atharva Kale`;
      } else {
        document.title = "Case Study — Atharva Kale";
      }
    } else if (path === "/about") {
      document.title = "About & Journey — Atharva Kale";
    } else if (path === "/engineering") {
      document.title = "AI & Engineering Capabilities — Atharva Kale";
    } else {
      document.title = "Atharva Kale — AI Systems Engineer";
    }
  }, [location.pathname]);

  return null;
};

/**
 * Minimalist Loading Fallback matching warm cream aesthetic
 */
const PageFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-paper" aria-live="polite">
    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary-paper border border-ink/20 font-mono text-xs uppercase tracking-wider text-ink shadow-sm">
      <span className="w-2 h-2 rounded-full bg-mustard animate-pulse" />
      <span>Loading View...</span>
    </div>
  </div>
);

/**
 * Main Homepage View
 */
const HomePage: React.FC = () => {
  return (
    <>
      <EditorialHero />
      <IntroductionSection />
      <SelectedWorkSection />
      <AiEngineeringSection />
      <EngineeringPhilosophySection />
      <ContactSection />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <RouteTitleManager />
      
      {/* Accessible skip link for keyboard & screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-terracotta focus:text-cream-50 focus:font-mono focus:text-xs focus:font-bold focus:uppercase focus:tracking-wider focus:rounded-full focus:shadow-ink-offset-sm focus-ring"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-paper text-ink bg-ruled-paper selection:bg-mustard selection:text-ink flex flex-col">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Dynamic Route Viewports */}
        <main id="main-content" className="flex-1 focus-ring" tabIndex={-1}>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<ProjectArchive />} />
              <Route path="/work/:slug" element={<CaseStudyView />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/engineering" element={<AiEngineeringPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Shared Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
