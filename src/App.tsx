import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BackgroundEffects />
      <CustomCursor />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid #00BFFF',
            color: '#00BFFF',
            fontFamily: "'Share Tech Mono', monospace",
          },
        }}
      />
    </div>
  );
}
