import { NAV_LINKS } from '@/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenModal }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-4 md:hidden flex flex-col gap-2 shadow-xl animate-slide-up">
      {NAV_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="px-4 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors"
          onClick={onClose}
        >
          {link.name}
        </a>
      ))}
      <div className="h-px bg-zinc-100 my-2"></div>
      <button
        onClick={() => {
          onOpenModal();
          onClose();
        }}
        className="w-full text-center py-3 rounded-lg bg-black text-white font-bold hover:bg-zinc-800 transition-colors"
      >
        Add Extension
      </button>
    </div>
  );
};

export default MobileMenu;

