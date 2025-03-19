import React, { useState, useEffect, useCallback, useRef } from 'react';

const NimiLogo: React.FC = () => {
  const [turbulenceValues, setTurbulenceValues] = useState({
    baseFrequency: 0.01,
    scale: 2,
    seed: 1
  });
  
  const frameCount = useRef(0);
  const animationRef = useRef<number>();
  const lastFrameTime = useRef(0);

  const animate = useCallback((timestamp: number) => {
    if (timestamp - lastFrameTime.current < 80) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    frameCount.current += 1;
    lastFrameTime.current = timestamp;

    if (frameCount.current % 5 === 0) {
      setTurbulenceValues({
        baseFrequency: 0.01,
        scale: 2,
        seed: 1
      });
    } else {
      setTurbulenceValues({
        baseFrequency: 0.01 + (Math.random() - 0.5) * 0.005,
        scale: 2 + (Math.random() - 0.5) * 1,
        seed: Math.floor(Math.random() * 100)
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    frameCount.current = 0;
    lastFrameTime.current = 0;
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <svg
      width="300"
      height="43"
      viewBox="0 0 300 43"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
      style={{ filter: 'url(#nimi-texture)' }}
    >
      <defs>
        <filter id="nimi-texture" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency={turbulenceValues.baseFrequency} 
            numOctaves="3" 
            seed={turbulenceValues.seed} 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            scale={turbulenceValues.scale} 
          />
        </filter>
      </defs>
      <g transform="translate(0.000000,43.000000) scale(0.100000,-0.100000)" fill="currentColor">
        <path d="M159 338 c-5 -13 -46 -315 -43 -320 2 -3 13 -4 23 -1 16 4 21 17 26 62 3 31 9 69 12 86 5 29 6 28 35 -30 37 -74 65 -105 94 -105 41 0 46 16 58 192 4 52 1 69 -11 79 -27 23 -45 -16 -37 -78 3 -29 3 -74 -1 -99 -6 -40 -9 -45 -20 -33 -29 29 -77 143 -82 195 -5 49 -8 54 -29 54 -13 0 -24 -1 -25 -2z"/>
        <path d="M2023 312 c-35 -3 -59 -25 -48 -42 7 -11 31 -9 70 6 15 6 16 -1 10 -74 -9 -102 -1 -152 25 -152 22 0 30 18 20 45 -4 11 -6 34 -4 50 2 17 4 54 6 83 l3 52 30 -6 c17 -4 33 -11 36 -17 4 -5 21 -7 38 -4 l31 7 -4 -78 c-3 -42 -8 -92 -12 -109 -6 -29 -4 -33 14 -33 29 0 42 47 42 147 l0 85 33 -3 c52 -3 67 0 67 15 0 21 -74 30 -140 18 -37 -7 -59 -7 -67 0 -13 10 -91 16 -150 10z"/>
        <path d="M1840 297 c-19 -10 -25 -21 -26 -47 0 -19 -2 -71 -5 -115 -4 -80 -4 -80 21 -80 23 0 25 3 22 43 -4 43 -4 43 25 36 35 -8 62 -32 74 -62 12 -31 43 -25 47 9 2 19 -5 33 -27 52 -25 21 -30 31 -25 55 7 34 -15 83 -48 106 -27 19 -26 19 -58 3z m50 -56 c15 -29 12 -58 -6 -65 -24 -9 -24 -9 -24 39 0 47 12 58 30 26z"/>
        <path d="M425 288 c-3 -8 -4 -70 -3 -139 3 -116 4 -124 23 -124 19 0 20 7 20 135 0 120 -2 135 -18 138 -9 2 -19 -3 -22 -10z"/>
        <path d="M533 288 c-4 -7 -8 -71 -9 -141 -1 -125 -1 -128 20 -125 16 2 22 12 26 43 3 22 13 51 22 64 22 32 39 19 69 -55 16 -38 28 -54 41 -54 31 0 30 22 -2 88 -20 41 -36 62 -47 62 -13 0 -8 9 20 36 20 19 37 42 37 50 0 28 -35 13 -88 -38 l-54 -53 7 53 c8 65 -18 107 -42 70z"/>
        <path d="M1233 293 c-7 -2 -13 -19 -13 -36 0 -18 -9 -72 -20 -121 -25 -111 -25 -108 3 -104 19 3 24 14 38 78 12 55 18 70 24 55 22 -60 59 -126 74 -135 20 -10 61 12 61 33 0 7 5 30 11 52 l12 40 14 -50 c17 -59 33 -78 56 -69 22 8 21 19 -5 73 -15 31 -24 70 -26 119 -4 68 -6 72 -28 72 -19 0 -24 -6 -29 -37 -8 -49 -37 -156 -45 -166 -8 -9 -70 122 -79 166 -7 31 -23 41 -48 30z"/>
        <path d="M2414 292 c-7 -4 -11 -49 -10 -122 1 -108 2 -115 21 -115 18 0 20 8 25 110 6 121 -2 150 -36 127z"/>
        <path d="M824 283 c-38 -7 -76 -57 -82 -109 -6 -59 17 -106 63 -128 90 -43 165 -3 167 90 1 27 -2 59 -6 71 -7 22 -91 84 -110 82 -6 -1 -21 -4 -32 -6z m75 -67 c26 -27 32 -106 11 -131 -19 -23 -55 -18 -89 11 -25 21 -31 33 -31 67 0 73 62 103 109 53z"/>
        <path d="M2537 284 c-4 -4 -7 -56 -7 -115 0 -102 1 -107 23 -113 53 -14 147 6 147 32 0 12 -10 14 -55 8 -66 -8 -65 -9 -68 105 -2 67 -5 84 -17 87 -9 1 -19 0 -23 -4z"/>
        <path d="M2817 277 c-15 -11 -67 -170 -67 -205 0 -8 9 -12 22 -10 17 2 24 12 28 33 3 17 11 30 18 29 6 -1 26 -2 42 -2 27 -2 30 -5 30 -37 0 -38 18 -47 40 -20 24 29 -12 165 -54 208 -21 20 -36 21 -59 4z m49 -72 c19 -46 19 -45 -21 -45 -23 0 -33 4 -30 13 28 80 30 81 51 32z"/>
        <path d="M1616 252 c-8 -15 -17 -50 -21 -77 -4 -28 -14 -65 -23 -83 -9 -22 -11 -37 -5 -43 16 -16 44 2 50 32 5 26 10 29 43 29 33 0 38 -3 47 -32 7 -25 14 -32 29 -30 10 2 20 5 22 7 5 4 -45 161 -60 188 -23 45 -61 50 -82 9z m59 -74 c4 -17 3 -28 -3 -28 -6 0 -18 -3 -27 -6 -13 -5 -15 -2 -10 22 15 65 26 68 40 12z"/>
      </g>
    </svg>
  );
};

export default NimiLogo;