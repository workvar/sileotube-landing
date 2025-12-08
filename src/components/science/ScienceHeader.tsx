interface ScienceHeaderProps {
  isVisible: boolean;
}

const ScienceHeader: React.FC<ScienceHeaderProps> = ({ isVisible }) => {
  return (
    <div 
      className={`flex flex-col md:flex-row gap-12 items-center mb-20 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex-1">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
          The Science of <span className="bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Scrolling</span>
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
          Tech giants employ teams of PhDs to hijack your dopamine system. SileoTube acts as a cognitive defense layer for your brain.
        </p>
      </div>
    </div>
  );
};

export default ScienceHeader;

