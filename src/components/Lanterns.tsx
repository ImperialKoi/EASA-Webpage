import React, { useEffect, useState } from 'react';

export function Lanterns() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasAnimated(true), 500);
  }, []);

  return (
    <div 
      className="absolute w-full z-50"
      style={{
        top: 'calc(89vh + 2rem)', // Changed from 90vh to 80vh to move up
      }}
    >
      {/* Strings using SVG - curved lines meeting in center */}
      <div className="absolute w-full overflow-hidden">
        <svg 
          className="w-full h-20" 
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          {/* Left string */}
          <path
            d="M0,40 Q360,80 720,40"
            fill="none"
            stroke="#7f1d1d"
            strokeWidth="2"
            style={{
              transform: hasAnimated ? 'none' : 'translateX(-100%)',
              transition: 'transform 1.2s ease-out',
            }}
          />
          {/* Right string */}
          <path
            d="M1440,40 Q1080,80 720,40"
            fill="none"
            stroke="#7f1d1d"
            strokeWidth="2"
            style={{
              transform: hasAnimated ? 'none' : 'translateX(100%)',
              transition: 'transform 1.2s ease-out',
            }}
          />
        </svg>
      </div>

      {/* Lanterns container */}
      <div className="max-w-7xl mx-auto px-4 relative mt-12">
        <div className="flex justify-between items-center">
          {[...Array(8)].map((_, i) => {
            const isLeftSide = i < 4;
            const adjustedIndex = isLeftSide ? i : 7 - i;

            const extraSpacing = i === 3 ? 'mr-24' : i === 4 ? 'ml-24' : ''; 
            
            return (
              <div
              key={i}
              className={`transition-all ${extraSpacing}`}
              style={{
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated 
                  ? 'none' 
                  : `translateX(${isLeftSide ? '-100px' : '100px'}) translateY(-20px)`,
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: `${0.8 + adjustedIndex * 0.1}s`,
              }}
              >
                <div 
                  style={{ 
                    transformOrigin: 'top center',
                    animation: hasAnimated ? `lanternSwing 2s ease-in-out forwards` : 'none',
                    animationDelay: `${1 + adjustedIndex * 0.1}s`
                  }}
                >
                  <div className="w-16 h-20 relative">
                    {/* Top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-900 rounded-full" />
                    {/* Body */}
                    <div className="absolute top-4 left-0 w-full h-14 bg-red-600 rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
                      <div className="text-red-900 text-2xl font-bold">福</div>
                    </div>
                    {/* Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-2 bg-red-900 rounded" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}