import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: 'active' | 'completed';
  url?: string;  // optional URL
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Z.I.A (Chat Bot)',
      description:
        'AI chatbot project combining Python and Machine Learning to simulate human interaction with data-driven responses and natural language processing.',
      tech: ['Python', 'Machine Learning', 'NLP', 'AI'],
      year: '2024',
      status: 'completed',
      url: 'https://vigneshwaransp.github.io/Z.I.A/',
    },
    {
      title: 'Spider verse UI',
      description:
        'Futuristic cyberpunk-themed portfolio with holographic effects, GSAP animations, and neon aesthetics set in the year 2050.',
      tech: ['React', 'TailwindCSS', 'GSAP', 'Framer Motion'],
      year: '2025',
      status: 'active',
      // no URL (or you may add one later)
    },
    
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
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
            {'> ACCESSING PROJECT DATABASE...'}
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl glow-blue text-[#00BFFF]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            PROJECTS.archive
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isBlue = index % 2 === 0;
            const accentColor = isBlue ? '#00BFFF' : '#FF0033';

            // If project.url exists, wrap in <motion.a>, else just <motion.div>
            const Container = project.url ? motion.a : motion.div;
            const containerProps: any = project.url
              ? {
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <Container
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="holographic p-6 space-y-4 group cursor-pointer"
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 30px ${accentColor}40`,
                }}
                {...containerProps}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${accentColor}20`,
                      border: `1px solid ${accentColor}`,
                      boxShadow: `0 0 15px ${accentColor}40`,
                    }}
                  >
                    <Zap
                      className="w-6 h-6"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs font-['Share_Tech_Mono']"
                      style={{ color: accentColor }}
                    >
                      ● {project.status.toUpperCase()}
                    </motion.div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl group-hover:glow-blue transition-all"
                  style={{ color: accentColor }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded font-['Share_Tech_Mono']"
                      style={{
                        border: `1px solid ${accentColor}40`,
                        color: accentColor,
                        backgroundColor: `${accentColor}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span
                    className="text-sm font-['Share_Tech_Mono']"
                    style={{ color: accentColor }}
                  >
                    {project.year}
                  </span>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Github
                        className="w-5 h-5"
                        style={{ color: accentColor }}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink
                        className="w-5 h-5"
                        style={{ color: accentColor }}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px ${accentColor}`,
                  }}
                />
              </Container>
            );
          })}
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all font-['Share_Tech_Mono']"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 191, 255, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            LOAD_MORE_PROJECTS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
