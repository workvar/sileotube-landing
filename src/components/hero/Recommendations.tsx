interface RecommendationsProps {
  isFocusedMode: boolean;
}

const Recommendations: React.FC<RecommendationsProps> = ({ isFocusedMode }) => {
  return (
    <div className={`w-[20%] min-w-[200px] max-w-[280px] border-l border-zinc-100 p-4 space-y-4 overflow-hidden transition-all duration-700 transform ${isFocusedMode ? 'translate-x-full opacity-0 w-0 min-w-0 max-w-0 p-0 border-none' : 'translate-x-0 opacity-100'}`}>
      <div className="flex gap-2">
        <div className="w-24 h-14 bg-zinc-200 rounded"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-zinc-200 rounded w-full"></div>
          <div className="h-2 bg-zinc-100 rounded w-2/3"></div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-24 h-14 bg-brand-red/10 rounded border border-brand-red/20 flex items-center justify-center">
          <span className="text-[8px] font-bold text-brand-red uppercase">Viral</span>
        </div>
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-zinc-200 rounded w-full"></div>
          <div className="h-2 bg-zinc-100 rounded w-2/3"></div>
        </div>
      </div>
      <div className="flex gap-2 opacity-75">
        <div className="w-24 h-14 bg-zinc-100 rounded"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-zinc-100 rounded w-full"></div>
          <div className="h-2 bg-zinc-100 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

