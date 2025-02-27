import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBook, FaChevronDown, FaChevronUp, FaQuestionCircle, FaVideo } from 'react-icons/fa';

const AdditionalResources = () => {
  const [activeSection, setActiveSection] = useState(null);

  const resources = [
    {
      id: 'manual',
      title: 'User Manual',
      icon: <FaBook className="text-2xl text-green-600" />,
      content: [
        {
          title: 'Installation Guide',
          description: 'Complete installation process for your solar system',
          details: [
            {
              title: 'Site Assessment',
              steps: [
                'Roof structural evaluation',
                'Solar exposure analysis',
                'Electrical system inspection',
                'Mounting location determination'
              ]
            },
            {
              title: 'System Installation',
              steps: [
                'Mount installation',
                'Solar panel placement',
                'Wiring and connections',
                'Inverter installation',
                'Battery system setup'
              ]
            },
            {
              title: 'System Testing',
              steps: [
                'Connection verification',
                'Power output testing',
                'Backup system check',
                'Performance monitoring setup'
              ]
            }
          ]
        },
        {
          title: 'Maintenance Guide',
          description: 'Essential maintenance procedures',
          details: [
            {
              title: 'Monthly Checks',
              steps: [
                'Panel cleaning procedure',
                'Visual inspection for damage',
                'Performance monitoring review',
                'Debris removal from panels'
              ]
            },
            {
              title: 'Quarterly Maintenance',
              steps: [
                'Connection tightness check',
                'Mounting hardware inspection',
                'Inverter performance review',
                'Battery system assessment'
              ]
            },
            {
              title: 'Annual Service',
              steps: [
                'Complete system inspection',
                'Efficiency analysis',
                'Hardware replacement assessment',
                'Professional cleaning service'
              ]
            }
          ]
        },
        {
          title: 'Troubleshooting Guide',
          description: 'Common issues and solutions',
          details: [
            {
              title: 'Power Output Issues',
              steps: [
                'Check inverter display for error codes',
                'Verify all connections are secure',
                'Inspect panels for physical damage',
                'Review recent weather conditions'
              ]
            },
            {
              title: 'Battery System Problems',
              steps: [
                'Check battery charge level',
                'Verify charging cycle',
                'Inspect battery connections',
                'Monitor temperature conditions'
              ]
            },
            {
              title: 'Emergency Procedures',
              steps: [
                'System shutdown protocol',
                'Emergency contact information',
                'Safety measures',
                'Documentation requirements'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Video Tutorials',
      icon: <FaVideo className="text-2xl text-red-600" />,
      content: [
        {
          title: 'Getting Started',
          description: 'Introduction to your solar power system',
          videoUrl: 'https://youtube.com/embed/example1'
        },
        {
          title: 'System Maintenance',
          description: 'How to maintain your solar panels',
          videoUrl: 'https://youtube.com/embed/example2'
        }
      ]
    },
    {
      id: 'faqs',
      title: 'FAQs',
      icon: <FaQuestionCircle className="text-2xl text-green-600" />,
      content: [
        {
          question: "How long is the installation process?",
          answer: "A typical residential installation takes 1-2 days. Commercial installations may take 3-5 days depending on system size. Our team works efficiently to minimize disruption to your daily activities while ensuring proper installation."
        },
        {
          question: "What maintenance do I need to perform?",
          answer: "Regular maintenance includes: monthly panel cleaning to remove dust and debris, quarterly inspection of electrical connections and mounting hardware, and an annual professional checkup to ensure optimal system performance and longevity."
        },
        {
          question: "How does the backup system work?",
          answer: "Our battery backup system automatically detects power outages and switches to stored energy within milliseconds. This ensures uninterrupted power supply to essential appliances and equipment, with typical backup duration of 12-24 hours depending on usage."
        },
        {
          question: "What warranties are included?",
          answer: "We provide comprehensive coverage: 25-year warranty on solar panels (performance guarantee), 10-year warranty on inverters and batteries, and 5-year warranty on installation workmanship. All warranties are backed by our local service team."
        },
        {
          question: "What payment options are available?",
          answer: "We offer flexible payment solutions including our innovative price-sharing model, traditional financing through local banks, and direct purchase options. Government incentives and tax benefits may also be available to reduce your initial investment."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Additional Resources</h2>
          <p className="text-xl text-green-600">Complete guide to your solar power system</p>
        </motion.div>

        <div className="space-y-6">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveSection(activeSection === resource.id ? null : resource.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-green-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {resource.icon}
                  <h3 className="text-xl font-semibold text-green-800">{resource.title}</h3>
                </div>
                <span className="text-green-600">
                  {activeSection === resource.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <AnimatePresence>
                {activeSection === resource.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {resource.id === 'faqs' ? (
                      <div className="grid md:grid-cols-2 gap-6">
                        {resource.content.map((faq, index) => (
                          <details 
                            key={index} 
                            className="group bg-green-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                          >
                            <summary 
                              className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-green-100 transition-colors"
                            >
                              <span className="font-semibold text-green-800 text-lg">
                                {faq.question}
                              </span>
                              <span className="text-green-600 transform group-open:rotate-180 transition-transform duration-300">
                                <FaChevronDown />
                              </span>
                            </summary>
                            <div className="p-4 bg-white border-t border-green-100">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </details>
                        ))}
                      </div>
                    ) : resource.id === 'manual' ? (
                      <div className="grid md:grid-cols-2 gap-6">
                        {resource.content.map((item, index) => (
                          <details 
                            key={index}
                            className="bg-green-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                          >
                            <summary className="p-4 cursor-pointer hover:bg-green-100 transition-colors flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-green-800 text-lg">{item.title}</h4>
                                <p className="text-gray-600 mt-1">{item.description}</p>
                              </div>
                              <span className="text-green-600 transform group-open:rotate-180 transition-transform duration-300">
                                <FaChevronDown className="text-xl" />
                              </span>
                            </summary>
                            <div className="p-4 bg-white border-t border-green-100">
                              <div className="grid gap-4">
                                {item.details?.map((section, idx) => (
                                  <div key={idx} className="bg-green-50 p-4 rounded-lg">
                                    <h5 className="font-semibold text-green-700 mb-3">{section.title}</h5>
                                    <ul className="grid grid-cols-1 gap-2 text-gray-600">
                                      {section.steps.map((step, stepIdx) => (
                                        <li key={stepIdx} className="flex items-start space-x-2 bg-white p-2 rounded">
                                          <span className="text-green-500 mt-1">•</span>
                                          <span>{step}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </details>
                        ))}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        {resource.content.map((tutorial, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-gray-800">{tutorial.title}</h4>
                            <p className="text-gray-600 mb-2">{tutorial.description}</p>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                              <iframe
                                src={tutorial.videoUrl}
                                title={tutorial.title}
                                className="w-full h-full"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalResources;