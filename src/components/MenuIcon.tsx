import React, { useState, useEffect, useCallback, useRef } from 'react';

const MenuIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [paths, setPaths] = useState({
    top: "M75.5 44L33 47L21 40.5L17.5 29L63 8L100.5 5L143 0.5H169L212 8L248 12.5L293 15.5L309 24.5L315 44L293 50.5L258.5 54.5H232H202.5H148.5L75.5 44Z",
    middle: "M63 98H26L0 91L11 69L40 61L68 69H107L174 66L236 74H283L309 85L315 104L283 112L196 104L143 98L94 104L63 98Z",
    bottom: "M26 167L40 172L103 181C126.667 182.333 177 184.2 189 181C201 177.8 256.667 182.333 283 185L309 167V130L267 118L185 124H133L73 118L40 112L21 124L11 154L26 167Z"
  });

  const originalPaths = {
    top: "M75.5 44L33 47L21 40.5L17.5 29L63 8L100.5 5L143 0.5H169L212 8L248 12.5L293 15.5L309 24.5L315 44L293 50.5L258.5 54.5H232H202.5H148.5L75.5 44Z",
    middle: "M63 98H26L0 91L11 69L40 61L68 69H107L174 66L236 74H283L309 85L315 104L283 112L196 104L143 98L94 104L63 98Z",
    bottom: "M26 167L40 172L103 181C126.667 182.333 177 184.2 189 181C201 177.8 256.667 182.333 283 185L309 167V130L267 118L185 124H133L73 118L40 112L21 124L11 154L26 167Z"
  };

  const frameCount = useRef(0);
  const animationRef = useRef<number>();

  const distortPath = useCallback((originalPath: string) => {
    const segments = originalPath.split(/(?=[MLHVCSQTA])/);
    
    return segments.map(segment => {
      if (segment.match(/[0-9]/)) {
        const numbers = segment.match(/-?\d+\.?\d*/g);
        if (numbers) {
          const distortedNumbers = numbers.map(num => {
            const value = parseFloat(num);
            // Increased distortion range from 6 to 15
            const distortion = (Math.random() - 0.5) * 15;
            return Math.round((value + distortion) * 10) / 10;
          });
          
          let distortedSegment = segment[0];
          distortedNumbers.forEach((num, i) => {
            distortedSegment += (i > 0 ? ' ' : '') + num;
          });
          return distortedSegment;
        }
      }
      return segment;
    }).join('');
  }, []);

  const animate = useCallback(() => {
    if (!isHovered) {
      setPaths(originalPaths);
      return;
    }

    frameCount.current += 1;

    // Reset to original paths every fifth frame
    if (frameCount.current % 5 === 0) {
      setPaths(originalPaths);
    } else {
      setPaths(prev => ({
        top: distortPath(prev.top),
        middle: distortPath(prev.middle),
        bottom: distortPath(prev.bottom)
      }));
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [distortPath, isHovered]);

  useEffect(() => {
    if (isHovered) {
      frameCount.current = 0;
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setPaths(originalPaths);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, isHovered]);

  return (
    <svg 
      width="315" 
      height="185" 
      viewBox="0 0 315 185" 
      className="w-8 h-8 transform scale-125 cursor-pointer" 
      style={{ 
        fill: "#facc15",
        transformOrigin: 'center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path 
        d={paths.top} 
        className="transition-all duration-150 ease-in-out"
      />
      <path 
        d={paths.middle} 
        className="transition-all duration-150 ease-in-out"
      />
      <path 
        d={paths.bottom} 
        className="transition-all duration-150 ease-in-out"
      />
    </svg>
  );
};

export default MenuIcon;