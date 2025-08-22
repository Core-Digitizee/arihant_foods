
import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section>
      <div className="flex justify-center px-2 sm:px-4 m-10">
        <div
          className="mx-auto w-full max-w-[1200px] sm:px-12 sm:pt-14 sm:pb-14 rounded-[60px] border border-black"
          style={{ boxShadow: '0px 4px 48px #000000' }}
        >
          <div
          className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row overflow-hidden rounded-[60px] bg-[#f6edd4] shadow-2xl"
          style={{
            border: '1.5px solid #40200c',
            boxShadow: '0 8px 48px #00000040, 0 1.5px 12px #00000026',
          }}
        >
          {/* Left: Image - left side radius */}
          <div className="w-full md:w-[400px] h-64 md:h-auto flex-shrink-0">
            <img
              src="/images/about.jpg" // Replace with your image path
              alt="Arihant Foods"
              className="w-full h-full object-cover rounded-l-[60px] md:rounded-tl-[60px] md:rounded-bl-[60px] rounded-br-[60px] md:rounded-r-[110px]"
              style={{ height: "100%" }}
            />
          </div>
          {/* Right: Text - right side radius */}
          <div className="flex flex-1 items-center justify-center p-6 md:p-10 bg-[#f6edd4] rounded-r-[60px] md:rounded-tr-[60px] md:rounded-br-[60px]">
            <p
              className="w-full text-center md:text-left font-semibold text-[#23180d] text-base md:text-lg lg:text-xl"
              style={{ fontFamily: 'Jaini Purva' }}
            >
              Arihant foods is a place where we are mainly focused on maintaining authenticity and
              quality of our products. We have a desire to supply our goods to as many households
              possible, we want to give the food products in it's pure form to our customers,
              because customers are our family and we never compromise with our family. We Arihant
              foods are taking initiative to maintain the best quality and health-concious produts
              and here we are with the wide range of our different products to serve this
              beautiful city of Kolhapur.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
