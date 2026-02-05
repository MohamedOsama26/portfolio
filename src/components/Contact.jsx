import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form service)
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: HiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: HiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: HiLocationMarker, label: 'Location', value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, href: socialLinks.twitter, label: 'Twitter' },
  ].filter(s => s.href);

  return (
    <section id="contact" className="py-20 px-4 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's talk</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all">
                    <item.icon className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane className="rotate-90" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
