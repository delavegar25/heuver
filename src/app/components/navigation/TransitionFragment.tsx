import React, { Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { ChevronRightIcon, XIcon } from '@heroicons/react/solid';
import { Link, animateScroll as scroll } from 'react-scroll';

const TransitionFragment: React.FC<{}> = () => {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel
        focus
        className='origin-left md:hidden transform ease-in-out transition duration-500 lg:flex-grow flex flex-col justify-center px-6 py-5 rounded lg:bg-transparent lg:static z-50 bg-white absolute right-0 top-0 w-8/12 sm:w-5/12 translate-x-0 h-screen'
      >
        <div className='shadow-md bg-white dark:bg-darkThemeGray absolute bg-opacity-10 min-h-screen h-full w-full z-50 inset-0 block'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div></div>
              <div className='-mr-2'>
                <Popover.Button className='bg-white dark:bg-darkThemeGray dark:text-white rounded-md p-2 inline-flex items-center justify-center'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='py-6 px-10'>
            <div className='grid grid-rows gap-7'>
              <div className='py-5 pl-4 flex justify-between'>
                <Link
                  to='/'
                  className='cursor-pointer text-base font-medium dark:text-white hover:text-purple hover:duration-500'
                >
                  Discover
                </Link>
                <a></a>
              </div>
              <div className='py-5 pl-4 flex justify-between'>
                <Link
                  to='/'
                  className='cursor-pointer text-base font-medium dark:text-white hover:text-purple hover:duration-500'
                >
                  Features
                </Link>
                <a></a>
              </div>

              <div className='py-5 pl-4 flex justify-between'>
                <Link
                  to='/'
                  className='cursor-pointer text-base font-medium dark:text-white hover:text-purple hover:duration-500'
                >
                  About
                </Link>
                <a></a>
              </div>

              <div className='py-5 pl-4 flex justify-between'>
                <a
                  href='/'
                  className='cursor-pointer text-base font-medium dark:text-white hover:text-purple hover:duration-500'
                >
                  Haul
                </a>
                <a></a>
              </div>
              <div className='py-5 pl-4 flex justify-between'>
                <Link
                  to='/'
                  className='cursor-pointer text-base font-medium dark:text-white hover:text-purple hover:duration-500'
                >
                  Contact
                </Link>
                <a></a>
              </div>
            </div>
            <div className='mt-6'>
              <a
                href='https://auth.heuvera.com/signup'
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-purple hover:border-purple hover:bg-transparent hover:text-purple hover:duration-300'
              >
                Request Access
                <ChevronRightIcon className='ml-2 -mr-1 w-5 h-5' />
              </a>
              <p className='mt-6 text-center text-base font-medium dark:text-white'>
                Got a Heuvera Account?{' '}
                <a href='https://auth.heuvera.com/' className='text-purple'>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default TransitionFragment;
