import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBook, FaChevronDown, FaChevronUp, FaQuestionCircle, FaVideo } from 'react-icons/fa';

const AdditionalResources = () => {
  const [activeSection, setActiveSection] = useState(null);

  const resources = [
    {
      id: 'manual',
      title: 'User Manual',
      icon: <FaBook className="text-2xl text-blue-600" />,
      content: [
        {
          title: 'Installation Guide',
          description: 'Step-by-step guide for installing your solar system',
          link: '#'
        },
        {
          title: 'Maintenance Tips',
          description: 'Regular maintenance procedures for optimal performance',
          link: '#'
        },
        {
          title: 'Troubleshooting',
          description: 'Common issues and their solutions',
          link: '#'
        }
      ]
    },
    {
      id: 'tutorials',
      title: 'Video Tutorials',
      icon: <FaVideo className="text-2xl text-blue-600" />,
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
      title: 'Frequently Asked Questions',
      icon: <FaQuestionCircle className="text-2xl text-blue-600" />,
      content: [
        {
          question: 'How long does installation take?',
          answer: 'Typical installation takes 1-2 days depending on system size.'
        },
        {
          question: 'What maintenance is required?',
          answer: 'Regular cleaning and annual professional inspection is recommended.'
        },
        {
          question: 'What happens during power outages?',
          answer: 'Our battery backup system ensures continuous power supply.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Resources</h2>
          <p className="text-xl text-gray-600">Everything you need to know about your solar system</p>
        </motion.div>

        <div className="space-y-6">
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setActiveSection(activeSection === resource.id ? null : resource.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  {resource.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{resource.title}</h3>
                </div>
                {activeSection === resource.id ? <FaChevronUp /> : <FaChevronDown />}
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
                    <div className="p-6 border-t border-gray-100">
                      {resource.id === 'faqs' ? (
                        <div className="space-y-4">
                          {resource.content.map((faq, index) => (
                            <div key={index} className="border-b border-gray-100 pb-4">
                              <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      ) : resource.id === 'tutorials' ? (
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
                      ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                          {resource.content.map((item, index) => (
                            <a
                              key={index}
                              href={item.link}
                              className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                            >
                              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                              <p className="text-gray-600">{item.description}</p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
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