'use client';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-400/10 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-brand-red/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-blue-400/20 rotate-12 animate-spin-slow" style={{ animationDelay: '0.7s' }}></div>
    </div>
  );
};

export default FloatingElements;

