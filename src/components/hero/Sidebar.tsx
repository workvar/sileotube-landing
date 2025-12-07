interface SidebarProps {
  isFocusedMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isFocusedMode }) => {
  return (
    <div className={`w-64 border-r border-zinc-100 p-4 space-y-4 transition-all duration-700 transform ${isFocusedMode ? '-translate-x-full opacity-0 w-0 p-0 border-none' : 'translate-x-0 opacity-100'}`}>
      <div className="space-y-2">
        <div className="h-8 bg-zinc-100 rounded-md w-full"></div>
        <div className="h-8 bg-zinc-50 rounded-md w-3/4"></div>
        <div className="h-8 bg-zinc-50 rounded-md w-5/6"></div>
        <div className="h-8 bg-zinc-50 rounded-md w-full relative">
          <div className="absolute right-2 top-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="pt-4 border-t border-zinc-100 space-y-2">
        <div className="text-xs font-bold text-zinc-400">SUBSCRIPTIONS</div>
        <div className="h-6 bg-zinc-50 rounded w-full flex items-center px-2 gap-2">
          <div className="w-4 h-4 rounded-full bg-zinc-200"></div>
          <div className="w-16 h-2 bg-zinc-200 rounded"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></div>
        </div>
        <div className="h-6 bg-zinc-50 rounded w-full flex items-center px-2 gap-2">
          <div className="w-4 h-4 rounded-full bg-zinc-200"></div>
          <div className="w-20 h-2 bg-zinc-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

