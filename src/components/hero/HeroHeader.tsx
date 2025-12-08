const HeroHeader = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-red/10 via-brand-red/5 to-transparent border border-brand-red/20 text-xs font-semibold tracking-wide text-brand-red uppercase backdrop-blur-sm shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
        </span>
        v2.0 Now Available
      </div>
      <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 leading-[1.05] mb-8 tracking-tight relative">
        <span className="relative inline-block">
          Master your
          <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-brand-red/20 via-brand-red/10 to-transparent blur-xl -z-10"></span>
        </span>
        <br/>
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            attention.
          </span>
          <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-transparent via-brand-red/30 to-transparent blur-xl -z-10 animate-pulse"></span>
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light relative">
        <span className="relative z-10">SileoTube dumbs down YouTube to respect your time.</span>
        <br className="hidden md:block"/>
        <span className="relative z-10">Eliminate Shorts, hide suggestions, and focus on what matters to you.</span>
      </p>
    </div>
  );
};

export default HeroHeader;

