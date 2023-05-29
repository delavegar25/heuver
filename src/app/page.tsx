'use client';

import useLoadingDelay from './hooks/useLoadingDelay';
import Preloader from './ui/Preloader';

export default function Home(): JSX.Element {
  const Loading = useLoadingDelay(2000);
  return <>{Loading ? <Preloader /> : null}</>;
}
