import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiAcademicCap, HiSparkles } from 'react-icons/hi';
import { personalInfo, aboutMe } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: HiCode, text: aboutMe.highlights[0] },
    { icon: HiLightningBolt, text: aboutMe.highlights[1] },
    { icon: HiAcademicCap, text: aboutMe.highlights[2] },
    { icon: HiSparkles, text: aboutMe.highlights[3] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl" />

              {/* Image Container */}
              <div className="relative glass rounded-2xl p-2 gradient-border">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center overflow-hidden">
                  {personalInfo.profileImage ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-600" style={{ display: personalInfo.profileImage ? 'none' : 'flex' }}>
                    {personalInfo.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              {aboutMe.description}
            </motion.p>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all">
                    <item.icon className="text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently Working On */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-sm uppercase tracking-wider text-purple-400 mb-2">
                Currently Working On
              </h3>
              <p className="text-gray-300">
                {aboutMe.currentlyWorkingOn}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
