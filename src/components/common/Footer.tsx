import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`bg-[#732b21]/40 py-10 text-white ${className}`}
      style={{ backgroundColor: 'rgba(81, 17, 9, 0.61)' }}
    >
      {/* Outer wrapper — responsive flex */}
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Logos Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <img
              src="/images/img_jain_logo_2.png"
              alt="Jain Logo"
              className="w-16 sm:w-[90px] h-auto object-contain"
            />
            <img
              src="/images/img_bgremovelogo1_4.png"
              alt="Arihant Foods Logo"
              className="w-48 sm:w-[270px] h-auto object-contain mt-4 sm:mt-0"
            />
          </div>
        </div>

        {/* Info Columns */}
        <div
          className="flex flex-col sm:flex-row sm:space-x-10 lg:space-x-16 text-lg sm:text-xl lg:text-[30px] text-center md:text-left"
          style={{ fontFamily: 'Jaini Purva' }}
        >
          {/* Explore */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] mb-4">Explore</h3>
            <div className="space-y-2">
              <div className="hover:text-gray-200 cursor-pointer">Home</div>
              <div className="hover:text-gray-200 cursor-pointer">About Us</div>
              <div className="hover:text-gray-200 cursor-pointer">Products</div>
              <div className="hover:text-gray-200 cursor-pointer">Contact Us</div>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl sm:text-2xl lg:text-[32px] mb-4">Contact Details</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <img src="/images/img_untitled_design_4.png" className="w-5 sm:w-[26px] h-5 sm:h-[26px] mr-2" />
                +91 8523697412
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img src="/images/img_untitled_design_4.png" className="w-5 sm:w-[25px] h-5 sm:h-[25px] mr-2" />
                +91 9975673060
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img src="/images/img_untitled_design_1_3.png" className="w-6 sm:w-[32px] h-6 sm:h-[32px] mr-2" />
                arihantfoods@gmail.com
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-[32px] mb-4">Follow us on</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <img src="/images/img_untitled_design_2_4.png" className="w-6 sm:w-[31px] h-6 sm:h-[31px] mr-2" />
                arihant_foods
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img src="/images/img_untitled_design_3_3.png" className="w-6 sm:w-[33px] h-6 sm:h-[33px] mr-2" />
                arihant_foods
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
