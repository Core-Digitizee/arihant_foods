import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full shadow-lg ${className}`}>
      <div
        className="w-full flex items-center justify-between px-4 py-3 md:px-8"
        style={{ backgroundColor: 'rgba(81, 17, 9, 0.61)' }}
      >
        {/* Left: Logos */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src="/images/img_jain_logo_2.png"
            alt="Jain Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[90px] md:h-[90px] object-contain"
          />
          <img
            src="/images/img_bgremovelogo1_4.png"
            alt="Arihant Foods Logo"
            className="w-28 h-auto sm:w-40 md:w-[200px] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg md:text-2xl lg:text-4xl" style={{ fontFamily: 'Jaini Purva' }}>
          <Link to="/" className="text-[#f6edd4] hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-[#f6edd4] hover:text-white transition-colors">About Us</Link>
          <Link to="/products" className="text-[#f6edd4] hover:text-white transition-colors">Products</Link>
          <Link to="/contact" className="text-[#f6edd4] hover:text-white transition-colors">Contact Us</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center text-[#f6edd4] hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&#x2715;</span> // ✖ Close icon
          ) : (
            <span className="text-3xl">&#9776;</span> // ☰ Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden flex flex-col items-center bg-[rgba(81,17,9,0.9)] space-y-4 py-6 text-lg"
          style={{ fontFamily: 'Jaini Purva' }}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="text-[#f6edd4] hover:text-white">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-[#f6edd4] hover:text-white">About Us</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="text-[#f6edd4] hover:text-white">Products</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[#f6edd4] hover:text-white">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
