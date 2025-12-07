import { Sliders } from 'lucide-react';

const CustomizationContent = () => {
  return (
    <div className="flex-1 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-6 shadow-sm">
        <Sliders size={14} />
        <span>Full Control</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
        Your Rules. <br/>
        <span className="text-brand-red">Your Internet.</span>
      </h2>
      <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
        SileoTube isn't just a blocker; it's a productivity suite. Every feature is customizable, so you can tailor your YouTube experience to match your workflow.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-zinc-500 font-medium">
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div> Hide Shorts</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div> Hide Comments</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Disable Autoplay</span>
      </div>
    </div>
  );
};

export default CustomizationContent;

