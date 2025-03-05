import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import solarPanelImg from '../assets/images/solarpanel.webp';
import inverterImg from '../assets/images/inverters.webp';
import batteryImg from '../assets/images/battery.webp';
import cableImg from '../assets/images/cabbb.jpg';
import railsImg from '../assets/images/rrail.jpg';
import breakerImg from '../assets/images/circuitb.jpg';
import connectorImg from '../assets/images/pv-cable.webp';

const Showcase = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const equipment = [
    {
      title: "Solar Panels",
      description: "High-efficiency monocrystalline solar panels",
      image: solarPanelImg,
      specs: [
        "Efficiency: up to 21%",
        "Power output: 400W-550W",
        "Temperature coefficient: -0.35%/°C"
      ]
    },
    {
      title: "Inverters",
      description: "Grid-tie and hybrid inverters",
      image: inverterImg,
      specs: [
        "Efficiency: 97-98%",
        "WiFi monitoring",
        "Multiple MPPT channels"
      ]
    },
    {
      title: "Solar Batteries",
      description: "Lithium-ion storage solutions",
      image: batteryImg,
      specs: [
        "Capacity: 5kWh-15kWh",
        "DoD: up to 95%",
        "Scalable design"
      ]
    },
    {
      title: "Solar Cables",
      description: "UV-resistant PV cables",
      image: cableImg,
      specs: [
        "Double insulated",
        "UV resistant",
        "TÜV certified"
      ]
    },
    {
      title: "Mounting Rails",
      description: "Aluminum mounting systems",
      image: railsImg,
      specs: [
        "Corrosion resistant",
        "Wind load tested",
        "Easy installation"
      ]
    },
    {
      title: "Circuit Breakers",
      description: "DC and AC protection devices",
      image: breakerImg,
      specs: [
        "Surge protection",
        "Quick disconnect",
        "Safety certified"
      ]
    },
    {
      title: "Connectors",
      description: "High-quality solar panel connectors",
      image: connectorImg,
      specs: [
        "IP67 waterproof rating",
        "UV resistant material",
        "Quick-lock mechanism"
      ]
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-blue-50"> 
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-800 mb-6">Our Equipments</h2>
          <div className="w-40 h-2 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-600">Quality solar components for reliable systems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 md:h-72 lg:h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-8"> 
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{item.description}</p>
                
                <div className="space-y-3"> 
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <FaCheckCircle className="text-red-500 flex-shrink-0 text-lg" />
                      <span className="text-gray-600">{spec}</span>
                    </div>
                  ))}
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