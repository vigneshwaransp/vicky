import { useEffect, useRef } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export function GlitchText({ children, className = '', as: Component = 'span' }: GlitchTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const glitchEffect = () => {
      const original = children;
      const chars = '!<>-_\\/[]{}—=+*^?#_01';
      
      let iterations = 0;
      const maxIterations = 5;
      
      const interval = setInterval(() => {
        element.textContent = original
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return original[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        
        iterations += 1;
        
        if (iterations > maxIterations) {
          element.textContent = original;
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    };

    // Trigger glitch every 5 seconds
    const glitchInterval = setInterval(glitchEffect, 5000);

    return () => clearInterval(glitchInterval);
  }, [children]);

  return (
    <Component
      ref={textRef as any}
      className={`glitch ${className}`}
      data-text={children}
    >
      {children}
    </Component>
  );
}
