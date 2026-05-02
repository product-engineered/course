"use client";

import { useActionState, useEffect, useRef } from "react";

import { joinWaitlist } from "./actions";
import { WaitlistButton } from "./waitlist-button";

const initialState = {
  status: "idle",
  message: "",
} as const;

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={formRef}
      id="waitlist"
      action={formAction}
      className="page-load page-load-6 mt-10 flex w-full max-w-xl flex-col gap-3"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          aria-describedby={state.message ? "waitlist-status" : undefined}
          className="min-h-13 flex-1 rounded-[6px] border border-[#262626] bg-black px-4 font-mono text-sm text-[#FAFAFA] outline-none transition focus:border-[#22C55E] focus:shadow-[0_0_10px_rgba(34,197,94,0.2)] disabled:cursor-not-allowed disabled:opacity-65"
          disabled={pending}
        />
        <WaitlistButton />
      </div>
      <p
        id="waitlist-status"
        role="status"
        aria-live="polite"
        className={`min-h-5 text-left font-mono text-xs ${
          state.status === "success" ? "text-[#4ADE80]" : "text-[#A3A3A3]"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
