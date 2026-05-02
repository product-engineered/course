"use client";

import { useFormStatus } from "react-dom";

export function WaitlistButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-13 w-full min-w-[162px] cursor-pointer items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F4F5_100%)] px-6 text-sm font-medium leading-none text-[#18181B] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.08),0_10px_24px_rgba(0,0,0,0.36)] transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86EFAC] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Joining..." : "Join the waitlist"}
    </button>
  );
}
