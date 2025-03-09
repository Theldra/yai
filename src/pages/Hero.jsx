import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import bgImage1 from '../assets/images/solarr.jpg';
import bgImage2 from '../assets/images/service-2.jpg';
import bgImage3 from '../assets/images/engineer.jpg';
import bgImage4 from '../assets/images/sunpanel.jpg';
import bgImage5 from '../assets/images/onsite.jpg';
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

  const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

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
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark overlay for better text visibility */}
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content Section */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div 
          data-aos="fade-up"
          className="text-center text-white px-8 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {text}
            <span className="text-red-500 animate-pulse">|</span>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-2xl mb-8 text-gray-200"
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
    </div>
  );
};

export default Hero;
