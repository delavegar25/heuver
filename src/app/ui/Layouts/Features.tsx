import React from 'react';
import FeatureSection from './FeatureSection';
import { AiFillHome, AiFillCalendar } from 'react-icons/ai';
import {
  FaBed,
  FaHandshake,
  FaGlobe,
  FaMoneyBill,
  FaBoxes,
  FaSchool,
} from 'react-icons/fa';
import useDarkModeDetection from '@/app/hooks/useCheckDarkMode';

const Feature: React.FC = () => {
  const isDarkMode = useDarkModeDetection();
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mb-20'>
        <h2 className='text-3xl font-bold text-center dark:text-white'>
          Features
        </h2>
        <p className='text-center dark:text-white'>
          What Heuvera offers and why you should use it.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
        <div className='p-4'>
          <FeatureSection
            icon={
              <AiFillHome color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='Property Rentals'
            description='You can rent any property of your choice available on our platform, or lease. The process is straightforward'
          />
        </div>
        <div className='p-4 hover:bg-lightergray rounded-md'>
          <FeatureSection
            icon={<FaBed color={isDarkMode ? '#db1499' : 'white'} size={30} />}
            title='Hotel Bookings'
            description='Book a hotel room no matter your location and get the best value from your money using Heuvera'
          />
        </div>
        <div className='p-4 hover:bg-lightergray rounded-md'>
          <FeatureSection
            icon={
              <AiFillCalendar
                color={isDarkMode ? '#db1499' : 'white'}
                size={30}
              />
            }
            title='Schedule Ahead'
            description='Plan your vacations, trips and events. Schedule and book your stays ahead of time.'
          />
        </div>
        <div className='p-4 rounded-md'>
          <FeatureSection
            icon={
              <FaMoneyBill color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='Good Deals'
            description='Get amazing discounts and property deals from our numerous partners that make it possible.'
          />
        </div>
        <div className='p-4 rounded-md'>
          <FeatureSection
            icon={
              <FaHandshake color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='Proper Insurance'
            description='Any transaction facilitated through our platform comes with an insurance offer for your benefit'
          />
        </div>
        <div className='p-4 rounded-md'>
          <FeatureSection
            icon={
              <FaGlobe color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='Available everywhere.'
            description='Take Heuvera everywhere with you on the web, mobile devices, personal computers and more.'
          />
        </div>
        <div className='p-4 rounded-md'>
          <FeatureSection
            icon={
              <FaBoxes color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='Haul It'
            description='Haul is a heuvera product that strives to make logistics easier between you stays and bookings.'
          />
        </div>
        <div className='p-4 rounded-md'>
          <FeatureSection
            icon={
              <FaHandshake color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='Office Spaces'
            description='Looking for an office space to run your business? You can take a look at our various options.'
          />
        </div>
        <div className='p-4 rounded-md'>
          <FeatureSection
            icon={
              <FaSchool color={isDarkMode ? '#db1499' : 'white'} size={30} />
            }
            title='School Apartments.'
            description='Rent out affordable apartments for your schooling with guaranteed comfort as part of the package.'
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
