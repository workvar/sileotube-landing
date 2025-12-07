import { EXTENSION_URL, FIREFOX_URL, EDGE_URL } from '@/constants';

interface BrowserDropdownProps {
  isOpen: boolean;
}

const BrowserDropdown: React.FC<BrowserDropdownProps> = ({ isOpen }) => {
  return (
    <div 
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-zinc-100 p-2 transition-all duration-200 origin-top z-30 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="flex flex-col gap-1">
        <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group text-left">
          <img src="https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/chrome_A_Pz2qvUB?updatedAt=1762167034398" alt="Chrome" className="w-5 h-5 object-contain" />
          <div>
            <div className="text-sm font-semibold text-zinc-700 group-hover:text-zinc-900">Chrome Web Store</div>
            <div className="text-[10px] text-zinc-400">Version 50+</div>
          </div>
        </a>
        <a href={FIREFOX_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group text-left">
          <img src="https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/firefox_eOCdiEU-fJ.svg?updatedAt=1762366573154" alt="Firefox" className="w-5 h-5 object-contain" />
          <div>
            <div className="text-sm font-semibold text-zinc-700 group-hover:text-zinc-900">Firefox Add-ons</div>
            <div className="text-[10px] text-zinc-400">Version 100+</div>
          </div>
        </a>
        <a href={EDGE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors group text-left">
          <img src="https://ik.imagekit.io/canarygrapher/workvar/main-website/icons/edge_qzRsb17gT?updatedAt=1762167034398" alt="Edge" className="w-6 h-6 object-contain" />
          <div>
            <div className="text-sm font-semibold text-zinc-700 group-hover:text-zinc-900">Microsoft Edge</div>
            <div className="text-[10px] text-zinc-400">Version 39+</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BrowserDropdown;

