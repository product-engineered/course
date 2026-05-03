"use client";

import { useFormStatus } from "react-dom";

export function WaitlistButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-13 w-full min-w-[162px] cursor-pointer items-center justify-center bg-green px-6 text-sm font-semibold leading-none text-neutral-0 transition-colors hover:bg-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Joining..." : "Join the waitlist"}
    </button>
  );
}
