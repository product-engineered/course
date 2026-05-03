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
      <div className="flex flex-col gap-0 border border-ink sm:flex-row">
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
          className="min-h-13 flex-1 border-0 border-b border-ink bg-paper px-4 font-mono text-sm text-ink outline-none transition placeholder:text-brand-gray-400 focus:bg-brand-gray-50 disabled:cursor-not-allowed disabled:opacity-65 sm:border-r sm:border-b-0"
          disabled={pending}
        />
        <WaitlistButton />
      </div>
      <p
        id="waitlist-status"
        role="status"
        aria-live="polite"
        className={`min-h-5 text-left font-mono text-xs ${
          state.status === "success" ? "text-signal-green" : "text-brand-gray-500"
        }`}
      >
        {state.message}
      </p>
    </form>
  );
}
