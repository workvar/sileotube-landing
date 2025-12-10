'use client';

import { Bell, LayoutGrid, PlayCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Recommendations from './Recommendations';

interface BrowserUIProps {
  isFocusedMode: boolean;
}

const BrowserUI: React.FC<BrowserUIProps> = ({ isFocusedMode }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Browser UI */}
      <div className="h-12 flex-shrink-0 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
        <div className="flex-1 max-w-2xl mx-auto h-8 bg-white border border-zinc-200 rounded-md shadow-sm flex items-center px-3 text-xs text-zinc-400">
          youtube.com/watch?v=focus_mode
        </div>
      </div>

      {/* Content UI */}
      <div className="flex flex-1 min-h-0 relative bg-white overflow-hidden">
        <Sidebar isFocusedMode={isFocusedMode} />
        <MainContent isFocusedMode={isFocusedMode} />
        <Recommendations isFocusedMode={isFocusedMode} />
      </div>
    </div>
  );
};

export default BrowserUI;

