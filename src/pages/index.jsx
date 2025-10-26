import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import BrandsSection from './components/BrandsSection';
import CategoriesSection from './components/CategoriesSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <BrandsSection />
      <CategoriesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
