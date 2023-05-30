import React, { useState } from 'react';

const MoreFeatureSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Tab 1');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-purple via-lavender to-lighterPurple animate-gradient opacity-20'>
      <main className='mx-auto px-4 sm:mt-24  mb-52 overflow-hidden'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <img src='/path/to/image.png' alt='Image' className='w-full' />
          </div>
          <div className='md:w-1/2 md:pl-8'>
            <div className='flex mb-4'>
              <button
                className={`py-2 px-4 mr-4 font-bold text-lg ${
                  selectedTab === 'Tab 1'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick('Tab 1')}
              >
                Tab 1
              </button>
              <button
                className={`py-2 px-4 font-bold text-lg ${
                  selectedTab === 'Tab 2'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleTabClick('Tab 2')}
              >
                Tab 2
              </button>
            </div>
            <div className='text-lg'>
              {selectedTab === 'Tab 1' && (
                <div>
                  <h2 className='text-2xl font-bold mb-4'>Content for Tab 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              )}
              {selectedTab === 'Tab 2' && (
                <div>
                  <h2 className='text-2xl font-bold mb-4'>Content for Tab 2</h2>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoreFeatureSection;
