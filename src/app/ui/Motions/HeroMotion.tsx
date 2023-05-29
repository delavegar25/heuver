import { getRandomPosition } from '@/app/utils/RandomPosition';
import { motion } from 'framer-motion';
import React from 'react';

const HeroMotion: React.FC = () => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className='absolute w-full h-full'
        style={{ position: 'fixed' }}
      >
        <motion.img
          src='/images/heuvera.png'
          alt='Home Icon'
          className='absolute h-10'
          initial={{ x: -100, y: 100, opacity: 0 }}
          //@ts-ignore
          animate={{
            x: [null, getRandomPosition(), null],
            y: [null, getRandomPosition(), null],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className='absolute w-full h-full'
        style={{ position: 'fixed' }}
      >
        <motion.img
          src='/images/heuvera.png'
          alt='Home Icon'
          className='absolute h-10'
          initial={{ x: -100, y: 100, opacity: 0 }}
          //@ts-ignore
          animate={{
            x: [null, getRandomPosition(), null],
            y: [null, getRandomPosition(), null],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className='absolute w-full h-full'
        style={{ position: 'fixed' }}
      >
        <motion.img
          src='/images/heuvera.png'
          alt='Home Icon'
          className='absolute h-10'
          initial={{ x: -100, y: 100, opacity: 0 }}
          //@ts-ignore
          animate={{
            x: [null, getRandomPosition(), null],
            y: [null, getRandomPosition(), null],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        className='absolute w-full h-full'
        style={{ position: 'fixed' }}
      >
        <motion.img
          src='/images/heuvera.png'
          alt='Home Icon'
          className='absolute h-10'
          initial={{ x: -100, y: 100, opacity: 0 }}
          //@ts-ignore
          animate={{
            x: [null, getRandomPosition(), null],
            y: [null, getRandomPosition(), null],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        />
      </motion.div>
    </>
  );
};

export default HeroMotion;
