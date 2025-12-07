interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ScienceCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

const ScienceCard: React.FC<ScienceCardProps> = ({ feature, index, isVisible }) => {
  return (
    <div 
      className={`p-8 bg-surface rounded-2xl border border-zinc-200 hover:border-brand-red/30 transition-all duration-700 ease-out hover:-translate-y-2 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 text-zinc-900 border border-zinc-200 group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-brand-red transition-colors">{feature.title}</h3>
      <p className="text-zinc-600 text-sm leading-7">
        {feature.description}
      </p>
    </div>
  );
};

export default ScienceCard;

