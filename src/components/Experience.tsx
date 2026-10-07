import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="04" title="Experience" note="CAMPUS LEADERSHIP" />
      </Reveal>

      <Reveal delay={80}>
        <div className="hairline-card rounded-2xl p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 lg:block">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-foreground" />
                <p className="font-mono text-xs tracking-wider text-muted-foreground lg:mt-3">
                  {experience.period}
                </p>
              </div>
            </div>

            <div className="lg:col-span-9">
              <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{experience.org}</p>

              <ul className="mt-5 space-y-4">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-line" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
