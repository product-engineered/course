"use client";

import { useFormStatus } from "react-dom";

export function WaitlistButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-11 w-full min-w-[162px] cursor-pointer items-center justify-center bg-green px-5 text-sm font-semibold leading-none text-neutral-0 shadow-[2px_2px_0_0_var(--color-neutral-300)] transition-colors hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Joining..." : "Join the waitlist"}
    </button>
  );
}
