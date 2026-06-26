"use client";

import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [showCat, setShowCat] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">About</h1>

      <div className="space-y-5 text-foreground/80 leading-[1.75]">
        <p>
          I&apos;m studying Computer Science with a Cybersecurity concentration
          at George Fox University, graduating May 2027. Most of my time goes
          toward building things at the intersection of AI and security.
        </p>
        <p>
          At Doctums I started as a software engineer building integrations for
          universities. Containerized .NET services, transcript pipelines. I
          got promoted to Technology Consultant after six months,
          so now I scope the projects too. 10+ universities run on stuff
          I&apos;ve shipped.
        </p>
        <p>
          On the research side, I&apos;m at George Fox&apos;s A2I2 lab
          building a humanoid robot that works as an IT help
          desk agent. It does speech, scans student IDs with computer vision,
          files tickets on its own. I also built a natural language to SQL system
          so finance and HR staff can query databases without writing any code.
        </p>
        <p>
          Outside of work I&apos;m usually doing CTF competitions, messing with
          Raspberry Pi projects, or just going down rabbit holes. I
          also like to play games, workout, and play with my{" "}
          <button
            onClick={() => setShowCat(!showCat)}
            className="text-accent hover:text-accent-dim transition-colors cursor-pointer underline underline-offset-2"
          >
            cat
          </button>
          .
        </p>
      </div>

      {showCat && (
        <div className="mt-6 fade-up">
          <Image
            src="/cat.jpg"
            alt="My cat"
            width={400}
            height={300}
            className="rounded-sm border border-border"
          />
        </div>
      )}

      <hr className="divider mt-16 mb-12" />

      <div className="space-y-8">
        <SkillRow
          label="Languages"
          items={["Python", "C#/.NET", "C", "Java", "JavaScript", "Bash", "SQL"]}
        />
        <SkillRow
          label="Web & Infra"
          items={["React", "Node.js", "Docker", "Azure DevOps", "Git", "N8n", "MCP"]}
        />
        <SkillRow
          label="AI"
          items={["Gemini API", "Claude API", "Groq Whisper", "Agentic Systems", "Computer Vision", "NL-to-SQL"]}
        />
        <SkillRow
          label="Security"
          items={["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "Hashcat", "Network Forensics"]}
        />
      </div>

      <hr className="divider mt-16 mb-12" />

      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
        <div>
          <h2 className="font-semibold">George Fox University</h2>
          <p className="text-sm text-muted mt-0.5">
            B.S. Computer Science, Cybersecurity Concentration
          </p>
        </div>
        <span className="text-sm text-muted font-mono shrink-0">May 2027</span>
      </div>

      <hr className="divider mt-12 mb-12" />

      <div className="space-y-3 text-sm">
        <div className="flex items-baseline gap-3">
          <span className="text-accent-warm font-mono text-xs">SEC+</span>
          <span className="text-foreground/80">CompTIA Security+</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-accent-warm font-mono text-xs">CTF</span>
          <span className="text-foreground/80">CyberSEED 2025, 23rd nationally</span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-accent-warm font-mono text-xs">NCL</span>
          <span className="text-foreground/80">Cyber Skyline 2026, 379th nationally, challenge coin</span>
        </div>
      </div>
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline gap-2">
      <span className="text-xs text-muted font-mono min-w-24 shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
    </div>
  );
}
