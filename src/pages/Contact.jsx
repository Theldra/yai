import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/1FJzgYA6FU/?mibextid=wwXIfr",
      platform: "Facebook"
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/epowersgh?s=21",
      platform: "X (Twitter)"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/epowersconstruction1?igsh=dTdvOWg2MTV6MGdn",
      platform: "Instagram"
    },
    {
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@epowers_?_t=ZM-8uFJyCHeUj9&_r=1",
      platform: "TikTok"
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/arahamani-tawiah-a91ba1196",
      platform: "LinkedIn"
    },
    {
      icon: <FaThreads />,
      url: "https://www.threads.net/@epowersconstruction1?igshid=NTc4MTIwNjQ2YQ==",
      platform: "Threads"
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/233592812035",
      platform: "WhatsApp"
    }
  ];

  return (
    <section id="contact" className="pt-32 pb-20 bg-blue-50" role="region" aria-label="Contact section"> 
      <div className="container mx-auto px-4">
        <div 
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-blue-800 mb-6" role="heading" aria-level="1">Contact Us</h1>
          <div className="w-40 h-2 bg-red-500 mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-blue-600">Get in touch with our team</p>
        </div>

        <div
          data-aos="fade-up"
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          role="region"
          aria-label="Contact information and form"
        >
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="md:w-2/5 bg-blue-800 p-8 text-white" role="complementary" aria-label="Contact details">
              <h2 className="text-3xl font-bold mb-8" data-aos="fade-right" role="heading" aria-level="2">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="100" role="group" aria-label="Phone contact">
                  <div className="bg-blue-700 p-3 rounded-full" aria-hidden="true">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold" role="heading" aria-level="3">Phone</h3>
                    <p className="text-blue-200">
                      <a 
                        href="tel:+233592812035" 
                        aria-label="Call us at +233 (0) 592 812 035"
                        className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 rounded"
                      >
                        +233 (0) 592 812 035
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="200" role="group" aria-label="Email contact">
                  <div className="bg-blue-700 p-3 rounded-full" aria-hidden="true">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold" role="heading" aria-level="3">Email</h3>
                    <p className="text-blue-200">
                      <a 
                        href="mailto:epowersconstruction@gmail.com" 
                        aria-label="Email us at epowersconstruction@gmail.com"
                        className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 rounded"
                      >
                        epowersconstruction@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4" data-aos="fade-right" data-aos-delay="300" role="group" aria-label="Office location">
                  <div className="bg-blue-700 p-3 rounded-full" aria-hidden="true">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold" role="heading" aria-level="3">Location</h3>
                    <p className="text-blue-200">Sekondi, Western Region, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-blue-800" data-aos="fade-up" role="region" aria-label="Social media links">
                <h3 className="font-semibold mb-6" role="heading" aria-level="3">Connect With Us</h3>
                <div className="flex flex-wrap gap-4" role="list">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-700 p-3 rounded-full hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      aria-label={`Follow us on ${social.platform}`}
                      role="listitem"
                    >
                      <span className="text-white text-xl" aria-hidden="true">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5 p-8" role="form" aria-label="Contact form">
              <h2 className="text-3xl font-bold text-blue-800 mb-8" data-aos="fade-left" role="heading" aria-level="2">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div data-aos="fade-left" data-aos-delay="100" role="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!formData.name}
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="200" role="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!formData.email}
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="300" role="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    autoComplete="off"
                    aria-required="true"
                    aria-invalid={!formData.subject}
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="400" role="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    autoComplete="off"
                    aria-required="true"
                    aria-invalid={!formData.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-red-500 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-aos="fade-up"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;