'use client';

import { X } from 'lucide-react';
import { EXTENSION_URL, FIREFOX_URL, EDGE_URL } from '@/constants';
import BrowserOption from './BrowserOption';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all scale-100 opacity-100 ring-1 ring-black/5">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors p-1"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">Choose your browser</h3>
          <p className="text-zinc-500">Select your preferred browser to install SileoTube.</p>
        </div>

        <div className="space-y-3">
          <BrowserOption
            href={EXTENSION_URL}
            icon="https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/chrome_A_Pz2qvUB?updatedAt=1762167034398"
            name="Google Chrome"
            version="Version 50+"
            hoverColor="blue"
          />
          <BrowserOption
            href={FIREFOX_URL}
            icon="https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/firefox_eOCdiEU-fJ.svg?updatedAt=1762366573154"
            name="Mozilla Firefox"
            version="Version 100+"
            hoverColor="orange"
          />
          <BrowserOption
            href={EDGE_URL}
            icon="https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/edge_qzRsb17gT?updatedAt=1762167034398"
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

