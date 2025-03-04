import React, { useEffect } from 'react';
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaThreads } from 'react-icons/fa6';
import 'aos/dist/aos.css';
import innovatorImage from '../assets/images/aramani.jpeg';
import Aos from 'aos';

const AboutInnovator = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/1FJzgYA6FU/?mibextid=wwXIfr",
      label: "Facebook Profile"
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/epowersgh?s=21",
      label: "Twitter Profile"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/epowersconstruction1?igsh=dTdvOWg2MTV6MGdn",
      label: "Instagram Profile"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/arahamani-tawiah-a91ba1196",
      label: "LinkedIn Profile"
    },
    {
      icon: <FaThreads />,
      url: "https://www.threads.net/@epowersconstruction1?igshid=NTc4MTIwNjQ2YQ==",
      label: "Threads Profile"
    }
  ];

  return (
    <section id="innovator" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Enhanced Image Section */}
            <div className="md:w-2/5" data-aos="fade-right">
              <div className="relative">
                {/* Main Image */}
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={innovatorImage} 
                    alt="Aramani Tawiah" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-800 rounded-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-red-500 rounded-3xl -z-10 opacity-50"></div>
              </div>
            </div>

            {/* Right Column - Enhanced Content */}
            <div className="md:w-3/5">
              <div className="mb-10" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Arahamani Tawiah</h2>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-1 bg-red-500"></div>
                  <p className="text-2xl text-blue-600 font-semibold">Founder & Lead Innovator</p>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-6 mb-10" data-aos="fade-up" data-aos-delay="100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <p className="text-xl">
                      <span className="font-semibold text-blue-800 block mb-2">Age</span>
                      <span className="text-gray-600">18-35</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <p className="text-xl">
                      <span className="font-semibold text-blue-800 block mb-2">Focus Area</span>
                      <span className="text-gray-600">Renewable Energy</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl col-span-2">
                    <p className="text-xl">
                      <span className="font-semibold text-blue-800 block mb-2">Location</span>
                      <span className="text-gray-600">Sekondi, Western Region, Ghana</span>
                    </p>
                  </div>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                  <p>
                    I'm Arahamani, a seasoned Renewable Energy Expert with over 6 years of experience in 
                    Electrical and Electronic Engineering. My passion for sustainable energy solutions led 
                    me to specialize in Renewable Energy Training with the prestigious National Vocational 
                    Training Institute (NVTI).
                  </p>
                  <p>
                    In 2020, I founded E-Powers Construction with a clear mission: to accelerate the adoption 
                    of solar energy in Africa, reducing emissions and power crises. Our team is dedicated to 
                    providing innovative, reliable, and efficient solar energy solutions.
                  </p>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div 
                className="flex items-center space-x-6 pt-8 border-t border-gray-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="text-xl font-semibold text-blue-800">Connect With Me:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="p-3 bg-blue-50 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 text-2xl"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
