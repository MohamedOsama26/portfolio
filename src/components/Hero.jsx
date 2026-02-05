import { motion } from 'framer-motion';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-lg mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="px-8 py-3 border border-gray-600 rounded-full font-semibold text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-6"
        >
          {socialLinks.github && (
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <FaGithub size={24} />
            </motion.a>
          )}
          {socialLinks.linkedin && (
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          )}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <HiMail size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500"
          >
            <HiArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
