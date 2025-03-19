import React, { useState, useEffect, useCallback, useRef } from 'react';

const SubtitleLogo: React.FC = () => {
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
      height="35"
      viewBox="0 0 300 35"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
      style={{ filter: 'url(#subtitle-texture)' }}
    >
      <defs>
        <filter id="subtitle-texture" x="-50%" y="-50%" width="200%" height="200%">
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
      <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)" fill="currentColor">
        <path d="M104 252 c-7 -4 -13 -52 -16 -119 l-4 -113 38 0 c91 0 141 47 136 126 -3 43 -7 51 -46 81 -42 32 -84 41 -108 25z m76 -48 c64 -43 64 -120 -1 -143 -58 -20 -59 -19 -59 79 0 55 4 90 10 90 6 0 28 -12 50 -26z"/>
        <path d="M362 234 c-52 -26 -91 -99 -75 -141 17 -44 173 -61 173 -19 0 8 -20 12 -59 11 -64 0 -99 17 -71 35 8 5 27 10 43 10 18 0 27 5 27 16 0 13 -8 15 -35 12 -19 -2 -35 -1 -35 2 0 13 39 41 66 49 30 8 40 34 14 38 -8 2 -30 -5 -48 -13z"/>
        <path d="M518 232 c-49 -29 -31 -77 36 -99 46 -14 56 -40 27 -64 -34 -28 -65 -21 -69 14 -4 36 -26 30 -30 -9 -5 -59 33 -73 105 -38 31 16 39 25 41 52 4 40 -17 68 -60 77 -16 4 -32 14 -35 22 -7 19 16 35 40 29 30 -7 50 4 36 20 -16 19 -58 17 -91 -4z"/>
        <path d="M669 246 c0 -3 -1 -50 -1 -103 0 -87 1 -98 17 -98 16 0 18 11 19 100 1 87 -1 100 -16 103 -10 2 -18 1 -19 -2z"/>
        <path d="M997 243 c-3 -5 -10 -39 -16 -78 -6 -38 -14 -81 -17 -93 -6 -21 -4 -23 17 -20 21 3 24 8 21 37 -2 22 0 31 7 26 6 -3 11 -12 11 -20 0 -14 46 -55 61 -55 18 0 36 31 42 73 7 53 -4 102 -24 102 -11 0 -13 -14 -11 -67 3 -55 1 -68 -11 -68 -20 0 -47 71 -47 125 0 33 -4 45 -14 45 -8 0 -17 -3 -19 -7z"/>
        <path d="M1409 234 c-14 -17 -30 -184 -19 -197 4 -4 14 -5 22 -2 12 5 15 16 11 45 -5 35 -4 38 15 33 33 -8 82 26 82 58 0 61 -77 104 -111 63z m74 -54 c6 -22 -25 -46 -43 -35 -14 9 -12 49 2 63 14 14 33 1 41 -28z"/>
        <path d="M1911 236 c-16 -19 0 -28 46 -24 l36 3 -2 -82 c-2 -78 -1 -83 18 -83 19 0 21 6 21 78 l0 79 29 -5 c16 -2 32 1 36 8 9 15 3 21 -31 24 -16 2 -54 7 -85 10 -43 5 -59 4 -68 -8z"/>
        <path d="M808 223 c-41 -45 -50 -131 -18 -163 25 -25 90 -27 118 -3 22 19 39 78 25 86 -5 3 -28 3 -51 0 -47 -6 -52 -26 -9 -31 45 -6 24 -42 -24 -42 -34 0 -42 11 -42 61 0 50 26 81 60 73 21 -6 24 -3 21 12 -5 26 -59 31 -80 7z"/>
        <path d="M1767 233 c-4 -3 -7 -46 -7 -95 0 -81 2 -88 20 -88 15 0 20 7 20 25 0 14 5 25 10 25 21 0 80 -29 80 -39 0 -6 9 -11 20 -11 42 0 10 59 -32 60 -22 0 -22 4 -2 35 14 21 14 26 0 53 -8 16 -23 32 -31 36 -22 8 -70 8 -78 -1z m71 -35 c16 -16 15 -33 -4 -52 -33 -33 -43 -19 -35 52 1 15 23 16 39 0z"/>
        <path d="M2156 209 c-9 -45 -7 -147 2 -153 17 -10 31 11 29 44 -2 29 2 35 23 40 32 8 34 36 2 32 -18 -1 -23 2 -20 15 3 15 13 18 51 16 26 -2 47 1 47 7 0 16 -37 30 -83 30 -42 0 -45 -2 -51 -31z"/>
        <path d="M1585 204 c-35 -37 -33 -78 5 -116 27 -27 35 -29 68 -23 20 4 43 11 50 17 25 21 10 119 -22 140 -26 17 -77 8 -101 -18z m89 -12 c2 -4 7 -24 11 -44 7 -35 5 -39 -20 -48 -22 -8 -32 -7 -46 6 -24 22 -25 70 -1 83 20 12 49 14 56 3z"/>
        <path d="M2343 215 c-26 -18 -47 -77 -38 -105 7 -23 30 -37 65 -40 48 -4 60 0 75 30 23 44 19 81 -12 107 -30 27 -60 29 -90 8z m77 -41 c10 -11 11 -23 4 -42 -8 -22 -16 -27 -44 -27 -31 0 -35 3 -38 28 -2 16 2 35 9 43 15 19 53 18 69 -2z"/>
        <path d="M2475 211 c-3 -6 -1 -20 5 -32 7 -11 10 -42 8 -67 l-3 -47 33 2 c52 2 84 13 79 26 -2 7 -19 11 -40 9 l-36 -3 -3 58 c-2 44 -7 59 -20 61 -9 2 -19 -2 -23 -7z"/>
        <path d="M2665 119 c2 -50 6 -93 9 -96 12 -12 32 17 30 44 -1 15 -3 54 -3 86 -1 49 -4 57 -20 57 -17 0 -19 -7 -16 -91z"/>
        <path d="M2826 180 c-63 -12 -85 -62 -50 -115 24 -37 73 -34 113 6 33 33 37 49 21 79 -15 29 -40 37 -84 30z m54 -52 c0 -27 -27 -58 -52 -58 -10 0 -23 11 -30 25 -15 33 4 55 48 55 28 0 34 -4 34 -22z"/>
      </g>
    </svg>
  );
};

export default SubtitleLogo;