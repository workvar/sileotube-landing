import { NAV_LINKS } from '@/constants';

interface NavbarLinksProps {
  onOpenModal: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ onOpenModal }) => {
  return (
    <>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={onOpenModal}
          className="btn-primary px-4 py-2 text-sm"
        >
          Add Extension
        </button>
      </div>
    </>
  );
};

export default NavbarLinks;

