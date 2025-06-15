
import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroActions from './hero/HeroActions';
import HeroInfoCards from './hero/HeroInfoCards';
import HeroSocialLinks from './hero/HeroSocialLinks';

const Hero = () => {
  return (
    <section className="py-20 mb-16">
      <div className="max-w-4xl mx-auto">
        <HeroHeader />
        <HeroActions />
        <HeroInfoCards />
        <HeroSocialLinks />
      </div>
    </section>
  );
};

export default Hero;
