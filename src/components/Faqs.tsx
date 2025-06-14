
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

// ---------------------------------
// Types
// ---------------------------------
interface FAQItem {
  q: string;
  a: string;
}
interface FAQCategory {
  title: string;
  items: FAQItem[];
}
interface FAQProps {
    
  dict?: any; 
}
const FAQ_DATA: FAQCategory[] = [
  {
    title: "General about WellFit",
    items: [
      {
        q: "What is WellFit?",
        a: "WellFit is a platform that combines health, technology, and education. Users earn tokens through movement, learning, and social interaction, which can be redeemed for NFTs, virtual content, or platform features.",
      },
      {
        q: "What makes WellFit special?",
        a: "The combination of gamification, blockchain (Solana), and education makes WellFit unique. Users experience virtual avatars, interactive activities, and a reward system that motivates healthy behavior.",
      },
      {
        q: "What technologies does WellFit use?",
        a: "WellFit uses Solana blockchain, AI, AR, and gamification elements.",
      },
      {
        q: "How can I join the WellFit community?",
        a: "By registering on the platform, participating in challenges, and developing your avatar.",
      },
    ],
  },
  {
    title: "Blockchain & Tokens",
    items: [
      {
        q: "Why does WellFit use the Solana blockchain?",
        a: "Solana offers high speed, low transaction costs, and eco-friendliness – ideal for microtransactions within the WellFit system.",
      },
      {
        q: "What are WellFit tokens and how do they work?",
        a: "Tokens are earned through activities such as movement, learning, and avatar care. They can be redeemed for NFTs, digital content, and exclusive features.",
      },
      {
        q: "What happens if I lose tokens?",
        a: "Tokens are stored on the blockchain. If access is lost (e.g., wallet), there is no refund – users are responsible for their security.",
      },
    ],
  },
  {
    title: "Platform & Roadmap",
    items: [
      {
        q: "What features will be added in the future?",
        a: "Staking, NFT marketplace, educational challenges, and full avatar customization. The roadmap outlines all phases in detail.",
      },
      {
        q: "Is there a roadmap for new features?",
        a: "Yes. The roadmap outlines milestones through the end of 2026 – from pre-sale phase to full platform availability.",
      },
      {
        q: "When will WellFit be fully available?",
        a: "The platform is currently in Pre-Sale Phase 1. Initial availability is planned for late 2026.",
      },
      {
        q: "Which milestones have already been reached?",
        a: "Tokenomics defined, blockchain integrated, Pre-Sale Phase 1 started, whitepaper published.",
      },
    ],
  },
  {
    title: "NFTs & Gamification",
    items: [
      {
        q: "What are NFTs in WellFit?",
        a: "Unique digital collectibles that can unlock avatars, offer rewards, or provide access to exclusive content.",
      },
      {
        q: "How do avatars work in WellFit?",
        a: "Avatars are virtual companions that grow through activity, learn new skills, and can be used in quests.",
      },
      {
        q: "How does WellFit motivate users to be active?",
        a: "Through daily, weekly, and monthly challenges, a level system, token rewards, and social competitions.",
      },
    ],
  },
  {
    title: "NFTs & Tokenomics",
    items: [
      {
        q: "What are WellFit tokens and how can I earn them?",
        a: "WellFit tokens are the internal currency of the platform. You earn them by walking, completing fitness tasks, solving puzzles, or exploring locations.",
      },
      {
        q: "How can I acquire NFTs in WellFit?",
        a: "NFTs can be earned through special challenges or bought using WellFit tokens. They offer benefits such as rare avatars or access to bonus content.",
      },
      {
        q: "Can tokens be traded?",
        a: "Yes. Once the marketplace is live, users will be able to buy tokens starting at €1 each, sell, or trade them with each other.",
      },
      {
        q: "Why should I hold WellFit tokens?",
        a: "Tokens unlock access to exclusive features, NFT purchases, and premium content. Early adopters benefit from better staking bonuses and beta access.",
      },
    ],
  },
  {
    title: "Marketing & Influencer",
    items: [
      {
        q: "How can I support WellFit as an influencer?",
        a: "You can create content, motivate your community to join challenges, or run giveaways. You'll receive token rewards and long-term collaborations.",
      },
      {
        q: "Are there exclusive offers or content for influencers?",
        a: "Yes. Influencers get early access, OG badges, special tokens and NFTs. Content is tailored to their audience style.",
      },
      {
        q: "Can influencers help shape development?",
        a: "Absolutely. We value feedback and invite influencers to beta tests or feature discussions.",
      },
    ],
  },
  {
    title: "Target Groups & Community",
    items: [
      {
        q: "Who is WellFit suitable for?",
        a: "For all age groups – from children and families to seniors, schools, and companies (e.g., corporate wellness).",
      },
      {
        q: "Can people with disabilities use WellFit?",
        a: "Yes. It includes accessible functions and customizable challenges for various needs.",
      },
      {
        q: "Is WellFit safe for children?",
        a: "Yes. WellFit offers child-friendly content with voice control, reading support, and playful activities. Parents can monitor usage and content.",
      },
      {
        q: "How does WellFit support older adults?",
        a: "Seniors receive age-appropriate challenges like walking, stretching, or museum visits. Motivation comes from social groups, tokens, and virtual tours.",
      },
    ],
  },
  {
    title: "User Experience & Technology",
    items: [
      {
        q: "What happens if I don’t care for my avatar?",
        a: "The avatar loses energy and becomes sad. After a period of inactivity, it may be put up for adoption. Caring and being active unlocks new rewards.",
      },
      {
        q: "Can I invite friends and play together?",
        a: "Yes, you can invite friends, form groups, and participate in challenges together. There are competitions and leaderboards.",
      },
      {
        q: "How do AR experiences work in WellFit?",
        a: "Users can see and interact with avatars in parks, museums, or zoos. QR codes and GPS unlock new content.",
      },
    ],
  },
  {
    title: "Security & Ethics",
    items: [
      {
        q: "How do you prevent addictive behavior through gamification?",
        a: "There are daily limits, pause functions, and educational content. WellFit promotes mindful play over endless repetition.",
      },
      {
        q: "How do you protect user data?",
        a: "State-of-the-art encryption is used, only essential data is stored, and nothing is shared with third parties.",
      },
      {
        q: "What happens to inactive users?",
        a: "After a period of inactivity, we send reminders. Tokens and progress remain but are unusable without activity. Avatars may run away.",
      },
    ],
  },
  {
    title: "Technical & Marketplace",
    items: [
      {
        q: "What devices do I need for WellFit?",
        a: "A smartphone is sufficient. Fitness bands and optional wearables are recommended but not required.",
      },
      {
        q: "When will the marketplace go live?",
        a: "The digital marketplace will be released in Phase 3 – expected mid-2026.",
      },
      {
        q: "Which devices are compatible with WellFit?",
        a: "WellFit works with smartphones, tablets, and many fitness trackers. Activities can also be logged manually.",
      },
    ],
  },
  {
    title: "Investment & Monetization",
    items: [
      {
        q: "How does WellFit make money?",
        a: "Through token sales, NFT trading, premium subscriptions, corporate partnerships, advertising, and event gamification.",
      },
      {
        q: "What do I gain from investing?",
        a: "Early investors receive tokens at a discounted price, NFTs, staking rewards, exclusive app rights, and beta access.",
      },
      {
        q: "When can I trade or sell tokens?",
        a: "After the marketplace launch in Phase 3. Early buyers in the internal community will receive advance notifications.",
      },
      {
        q: "How will my pre-sale investment be used?",
        a: "For the development of the app and community building. Investors support the platform’s foundation.",
      },
    ],
  },
];

