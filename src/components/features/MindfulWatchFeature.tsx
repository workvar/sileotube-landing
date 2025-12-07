import { Play } from 'lucide-react';

const MindfulWatchFeature = () => {
  return (
    <div className="group rounded-2xl bg-surface border border-zinc-200 overflow-hidden hover:border-brand-red/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
      <div className="p-8 pb-4">
        <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-brand-red transition-colors">Mindful Watch Page</h3>
        <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
          Your video takes center stage. We strip away sidebar recommendations to prevent the "just one more" loop.
        </p>
      </div>
      <div className="mt-auto relative bg-zinc-100/50 p-6 flex items-end justify-center pb-0 h-72 md:h-80">
        <div className="w-full bg-white rounded-t-xl overflow-hidden shadow-2xl border border-zinc-200 border-b-0 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="bg-zinc-50 px-3 py-2 flex items-center gap-1.5 border-b border-zinc-100">
            <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
            <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
          </div>
          <div className="aspect-video relative bg-zinc-100">
            <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Video Content" />
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="w-1/2 h-full bg-brand-red"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-brand-red rounded-full p-4 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                <Play size={24} fill="white" className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindfulWatchFeature;

