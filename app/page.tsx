import type { CSSProperties } from "react";

import { WaitlistForm } from "./waitlist-form";

const heroTitleStyle = {
  lineHeight: 0.95,
} satisfies CSSProperties;

const heroLineStyle = {
  display: "block",
  paddingBlock: "0.06em 0.14em",
  marginBlock: "-0.06em -0.14em",
} satisfies CSSProperties;

export default function Home() {
  return (
    <main className="landing-grid min-h-screen text-[#FAFAFA]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col border-x border-[#262626] bg-[#0A0A0A]/82">
        <header className="flex items-center justify-between border-b border-[#262626] px-5 py-5 sm:px-8 lg:px-10">
          <a
            href="#waitlist"
            className="font-mono text-sm font-semibold lowercase tracking-normal text-[#FAFAFA]"
          >
            production agentic engineering
          </a>
          <div className="h-2.5 w-2.5 rounded-[3px] bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.2)]" />
        </header>

        <section className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="flex max-w-4xl flex-col items-center text-center">
            <div className="page-load page-load-2 mb-5 inline-flex items-center rounded-full border border-[#262626] bg-[#171717] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-normal text-[#4ADE80] shadow-[0_0_10px_rgba(34,197,94,0.2)]">
              launching soon
            </div>
            <h1
              className="max-w-4xl text-5xl font-semibold tracking-[-0.02em] text-[#FAFAFA] sm:text-6xl lg:text-7xl"
              style={heroTitleStyle}
            >
              <span className="page-load page-load-3" style={heroLineStyle}>
                Skip the vibe coding.
              </span>
              <span className="page-load page-load-4" style={heroLineStyle}>
                Deliver production-grade
              </span>
              <span className="page-load page-load-5" style={heroLineStyle}>
                software with AI.
              </span>
            </h1>
            <p className="page-load page-load-6 mt-7 max-w-2xl text-lg leading-8 text-[#A3A3A3] sm:text-xl">
              Production Agentic Engineering is your playbook for shipping real
              software with AI.
            </p>

            <WaitlistForm />
          </div>
        </section>
      </div>
    </main>
  );
}
