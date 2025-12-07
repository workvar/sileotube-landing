interface BrowserOptionProps {
  href: string;
  icon: string;
  name: string;
  version: string;
  hoverColor: 'blue' | 'orange' | 'sky';
}

const BrowserOption: React.FC<BrowserOptionProps> = ({ href, icon, name, version, hoverColor }) => {
  const colorConfig = {
    blue: {
      border: 'hover:border-blue-500',
      bg: 'hover:bg-blue-50',
      text: 'group-hover:text-blue-700',
      textSecondary: 'group-hover:text-blue-600/70',
    },
    orange: {
      border: 'hover:border-orange-500',
      bg: 'hover:bg-orange-50',
      text: 'group-hover:text-orange-700',
      textSecondary: 'group-hover:text-orange-600/70',
    },
    sky: {
      border: 'hover:border-sky-500',
      bg: 'hover:bg-sky-50',
      text: 'group-hover:text-sky-700',
      textSecondary: 'group-hover:text-sky-600/70',
    },
  };

  const colors = colorConfig[hoverColor];

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-4 rounded-xl border border-zinc-200 transition-all group ${colors.border} ${colors.bg}`}
    >
      <img src={icon} alt={name} className="w-6 h-6 object-contain" />
      <div className="flex flex-col text-left">
        <span className={`font-semibold text-zinc-700 ${colors.text}`}>{name}</span>
        <span className={`text-xs text-zinc-400 ${colors.textSecondary}`}>{version}</span>
      </div>
    </a>
  );
};

export default BrowserOption;

