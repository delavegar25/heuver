import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      className={`w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple hover:bg-transparent hover:text-purple hover:border-purple dark:bg-lighterPurple dark:hover:text-lighterPurple dark:hover:border-lighterPurple hover:duration-300 md:py-3 md:text-lg md:px-10`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
