import React, { useState, useEffect, useCallback, useRef } from 'react';

const GridBackground: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [turbulenceValues, setTurbulenceValues] = useState({
    baseFrequency: 0.04,
    scale: 5,
    seed: 1
  });
  
  const frameCount = useRef(0);
  const animationRef = useRef<number>();
  const lastFrameTime = useRef(0);

  const animate = useCallback((timestamp: number) => {
    if (!isAnimating) {
      setTurbulenceValues({
        baseFrequency: 0.04,
        scale: 5,
        seed: 1
      });
      return;
    }

    if (timestamp - lastFrameTime.current < 80) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    frameCount.current += 1;
    lastFrameTime.current = timestamp;

    if (frameCount.current % 5 === 0) {
      setTurbulenceValues({
        baseFrequency: 0.04,
        scale: 5,
        seed: 1
      });
    } else {
      setTurbulenceValues({
        baseFrequency: 0.04 + (Math.random() - 0.5) * 0.01,
        scale: 5 + (Math.random() - 0.5) * 2,
        seed: Math.floor(Math.random() * 100)
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isAnimating]);

  useEffect(() => {
    const startAnimation = () => setIsAnimating(true);
    const stopAnimation = () => setIsAnimating(false);

    window.addEventListener('mousemove', startAnimation);
    window.addEventListener('mouseleave', stopAnimation);

    return () => {
      window.removeEventListener('mousemove', startAnimation);
      window.removeEventListener('mouseleave', stopAnimation);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      frameCount.current = 0;
      lastFrameTime.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, isAnimating]);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 0, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 0, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(255, 255, 0, 0.025) .5px, transparent .5px),
          linear-gradient(90deg, rgba(255, 255, 0, .025) .5px, transparent .5px)
        `,
        backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
        filter: 'url(#paper-texture)',
      }}
    >
      <svg width="0" height="0">
        <filter id="paper-texture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency={turbulenceValues.baseFrequency} 
            numOctaves="5" 
            seed={turbulenceValues.seed} 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            scale={turbulenceValues.scale} 
          />
        </filter>
      </svg>
    </div>
  );
};

export default GridBackground;