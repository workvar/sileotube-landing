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
    <div className="lg:w-1/3 flex flex-col gap-4 my-auto">
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
            <p className={`text-sm leading-relaxed ${activeTab === idx ? 'text-zinc-600' : 'text-zinc-400 hidden lg:block'}`}>
              {tab.header}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ShowcaseTabs;

