import type { CSSProperties } from "react";

import { WaitlistForm } from "./waitlist-form";

const heroTitleStyle = {
  lineHeight: 1,
} satisfies CSSProperties;

const heroLineStyle = {
  display: "block",
} satisfies CSSProperties;

export default function Home() {
  return (
    <main className="landing-grid min-h-screen px-4 py-4 text-black sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col border border-neutral-400 bg-neutral-0 sm:min-h-[calc(100vh-3rem)]">
        <header className="flex items-center justify-between border-b border-neutral-400 px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#waitlist"
            className="font-mono text-xs font-semibold uppercase tracking-normal text-black sm:text-sm"
          >
            Agentic Engineering in Production
          </a>
        </header>

        <section className="flex flex-1 items-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex w-full max-w-5xl flex-col items-start text-left">
            <h1
              className="max-w-5xl text-4xl font-semibold tracking-normal text-black sm:text-6xl lg:text-7xl"
              style={heroTitleStyle}
            >
              <span className="page-load page-load-1" style={heroLineStyle}>
                Skip the vibe coding.
              </span>
              <span className="page-load page-load-2" style={heroLineStyle}>
                Deliver production-grade
              </span>
              <span className="page-load page-load-3" style={heroLineStyle}>
                software with AI
              </span>
            </h1>
            <p className="page-load page-load-4 mt-7 max-w-2xl border-l border-neutral-400 pl-4 text-base leading-7 text-neutral-600 sm:text-lg">
              Agentic Engineering in Production is your playbook for shipping real
              software with AI.
            </p>

            <WaitlistForm />
          </div>
        </section>

        <footer className="border-t border-black px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 font-mono text-xs font-semibold uppercase tracking-normal text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Follow on X:{" "}
              <a
                href="https://x.com/mulholo"
                className="underline decoration-neutral-400 underline-offset-2 transition-colors hover:text-black"
              >
                @mulholo
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
