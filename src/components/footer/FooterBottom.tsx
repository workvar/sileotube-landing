import { APP_NAME } from '@/constants';

const FooterBottom = () => {
  return (
    <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} {APP_NAME} Inc. All rights reserved.
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
        <span className="text-xs text-zinc-500 font-medium">All systems operational</span>
      </div>
    </div>
  );
};

export default FooterBottom;

