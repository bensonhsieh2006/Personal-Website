"use client";

export default function LoginButton() {
  return (
    <a
      href="/auth/login"
      className="inline-block w-auto rounded-lg bg-blue-600 px-3 py-1.5 text-center text-sm font-medium tracking-[-0.01em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
      Sign in
    </a>
  );
}