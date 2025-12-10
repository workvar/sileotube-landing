import FooterLinks from './FooterLinks';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/data/footer';
export default function Footer() {
  const productLinks = [
    {
      label: 'SileoTube',
      href: 'https://sileotube.workvar.com',
      isExternal: false
    },
    {
      label: 'Patty',
      href: 'https://patty.workvar.com',
      isExternal: true
    },
    {
      label: 'All Products',
      href: 'https://workvar.com/products',
      isExternal: true
    }
  ];

  const companyLinks = [
    {
      label: 'About Us',
      href: 'https://workvar.com/about',
      isExternal: true
    },  
    {
      label: 'Mission',
      href: 'https://workvar.com/mission',
      isExternal: true
    },
    {
      label: 'Media Kit',
      href: 'https://workvar.com/media-kit',
      isExternal: true
    },
    {
      label: 'Contact',
      href: 'https://workvar.com/contact',
      isExternal: true
    },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy', isExternal: false },
    { label: 'Terms of Service', href: '/terms', isExternal: false },
    { label: 'Cookie Policy', href: '/cookie-policy', isExternal: false },
  ];

  return (
    <footer className="bg-stone-100 border-t border-stone-200 pb-12 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
          <div className="space-y-6">
            <Image src="https://ik.imagekit.io/canarygrapher/workvar/Brand%20Assets/workvar-black_3DVqwQHM8.png?updatedAt=1765177178950" alt="WorkVar" width={50} height={100} />
            <span className="font-serif text-sm bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Workवार. Your Productivity OS</span>
            <p className="text-stone-500 text-sm leading-relaxed">
              Reconnecting with what matters. Tools for deep work and sustainable productivity.
            </p>
          </div>

          <FooterLinks title="Products" links={productLinks} />
          <FooterLinks title="Company" links={companyLinks} />
          <FooterLinks title="Legal" links={legalLinks} />
        </div>

        <div className="mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
          <p>© {new Date().getFullYear()} WorkVar Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-stone-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


