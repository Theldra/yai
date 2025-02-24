import React from 'react'
import Hero from './Hero';
import AboutProduct from './AboutProduct';
import AboutInnovator from './AboutInnovator';
import Showcase from './Showcase';
import AdditionalResources from './AdditionalResources';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutProduct />
      <AboutInnovator />
      <Showcase />
      <AdditionalResources />
      <Contact />
    </div>
  );
};

export default Home;