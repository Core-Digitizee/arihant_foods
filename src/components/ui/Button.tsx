import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'font-normal cursor-pointer transition-all duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-[#f6edd4] text-black hover:bg-[#e6d3b4] active:bg-[#d6c3a4]',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
    outline: 'border-2 border-[#f6edd4] text-[#f6edd4] bg-transparent hover:bg-[#f6edd4] hover:text-black'
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm rounded-lg',
    medium: 'px-6 py-3 text-base rounded-2xl',
    large: 'px-8 py-4 text-lg rounded-2xl'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;