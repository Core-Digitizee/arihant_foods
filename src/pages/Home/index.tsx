import React from 'react';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import Footer from '../../components/common/Footer';
import AboutSection from './AboutSection';
import ProductsSection from './ProductsSection';
import LocationSection from './LocationSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/img_.png")', backgroundAttachment: 'fixed' }}>
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;