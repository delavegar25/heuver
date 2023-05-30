import React from 'react';
import Navigation from '../components/navigation/Navbar';
import Hero from '../components/hero/Hero';
import Feature from '../ui/Layouts/Features';
import FeatureCtaSection from '../ui/Layouts/FeatureCTASection';
import MoreFeatureSection from '../ui/Layouts/MoreFeatureSection';

const Index: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Feature />
      <FeatureCtaSection />
      <MoreFeatureSection />
    </>
  );
};

export default Index;
