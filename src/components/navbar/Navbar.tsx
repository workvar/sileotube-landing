'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, APP_NAME } from '@/constants';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-zinc-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavbarLogo />
        <NavbarLinks onOpenModal={onOpenModal} />
        
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenModal={onOpenModal}
      />
    </nav>
  );
};

export default Navbar;

