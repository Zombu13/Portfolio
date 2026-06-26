export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-12">Projects</h1>

      <div className="mb-14">
        <div className="flex items-baseline gap-3 mb-3">
          <h2 className="text-xl font-bold">Reachy Mini AI Help Desk Robot</h2>
          <span className="text-xs font-mono text-status-active/80">active</span>
        </div>
        <p className="text-foreground/80 leading-relaxed text-[0.95rem]">
          A humanoid robot deployed as a university IT help desk agent. Real-time
          speech interaction, computer vision ID scanning, automated ticket
          submission, spatial-awareness session security. The brain is an agentic
          AI system I architected with 33 callable MCP tools that let it
          autonomously interact with university infrastructure.
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {["Python", "Gemini API", "MCP", "Groq Whisper", "Raspberry Pi 5", "OpenCV"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <hr className="divider mb-10" />

      <div className="space-y-10">
        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-lg font-semibold">Physical Therapy Biofeedback Game</h2>
            <span className="text-xs font-mono text-status-progress/80">commercializing</span>
          </div>
          <p className="text-foreground/75 text-sm leading-relaxed">
            Co-built a sensor-equipped foot pedal and biofeedback game with a
            bioengineering team to gamify PT exercises. The software is being
            commercialized by George Fox&apos;s physical therapy department.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Python", "GDScript", "Godot", "Raspberry Pi 5"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="text-lg font-semibold">Natural Language Finance Query System</h2>
            <span className="text-xs font-mono text-status-shipped/70">deployed</span>
          </div>
          <p className="text-foreground/75 text-sm leading-relaxed">
            NL-to-SQL interface for university finance and HR staff. Integrates
            custom APIs and N8n automation so non-technical users can query
            databases in plain English, end to end.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["Python", "Gemini API", "MCP", "SQL", "N8n"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
