import React from 'react';
import NimiLogo from './components/NimiLogo';
import SubtitleLogo from './components/SubtitleLogo';
import GridBackground from './components/GridBackground';
import SlidingLogo from './components/SlidingLogo';
import AnimatedSequence from './components/AnimatedSequence';
import ProjectsSequence from './components/ProjectsSequence';
import ContactPanel from './components/ContactPanel';
import { useEffect, useRef } from 'react';

function App() {
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSubtitlePosition = () => {
      if (subtitleRef.current) {
        const rect = subtitleRef.current.getBoundingClientRect();
        document.documentElement.style.setProperty('--subtitle-bottom', `${rect.bottom}px`);
      }
    };

    updateSubtitlePosition();
    window.addEventListener('resize', updateSubtitlePosition);
    return () => window.removeEventListener('resize', updateSubtitlePosition);
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-300 relative">
      <GridBackground />
      <SlidingLogo />
      <AnimatedSequence />
      <ProjectsSequence />
      <ContactPanel />

      {/* Hero Section */}
      <section className="pt-12 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="mb-6 w-full max-w-[660px]">
              <NimiLogo />
            </div>
            <div className="w-full max-w-[360px]" ref={subtitleRef}>
              <SubtitleLogo />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-yellow-300/10 fixed bottom-[-3%] w-full">
        <div className="container mx-auto px-4 text-center text-yellow-300/60">
          <p className="text-sm">© 2025 Niko Marttila. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;