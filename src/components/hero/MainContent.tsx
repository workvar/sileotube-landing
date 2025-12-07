'use client';

import { Bell, LayoutGrid, PlayCircle } from 'lucide-react';

interface MainContentProps {
  isFocusedMode: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isFocusedMode }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      {/* Floating Distractions (Notifications) - Visible when NOT focused */}
      <div className={`absolute top-4 right-8 flex gap-4 transition-opacity duration-500 ${isFocusedMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative">
          <Bell size={20} className="text-zinc-400" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="relative">
          <LayoutGrid size={20} className="text-zinc-400" />
        </div>
      </div>

      <div className="flex-1 p-8 md:p-12 flex items-center justify-center bg-white transition-all duration-700">
        {/* Video Player */}
        <div className={`transition-all duration-700 ease-in-out bg-zinc-900 rounded-lg shadow-sm relative overflow-hidden group/video ${isFocusedMode ? 'w-full max-w-5xl aspect-video shadow-2xl scale-105' : 'w-full max-w-3xl aspect-video scale-100'}`}>
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={64} className="text-zinc-600" />
          </div>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
            <div className="w-1/3 h-full bg-red-600"></div>
          </div>
        </div>
      </div>

      {/* Video Info & Comments (Distraction) */}
      <div className={`h-32 px-12 transition-all duration-700 ${isFocusedMode ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <div className="h-6 w-1/2 bg-zinc-200 rounded mb-4"></div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-zinc-200"></div>
          <div className="space-y-2 flex-1">
            <div className="h-3 w-32 bg-zinc-200 rounded"></div>
            <div className="h-3 w-full bg-zinc-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

