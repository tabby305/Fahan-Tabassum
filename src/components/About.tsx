import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="01" title="About" note="WHO I AM" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7" delay={80}>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.about}
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            I like problems where the interesting part is the system itself — how data
            moves, where it breaks, and how to keep the code readable for whoever
            touches it next. Correctness first, polish after.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={160}>
          <div className="hairline-card rounded-2xl p-6 sm:p-7">
            <p className="font-mono text-xs tracking-widest text-muted-foreground">
              EDUCATION
            </p>
            <div className="mt-5 space-y-4">
              <div>
                <h3 className="text-base font-medium tracking-tight">{education.line1}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{education.line2}</p>
              </div>
              <div aria-hidden="true" className="h-px w-full bg-border" />
              <div>
                <p className="font-mono text-xs tracking-wider text-muted-foreground">
                  CONCENTRATION
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{education.line3}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
