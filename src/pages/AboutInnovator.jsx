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
    <section id="innovator" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-6 mb-8" data-aos="fade-right">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <img 
                    src={innovatorImage} 
                    alt="Aramani Tawiah" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Aramani Tawiah</h2>
                  <p className="text-xl text-gray-600">Founder & Lead Innovator</p>
                </div>
              </div>
              <div className="space-y-4 mb-8" data-aos="fade-up" data-aos-delay="100">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Age:</span> 18-35
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Location:</span> Sekondi, Western Region, Ghana
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Focus Area:</span> Renewable Energy & Agricultural Innovation
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  A passionate innovator dedicated to bringing sustainable energy solutions to rural communities 
                  through innovative price-sharing models and solar-powered systems.
                </p>
              </div>
            </div>
            <div 
              className="flex space-x-6 justify-center pt-6 border-t border-gray-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="text-blue-600 hover:text-red-500 transition-colors"
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
    </section>
  );
};

export default AboutInnovator;