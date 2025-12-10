interface Tab {
  title: string;
  icon: React.ReactNode;
  header: string;
}

interface ShowcaseTabsProps {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const ShowcaseTabs: React.FC<ShowcaseTabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
      {/* Mobile: Browser-style tabs */}
      <div className="lg:hidden w-full mb-0 relative">
        <div className="flex items-end gap-0.5 overflow-x-auto scrollbar-hide pb-0 px-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-white rounded-t-xl border-t border-l border-r border-zinc-200 z-10 shadow-[0_-2px_8px_rgba(0,0,0,0.05)]'
                  : 'bg-zinc-100/70 rounded-t-lg border-t border-l border-r border-zinc-200/50 hover:bg-zinc-200/70 -mb-px'
              }`}
            >
              {/* Tab icon */}
              <div className={`w-4 h-4 flex items-center justify-center shrink-0 transition-colors ${
                activeTab === idx ? 'text-zinc-700' : 'text-zinc-500'
              }`}>
                {tab.icon}
              </div>
              
              {/* Tab title */}
              <span className={`text-xs font-medium ${
                activeTab === idx ? 'text-zinc-900' : 'text-zinc-600'
              }`}>
                {tab.title}
              </span>

              {/* Active tab bottom border - connects to content */}
              {activeTab === idx && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white -mb-[1px] z-10"></div>
              )}
            </button>
          ))}
        </div>
        {/* Bottom border line for inactive tabs */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200 -z-0"></div>
      </div>

      {/* Desktop: Vertical tabs */}
      <div className="hidden lg:flex lg:w-1/3 flex-col gap-4 my-auto">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
              activeTab === idx 
              ? 'bg-white border-brand-red/20 shadow-xl shadow-brand-red/5 scale-105 z-10' 
              : 'bg-transparent border-transparent hover:bg-zinc-100'
            }`}
          >
            <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              activeTab === idx ? 'bg-brand-red text-white' : 'bg-zinc-200 text-zinc-500'
            }`}>
              {tab.icon}
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-2 ${activeTab === idx ? 'text-zinc-900' : 'text-zinc-500'}`}>
                {tab.title}
              </h3>
              <p className={`text-sm leading-relaxed ${activeTab === idx ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {tab.header}
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default ShowcaseTabs;

