import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiExternalLink } from 'react-icons/hi';
import { education } from '../data/portfolioData';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500" />

          {/* Education Items */}
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10">
                <div className="absolute inset-1 rounded-full bg-darker" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass rounded-2xl p-6 hover:border-purple-500/50 transition-all group">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all">
                    <HiAcademicCap className="text-purple-400" size={24} />
                  </div>

                  {/* Period */}
                  <span className="text-sm text-purple-400 font-medium">
                    {item.period}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold mt-2 mb-1 group-hover:gradient-text transition-all">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-gray-400 text-sm mb-3">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Certificate Link */}
                  {item.certificate && (
                    <motion.a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Certificate
                      <HiExternalLink />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
