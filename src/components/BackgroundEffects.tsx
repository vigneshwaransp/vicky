import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Digital rain particles
    const particles: Array<{
      x: number;
      y: number;
      speed: number;
      color: string;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#00BFFF' : '#FF0033',
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3;
        ctx.fillRect(particle.x, particle.y, 1, 10);

        particle.y += particle.speed;

        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 h-32 w-full" />
      
      {/* Light streaks */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full opacity-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #00BFFF, transparent)',
          boxShadow: '0 0 20px #00BFFF',
        }}
        animate={{
          x: [0, window.innerWidth],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        className="absolute top-0 right-0 w-1 h-full opacity-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FF0033, transparent)',
          boxShadow: '0 0 20px #FF0033',
        }}
        animate={{
          x: [0, -window.innerWidth],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? '#00BFFF' : '#FF0033',
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#00BFFF' : '#FF0033'}`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Red laser grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
    </div>
  );
}
