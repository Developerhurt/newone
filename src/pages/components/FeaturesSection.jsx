import React from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, UserCheck } from 'lucide-react';

const FeaturesSection = () => {
  const zones = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Professional Zone",
      description: "For managers, brand reps, event planners to discover and hire top creative talent.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Artist Zone",
      description: "For artists to showcase portfolios, apply to projects, and collaborate globally.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guest Zone",
      description: "For casual users to explore, hire artists, or post creative opportunities.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore the <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Zones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path and connect with the right creative community
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${zone.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {zone.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {zone.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {zone.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${zone.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;


