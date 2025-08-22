import React from 'react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section 
      className={`relative w-full h-[800px] flex items-center justify-center ${className}`}
      style={{ backgroundColor: '#ed4c4c' }}
    >
      <div className="text-center">
        <h1 
          className="text-[64px] font-normal leading-[85px] text-white"
          style={{ fontFamily: 'Jaini' }}
        >
          Video
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;