import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;