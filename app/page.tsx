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
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#FAFAFA] sm:text-6xl lg:text-7xl">
              Skip the vibe coding. Deliver production-grade software with AI.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#A3A3A3] sm:text-xl">
              Production Agentic Engineering is your playbook for shipping real
              software with AI.
            </p>

            <form
              id="waitlist"
              className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="min-h-13 flex-1 rounded-[6px] border border-[#262626] bg-black px-4 font-mono text-sm text-[#FAFAFA] outline-none transition focus:border-[#22C55E] focus:shadow-[0_0_10px_rgba(34,197,94,0.2)]"
              />
              <button
                type="submit"
                className="min-h-13 rounded-[6px] border border-[#22C55E] bg-[#22C55E] px-5 text-sm font-semibold text-[#0A0A0A] transition hover:bg-[#4ADE80] focus:outline-none focus:ring-2 focus:ring-[#4ADE80] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
              >
                Join the waitlist
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
