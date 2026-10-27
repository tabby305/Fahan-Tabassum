import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs tracking-wider text-muted-foreground">
          © 2026 {profile.fullName}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            className="font-mono text-xs tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
