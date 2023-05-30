import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const CtaButton: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      className={`bg-white dark:bg-darkThemeGray dark:text-white text-purple-500 hover:bg-purple-500 py-2 px-6 rounded-md shadow-lg flex items-center justify-center`}
      onClick={onClick}
      disabled={disabled}
      style={{ minWidth: '200px' }}
    >
      {children}
    </button>
  );
};

export default CtaButton;
