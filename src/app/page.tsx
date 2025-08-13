"use client";

import { useState, useEffect, useRef } from "react";
import { Prologue } from "@/components/sections/Prologue";
import { StorySection } from "@/components/sections/StorySection";
import { Epilogue } from "@/components/sections/Epilogue";
import { ProgressBar } from "@/components/ProgressBar";
import { FloatingElements } from "@/components/FloatingElements";
import { WeekDivider } from "@/components/WeekDivider";
import { Navigation } from "@/components/Navigation";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { weeklyContent } from "@/data/story";
import { GoogleForm } from "@/components/sections/GoogleForm";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isEpilogueVisible, setIsEpilogueVisible] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    if (!hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));

            if (entry.target.id === "epilogue") {
              setIsEpilogueVisible(true);
            }
          } else {
            if (entry.target.id === "epilogue") {
              setIsEpilogueVisible(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    setTimeout(() => {
      const firstSection = document.getElementById("story-content");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!hasStarted) {
    return <Prologue onStart={handleStart} />;
  } else {
    return (
      <div>
        <div
          className={`fixed right-0 top-0 w-3 h-full bg-gray-300/30 z-50 transition-opacity duration-500 pointer-events-none ${
            isEpilogueVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className="bg-gray-600 w-full rounded-full transition-all duration-200"
            style={{
              height: `${Math.min(100, scrollProgress * 100)}%`,
              transform: `translateY(${
                scrollProgress * (100 - Math.min(100, scrollProgress * 100))
              }%)`,
            }}
          />
        </div>

        <div className="relative">
          <FloatingElements />
          <Navigation isVisible={hasStarted} />
          <ProgressBar
            progress={scrollProgress}
            isVisible={hasStarted && !isEpilogueVisible}
          />

          <div id="story-content" className="bg-gray-50 relative z-10">
            {weeklyContent.map((week) => (
              <div key={week.week}>
                <div
                  id={`week-${week.week}`}
                  ref={(el) => {
                    sectionsRef.current[`week-${week.week}`] = el;
                  }}
                >
                  <WeekDivider
                    weekNumber={week.week}
                    title={week.title}
                    isVisible={visibleSections.has(`week-${week.week}`)}
                  />
                </div>
                {week.sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    ref={(el) => {
                      sectionsRef.current[section.id] = el;
                    }}
                  >
                    <StorySection
                      section={section}
                      isVisible={visibleSections.has(section.id)}
                    />
                  </div>
                ))}
              </div>
            ))}

            <div
              id="epilogue"
              ref={(el) => {
                sectionsRef.current["epilogue"] = el;
              }}
            >
              <Epilogue isVisible={visibleSections.has("epilogue")} />
            </div>

            <div
              id="google-form-section"
              ref={(el) => {
                sectionsRef.current["google-form-section"] = el;
              }}
            >
              <GoogleForm
                isVisible={visibleSections.has("google-form-section")}
                showForm={showGoogleForm}
                handleShowForm={setShowGoogleForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
