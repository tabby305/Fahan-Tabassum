import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="02" title="Skills" note="WHAT I WORK WITH" />
      </Reveal>

      <div className="space-y-8">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.label} delay={groupIndex * 80}>
            <div className="grid gap-4 sm:grid-cols-12 sm:gap-6">
              <div className="sm:col-span-3">
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {group.label.toUpperCase()}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:col-span-9 sm:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-muted-foreground hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
