interface FocusModeIndicatorProps {
  isFocusedMode: boolean;
}

const FocusModeIndicator: React.FC<FocusModeIndicatorProps> = ({ isFocusedMode }) => {
  return (
    <div className={`absolute bottom-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg border transition-all duration-500 flex items-center gap-3 z-20 ${isFocusedMode ? 'border-green-500/20 shadow-green-500/10' : 'border-zinc-200'}`}>
      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isFocusedMode ? 'bg-green-500 animate-pulse' : 'bg-zinc-300'}`}></div>
      <span className={`text-xs font-bold transition-colors duration-300 ${isFocusedMode ? 'text-zinc-900' : 'text-zinc-400'}`}>
        {isFocusedMode ? 'Focus Mode Active' : 'Extension Disabled'}
      </span>
    </div>
  );
};

export default FocusModeIndicator;

