import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/ui/DecorativeElements";
import { ArrowUp, ExternalLink, Mail, FileText, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-paper bg-ruled-paper border-t border-ink/20 pt-14 pb-10 relative overflow-hidden text-ink">
      <Container width="editorial" className="space-y-12">
        
        {/* ========================================================
            TOP SECTION: 4-COLUMN NOTEBOOK DIRECTORY
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-ink/15">
          
          {/* Column 1: Brand & Academic Summary */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 focus-ring rounded-xs"
              aria-label="Atharva Kale — Back to top"
            >
              <span className="w-5 h-5 rounded-full bg-pink border border-ink flex items-center justify-center text-[10px] text-white font-mono font-bold shadow-[1px_1px_0px_#211F1C] group-hover:scale-105 transition-transform">
                ⚡
              </span>
              <span className="font-anton text-2xl tracking-wide text-ink uppercase group-hover:text-black">
                ATHARVA KALE
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-ink/80 font-body leading-relaxed max-w-sm">
              Computer Science Engineering student (Class of 2027) building applied AI systems, deterministic prompt pipelines, and production web applications.
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-ink/70">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Based in India &bull; Open for Remote &amp; Hybrid Roles</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink/60 font-bold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/" className="text-ink/80 hover:text-black hover:underline transition-colors">
                  &bull; Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ink/80 hover:text-black hover:underline transition-colors">
                  &bull; About Atharva
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-ink/80 hover:text-black hover:underline transition-colors">
                  &bull; Selected Work
                </Link>
              </li>
              <li>
                <Link to="/engineering" className="text-ink/80 hover:text-black hover:underline transition-colors">
                  &bull; AI &amp; Engineering
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-ink/80 hover:text-black hover:underline transition-colors">
                  &bull; Contact Section
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Shipped Projects Archive */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink/60 font-bold block">
              Selected Projects
            </span>
            <ul className="space-y-2 text-xs font-mono text-ink/80">
              <li>
                <Link to="/work/mindspace" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>MINDSPACE OS</span>
                  <span className="text-[10px] text-ink font-bold bg-mustard px-1 rounded-xs">AI Flagship</span>
                </Link>
              </li>
              <li>
                <Link to="/work/meraki" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>Meraki Designs</span>
                  <span className="text-[10px] text-ink/50">Architecture</span>
                </Link>
              </li>
              <li>
                <Link to="/work/the-chess-project" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>The Chess Project</span>
                  <span className="text-[10px] text-ink/50">EdTech</span>
                </Link>
              </li>
              <li>
                <Link to="/work/chicago-yachts" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>Chicago Yachts</span>
                  <span className="text-[10px] text-ink/50">Yacht Booking</span>
                </Link>
              </li>
              <li>
                <Link to="/work/payzero" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>Payzero Infrastructure</span>
                  <span className="text-[10px] text-ink/50">CleanTech</span>
                </Link>
              </li>
              <li>
                <Link to="/work/yogesh-plastics" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>Yogesh Plastics</span>
                  <span className="text-[10px] text-ink/50">Manufacturing</span>
                </Link>
              </li>
              <li>
                <Link to="/work/interview-ai" className="hover:text-black hover:underline flex items-center justify-between">
                  <span>InterviewAI</span>
                  <span className="text-[10px] text-ink/50">AI Lab</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Channels */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-ink/60 font-bold block">
              Verified Links
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href="https://github.com/Atharva0393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black hover:underline transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-ink" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/atharvak07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black hover:underline transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-ink" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kaleatharva1710@gmail.com"
                  className="hover:text-black hover:underline transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-ink" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="/Atharva_Kale_Resume.pdf"
                  download="Atharva_Kale_Resume.pdf"
                  className="hover:text-black transition-colors flex items-center gap-2 font-bold text-ink underline"
                >
                  <FileText className="w-3.5 h-3.5 text-ink" />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================
            MIDDLE BAR: HANDWRITTEN SIGN-OFF & BACK TO TOP BUTTON
           ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-4 select-none">
          
          {/* Small Handwritten Sign-Off */}
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-ink/80 text-lg sm:text-xl -rotate-2">
              Designed with intention. Built with code. ✦ &mdash; Atharva
            </span>
          </div>

          {/* Back-to-Top Button */}
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-paper hover:bg-mustard border border-ink text-xs font-mono font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0px_#211F1C] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* ========================================================
            BOTTOM METADATA BAR
           ======================================================== */}
        <div className="pt-4 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink/60">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Atharva Kale. All rights reserved.</span>
          </div>

          {/* Colorful Dots & Integrity Note */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-mustard border border-ink/40" />
              <span className="w-2 h-2 rounded-full bg-pink border border-ink/40" />
              <span className="w-2 h-2 rounded-full bg-mint border border-ink/40" />
              <span className="w-2 h-2 rounded-full bg-blue border border-ink/40" />
            </div>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-ink/70">
              <Heart className="w-3 h-3 text-pink fill-pink inline" />
              <span>Crafted in India</span>
            </span>
          </div>
        </div>

      </Container>
    </footer>
  );
};
