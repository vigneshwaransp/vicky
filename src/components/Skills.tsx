import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
  category: string;
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const skills: Skill[] = [
    { name: 'C Programming', level: 85, category: 'programming' },
    { name: 'C++', level: 82, category: 'programming' },
    { name: 'Java', level: 80, category: 'programming' },
    { name: 'Python', level: 88, category: 'programming' },
    { name: 'OOPs', level: 85, category: 'core' },
    { name: 'Data Structures', level: 83, category: 'core' },
    { name: 'Algorithms', level: 80, category: 'core' },
    { name: 'DBMS', level: 82, category: 'core' },
    { name: 'Web Development', level: 85, category: 'web' },
    { name: 'MySQL', level: 80, category: 'web' },
    { name: 'Machine Learning', level: 78, category: 'ai' },
    { name: 'Jupyter Notebook', level: 82, category: 'ai' },
    { name: 'Figma', level: 88, category: 'design' },
    { name: 'Blender', level: 75, category: 'design' },
    { name: 'Adobe Tools', level: 80, category: 'design' },
    { name: 'UI/UX Design', level: 85, category: 'design' },
  ];

  const categories = [
    { id: 'all', label: 'ALL_SYSTEMS', color: '#00BFFF' },
    { id: 'programming', label: 'PROGRAMMING', color: '#00BFFF' },
    { id: 'core', label: 'CORE_CS', color: '#FF0033' },
    { id: 'web', label: 'WEB_DEV', color: '#00BFFF' },
    { id: 'ai', label: 'AI/ML', color: '#FF0033' },
    { id: 'design', label: 'DESIGN', color: '#00BFFF' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    if (sectionRef.current) {
      const bars = sectionRef.current.querySelectorAll('.skill-bar-fill');
      
      bars.forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: bar.getAttribute('data-level') + '%',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      });
    }
  }, [activeCategory]);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-20 px-4 relative">
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
            {'> ANALYZING CAPABILITIES...'}
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl glow-blue text-[#00BFFF]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            SKILL_MATRIX.db
          </motion.h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 border-2 font-['Share_Tech_Mono'] transition-all ${
                activeCategory === category.id
                  ? 'bg-opacity-20'
                  : 'bg-transparent'
              }`}
              style={{
                borderColor: category.color,
                color: category.color,
                backgroundColor: activeCategory === category.id ? `${category.color}20` : 'transparent',
                boxShadow: activeCategory === category.id ? `0 0 20px ${category.color}40` : 'none',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => {
            const isBlue = index % 2 === 0;
            const color = isBlue ? '#00BFFF' : '#FF0033';
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="holographic p-6 space-y-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 
                    className="text-lg"
                    style={{ color }}
                  >
                    {skill.name}
                  </h3>
                  <motion.span 
                    className="font-['Share_Tech_Mono']"
                    style={{ color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div
                    className="skill-bar-fill absolute top-0 left-0 h-full rounded-full"
                    data-level={skill.level}
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 10px ${color}, 0 0 20px ${color}40`,
                    }}
                    whileHover={{
                      boxShadow: `0 0 20px ${color}, 0 0 40px ${color}60`,
                    }}
                  />
                  
                  {/* Animated scanline on the progress bar */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                      boxShadow: `0 0 10px ${color}`,
                    }}
                    animate={{
                      x: ['0%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 font-['Share_Tech_Mono']">
            {'> CONTINUOUSLY UPGRADING NEURAL PATHWAYS'}
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00BFFF] mt-2"
          >
            ● LEARNING_MODE: ACTIVE
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
