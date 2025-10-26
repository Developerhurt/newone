import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Lightbulb, Monitor, Camera } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media",
      description: "Content creation, influencer marketing, and brand management",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Creative solutions, UX research, and strategic thinking",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "UI/UX design, frontend development, and digital experiences",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Portrait, commercial, event, and artistic photography",
      gradient: "from-purple-500 to-indigo-500"
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
            Popular Job & Skills <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Search Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities in the most in-demand creative fields
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Background decoration */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r ${category.gradient} opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;


