import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/*
  Roadmap component now supports i18n just like your <Shaping /> section.
  - Pass a `dict` prop (any shape) that contains translated roadmap data.
  - If `dict.roadmap.phases` exists, it will be used; otherwise the fallback
    constant `DEFAULT_ROADMAP` is rendered.
  - Milestones can optionally include `done: boolean` so the icon automatically
    switches between ✅ (completed) and ⏳ (open).
*/

interface Milestone {
  label: string;
  /** Optional override icon                */
  icon?: string;
  /** Mark the milestone as completed/open  */
  done?: boolean;
}

interface QuarterSection {
  quarter: string;
  year: number;
  milestones: Milestone[];
}

// ------------------------------
// Fallback static roadmap (EN)
// ------------------------------
const DEFAULT_ROADMAP: QuarterSection[] = [
  {
    quarter: "Phase 1",
    year: 2024,
    milestones: [
      { label: "Launch of the idea: Tamagotchi avatar with NFT & AR", done: true },
      { label: "Q1 – Market analysis & target‑group research", done: true },
      { label: "Q2 – MVP sketches & first mock‑ups", done: false },
      { label: "Q3 – Expansion of the idea", done: false },
      { label: "Q4 – Finalise technology selection (SUI vs Solana)", done: false },
    ],
  },
  {
    quarter: "Phase 2",
    year: 2025,
    milestones: [
      { label: "Q1 – UI/UX Pre‑Sale design", done: false },
      { label: "Q2 – Blockchain integration (testnet → mainnet)", done: false },
      { label: "Q2‑Q3 – Launch white‑paper & community building", done: false },
      { label: "Q3 – Advertising push: influencers, social ads, crypto", done: false },
    ],
  },
  {
    quarter: "Phase 3",
    year: 2026,
    milestones: [
      { label: "Q1 – Beta release of the app for test users", done: false },
      { label: "Q2 – Launch WellFit marketplace (NFTs, rewards)", done: false },
      { label: "Q3 – Prepare for WFT token exchange listing", done: false },
      { label: "Q4 – Introduce AR functions", done: false },
    ],
  },
];

// ------------------------------
// Helper to convert a dict‑based i18n structure into our internal shape
// Expecting dict.roadmap.phases = Array<QuarterSectionLike>
// Each milestone may optionally include { done }
// ------------------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDictToRoadmap = (dict: any): QuarterSection[] | null => {
  if (!dict?.roadmap?.phases) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (dict.roadmap.phases as any[]).map((p: any) => ({
      quarter: p.quarter,
      year: p.year,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      milestones: (p.milestones as any[]).map((m: any) => ({
        label: m.label,
        icon: m.icon,
        done: m.done,
      })),
    }));
  } catch {
    return null; // fall back to default on any mismatch
  }
};

// ------------------------------
// Component
// ------------------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Roadmap({ dict }: { dict?: any }) {
  // pick translated or default roadmap
  const ROADMAP: QuarterSection[] = mapDictToRoadmap(dict) || DEFAULT_ROADMAP;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="Roadmap" className="animated-bg py-20 px-4 text-white overflow-hidden relative border-8 border-white">
      {/* styles remain unchanged */}
      <style jsx global>{`
        .animated-bg {
          background: linear-gradient(60deg, #0f0c29, #302b63, #0f0c29);
          background-size: 600% 600%;
          animation: pageGradient 18s ease infinite;
        }
        @keyframes pageGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glow-green {
          position: relative;
          border: 2px solid #07ede2;
          border-radius: 1rem;
          background: radial-gradient(circle at top left, rgba(50,205,50,0.25), rgba(0,0,0,0.05));
          overflow: hidden;
        }
        .glow-green::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(50,205,50,0.45), transparent, rgba(50,205,50,0.45));
          background-size: 200% 200%;
          animation: cardBgShift 6s linear infinite;
          z-index: -1;
        }
        @keyframes cardBgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glow-green-shadow { animation: borderPulse 3s ease-in-out infinite; }
        @keyframes borderPulse {
          0% { box-shadow: 0 0 10px #32cd32; }
          50% { box-shadow: 0 0 25px #32cd32; }
          100% { box-shadow: 0 0 10px #32cd32; }
        }
      `}</style>

      {/* ---------------- Header ---------------- */}
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-20" data-aos="zoom-in">
        {dict?.roadmap?.heading ?? "🚀 WellFit Roadmap"} {" "}
        <span className="text-green-300">{dict?.roadmap?.subHeading ?? "Highlights"}</span>
      </h2>

      {/* ---------------- Timeline ---------------- */}
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 h-full border-l-2 border-green-400/40" data-aos="fade-down" />

        <ul className="space-y-16 sm:space-y-24">
          {ROADMAP.map((section, idx) => {
            const isRight = idx % 2 !== 0;
            return (
              <li key={`${section.quarter}-${section.year}`} className="relative sm:flex sm:items-start ">
                {/* timeline dot */}
                <span className="absolute -left-[10px] sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full bg-green-400 border-4 border-gray-900 shadow-lg" data-aos="zoom-in" />

                <div
                  className={`w-full sm:w-1/2 glow-green glow-green-shadow transition-transform duration-300 hover:scale-105 p-6 backdrop-blur-md ${isRight ? "sm:ml-auto sm:text-right" : "sm:mr-auto sm:text-left"}`}
                  data-aos={isRight ? "fade-left" : "fade-right"}
                >
                  <h3 className="text-xl font-bold mb-3">
                    {section.quarter} <span className="text-green-300">{section.year}</span>
                  </h3>

                  <ul className="space-y-2 text-sm sm:text-base">
                    {section.milestones.map((m, i) => {
                      // icon priority: explicit > done flag > default open
                      const icon = m.icon ?? (m.done ? "✅" : "⏳");
                      return (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-lg">{icon}</span>
                          <span>{m.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ---------------- Footer Years ---------------- */}
      <div className="mt-20 flex justify-center gap-8 text-sm text-green-200" data-aos="fade-up">
        {ROADMAP.map((p) => p.year).join(" | ")}
      </div>
    </section>
  );
}
