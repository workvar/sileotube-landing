const HeroHeader = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/50 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
        v2.0 Now Available
      </div>
      <h1 className="text-6xl md:text-8xl font-semibold text-zinc-900 leading-[1.05] mb-8 tracking-tight">
        Master your <br/>
        <span className="text-brand-red">attention.</span>
      </h1>
      <p className="text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-light">
        SileoTube redesigns YouTube to respect your time. <br className="hidden md:block"/>
        Eliminate Shorts, hide feeds, and focus on what matters.
      </p>
    </div>
  );
};

export default HeroHeader;

