import { EXTENSION_URL } from '@/constants';

const FooterLinks = () => {
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Product</h4>
        <ul className="space-y-3 text-sm text-zinc-500">
          <li><a href="#features" className="hover:text-zinc-900 transition-colors">Features</a></li>
          <li><a href={EXTENSION_URL} className="hover:text-zinc-900 transition-colors">Download</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Changelog</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Roadmap</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Resources</h4>
        <ul className="space-y-3 text-sm text-zinc-500">
          <li><a href="#science" className="hover:text-zinc-900 transition-colors">Methodology</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Community</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Help Center</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Company</h4>
        <ul className="space-y-3 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-zinc-900 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Manifesto</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Brand</a></li>
          <li><a href="mailto:hello@sileotube.com" className="hover:text-zinc-900 transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-zinc-900 mb-4 text-sm">Legal</h4>
        <ul className="space-y-3 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a></li>
          <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;

