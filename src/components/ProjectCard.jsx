import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAndroid } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}

          {/* Quick Links Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={20} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={18} />
              </motion.a>
            )}
            {project.apk && (
              <motion.a
                href={project.apk}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaAndroid size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
