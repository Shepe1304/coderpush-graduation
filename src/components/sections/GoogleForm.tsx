"use client";

import { useState } from "react";

interface GoogleFormProps {
  isVisible: boolean;
  showForm: boolean;
  googleFormUrl?: string;
  handleShowForm: (show: boolean) => void;
}

export function GoogleForm({
  isVisible,
  showForm,
  googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe1cWluWeRLt5O0FdHffr5cogTFyHxB1sPuvnpJXkmnmyjryg/viewform",
  handleShowForm,
}: GoogleFormProps) {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [showEmbedded, setShowEmbedded] = useState(false);
  const [formError, setFormError] = useState(false);

  const getEmbeddedUrl = (url: string) => `${url.split("?")[0]}?embedded=true`;
  const getNewWindowUrl = (url: string) => `${url.split("?")[0]}?usp=sf_link`;

  const handleOpenForm = () => {
    window.open(
      getNewWindowUrl(googleFormUrl),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShowEmbedded = () => {
    setShowEmbedded(true);
    setFormError(false);
    setIsFormLoaded(false);
    handleShowForm(true);
  };

  const handleFormError = () => {
    setFormError(true);
    console.log("Form failed to load, showing error message");
  };

  const handleCloseEmbedded = () => {
    setShowEmbedded(false);
    handleShowForm(false);
    setIsFormLoaded(false);
    setFormError(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-cp-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(45deg,theme(colors.cp.ink/5)_0_2px,transparent_2px_24px)]" />

      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-3xl border border-cp-lime/30" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-3xl border border-cp-lime/20" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div
          className={`transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="mx-auto mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-cp-ink md:text-5xl">
              Share Your{" "}
              <span className="relative">
                <span className="text-cp-ink">Story</span>
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-cp-lime to-cp-primary/80" />
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-cp-ink/80 md:text-xl">
              Your journey matters. Help us understand your experience and
              improve the program for future pioneers.
            </p>
          </div>

          {!showEmbedded && (
            <div className="mx-auto mb-16 grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-white/95 p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(155,228,58,0.35)]">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cp-lime text-cp-navy">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-cp-ink">
                    Quick Feedback
                  </h3>
                  <p className="mb-6 text-cp-ink/70">
                    Open the form in a new tab for a focused experience.
                  </p>
                  <button
                    onClick={handleOpenForm}
                    className="mx-auto rounded-full border border-cp-lime/70 bg-cp-lime px-8 py-3 font-semibold text-cp-navy shadow-[0_10px_30px_-10px_rgba(155,228,58,0.35)] transition-transform hover:scale-105"
                  >
                    Open Form
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white/95 p-8 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-[0_10px_30px_-10px_rgba(155,228,58,0.35)]">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cp-lime text-cp-navy">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-cp-ink">
                    Embedded Experience
                  </h3>
                  <p className="mb-6 text-cp-ink/70">
                    Fill out the form right here without leaving the story.
                  </p>
                  <button
                    onClick={handleShowEmbedded}
                    className="mx-auto rounded-full border border-cp-lime/70 bg-cp-lime px-8 py-3 font-semibold text-cp-navy shadow-[0_10px_30px_-10px_rgba(155,228,58,0.35)] transition-transform hover:scale-105"
                  >
                    Show Form Here
                  </button>
                </div>
              </div>
            </div>
          )}

          {showEmbedded && (
            <div
              className={`transform transition-all duration-700 ${
                showForm
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="mx-auto max-w-4xl rounded-3xl border border-black/5 bg-white/95 p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-cp-ink">
                    Your Feedback
                  </h3>
                  <button
                    onClick={handleCloseEmbedded}
                    className="rounded-lg p-2 text-cp-ink/60 hover:bg-black/5 hover:text-cp-ink"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative">
                  {!isFormLoaded && !formError && (
                    <div className="flex h-96 items-center justify-center rounded-2xl bg-black/[.04]">
                      <div className="text-center">
                        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-transparent border-b-cp-lime" />
                        <p className="text-cp-ink/70">Loading form...</p>
                      </div>
                    </div>
                  )}

                  {formError && (
                    <div className="flex h-96 items-center justify-center rounded-2xl bg-black/[.04]">
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                          <svg
                            className="h-8 w-8 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="mb-4 text-cp-ink/70">
                          Unable to load the embedded form.
                        </p>
                        <button
                          onClick={handleOpenForm}
                          className="rounded-full border border-cp-lime bg-cp-lime px-6 py-2 font-medium text-cp-navy shadow-[0_10px_30px_-10px_rgba(155,228,58,0.35)] hover:brightness-95"
                        >
                          Open in New Window Instead
                        </button>
                      </div>
                    </div>
                  )}

                  <iframe
                    src={getEmbeddedUrl(googleFormUrl)}
                    width="100%"
                    height="800"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    onLoad={() => setIsFormLoaded(true)}
                    onError={handleFormError}
                    className={`rounded-2xl transition-opacity duration-500 ${
                      isFormLoaded && !formError
                        ? "opacity-100"
                        : "absolute inset-0 opacity-0"
                    }`}
                    title="Feedback Form"
                    sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  >
                    Loading...
                  </iframe>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-cp-ink/60">
                    Having trouble with the embedded form?{" "}
                    <button
                      onClick={handleOpenForm}
                      className="font-medium text-cp-ink underline decoration-cp-lime/60 underline-offset-4 hover:text-cp-ink"
                    >
                      Open in new window
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
