import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import bgImage1 from '../assets/images/bground.jpg';
import bgImage2 from '../assets/images/roof.jpeg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    bgImage1,
    bgImage2
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => intervalId && clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Image Backgrounds */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div 
        data-aos="fade-up"
        className="z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          E-Powers Construction
        </h1>
        <p 
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xl mb-8"
        >
          Total Solutions
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
