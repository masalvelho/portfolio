import React, { useState, useEffect } from 'react';

const SlidingLogo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Listen for the exit animation trigger
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 19000);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div 
      className="fixed bottom-0 right-0 z-50"
      style={{
        transform: isExiting ? 'translateX(100%)' : `translateX(${isVisible ? '0' : '100%'})`,
        opacity: isVisible && !isExiting ? 1 : 0,
        transition: 'all 1.95s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <img 
        src="/src/img/corrected_character.svg"
        alt="Character Logo"
        className="w-[100px] md:w-[200px] h-auto"
      />
    </div>
  );
};

export default SlidingLogo;