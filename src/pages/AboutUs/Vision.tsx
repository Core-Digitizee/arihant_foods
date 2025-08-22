import React from 'react';

interface VisionProps {
  className?: string;
}

const Vision: React.FC<VisionProps> = ({ className = '' }) => {
  return (
    <section className={`w-full py-14 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-10">
          {/* Mission */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-8 gap-3">
              <img
                src="/images/mission-icon.png"
                alt="Mission Icon"
                className="w-10 h-10"
              />
              <h3
                className="font-bold text-[#e9c635] text-2xl"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                Mission
              </h3>
            </div>
            <div className="bg-[#f6edd4] rounded-[48px] shadow-lg w-full max-w-lg px-8 py-10 flex items-center justify-center">
              <p
                className="text-center font-semibold text-[#23180d] text-lg sm:text-3xl"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                To grow from a beloved local snack retailer into a renowned manufacturer of premium, traditional sweets, snacks and namkeens while preserving authentic flavors and uncompromising quality.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-8 gap-3">
              <img
                src="/images/vision-icon.png"
                alt="Vision Icon"
                className="w-10 h-10"
              />
              <h3
                className="font-bold text-[#e9c635] text-2xl"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                Vision
              </h3>
            </div>
            <div className="bg-[#f6edd4] rounded-[48px] shadow-lg w-full max-w-lg px-8 py-10 flex items-center justify-center">
              <p
                className="text-center font-semibold text-[#23180d] text-lg sm:text-3xl"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                To grow from a beloved local snack retailer into a renowned manufacturer of premium, traditional sweets, snacks and namkeens while preserving authentic flavors and uncompromising quality.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center md:col-span-2 mt-2">
            <div className="flex items-center mb-8 gap-3">
              <img
                src="/images/values-icon.png"
                alt="Values Icon"
                className="w-10 h-10"
              />
              <h3
                className="font-bold text-[#e9c635] text-2xl"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                Values
              </h3>
            </div>
            <div className="bg-[#f6edd4] rounded-[48px] shadow-lg w-full max-w-2xl px-8 py-10 flex items-center justify-center">
              <p
                className="text-center font-semibold text-[#23180d] text-lg sm:text-3xl"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                We believe in quality ingredients, customer happiness, mixing tradition with innovation, honest dealings, and strict hygiene in everything we deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
