'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CTAContent from './CTAContent';
import CTAGraphics from './CTAGraphics';

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-zinc-50 py-24 md:py-32 relative overflow-hidden border-t border-zinc-200">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <CTAContent onOpenModal={onOpenModal} />
          <CTAGraphics />
        </div>
      </div>
    </section>
  );
};

export default CTASection;

