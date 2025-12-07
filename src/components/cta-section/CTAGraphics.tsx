'use client';

import { ArrowRight } from 'lucide-react';

const CTAGraphics = () => {
  return (
    <div className="hidden lg:block relative">
      {/* Abstract Productivity Graphic */}
      <div className="relative z-10 grid grid-cols-2 gap-4">
        <div className="space-y-4 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 flex flex-col gap-4 animate-float-slow">
            <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
              <ArrowRight size={20} className="-rotate-45"/>
            </div>
            <div>
              <div className="text-2xl font-bold text-zinc-900">2.5h</div>
              <div className="text-sm text-zinc-500">Saved daily</div>
            </div>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl flex flex-col gap-4 text-white">
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-brand-red"></div>
            </div>
            <div className="text-sm font-medium">Focus Score: 94/100</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 aspect-square flex items-center justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-brand-red rounded-full border-l-transparent rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                100%
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-bold text-zinc-900">Active</span>
            </div>
            <div className="text-zinc-500 text-sm">Deep work session in progress</div>
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zinc-200/50 blur-3xl -z-10 rounded-full opacity-50"></div>
    </div>
  );
};

export default CTAGraphics;

