import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

const networks = [
  {
    label: "GitHub",
    handle: profile.githubHandle,
    href: profile.github,
  },
  {
    label: "LinkedIn",
    handle: profile.linkedinHandle,
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="05" title="Contact" note="SAY HELLO" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7" delay={80}>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Interested in new opportunities, collaborations, or conversations about
            software, data and AI? My inbox is open.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-3 text-xl tracking-tight text-foreground transition-colors duration-300 hover:text-muted-foreground sm:text-2xl"
          >
            <span className="break-all border-b border-border pb-1 transition-colors duration-300 group-hover:border-muted-foreground">
              {profile.email}
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          {networks.map((network, index) => (
            <Reveal key={network.label} delay={140 + index * 80}>
              <a
                href={network.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hairline-card group block h-full rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base tracking-tight">{network.label}</span>
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 break-all font-mono text-xs text-muted-foreground">
                  {network.handle}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
