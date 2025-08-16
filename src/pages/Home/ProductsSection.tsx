import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

interface ProductsectionProps {
  className?: string;
}

const ProductsSection: React.FC<ProductsectionProps> = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products');
  };

  const categories = [
    { id: 1, name: 'Khakras', img: '/images/img_10_4.png', bg: '/images/img_rectangle_35.png' },
    { id: 2, name: 'Chiwdas', img: '/images/img_10_4.png', bg: '/images/img_rectangle_35.png' },
    { id: 3, name: 'Papads', img: '/images/img_10_4.png', bg: '/images/img_rectangle_35.png' },
    { id: 4, name: 'Namkeens', img: '/images/img_10_4.png', bg: '/images/img_rectangle_35.png' },
    { id: 5, name: 'Sweets', img: '/images/img_10_4.png', bg: '/images/img_rectangle_35.png' },
    { id: 6, name: 'Pickles', img: '/images/img_10_4.png', bg: '/images/img_rectangle_35.png' },
  ];

  return (
    <section className={`relative w-full py-12 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[66px] text-[#e9c635] text-center mb-8 md:mb-12"
          style={{ fontFamily: 'Jaini Purva' }}
        >
          Categories of Products
        </h2>

        {/* Products Grid */}
        <div className="flex justify-center mb-10">
          <div
            className="w-full max-w-[1300px] p-4 sm:p-8 pb-24 sm:pb-28 rounded-[30px] sm:rounded-[60px] border border-black"
            style={{ boxShadow: '0px 4px 48px #000000' }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 sm:gap-x-8">
              {categories.map((cat) => (
                <div key={cat.id} className="relative flex flex-col items-center">
                  {/* Background image */}
                  <img
                    src={cat.bg}
                    alt={`${cat.name} background`}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] sm:w-[300px] max-w-full h-auto object-cover rounded-lg"
                  />
                  {/* Product image */}
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="relative z-10 w-48 sm:w-[300px] max-w-full h-auto object-cover"
                  />
                  {/* Category title */}
                  <h3
                    className="mt-6 sm:mt-8 text-xl sm:text-2xl md:text-[35px] font-normal leading-snug text-white text-center"
                    style={{ fontFamily: 'Jaini Purva' }}
                  >
                    {cat.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div
          className="flex justify-center"
          style={{ fontFamily: 'Jaini Purva' }}
          onClick={handleNavigate}
        >
          <Button
            variant="primary"
            size="large"
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-2xl md:text-[40px] font-normal text-black"
          >
            Explore All Products
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
