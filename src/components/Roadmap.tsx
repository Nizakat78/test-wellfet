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
    quarter: "Q3",
    year: 2021,
    milestones: [
      { label: "1st Drop Packs Sale" },
      { label: "PancakeSwap Listing", icon: "🔥" },
      { label: "Play2Earn Fantasy Leagues", icon: "⚽🎮" },
      { label: "Uniswap Listing", icon: "🦄" },
      { label: "Ethereum Bridge", icon: "🔗" },
      { label: "Marketplace Live" },
    ],
  },
  {
    quarter: "Q4",
    year: 2021,
    milestones: [
      { label: "Packs Subscription Pool", icon: "📦" },
      { label: "FEVR Credit Card Gateway", icon: "💳" },
      { label: "FEVR Staking" },
      { label: "Polygon Bridge" },
      { label: "2nd CEX Listing" },
      { label: "NFT Index" },
    ],
  },
  {
    quarter: "Q1",
    year: 2022,
    milestones: [
      { label: "FEVR Holders DAO" },
      { label: "NFT Collection Portfolio" },
      { label: "Clubs Launchpad" },
      { label: "NFT P2P Lending" },
    ],
  },
  {
    quarter: "Q2",
    year: 2022,
    milestones: [
      { label: "NFT Collection Challenges" },
      { label: "Token Wagering Leagues", icon: "🎯🎮" },
      { label: "NEW NFT P2E Football Game", icon: "⚽🕹" },
      { label: "NFT Integration Into Fantasy Leagues" },
    ],
  },
  {
    quarter: "Q3",
    year: 2025,
    milestones: [
      { label: "TMT Token Listing", icon: "📈" },
      { label: "Website v2 Launch", icon: "🖥️" },
      { label: "TMT Staking", icon: "📦" },
      { label: "TMT Token Burn Event", icon: "🔥" },
    ],
  },
];

export default function Roadmap() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section  className="animated-bg py-20 px-4 text-black overflow-hidden relative">

      {/* Dynamic styles */}
      <style jsx global>{`
        /* page animated gradient */
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
        /* card border + bg animation */
        .glow-green {
          position: relative;
          border: 2px solid #07ede2; /* green */
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
        🚀 Roadmap <span className="text-green-300">Highlights</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* timeline line */}
        <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 h-full border-l-2 border-green-400/40" data-aos="fade-down" />

        <ul className="space-y-16 sm:space-y-24">
          {ROADMAP.map((section, idx) => {
            const isRight = idx % 2 !== 0;
            return (
              <li key={`${section.quarter}-${section.year}`} className="relative sm:flex sm:items-start">
                {/* dot */}
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

      {/* footer */}
      <div className="mt-20 flex justify-center gap-8 text-sm text-green-200" data-aos="fade-up">
        <span>2021</span><span>|</span><span>2022</span><span>|</span><span>2025</span>
      </div>
    </section>
  );
}
