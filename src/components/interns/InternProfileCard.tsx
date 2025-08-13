import * as React from "react";
import Image from "next/image";
import { InternProfile } from "@/types";

type Props = {
  intern: InternProfile;
  onOpenProfile: () => void;
  index: number;
};

export default function InternProfileCard({
  intern,
  onOpenProfile,
  index,
}: Props) {
  return (
    <div
      onClick={onOpenProfile}
      className="group relative w-full rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-zinc-200 transition-all hover:-translate-y-0.5 dark:bg-zinc-900/70 dark:ring-zinc-800 cursor-pointer"
      aria-label={`Open profile for ${intern.name}`}
      key={index}
    >
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800">
          <Image
            src={intern.avatar || "/default-avatar.png"}
            alt={`${intern.name} avatar`}
            fill
            sizes="64px"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {intern.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {intern.message}
          </p>
        </div>
      </div>
    </div>
  );
}
