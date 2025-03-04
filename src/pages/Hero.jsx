import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import bgImage1 from '../assets/images/solarr.jpg';
import bgImage2 from '../assets/images/service-2.jpg';
import bgImage3 from '../assets/images/engineer.jpg';
import bgImage4 from '../assets/images/panels.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const texts = ['Reliable Energy,', 'Brighter Communities'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 2000;

  const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4];

  // Typewriter Effect
  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (text !== currentText) {
          setText(currentText.substring(0, text.length + 1));
          return typingSpeed;
        }
        setIsDeleting(true);
        return pauseDuration;
      }

      if (text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        return typingSpeed;
      }

      setText(text.substring(0, text.length - 1));
      return deletingSpeed;
    };

    const timer = setTimeout(handleTyping, 
      isDeleting ? deletingSpeed : 
      text === currentText ? pauseDuration : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  // Image Slider Effect
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
    <div className="relative h-screen overflow-hidden flex">
      {/* Content Section - Left Side */}
      <div className="w-1/2 bg-blue-900 flex items-center justify-center relative z-20">
        <div 
          data-aos="fade-right"
          className="text-white px-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {text}
            <span className="text-red-500 animate-pulse">|</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-2xl mb-8 text-blue-200"
          >
            Empowering Africa through sustainable solar solutions
          </p>
          <Link
            to="/showcase"
            data-aos="fade-up"
            data-aos-delay="600"
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-red-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Moon-shaped Separator */}
      <div className="absolute h-full w-32 left-1/2 transform -translate-x-1/2 z-10">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="rgb(30, 58, 138)"
        >
          <path
            d="M0,0 
               C35,25 35,75 0,100
               L50,100
               C85,75 85,25 50,0
               Z"
            className="transition-all duration-700 ease-in-out"
          />
        </svg>
      </div>

      {/* Image Section - Right Side */}
      <div className="w-1/2 relative overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-blue-900/30 z-10" /> {/* Blue overlay */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
