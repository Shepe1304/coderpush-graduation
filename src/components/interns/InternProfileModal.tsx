import * as React from "react";
import Image from "next/image";
import { InternProfile } from "@/types";

type Props = {
  intern: InternProfile;
  isOpen: boolean;
  onClose: () => void;
};

export default function InternProfileModal({ intern, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl dark:bg-zinc-900 max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
          aria-label="Close profile"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Profile content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-2rem)]">
          <div className="text-center">
            {/* Avatar */}
            <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-zinc-200 dark:ring-zinc-700">
              <Image
                src={intern.avatar || "/default-avatar.png"}
                alt={`${intern.name} profile picture`}
                fill
                sizes="256px"
                className="object-cover object-center"
                priority={true}
              />
            </div>

            {/* Name */}
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {intern.fullName}
            </h2>

            {/* Role and Project */}
            {intern.role && (
              <div className="mb-4">
                <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                  {intern.role}
                </p>
                {intern.project && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Project: {intern.project}
                  </p>
                )}
              </div>
            )}

            {/* Mentor */}
            {intern.mentor && (
              <div className="mb-4">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="font-medium">Mentor:</span> {intern.mentor}
                </p>
              </div>
            )}

            {/* Bio */}
            {intern.bio && (
              <div className="mb-6 text-left">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  About
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {intern.bio}
                </p>
              </div>
            )}

            {/* Message */}
            {intern.message && (
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Personal Message
                </h3>
                <p className="text-sm italic text-zinc-700 dark:text-zinc-300">
                  &ldquo;{intern.message}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
