import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo, socialLinks, navLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
  ].filter(s => s.href);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.a>
            <p className="text-gray-400 text-sm">
              {personalInfo.title}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              {/* Made with <FaHeart className="text-pink-500" size={14} /> using React & Tailwind */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
