import { XCircle } from 'lucide-react';

const SanitizedSearchFeature = () => {
  return (
    <div className="group rounded-2xl bg-surface border border-zinc-200 overflow-hidden hover:border-brand-red/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
      <div className="p-8 pb-4">
        <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand-red transition-colors">Sanitized Search</h3>
        <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
          Find exactly what you need without getting sidetracked by clickbait thumbnails.
        </p>
      </div>
      <div className="mt-auto relative bg-zinc-100/50 border-t border-zinc-100 p-6 h-72 md:h-80 flex flex-col justify-center">
        <div className="space-y-3 opacity-90 group-hover:opacity-100 transition-opacity">
          {/* Result 1 */}
          <div className="flex gap-3 bg-white p-3 rounded-xl border border-zinc-200 group-hover:border-zinc-300 transition-colors shadow-sm">
            <div className="w-20 h-14 bg-zinc-200 rounded-lg flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-zinc-200"></div>
            </div>
            <div className="flex-1 space-y-2 py-1">
              <div className="w-3/4 h-2 bg-zinc-300 rounded-full"></div>
              <div className="w-1/2 h-1.5 bg-zinc-200 rounded-full"></div>
            </div>
          </div>
          {/* Blocked Section */}
          <div className="h-10 border border-dashed border-red-500/30 bg-red-50/80 rounded-lg flex items-center justify-center gap-2 group-hover:bg-red-100/50 transition-colors">
            <XCircle size={14} className="text-brand-red"/>
            <span className="text-xs font-bold text-brand-red">Shorts Shelf Hidden</span>
          </div>
          {/* Result 2 */}
          <div className="flex gap-3 bg-white p-3 rounded-xl border border-zinc-200 group-hover:border-zinc-300 transition-colors shadow-sm">
            <div className="w-20 h-14 bg-zinc-200 rounded-lg flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-zinc-200"></div>
            </div>
            <div className="flex-1 space-y-2 py-1">
              <div className="w-2/3 h-2 bg-zinc-300 rounded-full"></div>
              <div className="w-1/3 h-1.5 bg-zinc-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanitizedSearchFeature;

