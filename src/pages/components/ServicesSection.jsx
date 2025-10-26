import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, Users, Megaphone, HandHeart, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Creation",
      description: "Create and manage creative events, workshops, and networking sessions with ease.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Ticketing Solutions",
      description: "Integrated ticketing system for seamless event registration and payment processing.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Artist Booking",
      description: "Connect with and book talented artists for your projects and events.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Event Promotion",
      description: "Advanced marketing tools to promote your events and reach the right audience.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Artist Collaboration",
      description: "Platform for artists to find collaborators and work together on creative projects.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Rating & Review",
      description: "Comprehensive rating system to build trust and showcase quality work.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Comprehensive <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in the creative industry
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;


