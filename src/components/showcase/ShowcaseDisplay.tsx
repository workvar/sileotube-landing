import { CheckCircle2 } from 'lucide-react';

interface Tab {
  title: string;
  header: string;
  description: string;
  features: string[];
  image: string;
}

interface ShowcaseDisplayProps {
  tabs: Tab[];
  activeTab: number;
}

const ShowcaseDisplay: React.FC<ShowcaseDisplayProps> = ({ tabs, activeTab }) => {
  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-white rounded-b-3xl lg:rounded-3xl shadow-2xl border border-zinc-200 border-t-0 lg:border-t p-2 lg:p-4 overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-purple-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        
        {/* Browser Bar Mockup */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 border-b border-zinc-100 rounded-t-2xl mb-1">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 flex-1 h-6 bg-white border border-zinc-200 rounded-md"></div>
        </div>

        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100">
          <img 
            src={tabs[activeTab].image} 
            alt={tabs[activeTab].title} 
            className="w-full h-full object-cover object-top transition-all duration-500"
          />
          
          {/* Feature Overlay - Desktop only (hidden on mobile) */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-zinc-100 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="font-bold text-zinc-900 mb-2">{tabs[activeTab].header}</h4>
            <p className="text-zinc-600 text-sm mb-4">{tabs[activeTab].description}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {tabs[activeTab].features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
                  <CheckCircle2 size={12} className="text-brand-red" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Content - Shown below image on mobile */}
        <div className="md:hidden bg-white border-t border-zinc-100 p-6">
          <h4 className="font-bold text-zinc-900 mb-2">{tabs[activeTab].header}</h4>
          <p className="text-zinc-600 text-sm mb-4">{tabs[activeTab].description}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {tabs[activeTab].features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <CheckCircle2 size={12} className="text-brand-red" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseDisplay;

