import React, { useEffect } from 'react';
import { FaCheckCircle, FaLeaf, FaLightbulb, FaSun, FaUsers } from 'react-icons/fa';
import { MdVerified, MdWaterDrop} from 'react-icons/md';
import 'aos/dist/aos.css';
import Aos from 'aos';

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

        {/* Initiative Overview */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">E-Power Construction Initiative</h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg leading-relaxed">
              E-Power Construction addresses the critical challenge of limited access to affordable and reliable 
              energy in rural and peri-urban areas of Ghana.
            </p>
            <p className="text-lg leading-relaxed">
              Through our innovative price-sharing model, we enable households to access solar energy systems 
              affordably. This model extends to farmer cooperatives, providing solar-powered irrigation systems 
              that ensure year-round cultivation.
            </p>
            <div className="border-l-4 border-red-500 pl-4 my-6 py-2">
              <p className="text-xl italic text-blue-800">
                "Our mission is to transform rural energy access while promoting sustainable agricultural 
                practices through renewable energy solutions."
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 mt-6">
              <h3 className="font-semibold text-blue-800 text-xl mb-4">Key Impact Areas:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center space-x-3">
                  <FaLightbulb className="text-red-500" />
                  <span>Affordable solar energy access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdWaterDrop className="text-red-500" />
                  <span>Year-round water supply</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUsers className="text-red-500" />
                  <span>Community empowerment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaLeaf className="text-red-500" />
                  <span>Environmental sustainability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Health & Environmental Impact */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Health & Environmental Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-700">Health Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Improved Air Quality:</span>
                    <p className="text-gray-600 mt-1">Elimination of harmful emissions from fossil fuel burning, reducing respiratory health risks.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Clean Water Access:</span>
                    <p className="text-gray-600 mt-1">Solar-powered water purification systems ensure access to clean, safe drinking water.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Food Security:</span>
                    <p className="text-gray-600 mt-1">Year-round cultivation capabilities improve nutrition and food availability.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-700">Environmental Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Carbon Reduction:</span>
                    <p className="text-gray-600 mt-1">Each installation reduces CO2 emissions by up to 3,000 kg annually.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Water Conservation:</span>
                    <p className="text-gray-600 mt-1">Smart irrigation systems reduce water consumption by up to 40%.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Ecosystem Protection:</span>
                    <p className="text-gray-600 mt-1">Reduced reliance on fossil fuels helps preserve natural habitats.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accreditations & Approvals */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Accreditations & Approvals</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 mb-6">
              E-Power Construction has received official recognition and approval from key regulatory bodies in Ghana:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col items-center p-6 bg-blue-50 rounded-xl"
              >
                <MdVerified className="text-3xl text-red-500 mb-3" />
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Energy Commission</h3>
                <p className="text-gray-600 text-center text-sm">
                  Licensed and certified for renewable energy solutions
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col items-center p-6 bg-blue-50 rounded-xl"
              >
                <MdWaterDrop className="text-3xl text-red-500 mb-3" />
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Ghana Water</h3>
                <p className="text-gray-600 text-center text-sm">
                  Approved for water management systems
                </p>
              </div>

              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col items-center p-6 bg-blue-50 rounded-xl"
              >
                <FaLeaf className="text-3xl text-red-500 mb-3" />
                <h3 className="font-semibold text-blue-800 text-lg mb-2">EPA</h3>
                <p className="text-gray-600 text-center text-sm">
                  Environmental Protection Agency certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Cards */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar solutions designed for homes and agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaSun className="text-3xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Solar Home Systems</h3>
            <p className="text-gray-600">
              Affordable solar solutions for household energy needs through our unique price-sharing model.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MdWaterDrop className="text-3xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Irrigation Systems</h3>
            <p className="text-gray-600">
              Solar-powered irrigation solutions for farmer cooperatives ensuring year-round cultivation.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaLeaf className="text-3xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Reducing reliance on fossil fuels while promoting environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;