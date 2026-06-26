export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-3">Contact</h1>
      <p className="text-muted text-sm mb-12">
        Open to opportunities in software engineering, cybersecurity, and
        defense technology. Based in Newberg, OR — happy to relocate.
      </p>

      <div className="space-y-6 text-sm">
        <a
          href="mailto:cadengrover2023@gmail.com"
          className="flex items-baseline gap-4 group py-1"
        >
          <span className="text-xs text-muted font-mono w-16 shrink-0">Email</span>
          <span className="text-foreground/80 group-hover:text-accent transition-colors">
            cadengrover2023@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/caden-grover/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-4 group py-1"
        >
          <span className="text-xs text-muted font-mono w-16 shrink-0">LinkedIn</span>
          <span className="text-foreground/80 group-hover:text-accent transition-colors">
            caden-grover
          </span>
        </a>

        <a
          href="https://github.com/Zombu13"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline gap-4 group py-1"
        >
          <span className="text-xs text-muted font-mono w-16 shrink-0">GitHub</span>
          <span className="text-foreground/80 group-hover:text-accent transition-colors">
            Zombu13
          </span>
        </a>
      </div>

      <hr className="divider mt-14 mb-10" />

      <div className="text-sm text-foreground/65 space-y-1.5">
        <p>Looking for Summer 2027 internships and new grad roles.</p>
        <p>
          Interested in defense tech, cybersecurity, AI/ML, autonomous systems.
        </p>
        <p>Eligible for U.S. security clearance.</p>
      </div>
    </div>
  );
}
