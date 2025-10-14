import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Database, Globe, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.about-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );
    }
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing AI chatbots and intelligent systems using Python and ML frameworks.',
      color: '#00BFFF',
    },
    {
      icon: Database,
      title: 'Web Development',
      description: 'Building modern web applications with responsive design and dynamic functionality.',
      color: '#FF0033',
    },
    {
      icon: Globe,
      title: 'UI/UX Designing',
      description: 'Creating intuitive interfaces with Figma, Blender, and Adobe creative tools.',
      color: '#00BFFF',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.',
      color: '#FF0033',
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="text-[#00BFFF] font-['Share_Tech_Mono'] mb-4 tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {'> LOADING PROFILE DATA...'}
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl glow-blue text-[#00BFFF]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            ABOUT_ME.sys
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="about-card holographic p-8 space-y-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#00BFFF] rounded-full animate-pulse box-glow-blue" />
              <h3 className="text-2xl text-[#00BFFF]">System Overview</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I'm a Computer Science Engineering (CSE) student with a strong interest in technology, 
              programming, and problem-solving. I enjoy learning new concepts, building creative projects, 
              and exploring different areas of computer science.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing B.E in Computer Science and Engineering at Bannari Amman Institute of Technology, 
              I specialize in Full Stack Development and Machine Learning. My passion lies in creating innovative 
              solutions that merge cutting-edge technology with practical applications.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['C', 'C++', 'Java', 'Python', 'MySQL', 'Machine Learning'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm border border-[#00BFFF] text-[#00BFFF] rounded font-['Share_Tech_Mono']"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="about-card holographic p-6 space-y-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 30px ${feature.color}40`,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${feature.color}20`,
                    border: `1px solid ${feature.color}`,
                    boxShadow: `0 0 20px ${feature.color}40`,
                  }}
                >
                  <feature.icon 
                    className="w-6 h-6" 
                    style={{ color: feature.color }}
                  />
                </div>
                <h4 
                  className="text-lg"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'CGPA', value: '8.25', color: '#00BFFF' },
            { label: 'Projects Built', value: '5+', color: '#FF0033' },
            { label: 'Technologies', value: '10+', color: '#00BFFF' },
            { label: 'Learning Mode', value: 'ON', color: '#FF0033' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="holographic p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-3xl md:text-4xl mb-2 font-['Orbitron']"
                style={{ 
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}`,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400 font-['Share_Tech_Mono']">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
