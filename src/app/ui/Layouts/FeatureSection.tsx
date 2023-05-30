import useDarkModeDetection from '@/app/hooks/useCheckDarkMode';
import React from 'react';

interface FeatureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  icon,
  title,
  description,
}) => {
  const isDarkMode = useDarkModeDetection();
  return (
    <div className='rounded-lg shadow-md dark:shadow-md dark:bg-darkThemeGray p-6 h-full'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div
          className={
            isDarkMode
              ? 'bg-lavender rounded-full p-4 mb-4'
              : 'bg-purple rounded-full p-4 mb-4'
          }
        >
          {icon}
        </div>
        <h3 className='text-lg font-semibold mb-2 dark:text-white'>{title}</h3>
        <p className='dark:text-white'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
