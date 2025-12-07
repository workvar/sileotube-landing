import { Search } from 'lucide-react';

const CleanLandingFeature = () => {
  return (
    <div className="group rounded-2xl bg-surface border border-zinc-200 overflow-hidden hover:border-brand-red/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
      <div className="p-8 pb-4">
        <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand-red transition-colors">Clean Landing Page</h3>
        <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
          Replace the algorithmic feed with a serene search bar. No recommendations, no distractions.
        </p>
      </div>
      <div className="mt-auto relative h-72 md:h-80 bg-white border-t border-zinc-100 flex items-center justify-center p-8">
        <div className="w-full max-w-xs relative z-10">
          <div className="absolute inset-0 bg-brand-red/5 blur-2xl rounded-full scale-150"></div>
          
          <div className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-zinc-200 p-2 flex items-center gap-3 transform group-hover:scale-105 transition-all duration-500">
            <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white shadow-lg">
              <Search size={20} />
            </div>
            <div className="flex-1">
              <div className="h-2 w-24 bg-zinc-100 rounded-full mb-1"></div>
            </div>
          </div>
          <div className="text-center mt-8">
            <span className="text-xs font-semibold text-zinc-300 tracking-[0.2em] uppercase">Focus Mode Active</span>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>
    </div>
  );
};

export default CleanLandingFeature;

