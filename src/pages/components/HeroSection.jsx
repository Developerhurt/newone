import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Users, Briefcase, Globe, Star } from "lucide-react";

const HeroSection = () => {
  const [currentMode, setCurrentMode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMode((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const modes = [
    {
      type: "Artist",
      heading: "Join As An Artist —",
      subheading:
        "Showcase Your Art, Apply to Projects, and Connect Creatively.",
      features: [
        { icon: <Star className="w-5 h-5" />, text: "Upload Portfolio" },
        {
          icon: <Users className="w-5 h-5" />,
          text: "Join Collaborative Projects",
        },
        { icon: <Globe className="w-5 h-5" />, text: "Get Noticed by Brands" },
        {
          icon: <Briefcase className="w-5 h-5" />,
          text: "Connect with Creatives Globally",
        },
      ],
      primaryCTA: "Get Started",
      secondaryCTA: "Explore Now",
      gradient: "from-purple-500 to-pink-500",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    },
    {
      type: "Guest",
      heading: "Join As A Guest —",
      subheading: "Post Jobs, Hire Artists, and Join the Creative Buzz.",
      features: [
        {
          icon: <Briefcase className="w-5 h-5" />,
          text: "Apply to Jobs or Post One",
        },
        {
          icon: <Users className="w-5 h-5" />,
          text: "Hire Artists for Your Vision",
        },
        { icon: <Star className="w-5 h-5" />, text: "Create & Attend Events" },
        {
          icon: <Globe className="w-5 h-5" />,
          text: "Collaborate with Artists & Professionals",
        },
      ],
      primaryCTA: "Post a Job",
      secondaryCTA: "Explore Now",
      gradient: "from-blue-500 to-cyan-500",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMode}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.h1
                  className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${modes[currentMode].gradient} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {modes[currentMode].heading}
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {modes[currentMode].subheading}
                </motion.p>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {modes[currentMode].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${modes[currentMode].gradient} text-white`}
                      >
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    className={`px-8 py-3 bg-gradient-to-r ${modes[currentMode].gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{modes[currentMode].primaryCTA}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-purple-300 hover:text-purple-600 transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    <span>{modes[currentMode].secondaryCTA}</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="flex space-x-2">
              {modes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMode(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentMode === index ? "bg-purple-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMode}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={modes[currentMode].image}
                  alt={modes[currentMode].type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


