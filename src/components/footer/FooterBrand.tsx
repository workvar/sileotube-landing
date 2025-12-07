import { Github, Twitter, Linkedin } from 'lucide-react';
import { APP_NAME } from '@/constants';

const FooterBrand = () => {
  return (
    <div className="md:w-1/3">
      <div className="flex items-center gap-2 mb-4">
        <img 
          src="https://ik.imagekit.io/canarygrapher/workvar/main-website/images/products/SileoTube/logo__LXWqYpYOx.png" 
          alt="SileoTube Logo" 
          className="w-8 h-8 rounded-lg shadow-sm object-contain bg-white" 
        />
        <span className="font-bold text-lg">{APP_NAME}</span>
      </div>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
        The essential browser extension for reclaiming your attention span in the age of algorithmic distraction.
      </p>
      <div className="flex gap-4">
        <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Twitter size={20} /></a>
        <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Github size={20} /></a>
        <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
      </div>
    </div>
  );
};

export default FooterBrand;

