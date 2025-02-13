import React, { useState, useEffect } from 'react';
import boat from '../images/boat.png'

interface BoatProps {
  name: string;
  title: string;
  imageUrl: string;
  delay: number;
  bottom: string;
}

export function Boat({ name, imageUrl, delay, bottom, title }: BoatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    // Calculate actual delay - double it for mobile
    const actualDelay = isMobile ? delay * 2 : delay;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, actualDelay * 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [delay, isMobile]);

  return (
    <div 
      className={`absolute transform-gpu animate-float-left ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } animate-float-left`}
      style={{ 
        animationDelay: `${isMobile ? delay * 2 : delay}s`,
        bottom: bottom,
      }}
    >
      <div className="relative">
        {/* Person's Image - Now behind the boat */}
        <div className="absolute left-[120px] top-[50px] -translate-x-1 z-50 animate-bob">
          <div className="relative w-[120px] h-[120px] md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px]">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
            />
          </div>
        </div>
        
        {/* Boat Image - Larger and overlapping person */}
        <img
          src={boat}
          alt="Boat"
          className="w-80 md:w-80 sm:w-64 h-auto transform scale-x-100 relative z-50 animate-bob"
        />
        
        {/* Name - Stays on top */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1 z-50">
          <span className="px-3 py-1.5 bg-white/90 rounded-full text-sm font-medium text-red-800 shadow-md">
            {name}
          </span>
        </div>

        {/* Title - Stays on top */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
          <span className="font-medium text-red-800">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}