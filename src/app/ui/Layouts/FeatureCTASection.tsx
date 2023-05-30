import React from 'react';
import '../../styles/FeatureGradient.css';
import AppleIcon from '../../icons/AppleIcon';
import GooglePlayIcon from '../../icons/GooglePlayIcon';
import CtaButton from '../CtaButton';
import AppleStoreIcon from '@/app/icons/AppleStoreIcon';
import useDarkModeDetection from '@/app/hooks/useCheckDarkMode';
import { ChevronRightIcon } from '@heroicons/react/solid';

const FeatureCtaSection: React.FC = () => {
  const isDarkMode = useDarkModeDetection();
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='my-20 relative overflow-hidden mx-auto max-w-7xl lg:rounded-md'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-animate'></div>
      </div>
      <div className='container mx-auto py-16'>
        <h2 className='text-white text-xl lg:text-2xl font-bold mb-2 text-center relative z-10'>
          Coming to mobile stores
        </h2>
        <h3 className='text-white text-md font-bold mb-4 text-center relative z-10'>
          Enroll for the alpha to test by joining the waitlist
        </h3>
        <div className='flex flex-col items-center lg:flex-row lg:justify-center relative z-10 gap-2'>
          {isMobile ? (
            <CtaButton>
              <span>Join the Waitlist</span>
              <ChevronRightIcon className='ml-2 -mr-1 w-5 h-5' />
            </CtaButton>
          ) : (
            <>
              <CtaButton>
                {isDarkMode ? (
                  <AppleStoreIcon className='w-6 h-7 pt-1 mr-2' />
                ) : (
                  <AppleIcon className='w-6 h-6 mr-2' />
                )}
                <span>Get on the Apple Store</span>
              </CtaButton>
              <CtaButton>
                <GooglePlayIcon className='w-6 h-6 mr-2' />
                <span>Get on Google Play</span>
              </CtaButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCtaSection;
