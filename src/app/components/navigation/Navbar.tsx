import { Popover } from '@headlessui/react';
import PopoverComponent from './PopoverComponent';

import TransitionFragment from './TransitionFragment';
import useNavbarScroll from '@/app/hooks/useNavbarScroll';

const Navigation: React.FC<{}> = () => {
  const isScrolled = useNavbarScroll();
  const PopoverClass = `mb-2 shadow-xl sticky top-0 z-50 ${
    isScrolled
      ? 'bg-transparent backdrop-filter backdrop-blur-md'
      : 'dark:bg-darkThemeGray bg-white dark:shadow-2xl'
  }`;
  return (
    <>
      <Popover className={PopoverClass}>
        <PopoverComponent />
        <TransitionFragment />
      </Popover>
    </>
  );
};

export default Navigation;
