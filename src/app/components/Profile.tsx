"use client";

import type { User } from "@auth0/nextjs-auth0/types";

const FALLBACK_AVATAR = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234f46e5'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`;

export default function Profile({ user }: { user: User }) {
  const claims = user as typeof user & {
    roles?: string[];
    [claim: `https://${string}/${string}`]: unknown;
  };
  const roleClaim = Object.entries(claims).find(
    ([key, value]) => key.endsWith("/roles") && Array.isArray(value),
  )?.[1];
  const roles = claims.roles ?? (roleClaim as string[] | undefined);
  const roleLabel = roles?.join(", ") || "Member";

  return (
    <div className="flex w-40 items-center gap-2 rounded-xl border border-white/6 bg-white/3 p-2">
      <div className="relative shrink-0">
        <div className="rounded-full bg-linear-to-br from-blue-400 to-violet-500 p-0.5">
          <img
            src={user.picture || FALLBACK_AVATAR}
            alt={user.name || "User"}
            referrerPolicy="no-referrer"
            className="block h-8 w-8 rounded-full bg-slate-900 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_AVATAR;
            }}
          />
        </div>
        <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#060812] bg-green-400" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold text-white">{user.name}</p>
        <p className="mt-0.5 truncate text-[10px] text-slate-400">
          {user.email}
        </p>
        <p className="mt-0.5 truncate text-[10px] font-medium text-blue-300">
          {roleLabel}
        </p>
      </div>
    </div>
  );
}
