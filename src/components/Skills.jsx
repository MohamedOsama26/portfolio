import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolioData';
import { HiDeviceMobile, HiCube, HiCloud, HiCog } from 'react-icons/hi';

const categoryIcons = {
  "Mobile Development": HiDeviceMobile,
  "Digital Twin": HiCube,
  "Backend & Cloud": HiCloud,
  "Tools & Others": HiCog,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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

        {/* Skills Grid */}
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
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        />
                      </div>
                    </motion.div>
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
