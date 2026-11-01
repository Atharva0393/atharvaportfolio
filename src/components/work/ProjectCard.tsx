import React from "react";
import { Link } from "react-router-dom";
import { Project } from "@/types/project";
import { PastelCard } from "@/components/ui/PastelCard";
import { WashiTape } from "@/components/ui/WashiTape";
import { ArrowUpRight, ExternalLink, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/DecorativeElements";

export const ProjectCard: React.FC<{
  project: Project;
  featured?: boolean;
}> = ({ project, featured = false }) => {
  return (
    <PastelCard
      variant={project.cardVariant}
      radius="sm"
      padding={featured ? "generous" : "default"}
      className="h-full flex flex-col justify-between group transition-all duration-200 hover:shadow-[3px_3px_0px_#211F1C] border border-ink/20"
    >
      <div className="space-y-5">
        {/* Top Header of Card */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-ink/15">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-ink/80 font-bold px-2 py-0.5 rounded-xs bg-paper border border-ink/20">
              {project.category}
            </span>
            {project.isFeatured && (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink font-bold px-2 py-0.5 rounded-xs bg-mustard border border-ink">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.date && (
              <span className="font-mono text-xs text-ink/60 font-medium">
                &bull; {project.date}
              </span>
            )}
            <span className="font-mono text-[11px] text-ink/70 font-semibold bg-secondary-paper px-1.5 py-0.5 rounded-xs border border-ink/10">
              {project.status}
            </span>
          </div>
        </div>

        {/* Screenshot / Mockup Preview Frame */}
        <div className="relative rounded-xs bg-white border border-ink/20 overflow-hidden shadow-sm aspect-[16/9] flex flex-col justify-between p-3.5 group-hover:border-ink/50 transition-colors">
          {/* Top Washi Tape Corner */}
          <div className="absolute -top-3 left-6 z-10 pointer-events-none">
            <WashiTape variant="white" size="sm" tilt="left" />
          </div>

          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-2 border-b border-ink/15">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400 border border-ink/40" />
              <span className="w-2 h-2 rounded-full bg-yellow-400 border border-ink/40" />
              <span className="w-2 h-2 rounded-full bg-green-400 border border-ink/40" />
            </div>
            <span className="font-mono text-[10px] text-ink/60 tracking-wider">
              {project.slug}.preview
            </span>
          </div>

          {/* Screenshot Display Area / Clearly Marked Placeholder */}
          <div className="my-auto py-4 text-center space-y-1.5">
            <div className="w-9 h-9 rounded-xs bg-secondary-paper border border-ink/20 mx-auto flex items-center justify-center text-ink/70">
              <Layers className="w-4 h-4 text-mustard" />
            </div>
            <div className="font-mono text-xs font-bold text-ink uppercase tracking-wide">
              {project.caseStudy.screenshots[0]?.placeholderLabel || `${project.title} Interface Preview`}
            </div>
            <p className="font-mono text-[10px] text-ink/60 max-w-xs mx-auto">
              [Verified UI Architecture Mockup &bull; Ready for High-Res Replacement]
            </p>
          </div>

          {/* Bottom Preview Tag */}
          <div className="pt-2 border-t border-ink/10 flex items-center justify-between text-[10px] font-mono text-ink/60">
            <span>Engineering Artifact</span>
            <span>{project.technologies[0]} &bull; {project.technologies[1] || "TypeScript"}</span>
          </div>
        </div>

        {/* Content & Description */}
        <div className="space-y-2.5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-anton text-2xl sm:text-3xl text-ink uppercase tracking-tight group-hover:text-black transition-colors">
              <Link to={`/work/${project.slug}`} className="focus-ring rounded">
                {project.title}
              </Link>
            </h3>
            <Link
              to={`/work/${project.slug}`}
              className="p-1.5 rounded-xs bg-paper border border-ink text-ink hover:bg-mustard transition-colors shadow-[1px_1px_0px_#211F1C]"
              aria-label={`View ${project.title} case study`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-ink/80 font-body leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom Footer: Tech Stack & Action Links */}
      <div className="mt-6 pt-3.5 border-t border-ink/15 space-y-3">
        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-secondary-paper/80 border border-ink/15 text-ink font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="font-mono text-[10px] text-ink/50">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Link Row */}
        <div className="flex items-center justify-between pt-1 font-mono text-xs">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 font-bold text-ink hover:underline uppercase tracking-wide"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/60 hover:text-ink transition-colors"
                aria-label={`${project.title} GitHub repository`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/60 hover:text-ink transition-colors flex items-center gap-1"
                aria-label={`${project.title} live website`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </PastelCard>
  );
};
