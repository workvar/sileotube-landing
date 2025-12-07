import { APP_NAME } from '@/constants';

const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://ik.imagekit.io/canarygrapher/workvar/main-website/images/products/SileoTube/logo__LXWqYpYOx.png" 
        alt="SileoTube Logo" 
        className="w-8 h-8 rounded-lg shadow-sm object-contain bg-white" 
      />
      <span className="text-lg font-bold text-zinc-900 tracking-tight">{APP_NAME}</span>
    </div>
  );
};

export default NavbarLogo;

