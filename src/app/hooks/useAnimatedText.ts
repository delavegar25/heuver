import { useState, useEffect } from 'react';

const useAnimatedText = (texts: string | any[], intervalDuration = 2000) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  }, intervalDuration);

  return () => clearInterval(interval);
 }, [texts.length, intervalDuration]);

 return texts[currentIndex];
};

export default useAnimatedText;
