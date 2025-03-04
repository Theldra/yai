import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { MdVerified, MdWaterDrop } from 'react-icons/md';
import { FaLeaf, FaCheckCircle } from 'react-icons/fa';
import howItWorksVideo from '../assets/videos/howitworks.mp4';

const AboutProduct = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Main heading style
  const mainHeading = "text-6xl font-bold text-blue-800 mb-6";
  // Section heading style
  const sectionHeading = "text-4xl font-bold text-blue-800 mb-6";
  // Card heading style
  const cardHeading = "text-3xl font-bold text-blue-800 mb-4";
  // Body text style
  const bodyText = "text-xl text-gray-600 leading-relaxed";
  // Icon size
  const iconSize = "text-4xl";

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-8">
        {/* About Us Heading */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h1 className={mainHeading}>About Us</h1>
          <div className="w-40 h-2 bg-red-500 mx-auto"></div>
        </div>

        {/* Company Overview */}
        <div data-aos="fade-up" className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2 className={sectionHeading}>Who We Are</h2>
          <p className={bodyText}>
            E-Powers Construction was founded in 2020 with a clear mission: to accelerate the adoption of solar energy 
            in Africa, reducing emissions and power crises.
          </p>
        </div>

        {/* Mission & Vision */}
        <div data-aos="fade-up" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-blue-800 text-white rounded-2xl shadow-xl p-12 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <div className="w-24 h-1 bg-red-500 mb-6"></div>
            <p className="text-xl leading-relaxed">
              To accelerate the adoption of solar energy in Africa, reducing emissions and power crises while 
              providing innovative, reliable, and efficient solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-12 transform hover:scale-105 transition-transform duration-300">
            <h3 className={cardHeading}>Our Vision</h3>
            <div className="w-24 h-1 bg-red-500 mb-6"></div>
            <p className={bodyText}>
              To be Africa's leading provider of innovative solar energy solutions, driving the transition to a 
              greener and more energy-efficient future.
            </p>
          </div>
        </div>

        {/* Solar Solutions */}
        <div data-aos="fade-up" className="max-w-7xl mx-auto mb-16">
          <h2 className={`${sectionHeading} text-center`}>Our Solar Solutions</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {['Solar Backup Systems', 'Off-Grid Systems', 'Grid-Tied Systems'].map((system) => (
              <div key={system} className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className={cardHeading}>{system}</h3>
                <div className="w-20 h-1 bg-red-500 mb-6"></div>
                <p className={bodyText}>
                  {system === 'Solar Backup Systems' && 'Ensure uninterrupted power supply during outages'}
                  {system === 'Off-Grid Systems' && 'Independent solar solutions for remote areas'}
                  {system === 'Grid-Tied Systems' && 'Harness solar energy while connected to the grid'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Water Systems - Visual Cards */}
        <div
          data-aos="fade-up"
          className="max-w-6xl mx-auto bg-blue-50 rounded-2xl shadow-xl p-12 mb-20"
        >
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Solar-Powered Water Systems</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Agriculture', desc: 'Irrigation systems for farms' },
              { title: 'Communities', desc: 'Clean water supply systems' },
              { title: 'Industries', desc: 'Consistent water flow solutions' }
            ].map((item) => (
              <div key={item.title} 
                className="bg-white rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <MdWaterDrop className="text-5xl text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Products - Two Column Layout */}
        <div
          data-aos="fade-up"
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Services */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Services</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              {[
                'Solar Installation',
                'Solar-Powered Borehole Systems',
                'Maintenance & Repairs',
                'Power Audit & Consultation',
                'Training Services'
              ].map((service) => (
                <li key={service} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="bg-blue-50 rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Products</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              {[
                'Solar Panels',
                'Inverters',
                'Solar Batteries',
                'Cables & Rails',
                'Breakers & Connectors'
              ].map((product) => (
                <li key={product} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-red-500 flex-shrink-0" />
                  <span>{product}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How It Works Section */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-blue-50 rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">How It Works</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/path-to-thumbnail.jpg" // Optional: Add a thumbnail image
            >
              <source src={howItWorksVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Watch our short video to understand how our solar solutions work and how they can benefit your home or business. 
            From initial consultation to installation and maintenance, we guide you through every step of your solar journey.
          </p>
        </div>

        {/* Accreditations & Approvals */}
        <div data-aos="fade-up" className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h2 className={sectionHeading}>Accreditations & Approvals</h2>
          <p className={bodyText}>
            E-Powers Construction is officially recognized and approved by key regulatory bodies in Ghana:
          </p>
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              { icon: <MdVerified />, title: "Energy Commission", desc: "Certified for renewable energy solutions" },
              { icon: <MdWaterDrop />, title: "Ghana Water", desc: "Approved for water management systems" },
              { icon: <FaLeaf />, title: "EPA", desc: "Environmental Protection Agency certified" }
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center p-8 bg-blue-50 rounded-xl">
                <div className={`${iconSize} text-red-500 mb-4`}>{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{item.title}</h3>
                <p className={bodyText}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
