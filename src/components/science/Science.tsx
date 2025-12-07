'use client';

import { useEffect, useRef, useState } from 'react';
import { Zap, Hourglass, BatteryLow } from 'lucide-react';
import ScienceHeader from './ScienceHeader';
import ScienceCard from './ScienceCard';

const Science: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxBgRef.current || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = (window.innerHeight - rect.top) * 0.15;
        parallaxBgRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap size={24} strokeWidth={2} />,
      title: "Variable Ratio Schedule",
      description: "Shorts use the same psychological mechanism as slot machines. The unpredictability of the next video creates a compulsive loop. We simply hide the lever."
    },
    {
      icon: <Hourglass size={24} strokeWidth={2} />,
      title: "Attention Switching Cost",
      description: "It takes 23 minutes to fully refocus after a distraction. By removing the sidebar, we prevent visual cues that trigger task-switching and cognitive fragmentation."
    },
    {
      icon: <BatteryLow size={24} strokeWidth={2} />,
      title: "Decision Fatigue",
      description: "Constant choices about what to watch next deplete your willpower. SileoTube automates discipline by changing your default environment to one of quiet focus."
    }
  ];

  return (
    <section 
      id="science" 
      ref={sectionRef} 
      className="py-32 bg-background border-t border-zinc-100 relative overflow-hidden"
    >
      <div 
        ref={parallaxBgRef}
        className="absolute top-[-200px] right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[120px] pointer-events-none -z-10 transition-transform duration-75 ease-out will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScienceHeader isVisible={isVisible} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScienceCard 
              key={idx}
              feature={feature}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Science;

