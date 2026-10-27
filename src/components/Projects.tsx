import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  const wide = project.span === "wide";

  return (
    <article className="hairline-card group flex h-full flex-col rounded-2xl p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            {project.index}
          </span>
          <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs text-muted-foreground/80">{project.repo}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} source on GitHub`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted-foreground transition-all duration-300 group-hover:border-muted-foreground group-hover:text-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>

      <p
        className={`mt-5 leading-relaxed text-muted-foreground ${
          wide ? "max-w-3xl text-base sm:text-lg" : "text-sm sm:text-base"
        }`}
      >
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors duration-300 group-hover:border-line"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
        >
          View source
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="03" title="Projects" note="SELECTED WORK" />
      </Reveal>

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-6">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 90} className={project.span === "wide" ? "lg:col-span-6" : "lg:col-span-3"}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
