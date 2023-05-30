import React from 'react';
import Navigation from '../components/navigation/Navbar';
import Hero from '../components/hero/Hero';
import Feature from '../ui/Layouts/Features';
import FeatureCtaSection from '../ui/Layouts/FeatureCTASection';

const Index: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Feature />
      <FeatureCtaSection />
    </>
  );
};

export default Index;
