import { CheckCircle2, Circle } from 'lucide-react';

interface CTAContentProps {
  onOpenModal: () => void;
}

const CTAContent: React.FC<CTAContentProps> = ({ onOpenModal }) => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wide mb-6">
        <CheckCircle2 size={14} />
        <span>100% Free forever</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
        Reclaim your <br/>
        <span className="bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">focus today.</span>
      </h2>
      <p className="text-zinc-600 text-xl mb-10 max-w-lg leading-relaxed">
        Stop fighting the algorithm. Start using YouTube as a knowledge tool to upgrade your skills.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onOpenModal}
          className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 transition-all font-semibold shadow-xl shadow-zinc-200 hover:shadow-2xl hover:translate-y-[-2px] w-full sm:w-auto"
        >
          <span>Download Extension for your browser</span>
        </button>
      </div>
      
      <div className="mt-8 flex items-center gap-3 md:gap-6 text-sm text-zinc-500 font-medium">
        <span className="flex items-center gap-1 md:gap-2"><Circle size={5} className="bg-lime-400 rounded-full" /> <span>No account needed</span></span>
        <span className="flex items-center gap-1 md:gap-2"><Circle size={5} className="bg-cyan-500 rounded-full" /> <span>Privacy focused</span></span>
        <span className="flex items-center gap-1 md:gap-2"><Circle size={5} className="bg-pink-500 rounded-full" /> <span>No tracking</span></span>
      </div>
    </div>
  );
};

export default CTAContent;

