"use client";

export default function LogoutButton() {
  return (
    <a
      href="/auth/logout"
      className="inline-block w-auto rounded-lg border border-white/8 bg-white/4 px-3 py-1.5 text-center text-sm font-medium tracking-[-0.01em] text-slate-300 transition-all duration-200 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-400 focus:outline-none"
    >
      Sign out
    </a>
  );
}
