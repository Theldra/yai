import React, { useEffect } from 'react';
import { FaBatteryFull, FaBolt, FaCheckCircle, FaPlug, FaSun } from 'react-icons/fa';
import { MdCable, MdSolarPower } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';
import solarPanelImg from '../assets/images/solar-panel.jpg';
import inverterImg from '../assets/images/inverter.jpg';
import batteryImg from '../assets/images/battery.jpg';
import cableImg from '../assets/images/cable.jpg';
import railsImg from '../assets/images/rails.jpg';
import breakerImg from '../assets/images/breaker.jpg';
import connectorImg from '../assets/images/connector.jpg';

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
      icon: <MdSolarPower />,
      specs: [
        "Efficiency: up to 21%",
        "Warranty: 25 years",
        "Power output: 400W-550W",
        "Temperature coefficient: -0.35%/°C"
      ]
    },
    {
      title: "Inverters",
      description: "Grid-tie and hybrid inverters",
      image: inverterImg,
      icon: <FaBolt />,
      specs: [
        "Efficiency: 97-98%",
        "WiFi monitoring",
        "Multiple MPPT channels",
        "Extended warranty available"
      ]
    },
    {
      title: "Solar Batteries",
      description: "Lithium-ion storage solutions",
      image: batteryImg,
      icon: <FaBatteryFull />,
      specs: [
        "Capacity: 5kWh-15kWh",
        "10-year warranty",
        "DoD: up to 95%",
        "Scalable design"
      ]
    },
    {
      title: "Solar Cables",
      description: "UV-resistant PV cables",
      image: cableImg,
      icon: <MdCable />,
      specs: [
        "Double insulated",
        "UV resistant",
        "Temperature range: -40°C to 90°C",
        "TÜV certified"
      ]
    },
    {
      title: "Mounting Rails",
      description: "Aluminum mounting systems",
      image: railsImg,
      icon: <FaSun />,
      specs: [
        "Corrosion resistant",
        "Wind load tested",
        "Easy installation",
        "10-year warranty"
      ]
    },
    {
      title: "Circuit Breakers",
      description: "DC and AC protection devices",
      image: breakerImg,
      icon: <FaPlug />,
      specs: [
        "Surge protection",
        "Temperature monitoring",
        "Quick disconnect",
        "Safety certified"
      ]
    },
    {
      title: "MC4 Connectors",
      description: "High-quality solar panel connectors",
      image: connectorImg,
      icon: <FaPlug />,
      specs: [
        "IP67 waterproof rating",
        "UV resistant material",
        "Quick-lock mechanism",
        "TÜV certified safety"
      ]
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Equipment</h2>
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
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-800 p-2 rounded-full text-white">
                  {item.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="space-y-2">
                  {item.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <FaCheckCircle className="text-red-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{spec}</span>
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