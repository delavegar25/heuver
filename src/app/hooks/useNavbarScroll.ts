import { useEffect, useState } from "react";

const useNavbarScroll = (): boolean => {
 const [isScrolled, setIsScrolled] = useState<boolean>(false);

 useEffect(() => {
  const handleScroll = () => {
   const scrollPosition = window.scrollY;
   if (scrollPosition > 0) {
    setIsScrolled(true);
   } else {
    setIsScrolled(false);
   }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return isScrolled;
};

export default useNavbarScroll;