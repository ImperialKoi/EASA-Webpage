import React, { useState, useEffect } from 'react';
import boat from './boat.png'

interface BoatProps {
  name: string;
  title: string;
  imageUrl: string;
  delay: number;
  bottom: string;
}

export function Boat({ name, imageUrl, delay, bottom, title }: BoatProps) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000); // Convert delay to milliseconds

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`absolute transform-gpu animate-float-left ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } animate-float-left`}
      style={{ 
        animationDelay: `${delay}s`,
        bottom: bottom,
      }}
      
    >
      <div className="relative">
        {/* Person's Image - Now behind the boat */}
        <div className="absolute left-1/2 top-20 -translate-x-1 z-50 animate-bob">
          <div className="relative w-20 h-20">
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
          className="w-80 h-auto transform scale-x-100 relative z-50 animate-bob"
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