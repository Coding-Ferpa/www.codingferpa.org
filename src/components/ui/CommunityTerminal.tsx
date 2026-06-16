"use client";

import { useEffect, useState } from "react";

const LINES = [
  { type: "command", text: '$ echo "Bem-vindo ao Coding Ferpa!"' },
  { type: "output", text: "Bem-vindo ao Coding Ferpa!" },
  { type: "muted", text: "# Encontros mensais" },
  { type: "muted", text: "# Palestras e workshops" },
  { type: "muted", text: "# Conteúdos gratuitos" },
] as const;

function Line({ type, text }: { type: string; text: string }) {
  const styles: Record<string, string> = {
    command: "text-accent-muted",
    output: "text-text-primary text-base",
    muted: "text-text-muted",
  };

  return (
    <div className={`font-mono text-sm leading-relaxed ${styles[type] ?? ""}`}>
      {text}
    </div>
  );
}

interface CommunityTerminalProps {
  className?: string;
}

export default function CommunityTerminal({ className = "" }: CommunityTerminalProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleLines(LINES.length);
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= LINES.length) clearInterval(interval);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      className={`relative rounded-lg overflow-hidden border border-border shadow-lg bg-[#0a0a0a] ${className}`}
      role="img"
      aria-label="Terminal com mensagem de boas-vindas da Coding Ferpa"
    >
      <div
        className="absolute -inset-px rounded-lg bg-gradient-to-br from-accent/20 to-accent-muted/10 pointer-events-none"
        aria-hidden
      />

      <div className="relative flex items-center gap-2 px-3 py-2 bg-bg-elevated border-b border-border">
        <div className="flex gap-1.5" aria-hidden>
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-left text-caption text-text-muted font-mono select-none">
          coding-ferpa@localhost
        </span>
      </div>

      <div className="relative px-4 py-3 min-h-[100px] flex flex-col justify-center font-mono text-sm">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <Line key={i} type={line.type} text={line.text} />
        ))}

        {visibleLines >= LINES.length && (
          <div className="font-mono text-sm text-accent-muted mt-2">
            <span>$ </span>
            <span
              className={`inline-block w-1 h-2 bg-accent align-middle ml-0.5 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
              aria-hidden
            />
          </div>
        )}
      </div>
    </div>
  );
}
