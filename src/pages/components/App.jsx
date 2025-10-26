import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import BrandsSection from './BrandsSection';
import CategoriesSection from './CategoriesSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

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


