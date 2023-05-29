import React from 'react';
import Button from '@/app/ui/Button';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import useAnimatedText from '@/app/hooks/useAnimatedText';
import { texts } from '@/app/utils/HeroTexts';
import { transition, variants } from '@/app/utils/HeroMotions';
import HeroMotion from '@/app/ui/Motions/HeroMotion';

const Hero: React.FC = () => {
  const currentText = useAnimatedText(texts, 4000);
  return (
    <div className='flex items-center justify-center h-screen '>
      <main className='mx-auto px-4 sm:mt-24 bg-hero mb-52 overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-r from-purple via-lavender to-black opacity-20 animate-gradient'></div>
        </div>
        <HeroMotion />
        <div className='text-center'>
          <h1 className=' text-4xl tracking-tight font-extrabold dark:text-white sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Discover Heuvera</span>{' '}
            <span className='block text-purple dark:text-lighterPurple font-design'>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={variants}
                transition={transition}
                key={currentText}
              >
                {currentText}
              </motion.div>
            </span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base dark:text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            Heuvera aggregrates the best hotels, apartments and properties that
            you would love all into a single experience.
          </p>
          <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
            <div className='mt-3 rounded-3xl shadow sm:mt-0 sm:ml-3'>
              <Button disabled={false}>
                Join the Waitlist
                <ArrowRightIcon className='ml-2 -mr-1 w-5 h-5' />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
