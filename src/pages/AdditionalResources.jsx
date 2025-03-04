import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

// Import your media files
import trainingImg from '../assets/images/practice.jpeg';
import trainingVideo from '../assets/videos/tutorial.mp4';
import maintenanceImg from '../assets/images/maintain.jpeg';
import consultationImg from '../assets/images/consult.jpg';
import { FaGraduationCap, FaLightbulb, FaTools, FaWrench } from 'react-icons/fa';

const AdditionalResources = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const services = [
    {
      id: 'training',
      title: "Training Services",
      description: "Comprehensive solar technology training programs",
      image: trainingImg,
      video: trainingVideo,
      icon: <FaGraduationCap className="text-2xl" />,
      details: {
        overview: "Professional training for solar installation and maintenance",
        features: [
          "Installation techniques",
          "System maintenance",
          "Troubleshooting skills",
          "Safety procedures"
        ],
        curriculum: [
          "Basic Solar Theory",
          "Installation Best Practices",
          "System Design",
          "Maintenance Procedures"
        ]
      }
    },
    {
      id: 'maintenance',
      title: "Maintenance Services",
      description: "Professional solar system maintenance",
      image: maintenanceImg,
      icon: <FaWrench className="text-2xl" />,
      details: {
        overview: "Comprehensive maintenance for optimal system performance",
        services: [
          "Regular system inspection",
          "Performance monitoring",
          "Cleaning services",
          "Emergency repairs"
        ],
        schedule: [
          "Monthly panel cleaning",
          "Quarterly system check",
          "Annual comprehensive service",
          "24/7 emergency support"
        ]
      }
    },
    {
      id: 'consultation',
      title: "Consultation Services",
      description: "Expert advice and system planning",
      image: consultationImg,
      icon: <FaLightbulb className="text-2xl" />,
      details: {
        overview: "Professional consultation for solar solutions",
        services: [
          "Site assessment",
          "System design",
          "Energy audit",
          "ROI analysis"
        ],
        process: [
          "Initial consultation",
          "Site evaluation",
          "Custom solution design",
          "Implementation planning"
        ]
      },
      subServices: [
        {
          icon: <FaLightbulb />,
          title: "Power Audit",
          details: "Comprehensive energy usage assessment"
        },
        {
          icon: <FaWrench />,
          title: "System Maintenance",
          details: "Regular and emergency maintenance services"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4"> 
        <div
          data-aos="fade-up"
          className="text-center mb-16" 
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
          <p className="text-xl text-blue-600">Expert solar solutions and training</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Increased image container height */}
              <div className="relative h-64 md:h-72 lg:h-80">
                {service.video ? (
                  <video
                    className="w-full h-full object-cover"
                    poster={service.image}
                    controls
                  >
                    <source src={service.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute top-4 right-4 bg-blue-800 p-3 rounded-full text-white">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>

              <div className="p-8"> {/* Increased padding */}
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-red-500 font-semibold text-lg">Learn More</span>
                    <span className="text-red-500 transform group-open:rotate-180 transition-transform duration-300">
                      <FaTools className="text-xl" />
                    </span>
                  </summary>
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-600">{service.details.overview}</p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        {service.id === 'training' ? 'Curriculum' : 'Services'}
                      </h4>
                      <ul className="grid gap-2">
                        {(service.details.services || service.details.curriculum).map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="text-red-500">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        {service.id === 'training' ? 'Features' : 'Process'}
                      </h4>
                      <ul className="grid gap-2">
                        {(service.details.features || service.details.process || service.details.schedule).map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <span className="text-red-500">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalResources;