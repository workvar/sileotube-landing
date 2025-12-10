'use client';

import { X } from 'lucide-react';
import { EXTENSION_URL, FIREFOX_URL, EDGE_URL, BROWSER_LOGOS } from '@/constants';
import BrowserOption from './BrowserOption';
import { useEffect, useState } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      {/* Animated Backdrop with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-xl transition-opacity duration-300"
      ></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Modal Content with glassmorphism */}
      <div 
        className={`relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-500 border border-white/20 ${
          isAnimating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10 opacity-50 -z-10"></div>
        
        {/* Close button with modern design */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-all duration-200 p-2 rounded-full hover:bg-white/50 backdrop-blur-sm group"
        >
          <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Header with icon */}
        <div className="text-center mb-8 relative">
          <h3 className="text-3xl font-bold text-zinc-900 mb-2 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
            Choose your browser
          </h3>
          <p className="text-zinc-500 text-sm">Select your preferred browser to install SileoTube</p>
        </div>

        {/* Browser options with enhanced spacing */}
        <div className="space-y-3">
          <BrowserOption
            href={EXTENSION_URL}
            icon={BROWSER_LOGOS.chrome}
            name="Google Chrome"
            version="Version 50+"
            hoverColor="blue"
          />
          <BrowserOption
            href={FIREFOX_URL}
            icon={BROWSER_LOGOS.firefox}
            name="Mozilla Firefox"
            version="Version 100+"
            hoverColor="orange"
          />  
          <BrowserOption
            href={EDGE_URL}
            icon={BROWSER_LOGOS.edge}
            name="Microsoft Edge"
            version="Version 39+"
            hoverColor="sky"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;

