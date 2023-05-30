import React from 'react';

interface GooglePlayIconProps {
  className?: string;
}

const GooglePlayIcon: React.FC<GooglePlayIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width='20px'
      height='20px'
      viewBox='0 0 256 283'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      preserveAspectRatio='xMidYMid'
    >
      <title>Google Play</title>
      <g>
        <path
          d='M119.553141,134.916362 L1.0599006,259.060547 C3.75619448,268.616998 10.7182836,276.3906 19.9208658,280.119977 C29.1234481,283.849353 39.5331235,283.115716 48.121672,278.132484 L181.448642,202.197919 L119.553141,134.916362 Z'
          fill='#EA4335'
        ></path>
        <path
          d='M239.370822,113.813616 L181.71353,80.7909097 L116.815965,137.741834 L181.978418,202.021326 L239.19423,169.351804 C249.525723,163.942452 256,153.24465 256,141.58271 C256,129.92077 249.525723,119.222968 239.19423,113.813616 L239.370822,113.813616 Z'
          fill='#FBBC04'
        ></path>
        <path
          d='M1.0599006,23.4868015 C0.343633396,26.134699 -0.0127538816,28.8670014 -9.94374397e-15,31.6100341 L-9.94374397e-15,250.937314 C0.00751268399,253.679042 0.363556675,256.408712 1.0599006,259.060547 L123.614758,138.095018 L1.0599006,23.4868015 Z'
          fill='#4285F4'
        ></path>
      </g>
    </svg>
  );
};

export default GooglePlayIcon;
