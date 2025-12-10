'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface BrowserOptionProps {
  href: string;
  icon: string;
  name: string;
  version: string;
  hoverColor: 'blue' | 'orange' | 'sky';
}

const BrowserOption: React.FC<BrowserOptionProps> = ({ href, icon, name, version, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorConfig = {
    blue: {
      border: 'hover:border-blue-500/50',
      bg: 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-50/50',
      bgGradient: 'bg-blue-500/10',
      text: 'group-hover:text-blue-700',
      textSecondary: 'group-hover:text-blue-600/70',
      glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      iconBg: 'group-hover:bg-blue-500/10',
    },
    orange: {
      border: 'hover:border-orange-500/50',
      bg: 'hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50/50',
      bgGradient: 'bg-orange-500/10',
      text: 'group-hover:text-orange-700',
      textSecondary: 'group-hover:text-orange-600/70',
      glow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]',
      iconBg: 'group-hover:bg-orange-500/10',
    },
    sky: {
      border: 'hover:border-sky-500/50',
      bg: 'hover:bg-gradient-to-r hover:from-sky-50 hover:to-sky-50/50',
      bgGradient: 'bg-sky-500/10',
      text: 'group-hover:text-sky-700',
      textSecondary: 'group-hover:text-sky-600/70',
      glow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
      iconBg: 'group-hover:bg-sky-500/10',
    },
  };

  const colors = colorConfig[hoverColor];

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-4 p-4 rounded-2xl border border-zinc-200/80 bg-white/50 backdrop-blur-sm transition-all duration-300 ${colors.border} ${colors.bg} ${colors.glow} hover:scale-[1.02] hover:-translate-y-0.5 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 ${colors.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
      
      {/* Shine effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl`}></div>

      {/* Icon container with enhanced styling */}
      <div className={`relative z-10 w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
        <img src={icon} alt={name} className="w-7 h-7 object-contain relative z-10" />
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col text-left relative z-10">
        <div className="flex items-center gap-2">
          <span className={`font-semibold text-zinc-700 transition-colors duration-300 ${colors.text}`}>{name}</span>
          <ArrowUpRight 
            size={14} 
            className={`text-zinc-400 transition-all duration-300 group-hover:text-current ${colors.text} opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0`} 
          />
        </div>
        <span className={`text-xs text-zinc-400 transition-colors duration-300 ${colors.textSecondary}`}>{version}</span>
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 ${colors.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full`}></div>
    </a>
  );
};

export default BrowserOption;

