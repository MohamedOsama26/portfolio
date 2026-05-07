import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolioData';
import { HiDeviceMobile, HiCube, HiSparkles, HiCog } from 'react-icons/hi';

const categoryIcons = {
  "Mobile Development": HiDeviceMobile,
  "Architecture & Patterns": HiCog,
  "AI & Emerging Tech": HiSparkles,
  "Backend & Tools": HiCube,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const Icon = categoryIcons[category] || HiCog;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: (categoryIndex * 0.1) + (skillIndex * 0.04) }}
                      className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
