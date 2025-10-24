import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { GlitchText } from './GlitchText';
import { Terminal, Code2, Cpu } from 'lucide-react';

export function Hero() {
  const profileRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLCanvasElement>(null);

  // GSAP entrance animation and tilt effect
  useEffect(() => {
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, scale: 0.8, rotateY: -20 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 1.5, ease: 'power3.out' }
      );
    }
  }, []);

  // Hover tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !profileRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(profileRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!profileRef.current) return;
    gsap.to(profileRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  // Matrix red & blue rain
  useEffect(() => {
    const canvas = matrixRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const letters = '0123456789';
    const fontSize = 5;
    let columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(1);
    const colors = ['#00BFFF', '#FF0033']; // Blue & Red

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.1)'; // trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops.length = columns;
      drops.fill(1);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const techStack = ['REACT', 'PYTHON', 'BLENDER', 'NODE.JS'];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-black text-white overflow-hidden"
    >
      {/* Matrix Rain Canvas */}
      <canvas ref={matrixRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <motion.div
            className="flex items-center gap-2 text-[#00BFFF]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Terminal className="w-5 h-5" />
            <span className="font-mono tracking-wider">SYSTEM_ONLINE</span>
          </motion.div>

          <div>
            <motion.div
              className="text-[#00BFFF] mb-2 font-mono tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {'> ACCESSING PORTFOLIO_MAINFRAME...'}
            </motion.div>
            <motion.div
              className="text-[#00BFFF] mb-2 font-mono text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {'IDENTITY VERIFIED: VICKY_SP'}
            </motion.div>
            <motion.div
              className="text-[#00BFFF] mb-4 font-mono text-sm tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {'LOADING NEURAL PROFILE [███████████░] 99%'}
            </motion.div>
            <GlitchText
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl glow-blue text-[#00BFFF] tracking-tight"
            >
              VICKY.SP
            </GlitchText>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-3"
          >
            <p className="text-xl md:text-2xl text-[#00BFFF] opacity-80">
              Full Stack & ML Engineer
            </p>
            <div className="flex items-center gap-2 text-[#FF0033]">
              <Code2 className="w-5 h-5" />
              <p className="text-lg font-mono">Exploring the Future Code Grid</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech}
                className="px-4 py-2 border border-[#00BFFF] bg-[#00BFFF]/5 hover:bg-[#00BFFF]/10 transition-all cursor-pointer box-glow-blue"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
              >
                <span className="font-mono text-[#00BFFF]">{tech}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pt-6">
            <motion.button
              className="px-8 py-4 bg-[#FF0033] text-black border-2 border-[#FF0033] hover:bg-transparent hover:text-[#FF0033] transition-all box-glow-red"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                INITIATE_CONTACT
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Holographic Profile */}
        <motion.div ref={profileRef} className="relative order-1 lg:order-2" style={{ perspective: 1000 }}>
          <div className="relative holographic p-1 rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/f5/c0/60/f5c060dbf05df89cbd5b5d0cd3a34cac.jpg"
                alt="VICKY"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 via-transparent to-[#FF0033]/20 mix-blend-overlay" />
              <motion.div
                className="absolute inset-0 h-1"
                style={{ background: 'linear-gradient(90deg, transparent, #00BFFF, transparent)', boxShadow: '0 0 20px #00BFFF' }}
                animate={{ y: [0, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#00BFFF]" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#00BFFF]" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#FF0033]" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#FF0033]" />
            </div>
            <div className="absolute -inset-4 bg-[#00BFFF]/20 blur-3xl -z-10" />
            <div className="absolute -inset-4 bg-[#FF0033]/10 blur-3xl -z-10" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="mt-6 p-4 holographic">
              <div className="flex items-center justify-between text-sm font-mono">
                <div className="flex items-center gap-2 text-[#00BFFF]">
                  <Cpu className="w-4 h-4" />
                  <span>ID: VSP_2050</span>
                </div>
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#00BFFF]">
                  ● ACTIVE
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
