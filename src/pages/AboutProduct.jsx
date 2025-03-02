import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { MdVerified, MdWaterDrop } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import howItWorksVideo from '../assets/videos/howitworks.mp4';

const AboutProduct = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* About Us Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-blue-800 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Company Overview */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            E-Powers Construction was founded in 2020 with a clear mission: to accelerate the adoption of solar energy 
            in Africa, reducing emissions and power crises. Our team is dedicated to providing innovative, reliable, 
            and efficient solar energy solutions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            We are committed to delivering sustainable and cost-effective energy solutions for residential, commercial, 
            industrial, and agricultural applications. Our expertise extends to designing and installing comprehensive 
            solar power systems that meet diverse needs.
          </p>
        </div>

        {/* New System Types Section */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-blue-50 rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Solar Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Solar Backup Systems</h3>
              <p className="text-gray-600">Ensure uninterrupted power supply during outages</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Off-Grid Systems</h3>
              <p className="text-gray-600">Independent solar power solutions for remote areas or energy independence</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Grid-Tied Systems</h3>
              <p className="text-gray-600">Harness solar energy while still connected to the grid</p>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">System Features</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-2">
                <span className="text-red-500">•</span>
                <span className="text-gray-600">Real-time monitoring systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-red-500">•</span>
                <span className="text-gray-600">Remote access via mobile app</span>
              </li>
            </ul>
          </div>
        </div>

        {/* New Water Systems Section */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Solar-Powered Water Systems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Agriculture</h3>
              <p className="text-gray-600">Irrigation systems for farms and rural communities</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Communities</h3>
              <p className="text-gray-600">Clean water supply for residential areas</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Companies</h3>
              <p className="text-gray-600">Consistent water flow for industrial production</p>
            </div>
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

        {/* Our Mission and Vision */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-blue-50 rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission & Vision</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-800">Our Mission</h3>
              <p className="text-lg text-gray-600 mt-2">
                To accelerate the adoption of solar energy in Africa, reducing emissions and power crises while 
                providing innovative, reliable, and efficient solar energy solutions that enhance livelihoods 
                and foster economic growth.
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-800">Our Vision</h3>
              <p className="text-lg text-gray-600 mt-2">
                To be the leading provider of innovative solar energy solutions, driving the transition to a 
                greener and more energy-efficient future across Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Services</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
            <li>Solar Installation</li>
            <li>Solar-Powered Borehole Systems for Domestic & Industrial Use</li>
            <li>Maintenance & Repairs</li>
            <li>Power Audit & Consultation</li>
            <li>Training Services</li>
            <li>Sales of Solar Products & Accessories</li>
          </ul>
        </div>

        {/* Our Products */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-blue-50 rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Products</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
            <li>Solar Panels</li>
            <li>Inverters</li>
            <li>Solar Batteries</li>
            <li>Cables & Rails</li>
            <li>Breakers & Connectors</li>
          </ul>
        </div>

        {/* Accreditations & Approvals */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Accreditations & Approvals</h2>
          <p className="text-lg text-gray-600 mb-6">
            E-Powers Construction is officially recognized and approved by key regulatory bodies in Ghana:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
              <MdVerified className="text-3xl text-red-500 mb-3" />
              <h3 className="font-semibold text-blue-800 text-lg mb-2">Energy Commission</h3>
              <p className="text-gray-600 text-center text-sm">Certified for renewable energy solutions</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
              <MdWaterDrop className="text-3xl text-red-500 mb-3" />
              <h3 className="font-semibold text-blue-800 text-lg mb-2">Ghana Water</h3>
              <p className="text-gray-600 text-center text-sm">Approved for water management systems</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
              <FaLeaf className="text-3xl text-red-500 mb-3" />
              <h3 className="font-semibold text-blue-800 text-lg mb-2">EPA</h3>
              <p className="text-gray-600 text-center text-sm">Environmental Protection Agency certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
