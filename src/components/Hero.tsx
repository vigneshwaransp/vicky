import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { GlitchText } from './GlitchText';
import { Terminal, Code2, Cpu } from 'lucide-react';

export function Hero() {
  const profileRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profileRef.current) {
      // Entrance animation with GSAP
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, scale: 0.8, rotateY: -20 },
        { 
          opacity: 1, 
          scale: 1, 
          rotateY: 0,
          duration: 1.5, 
          ease: 'power3.out',
        }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
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
    gsap.to(profileRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative px-4 py-20"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
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
              <span className="font-['Share_Tech_Mono'] tracking-wider">SYSTEM_ONLINE</span>
            </motion.div>

            <div>
              <motion.div 
                className="text-[#00BFFF] mb-2 font-['Share_Tech_Mono'] tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {'> ACCESSING PORTFOLIO_MAINFRAME...'}
              </motion.div>
              <motion.div 
                className="text-[#00BFFF] mb-2 font-['Share_Tech_Mono'] text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {'IDENTITY VERIFIED: VICKY_SP'}
              </motion.div>
              <motion.div 
                className="text-[#00BFFF] mb-4 font-['Share_Tech_Mono'] text-sm tracking-wider"
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
                <p className="text-lg font-['Share_Tech_Mono']">
                  Exploring the Future Code Grid
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['REACT', 'PYTHON', 'BLENDER', 'NODE.JS'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 border border-[#00BFFF] bg-[#00BFFF]/5 hover:bg-[#00BFFF]/10 transition-all cursor-pointer box-glow-blue"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <span className="font-['Share_Tech_Mono'] text-[#00BFFF]">{tech}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-6"
            >
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

          {/* Right side - Holographic Profile */}
          <motion.div
            ref={profileRef}
            className="relative order-1 lg:order-2"
            style={{ perspective: 1000 }}
          >
            <div className="relative">
              {/* Main profile container */}
              <div className="relative holographic p-1 rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1674572392130-1d36223d9673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwNDMyNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="VIGNESHWARAN SP"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Holographic overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/20 via-transparent to-[#FF0033]/20 mix-blend-overlay" />
                  
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 h-1"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #00BFFF, transparent)',
                      boxShadow: '0 0 20px #00BFFF',
                    }}
                    animate={{
                      y: [0, 400],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#00BFFF]" />
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#00BFFF]" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#FF0033]" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#FF0033]" />
                </div>
              </div>

              {/* Glow effects */}
              <div className="absolute -inset-4 bg-[#00BFFF]/20 blur-3xl -z-10" />
              <div className="absolute -inset-4 bg-[#FF0033]/10 blur-3xl -z-10" />

              {/* Info panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-6 p-4 holographic"
              >
                <div className="flex items-center justify-between text-sm font-['Share_Tech_Mono']">
                  <div className="flex items-center gap-2 text-[#00BFFF]">
                    <Cpu className="w-4 h-4" />
                    <span>ID: VSP_2050</span>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#00BFFF]"
                  >
                    ● ACTIVE
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
