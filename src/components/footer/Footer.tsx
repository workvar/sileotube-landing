import { EXTENSION_URL, APP_NAME } from '@/constants';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-zinc-900 py-16 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <FooterBrand />
          <FooterLinks />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

