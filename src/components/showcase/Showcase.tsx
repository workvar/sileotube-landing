'use client';

import { useEffect, useState } from 'react';
import { Home, PlaySquare, Monitor, VideoOff } from 'lucide-react';
import ShowcaseTabs from './ShowcaseTabs';
import ShowcaseDisplay from './ShowcaseDisplay';

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // automatcally rotate through the tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    {
      title: "Clean Landing",
      icon: <Home size={18} />,
      header: "Minimalist Home Screen",
      description: "Clean clutter from your homepage by removing video recommendations, and having a focused search bar. We hide the sidebar so you can access sub-pages only when you intend to.",
      features: [
        "Focused search bar",
        "No algorithmic feed",
        "Sidebar hidden by default"
      ],
      image: "https://ik.imagekit.io/canarygrapher/workvar/main-website/images/products/SileoTube/landing_sXb7J0ib9W.png"
    },
    {
      title: "Mindful Watch",
      icon: <Monitor size={18} />,
      header: "Clean Watch Page",
      description: "Get a focused video watching experience by removing recommendations and centering the video player. We also hide comments so you don't get sucked into internet arguments.",
      features: [
        "Centered video player",
        "Hidden recommendations",
        "Comments section disabled"
      ],
      image: "https://ik.imagekit.io/canarygrapher/workvar/main-website/images/products/SileoTube/watch_BTiPDTJE82.png"
    },
    {
      title: "No Shorts",
      icon: <PlaySquare size={18} />,
      header: "Block Shorts Entirely",
      description: "Block shorts page and prevent playing them by accident. Removes shorts recommendations site-wide—from search results and the watch page.",
      features: [
        "Redirects Shorts to Home",
        "Removes Shorts shelf",
        "Hides from Search results"
      ],
      image: "https://ik.imagekit.io/canarygrapher/workvar/main-website/images/products/SileoTube/shorts_Tz3Gqotdy2.png"
    },
    {
      title: "Grayscaled Thumbnails",
      icon: <VideoOff size={18} />,
      header: "Grayscaled Thumbnails",
      description: "Reduce visual clutter by converting thumbnails to grayscale. This helps you focus on the content and avoid distractions.",
      features: [
        "Grayscaled thumbnails",
        "Reduces visual clutter",
        "Improves focus"
      ],
      image: "https://ik.imagekit.io/canarygrapher/workvar/main-website/images/products/SileoTube/grayscale_lJOn_7nne.png"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6">Experience the <span className="bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Difference</span><br />Get your time back.</h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">See how SileoTube transforms your YouTube interface into a tool for learning, not scrolling.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12">
          <ShowcaseTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ShowcaseDisplay tabs={tabs} activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Showcase;

