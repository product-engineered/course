import type { CSSProperties } from "react";

import { CommitGraph } from "./commit-graph";
import { WaitlistForm } from "./waitlist-form";

const heroTitleStyle = {
  lineHeight: 1,
} satisfies CSSProperties;

const logoMarkStyle = {
  letterSpacing: "-0.06em",
} satisfies CSSProperties;

export default function Home() {
  return (
    <main className="landing-grid min-h-screen px-4 py-4 text-black sm:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-5xl flex-col border border-neutral-400 bg-neutral-0 shadow-[2px_2px_0_0_var(--color-neutral-300)] sm:min-h-[calc(100vh-3rem)]">
        <header className="px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-3 flex-col sm:flex-row">
            <div className="flex flex-col gap-0 items-center">
              <h1
                className="font-bold tracking-normal text-black sm:text-base"
              >
                Agentic Engineering in Production
              </h1>
              <div className="flex">
                <div className="bg-red h-1.5 w-11"></div>
                <div className="bg-green h-1.5 w-11"></div>
                <div className="bg-yellow h-1.5 w-11"></div>
                <div className="bg-blue h-1.5 w-11"></div>
                <div className="bg-magenta h-1.5 w-11"></div>
                <div className="bg-cyan h-1.5 w-11"></div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span
                className="font-mono text-[11px] font-medium italic leading-none text-black sm:text-xs"
                style={logoMarkStyle}
              >
                by
              </span>
              <a
                href="https://productengineered.com"
                className="bg-blue px-2 py-2 sm:px-3 sm:py-2 font-mono text-[11px] font-extrabold italic leading-none text-neutral-0 uppercase transition-colors hover:bg-neutral-800 sm:text-xs"
                style={logoMarkStyle}
              >
                Product Engineered
              </a>
            </div>
          </div>
          <div className="mt-5 border-t border-neutral-400" />
        </header>

        <section className="flex px-5 sm:px-8">
          <div className="flex w-full max-w-5xl flex-col items-start text-left">
            <h1
              className="max-w-5xl text-3xl font-bold tracking-normal text-black sm:text-5xl lg:text-6xl"
              style={heroTitleStyle}
            >
                <span className="block">Skip the vibe coding.</span>
                <span className="block">Learn to build production-grade software with AI.</span>
            </h1>
            <p className="mt-7 max-w-2xl border-l border-neutral-400 pl-4 text-base leading-7 text-neutral-600 sm:text-lg">
              Agentic Engineering in Production is your playbook for shipping real
              software with AI.
            </p>

            <WaitlistForm />
          </div>
        </section>

        <section className="mt-12 px-5 pb-8 sm:mt-16 sm:px-8 sm:pb-12">
          <CommitGraph />
        </section>

        <footer className="mt-auto px-5 py-4 sm:px-8">
          <div className="border-t border-black pt-4">
            <div className="flex flex-col gap-3 font-mono text-xs font-semibold uppercase tracking-normal text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
              <p>Copyright &copy; {new Date().getFullYear()} Product Engineered</p>
              <p>
                Made by{" "}
                <a
                  href="https://x.com/mulholo"
                  className="underline decoration-neutral-400 underline-offset-2 transition-colors hover:text-black"
                >
                  @mulholo
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
