'use client';

import { ArrowUpRight } from 'lucide-react';
import { EXTENSION_URL, FIREFOX_URL, EDGE_URL } from '@/constants';
import { useState } from 'react';

interface BrowserDropdownProps {
  isOpen: boolean;
}

const BrowserDropdown: React.FC<BrowserDropdownProps> = ({ isOpen }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const browsers = [
    {
      href: EXTENSION_URL,
      icon: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/chrome_A_Pz2qvUB?updatedAt=1762167034398",
      name: "Chrome Web Store",
      version: "Version 50+",
      color: "blue",
    },
    {
      href: FIREFOX_URL,
      icon: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/firefox_eOCdiEU-fJ.svg?updatedAt=1762366573154",
      name: "Firefox Add-ons",
      version: "Version 100+",
      color: "orange",
    },
    {
      href: EDGE_URL,
      icon: "https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/edge_qzRsb17gT?updatedAt=1762167034398",
      name: "Microsoft Edge",
      version: "Version 39+",
      color: "sky",
    },
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colors = {
      blue: {
        bg: isHovered ? 'bg-blue-50/80' : 'bg-transparent',
        border: isHovered ? 'border-blue-200' : 'border-transparent',
        text: isHovered ? 'text-blue-700' : 'text-zinc-700',
        iconBg: isHovered ? 'bg-blue-500/10' : 'bg-zinc-100/50',
        glow: isHovered ? 'shadow-[0_0_15px_rgba(59,130,246,0.2)]' : '',
      },
      orange: {
        bg: isHovered ? 'bg-orange-50/80' : 'bg-transparent',
        border: isHovered ? 'border-orange-200' : 'border-transparent',
        text: isHovered ? 'text-orange-700' : 'text-zinc-700',
        iconBg: isHovered ? 'bg-orange-500/10' : 'bg-zinc-100/50',
        glow: isHovered ? 'shadow-[0_0_15px_rgba(249,115,22,0.2)]' : '',
      },
      sky: {
        bg: isHovered ? 'bg-sky-50/80' : 'bg-transparent',
        border: isHovered ? 'border-sky-200' : 'border-transparent',
        text: isHovered ? 'text-sky-700' : 'text-zinc-700',
        iconBg: isHovered ? 'bg-sky-500/10' : 'bg-zinc-100/50',
        glow: isHovered ? 'shadow-[0_0_15px_rgba(14,165,233,0.2)]' : '',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div 
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 transition-all duration-300 origin-top z-30 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5 rounded-2xl -z-10"></div>
      
      {/* Animated border glow */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-transparent to-orange-500/20 opacity-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : ''} -z-10 blur-sm`}></div>

      <div className="flex flex-col gap-1.5">
        {browsers.map((browser, index) => {
          const isHovered = hoveredIndex === index;
          const colors = getColorClasses(browser.color, isHovered);
          
          return (
            <a
              key={index}
              href={browser.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-300 text-left ${colors.bg} ${colors.border} ${colors.glow} hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
              
              {/* Icon container */}
              <div className={`relative z-10 w-10 h-10 rounded-lg ${colors.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <img src={browser.icon} alt={browser.name} className="w-6 h-6 object-contain relative z-10" />
              </div>
              
              {/* Text content */}
              <div className="flex-1 flex flex-col relative z-10">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold transition-colors duration-300 ${colors.text}`}>
                    {browser.name}
                  </span>
                  <ArrowUpRight 
                    size={12} 
                    className={`transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 ${colors.text}`} 
                  />
                </div>
                <span className={`text-[10px] transition-colors duration-300 ${isHovered ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {browser.version}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BrowserDropdown;

