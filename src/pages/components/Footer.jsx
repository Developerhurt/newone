import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:text-blue-500' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-sky-500' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-500' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-2">
              <Palette className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CreativeHub
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connecting creatives worldwide. Build your network, showcase your talent, and discover endless opportunities in the creative industry.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-white/10 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Join our community of creative professionals
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400">
            © 2025 CreativeHub. All rights reserved. Built with for the creative community.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;


