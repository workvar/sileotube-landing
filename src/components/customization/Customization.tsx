import { Sliders } from 'lucide-react';
import CustomizationContent from './CustomizationContent';
import CustomizationVisual from './CustomizationVisual';

const Customization: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <CustomizationContent />
          <CustomizationVisual />
        </div>
      </div>
    </section>
  );
};

export default Customization;

