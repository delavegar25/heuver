import * as React from 'react';
import { Popover } from '@headlessui/react';
import { ChevronRightIcon, MenuIcon } from '@heroicons/react/solid';
import { NavButton, PopoverButton } from './NavbarStyles';
import logo from '../../../../public/heuvera.png';
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
import Heuvera from '@/app/icons/Heuvera';

const PopoverComponent: React.FC<{}> = () => {
  return (
    <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10 mx-auto max-w-7xl'>
      <div className='flex justify-start lg:w-0 lg:flex-1'>
        <a href='/'>
          <span className='sr-only'>Heuvera</span>
          <Heuvera />
        </a>
      </div>
      <div className='-mr-2 -my-2 md:hidden'>
        <Popover.Button className={PopoverButton}>
          <span className='sr-only'>Open menu</span>
          <MenuIcon className='h-6 w-6' aria-hidden='true' />
        </Popover.Button>
      </div>
      <Popover.Group as='nav' className='hidden md:flex space-x-10 ,'>
        <Link
          to='#section1'
          className='text-base font-medium hover:text-purple dark:hover:text-lighterPurple dark:text-white hover:duration-500 cursor-pointer'
        >
          Discover
        </Link>
        <Link
          to='#section2'
          className='text-base font-medium hover:text-purple dark:hover:text-lighterPurple  dark:text-white hover:duration-500 cursor-pointer'
        >
          Features
        </Link>
        <Link
          to='#section3'
          className='text-base font-medium hover:text-purple dark:hover:text-lighterPurple dark:text-white hover:duration-500 cursor-pointer'
        >
          About
        </Link>
        <Link
          to='#section4'
          className='text-base font-medium hover:text-purple dark:hover:text-lighterPurple dark:text-white hover:duration-500 cursor-pointer'
        >
          Haul
        </Link>
        <Link
          to='#section5'
          className='text-base font-medium hover:text-purple dark:hover:text-lighterPurple dark:text-white hover:duration-500 cursor-pointer'
        >
          Contact
        </Link>
      </Popover.Group>
      <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8'>
        <a className='cursor-pointer dark:text-white'>Signup</a>
        <a href='#' className={NavButton}>
          <Link to=''>Request Access</Link>
          <ChevronRightIcon className='ml-2 -mr-1 w-5 h-5' />
        </a>
      </div>
    </div>
  );
};

export default PopoverComponent;
