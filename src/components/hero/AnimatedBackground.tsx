'use client';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Main gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-brand-red/20 via-brand-red/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Secondary gradient orb */}
      <div className="absolute top-3/4 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-400/15 via-purple-400/5 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      
      {/* Accent gradient */}
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]"></div>
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-red/5 to-transparent animate-gradient-shift"></div>
    </div>
  );
};

export default AnimatedBackground;

