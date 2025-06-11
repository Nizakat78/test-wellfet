import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Milestone {
  label: string;
  icon?: string;
}

interface QuarterSection {
  quarter: string;
  year: number;
  milestones: Milestone[];
}

const ROADMAP: QuarterSection[] = [
  {
    quarter: "Phase 1",
    year: 2024,
    milestones: [
      { label: "Launch of the idea: Tamagotchi avatar with NFT & AR" },
      { label: "Q1 - Market analysis & target group research" },
      { label: "Q2 - MVP sketches & first mockups" },
      { label: "Q3 - Expansion of the idea" },
      { label: "Q4 - Finalize technology selection (SUI vs. Solana)" },
    ],
  },
  {
    quarter: "Phase 2",
    year: 2025,
    milestones: [
      { label: "Q1 - UI/UX PreeSale design" },
      { label: "Q2 - Blockchain integration (testnet then mainnet)" },
      { label: "Q2-Q3 - Launch whitepaper & community building" },
      { label: "Q3 - Advertising push: influencers, social ads, crypto" },
    ],
  },
  {
    quarter: "Phase 3",
    year: 2026,
    milestones: [
      { label: "Q1 - Beta release of the app for test users" },
      { label: "Q2 - Launch WellFit marketplace (NFTs, rewards)" },
      { label: "Q3 - Prepare for WFT token exchange listing" },
      { label: "Q4 - Introduce AR functions" },
    ],
  },
];

export default function Roadmap() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="animated-bg py-20 px-4 text-white overflow-hidden relative">
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
        .glow-green-shadow {
          animation: borderPulse 3s ease-in-out infinite;
        }
        @keyframes borderPulse {
          0% { box-shadow: 0 0 10px #32cd32; }
          50% { box-shadow: 0 0 25px #32cd32; }
          100% { box-shadow: 0 0 10px #32cd32; }
        }
      `}</style>

      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-20" data-aos="zoom-in">
        🚀 WellFit Roadmap <span className="text-green-300">Highlights</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 h-full border-l-2 border-green-400/40" data-aos="fade-down" />

        <ul className="space-y-16 sm:space-y-24">
          {ROADMAP.map((section, idx) => {
            const isRight = idx % 2 !== 0;
            return (
              <li key={`${section.quarter}-${section.year}`} className="relative sm:flex sm:items-start">
                <span className="absolute -left-[10px] sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full bg-green-400 border-4 border-gray-900 shadow-lg" data-aos="zoom-in" />
                <div
                  className={`w-full sm:w-1/2 glow-green glow-green-shadow transition-transform duration-300 hover:scale-105 p-6 backdrop-blur-md ${isRight ? "sm:ml-auto sm:text-right" : "sm:mr-auto sm:text-left"}`}
                  data-aos={isRight ? "fade-left" : "fade-right"}
                >
                  <h3 className="text-xl font-bold mb-3">
                    {section.quarter} <span className="text-green-300">{section.year}</span>
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {section.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-lg">{m.icon || "✅"}</span>
                        <span>{m.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-20 flex justify-center gap-8 text-sm text-green-200" data-aos="fade-up">
        <span>2024</span><span>|</span><span>2025</span><span>|</span><span>2026</span>
      </div>
    </section>
  );
}
