import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Menu } from 'lucide-react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Palette className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CreativeHub
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'FAQ', 'Contact Us'].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-gray-700 hover:text-purple-500 font-medium transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/login')}
            >
             
              Login
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/signup')}
            >
              Register
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;


