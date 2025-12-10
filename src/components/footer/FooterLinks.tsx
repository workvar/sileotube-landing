import Link from 'next/link';

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string; isExternal?: boolean }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="flex flex-col">
      <h4 className="font-serif font-semibold text-stone-900 mb-6 text-lg">{title}</h4>
      <ul className="space-y-3 text-sm text-stone-600">
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


