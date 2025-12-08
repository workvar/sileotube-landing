'use client';

import HeroHeader from './HeroHeader';
import HeroCTA from './HeroCTA';
import HeroImage from './HeroImage';
import AnimatedBackground from './AnimatedBackground';
import FloatingElements from './FloatingElements';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative bg-background overflow-hidden z-10">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Decorative Elements */}
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Vertically Centered Text Section */}
        <div className="min-h-[85vh] flex flex-col justify-center items-center w-full pt-16">
          <HeroHeader />
          <HeroCTA onOpenModal={onOpenModal} />
        </div>

        {/* Hero Image with Animation */}
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;

