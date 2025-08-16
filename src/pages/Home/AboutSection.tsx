import React from 'react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  return (
    <section className={`relative w-full py-12 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[66px] text-[#e9c635] text-center mb-8 md:mb-12"
          style={{ fontFamily: 'Jaini Purva' }}
        >
          About Arihant Foods
        </h2>

        {/* Flex container - stacks on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          {/* Image */}
          <div className="relative flex-shrink-0">
            <img
              src="/images/img_whatsapp_image_20250603_at_1544111385fde3_1.png"
              alt="Arihant Foods"
              className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] h-auto object-cover rounded-[20px] sm:rounded-[35px]"
            />
          </div>

          {/* Text box */}
          <div
            className="w-full max-w-[400px] md:max-w-[600px] p-6 sm:p-9 flex items-center justify-center"
            style={{
              backgroundColor: '#f6edd4',
              borderRadius: '0px 20px 0px 20px'
            }}
          >
            <p
              className="text-lg sm:text-xl md:text-[32px] font-normal leading-relaxed md:leading-[34px] text-center text-black"
              style={{ fontFamily: 'Jaini Purva' }}
            >
              Arihant foods is a place where we are mainly focused on maintaining authenticity and quality of our products. We have a desire to supply our goods to as many households possible, we want to give the food products in its pure form to our customers, because customers are our family and we never compromise with our family. We Arihant foods are taking initiative to maintain the best quality and health-conscious products and here we are with the wide range of our different products to serve this beautiful city of Kolhapur.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
