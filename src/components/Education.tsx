import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  icon: any;
  color: string;
}

export function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const education: EducationItem[] = [
    {
      degree: 'B.E Computer Science and Engineering',
      institution: 'Bannari Amman Institute of Technology',
      duration: '2024 – 2028',
      score: 'CGPA: 8.25 / 10',
      icon: GraduationCap,
      color: '#00BFFF',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Sri Saradha Bala Mandir',
      duration: '2023 – 2024',
      score: 'Marks: 558 / 600',
      icon: Award,
      color: '#FF0033',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Sri Saradha Bala Mandir',
      duration: '2022',
      score: 'Marks: 442 / 500',
      icon: BookOpen,
      color: '#00BFFF',
    },
  ];

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.education-item');
      
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'bottom 20%',
            },
          }
        );
      });

      // Animate the timeline line
      gsap.fromTo(
        '.timeline-line',
        { height: '0%' },
        {
          height: '100%',
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="education" ref={sectionRef} className="min-h-screen py-20 px-4 relative">
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
            {'> LOADING ACADEMIC RECORDS...'}
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl glow-blue text-[#00BFFF]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            EDUCATION.timeline
          </motion.h2>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block">
            <div 
              className="timeline-line w-full bg-gradient-to-b from-[#00BFFF] via-[#FF0033] to-[#00BFFF]"
              style={{ boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)' }}
            />
          </div>

          {/* Education items */}
          <div className="space-y-12">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.degree}
                  className={`education-item relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      className="holographic p-6 space-y-4"
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: `0 0 30px ${item.color}40`,
                      }}
                    >
                      <div className={`flex items-center gap-3 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}>
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${item.color}20`,
                            border: `1px solid ${item.color}`,
                            boxShadow: `0 0 15px ${item.color}40`,
                          }}
                        >
                          <Icon 
                            className="w-6 h-6"
                            style={{ color: item.color }}
                          />
                        </div>
                        <h3 
                          className="text-xl"
                          style={{ color: item.color }}
                        >
                          {item.degree}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        <p className="text-gray-300">
                          {item.institution}
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span 
                            className="text-sm font-['Share_Tech_Mono']"
                            style={{ color: item.color }}
                          >
                            {item.duration}
                          </span>
                          <span 
                            className="text-sm font-['Share_Tech_Mono'] px-3 py-1 rounded"
                            style={{
                              border: `1px solid ${item.color}40`,
                              backgroundColor: `${item.color}10`,
                              color: item.color,
                            }}
                          >
                            {item.score}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex w-2/12 justify-center items-center relative z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}60`,
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-['Share_Tech_Mono']">
            {'> CONTINUOUS LEARNING PROTOCOL ACTIVE'}
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00BFFF] mt-2"
          >
            ● KNOWLEDGE_ACQUISITION: IN_PROGRESS
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
