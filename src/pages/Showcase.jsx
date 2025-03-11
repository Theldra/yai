import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

import solarPanelImg from '../assets/images/solarpanel.webp';
import inverterImg from '../assets/images/inverters.webp';
import batteryImg from '../assets/images/battery.webp';
import cableImg from '../assets/images/cabbb.jpg';
import railsImg from '../assets/images/rrail.jpg';
import breakerImg from '../assets/images/circuitb.jpg';
import connectorImg from '../assets/images/pv-cable.webp';

// Example package images (replace these with your actual imports)
// import package1_5kva from '../assets/images/packages/1_5kva.jpg';
// import package3kva from '../assets/images/packages/3kva.jpg';
// import package5kva from '../assets/images/packages/5kva.jpg';
// import package10kva from '../assets/images/packages/10kva.jpg';
// import package15kva from '../assets/images/packages/15kva.jpg';
// import package20kva from '../assets/images/packages/20kva.jpg';
// import package30kva from '../assets/images/packages/30kva.jpg';

const Showcase = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const equipment = [
    {
      title: 'Solar Panels',
      description: 'High-efficiency monocrystalline solar panels',
      image: solarPanelImg,
      specs: [
        'Efficiency: up to 21%',
        'Power output: 400W-550W',
        'Temperature coefficient: -0.35%/°C'
      ]
    },
    {
      title: 'Inverters',
      description: 'Grid-tie and hybrid inverters',
      image: inverterImg,
      specs: [
        'Efficiency: 97-98%',
        'WiFi monitoring',
        'Multiple MPPT channels'
      ]
    },
    {
      title: 'Solar Batteries',
      description: 'Lithium-ion storage solutions',
      image: batteryImg,
      specs: [
        'Capacity: 5kWh-15kWh',
        'DoD: up to 95%',
        'Scalable design'
      ]
    },
    {
      title: 'Solar Cables',
      description: 'UV-resistant PV cables',
      image: cableImg,
      specs: [
        'Double insulated',
        'UV resistant',
        'TÜV certified'
      ]
    },
    {
      title: 'Mounting Rails',
      description: 'Aluminum mounting systems',
      image: railsImg,
      specs: [
        'Corrosion resistant',
        'Wind load tested',
        'Easy installation'
      ]
    },
    {
      title: 'Circuit Breakers',
      description: 'DC and AC protection devices',
      image: breakerImg,
      specs: [
        'Surge protection',
        'Quick disconnect',
        'Safety certified'
      ]
    },
    {
      title: 'Connectors',
      description: 'High-quality solar panel connectors',
      image: connectorImg,
      specs: [
        'IP67 waterproof rating',
        'UV resistant material',
        'Quick-lock mechanism'
      ]
    }
  ];

  const packages = [
    {
      kVA: '1.5kVA',
      image: 'path-to-1.5kva-image',
      items: [
        '2-3 LED Bulbs',
        '1-2 Fans',
        '1 Small Fridge (100L)',
        '1 Small TV (24")',
        '1 Laptop or Computer',
        '1 Phone Charging Port'
      ]
    },
    {
      kVA: '3kVA',
      image: 'path-to-3kva-image', 
      items: [
        '5-6 LED Bulbs',
        '2-3 Fans',
        '1 Medium-Sized Fridge (200L)',
        '1 Medium-Sized TV (32")',
        '2-3 Laptops or Computers',
        '2-3 Phone Charging Ports',
        '1 Small Air Conditioner (5,000BTU)'
      ]
    },
    {
      kVA: '5kVA',
      image: 'path-to-5kva-image', 
      items: [
        '10-12 LED Bulbs',
        '4-5 Fans',
        '1 Large Fridge (300L)',
        '1 Large TV (40")',
        '4-5 Laptops or Computers',
        '4-5 Phone Charging Ports',
        '1 Medium-Sized Air Conditioner (10,000BTU)',
        '1 Small Water Pump(0.5HP)'
      ]
    },
    {
      kVA: '10kVA',
      image: 'path-to-10kva-image', 
      items: [
        '20-25 LED Bulbs',
        '8-10 Fans',
        '2 Large Fridges (300L each)',
        '1 Large TV (40" each)',
        '8-10 Laptops or Computers',
        '10 Phone Charging Ports',
        '2 Medium-Sized Air Conditioner (10,000BTU each)',
        '1 Large Water Pump(2HP)'
      ]
    },
    {
      kVA: '15kVA',
      image: 'path-to-15kva-image', 
      items: [
        '30-40 LED Bulbs',
        '12-15 Fans',
        '3 Large Fridges (300L each)',
        '2 Large TVs (40" each)',
        '12-15 Laptops or Computers',
        '12-15 Phone Charging Ports',
        '3 Medium-Sized Air Conditioner (10,000BTU each)',
        '1 Large Water Pump(2HP)'
      ]
    },
    {
      kVA: '20kVA',
      image: 'path-to-20kva-image', 
      items: [
        '40-50 LED Bulbs',
        '15-20 Fans',
        '4 Large Fridges (300L each)',
        '4 Large TVs (40" each)',
        '15-20 Laptops or Computers',
        '15-20 Phone Charging Ports',
        '4 Medium-Sized Air Conditioner (10,000BTU each)',
        '1 Large Water Pump(3HP)'
      ]
    },
    {
      kVA: '30kVA',
      image: 'path-to-30kva-image', 
      items: [
        '60-80 LED Bulbs',
        '20-25 Fans',
        '6 Large Fridges (300L each)',
        '6 Large TVs (40" each)',
        '20-25 Laptops or Computers',
        '20-25 Phone Charging Ports',
        '6 Medium-Sized Air Conditioner (10,000BTU each)',
        '1 Large Water Pump(5HP)'
      ]
    }
  ];

  const [activeQuote, setActiveQuote] = useState(null);

  return (
    <section className="pt-32 pb-20 bg-blue-50" role="region" aria-label="Product showcase"> 
      <div className="container mx-auto px-4">
        {/* Our Equipments Section */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-800 mb-6" role="heading" aria-level="1">Our Equipments</h1>
          <div className="w-40 h-2 bg-red-500 mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-blue-600">Quality solar components for reliable systems</p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Solar equipment list"
        >
          {equipment.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              role="listitem"
            >
              <div className="relative h-64 md:h-72 lg:h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-8"> 
                <h2 className="text-2xl font-bold text-blue-800 mb-3" role="heading" aria-level="2">{item.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{item.description}</p>
                
                <div className="text-center">
                  <details className="inline-block">
                    <summary 
                      className="cursor-pointer text-red-500 hover:text-red-600 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                      aria-label={`Show specifications for ${item.title}`}
                    >
                      Learn More
                    </summary>
                    <div 
                      className="mt-4 space-y-3 text-left"
                      role="list"
                      aria-label={`${item.title} specifications`}
                    > 
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="text-gray-600" role="listitem">{spec}</div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Packages Section */}
        <div data-aos="fade-up" className="text-center mt-20 mb-16">
          <h2 className="text-5xl font-bold text-blue-800 mb-6" role="heading" aria-level="2">Our Packages</h2>
          <div className="w-40 h-2 bg-red-500 mx-auto mb-6" role="presentation"></div>
          <p className="text-xl text-blue-600">Ignite your energy future with our custom installation packages</p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Solar packages list"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              role="listitem"
            >
              <div className="relative h-64 md:h-72 lg:h-80">
                <img
                  src={pkg.image}
                  alt={`${pkg.kVA} Solar System Package`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-4" role="heading" aria-level="3">{pkg.kVA} SOLAR SYSTEM</h3>
                <ul 
                  className="list-disc list-inside space-y-2 text-gray-700"
                  aria-label={`${pkg.kVA} package contents`}
                >
                  {pkg.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  {activeQuote === index ? (
                    <div className="space-y-4">
                      <div 
                        className="flex justify-center space-x-4"
                        role="group"
                        aria-label="Contact options"
                      >
                        <a
                          href="https://wa.me/233592812035"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                          aria-label={`Contact via WhatsApp about ${pkg.kVA} package`}
                        >
                          <FaWhatsapp className="text-xl" aria-hidden="true" />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href="tel:+233592812035"
                          className="flex items-center space-x-2 bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          aria-label={`Call us about ${pkg.kVA} package`}
                        >
                          <FaPhoneAlt className="text-xl" aria-hidden="true" />
                          <span>Call</span>
                        </a>
                      </div>
                      <button
                        onClick={() => setActiveQuote(null)}
                        className="text-gray-600 hover:text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 rounded px-2 py-1"
                        aria-label="Cancel quote request"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveQuote(index)}
                      className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label={`Get a quote for ${pkg.kVA} package`}
                    >
                      Get a Quote
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
