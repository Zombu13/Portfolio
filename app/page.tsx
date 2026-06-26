import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3rem)] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Caden <span className="text-accent">Grover</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mt-5 max-w-lg leading-relaxed">
            Software engineer & cybersecurity student. I build secure systems,
            AI agents, and production pipelines.
          </p>

          <div className="flex gap-3 mt-8">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-accent text-background text-sm font-medium hover:bg-accent-dim transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-border text-foreground/80 text-sm hover:border-foreground/30 transition-colors"
            >
              Contact
            </Link>
          </div>

          <hr className="divider mt-20" />

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-xs text-muted">
            <span>Currently at <span className="text-foreground/80">Doctums</span> & <span className="text-foreground/80">George Fox University</span></span>
            <span className="hidden md:inline text-border">|</span>
            <span>Newberg, OR &middot; Open to relocation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
