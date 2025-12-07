import { Ban } from 'lucide-react';

const ShortsBlockerFeature = () => {
  return (
    <div className="group rounded-2xl bg-surface border border-zinc-200 overflow-hidden hover:border-red-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_10px_40px_rgba(255,0,0,0.08)]">
      <div className="p-8 pb-4 relative z-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand-red transition-colors">Zero Shorts Policy</h3>
        <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
          SileoTube aggressively removes Shorts from your feed, sidebar, and search results.
        </p>
      </div>
      <div className="mt-auto relative h-72 md:h-80 overflow-hidden bg-white border-t border-zinc-100 flex items-center justify-center">
        <div className="relative w-full max-w-[280px] p-6">
          <div className="grid grid-cols-2 gap-3 opacity-30 blur-[1px]">
            <div className="aspect-[9/16] bg-zinc-200 rounded-lg"></div>
            <div className="aspect-[9/16] bg-zinc-200 rounded-lg"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-red-100 flex items-center gap-4 transform group-hover:scale-110 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-brand-red">
                <Ban size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-800">Shorts Blocked</div>
                <div className="text-[10px] text-zinc-400">0 distractions allowed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortsBlockerFeature;

