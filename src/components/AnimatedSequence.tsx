import React, { useState, useEffect } from 'react';

const AnimatedSequence: React.FC = () => {
  const [currentSvg, setCurrentSvg] = useState<number | null>(null);

  useEffect(() => {
    // Show first SVG after 5 seconds
    const timer1 = setTimeout(() => {
      setCurrentSvg(1);
    }, 5000);

    // Show second SVG after 10 seconds
    const timer2 = setTimeout(() => {
      setCurrentSvg(2);
    }, 10000);

    // Show third SVG after 17 seconds
    const timer3 = setTimeout(() => {
      setCurrentSvg(3);
    }, 17000);

    // Remove SVG after 19 seconds
    const timer4 = setTimeout(() => {
      setCurrentSvg(null);
    }, 19000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (currentSvg === null) return null;

  return (
    <div 
      className="fixed right-0 md:top-[40%] top-[70%] -translate-y-1/2 z-50"
      style={{
        opacity: currentSvg ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {currentSvg === 1 && (
        <img 
          src="/src/txt/1.svg"
          alt="Animated Sequence 1"
          className="w-[200px] md:w-[400px] h-auto"
        />
      )}
      {currentSvg === 2 && (
        <img 
          src="/src/txt/2.svg"
          alt="Animated Sequence 2"
          className="w-[200px] md:w-[400px] h-auto"
        />
      )}
      {currentSvg === 3 && (
        <img 
          src="/src/txt/3.svg"
          alt="Animated Sequence 3"
          className="w-[200px] md:w-[400px] h-auto"
        />
      )}
    </div>
  );
};

export default AnimatedSequence;