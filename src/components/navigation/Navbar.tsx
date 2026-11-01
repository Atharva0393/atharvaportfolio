import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  shortLabel?: string;
  path: string;
  hash?: string;
  prefix?: string;
}

const navItems: NavItem[] = [
  { label: "HOME", path: "/", prefix: "★" },
  { label: "ABOUT", path: "/about", prefix: "•" },
  { label: "CASE STUDY", shortLabel: "WORK", path: "/work", prefix: "::" },
  { label: "AI & ENGINEERING", shortLabel: "ENGINEERING", path: "/engineering", prefix: "✦" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    setMobileMenuOpen(false);

    if (item.path !== location.pathname) {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      const target = document.querySelector("#contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#contact");
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    return location.pathname === item.path || location.pathname.startsWith(item.path + "/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b border-ink/15",
        isScrolled
          ? "bg-paper/95 backdrop-blur-md shadow-sm py-2"
          : "bg-paper py-2.5 sm:py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT: COLORFUL LOGO MARK & ATHARVA WORDMARK */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group inline-flex items-center gap-2 focus-ring rounded-xs py-0.5"
          aria-label="Atharva Kale — Home"
        >
          {/* Small colorful circular logo mark */}
          <span className="w-5 h-5 rounded-full bg-pink border border-ink flex items-center justify-center text-[10px] text-white font-mono font-bold shadow-[1px_1px_0px_#211F1C] group-hover:scale-105 transition-transform">
            ⚡
          </span>
          <span className="font-anton tracking-wide text-ink text-base sm:text-lg uppercase select-none group-hover:text-black">
            ATHARVA
          </span>
        </Link>

        {/* CENTER: NOTEBOOK TAB NAVIGATION (DESKTOP) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-secondary-paper/60 p-1 rounded-sm border border-ink/20"
        >
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={cn(
                  "relative inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium tracking-wide transition-all duration-150 rounded-xs select-none cursor-pointer",
                  active
                    ? "bg-mustard text-ink font-bold border border-ink shadow-[1px_1px_0px_#211F1C]"
                    : "text-ink/80 hover:text-ink hover:bg-paper/80 border border-transparent"
                )}
              >
                <span className={cn("text-[10px]", active ? "text-ink" : "text-ink/50")}>
                  {active ? "★" : item.prefix}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* RIGHT: COLORFUL DECORATIVE INDICATORS + CONTACT BUTTON */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Small colorful circular decorative indicators */}
          <div className="hidden sm:flex items-center gap-1.5 select-none" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-mustard border border-ink/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-pink border border-ink/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-mint border border-ink/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue border border-ink/60" />
          </div>

          {/* CONTACT BUTTON */}
          <button
            type="button"
            onClick={handleContactClick}
            className={cn(
              "group inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium uppercase tracking-wide rounded-xs transition-all duration-150 select-none cursor-pointer",
              location.hash === "#contact"
                ? "bg-mustard text-ink font-bold border border-ink shadow-[1px_1px_0px_#211F1C]"
                : "bg-paper text-ink border border-ink hover:bg-ink hover:text-paper shadow-[1px_1px_0px_#211F1C] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            )}
            aria-label="Jump to Contact section"
          >
            <Heart className="w-3 h-3 text-pink fill-pink group-hover:text-pink transition-colors" />
            <span>CONTACT</span>
          </button>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden w-8 h-8 rounded-xs border border-ink bg-paper flex items-center justify-center text-ink hover:bg-secondary-paper transition-colors shadow-[1px_1px_0px_#211F1C] focus-ring"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ink/15 bg-paper/98 backdrop-blur-md px-4 py-4 space-y-2 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2 text-xs font-mono tracking-wider rounded-xs transition-all text-left w-full border",
                    active
                      ? "bg-mustard text-ink font-bold border-ink shadow-[1px_1px_0px_#211F1C]"
                      : "bg-secondary-paper/40 text-ink/80 border-ink/10 hover:border-ink hover:bg-secondary-paper"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px]">{active ? "★" : item.prefix}</span>
                    <span>{item.label}</span>
                  </span>
                  {active && <span className="text-[10px] font-mono uppercase bg-ink text-paper px-1.5 py-0.5 rounded-xs">active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-ink/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-mustard border border-ink/60" />
              <span className="w-2 h-2 rounded-full bg-pink border border-ink/60" />
              <span className="w-2 h-2 rounded-full bg-mint border border-ink/60" />
              <span className="w-2 h-2 rounded-full bg-blue border border-ink/60" />
              <span className="text-[10px] font-mono text-ink/60 ml-1">ATHARVA KALE &bull; 2027</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