const FAQDisclosure: React.FC<FAQItem> = ({ q, a }) => (
  <Disclosure as="div" className="w-full">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between w-full py-3 text-left text-base font-medium text-gray-800 hover:text-green-600 focus:outline-none">
          <span>{q}</span>
          <ChevronUpIcon
            className={`w-5 h-5 transform transition-transform duration-200 ${
              open ? "rotate-180 text-green-600" : "text-gray-500"
            }`}
          />
        </Disclosure.Button>

        <Disclosure.Panel className="pb-4 pl-4 text-gray-600 border-l border-green-300">
          {a}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

// ---------------------------------
// Category (heading + its Q/A list)
// ---------------------------------
const CategoryDisclosure: React.FC<FAQCategory> = ({ title, items }) => (
  <Disclosure as="div" className="shadow-md rounded-lg border border-gray-100">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between w-full px-6 py-4 bg-green-50 text-lg font-semibold text-green-700 rounded-t-lg focus:outline-none">
          <span>{title}</span>
          <ChevronUpIcon
            className={`w-6 h-6 transform transition-transform duration-200 ${
              open ? "rotate-180 text-green-600" : "text-green-500"
            }`}
          />
        </Disclosure.Button>

        <Disclosure.Panel className="px-6 py-4 space-y-3 bg-white">
          {items.map((item) => (
            <FAQDisclosure key={item.q} {...item} />
          ))}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

// ---------------------------------
// FAQ Component
// ---------------------------------
const FAQPage: React.FC<FAQProps> = ({ dict }) => {
  const heading = dict?.faq?.heading ?? "Frequently Asked Questions";
  const categories: FAQCategory[] = dict?.faq?.categories ?? [];

  return (
    <section id="FAQ" className="bg-white py-12 px-6 sm:px-10 border-8 border-white">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-green-600 mb-12">
        {heading}
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {categories.map((cat) => (
          <CategoryDisclosure key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default FAQPage;