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
      className="page-load page-load-6 mt-10 flex w-full max-w-2xl flex-col gap-3"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
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
          className="min-h-11 w-full border border-black bg-neutral-0 px-3 text-sm text-black shadow-[2px_2px_0_0_var(--color-neutral-300)] outline-none transition placeholder:text-neutral-400 focus:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-65 sm:max-w-sm font-mono"
          disabled={pending}
        />
        <WaitlistButton />
      </div>
      <p
        id="waitlist-status"
        role="status"
        aria-live="polite"
        className={`min-h-5 text-left font-mono text-xs ${
          state.status === "success" ? "text-green" : "text-neutral-500"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
