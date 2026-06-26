export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-12">Experience</h1>

      {/* Doctums */}
      <section>
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="text-lg font-bold shrink-0">Doctums</h2>
          <span className="text-xs text-muted font-mono whitespace-nowrap">Oct 2025 — Present</span>
        </div>

        <div className="border-l border-border pl-5 space-y-8">
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h3 className="text-accent text-sm font-semibold">Technology Consultant</h3>
              <span className="text-xs text-muted font-mono whitespace-nowrap">May 2026 — Present</span>
            </div>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Work directly with university clients to scope and deliver
              integration solutions, taking on larger cross-platform projects spanning
              Slate, WMS, OCLC, and Student First API.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h3 className="text-foreground/60 text-sm font-semibold">Software Engineer</h3>
              <span className="text-xs text-muted font-mono whitespace-nowrap">Oct 2025 — May 2026</span>
            </div>
            <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
              <li>
                Engineered and deployed production integrations serving 10+
                universities, processing thousands of student records
                including transcript workflows.
              </li>
              <li>
                Built containerized services, webhooks, and cron jobs in C#,
                .NET, and Azure DevOps. Designed SQL reports used directly by
                clients.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="divider my-12" />

      {/* George Fox */}
      <section>
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2 className="text-lg font-bold shrink-0">George Fox University</h2>
          <span className="text-xs text-muted font-mono whitespace-nowrap">Jul 2025 — Present</span>
        </div>

        <div className="border-l border-border pl-5">
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <h3 className="text-accent text-sm font-semibold">Applied AI Research Assistant</h3>
            <span className="text-xs text-muted font-mono whitespace-nowrap">Newberg, OR</span>
          </div>
          <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
            <li>
              Built a natural-language-to-SQL system enabling finance, HR,
              and IT staff to query databases in plain English using Gemini,
              MCP, custom APIs, and N8n workflow automation.
            </li>
            <li>
              Developing and deploying the Reachy Mini humanoid robot as a
              live IT help desk agent with speech interaction, ID card
              scanning, ticket submission, and spatial-awareness session
              security.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
