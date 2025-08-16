import React from 'react';

interface LocationSectionProps {
  className?: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({ className = "" }) => {
  return (
    <section className={`relative w-full py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 
          className="text-[50px] font-normal leading-[66px] text-[#e9c635] text-center mb-12"
          style={{ fontFamily: 'Jaini Purva' }}
        >
          Find Us On Maps
        </h2>
        
        <div className="flex justify-center">
          <div 
            className="w-[1180px] h-[661px] bg-[#d9d9d9] flex items-center justify-center"
          >
            <h3 
              className="text-[50px] font-normal leading-[66px] text-black"
              style={{ fontFamily: 'Jaini Purva' }}
            >
              Google Maps
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;