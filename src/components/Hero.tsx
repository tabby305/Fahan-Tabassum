import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

const actions = [
  { label: "View Projects", href: "#projects", primary: true },
  { label: "GitHub", href: profile.github, primary: false, external: true },
  { label: "LinkedIn", href: profile.linkedin, primary: false, external: true },
  { label: "Contact Me", href: "#contact", primary: false },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" className="grid-surface pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                PORTFOLIO
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl font-light leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                {profile.firstName}
                <br />
                <span className="text-muted-foreground">{profile.lastName}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wider text-muted-foreground">
                <span>{profile.role}</span>
                <span aria-hidden="true" className="h-px w-6 bg-line" />
                <span>{profile.concentration}</span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I build reliable, scalable applications with a strong focus on{" "}
                <span className="text-foreground">clean backend systems</span>. Currently
                shipping projects across{" "}
                <span className="text-foreground">data analytics</span>,{" "}
                <span className="text-foreground">developer tooling</span> and{" "}
                <span className="text-foreground">identity security</span>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={
                      action.primary
                        ? "rounded-lg bg-foreground px-5 py-3 text-sm font-medium tracking-tight text-background transition-transform duration-300 hover:-translate-y-0.5"
                        : "rounded-lg border border-line px-5 py-3 text-sm tracking-tight text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-muted-foreground hover:text-foreground"
                    }
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:self-center">
            <Reveal delay={200}>
              <figure className="hairline-card relative mx-auto w-full max-w-xs rounded-2xl p-3 sm:max-w-sm">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface">
                  <Image
                    src="/profile.jpg"
                    alt={`Portrait of ${profile.fullName}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 360px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-2 pb-1 pt-4 font-mono text-[11px] tracking-wider text-muted-foreground">
                  <span>{profile.githubHandle}</span>
                  <span className="text-muted-foreground/70">AIML · 2027</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
