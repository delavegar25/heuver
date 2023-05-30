import { Popover } from '@headlessui/react';
import PopoverComponent from './PopoverComponent';

import TransitionFragment from './TransitionFragment';
import useNavbarScroll from '@/app/hooks/useNavbarScroll';

const Navigation: React.FC<{}> = () => {
  const isScrolled = useNavbarScroll();
  const PopoverClass = `mb-2 sticky top-0 z-50 ${
    isScrolled
      ? 'bg-transparent shadow-xl backdrop-filter backdrop-blur-md'
      : 'bg-transparent'
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
