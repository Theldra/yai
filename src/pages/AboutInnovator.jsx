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
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Image */}
            <div className="md:w-1/3" data-aos="fade-right">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={innovatorImage} 
                  alt="Aramani Tawiah" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="md:w-2/3">
              <div className="mb-8" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Arahamani Tawiah</h2>
                <p className="text-xl text-gray-600">Founder & Lead Innovator</p>
              </div>

              <div className="space-y-4 mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold">Age:</span> 18-35
                  </p>
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold">Focus Area:</span> Renewable Energy
                  </p>
                  <p className="text-gray-600 text-lg col-span-2">
                    <span className="font-semibold">Location:</span> Sekondi, Western Region, Ghana
                  </p>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mt-6">
                  I'm Arahamani, a seasoned Renewable Energy Expert with over 6 years of experience in 
                  Electrical and Electronic Engineering. My passion for sustainable energy solutions led 
                  me to specialize in Renewable Energy Training with the prestigious National Vocational 
                  Training Institute (NVTI).
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  In 2020, I founded E-Powers Construction with a clear mission: to accelerate the adoption 
                  of solar energy in Africa, reducing emissions and power crises. Our team is dedicated to 
                  providing innovative, reliable, and efficient solar energy solutions.
                </p>
              </div>

              {/* Social Links */}
              <div 
                className="flex space-x-6 pt-6 border-t border-gray-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="text-blue-600 hover:text-red-500 transition-colors text-xl"
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
    </section>
  );
};

export default AboutInnovator;
