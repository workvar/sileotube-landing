'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string; isExternal?: boolean }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:pointer-events-none flex items-center justify-between md:justify-start font-serif font-semibold text-stone-900 text-lg mb-1 md:mb-6"
      >
        <span>{title}</span>
        <ChevronDown
          className={`md:hidden transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <ul className={`space-y-3 text-base md:text-sm text-stone-600 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {links.map((link, index) => (
          <li key={index}>
            {link.isExternal ? (
              <a href={link.href} className="hover:text-forest-700 transition-colors">
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="hover:text-forest-700 transition-colors">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


