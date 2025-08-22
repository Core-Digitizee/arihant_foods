import React from 'react';

interface OwnedByProps {
  className?: string;
}

const OwnedBy: React.FC<OwnedByProps> = ({ className = '' }) => {
  return (
    <section className={`w-full py-12 px-4 sm:px-8 ${className}`}>
      <h2
        className="text-center text-[#e9c635] text-xl sm:text-2xl mb-8 font-semibold"
        style={{ fontFamily: 'Jaini Purva', letterSpacing: '0.03em' }}
      >
        Established and Owned by
      </h2>
      <div
        className="mx-auto w-full max-w-[1200px] px-4 sm:px-12 pt-8 sm:pt-14 pb-8 sm:pb-14 rounded-[60px] border border-black"
        style={{ boxShadow: '0px 4px 48px #000000' }}
      >
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-10">
          {/* Image container flex-grow */}
          <div className="flex flex-col flex-1 items-center">
            <img
              src="/images/owner.png"
              alt="Ms. Ruchita Mamaniya"
              className="object-cover rounded-[16px] w-full h-full max-h-[420px]"
              style={{ aspectRatio: '4 / 5' }}
            />
            <span
              className="mt-3 text-lg sm:text-xl text-[#fff6dc] font-bold"
              style={{ fontFamily: 'Jaini Purva', letterSpacing: '0.01em' }}
            >
              Ms. Ruchita Mamaniya
            </span>
          </div>

          {/* Text container flex-grow and full height */}
          <div className="flex flex-1 items-center">
            <div className="bg-[#f6edd4] rounded-[22px] p-6 shadow-md w-full min-h-[350px] flex items-center">
              <p
                className="text-[#23180d] font-semibold text-base sm:text-2xl text-center"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                Arihant foods is a place where we are mainly focused on maintaining authenticity and quality of our products. We have a desire to supply our goods to as many households possible, we want to give the food products in it's pure form to our customers, because customers are our family and we never compromise with our family. We Arihant foods are taking initiative to maintain the best quality and health-conscious products and here we are with the wide range of our different products to serve this beautiful city of Kolhapur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnedBy;
