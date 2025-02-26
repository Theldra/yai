import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf, FaSun, FaUsers } from 'react-icons/fa';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdSolarPower, MdWaterDrop } from 'react-icons/md';

const Showcase = () => {
  const solutions = [
    {
      title: "Residential Solar Solutions",
      description: "Transform your home into a sustainable powerhouse",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      features: [
        {
          icon: <FaSun />,
          title: "Solar Panel Installation",
          details: "High-efficiency panels with 25-year warranty"
        },
        {
          icon: <BsFillLightningFill />,
          title: "Battery Storage",
          details: "Reliable power backup during outages"
        },
        {
          icon: <FaUsers />,
          title: "Community Sharing",
          details: "Innovative price-sharing model for affordability"
        }
      ],
      benefits: [
        "Reduce electricity bills by up to 70%",
        "Zero noise pollution",
        "Minimal maintenance required",
        "Increase property value"
      ]
    },
    {
      title: "Agricultural Innovation",
      description: "Sustainable farming solutions for year-round cultivation",
      image: "https://images.unsplash.com/photo-1621274147744-cfb5694bb233?auto=format&fit=crop&q=80",
      features: [
        {
          icon: <MdWaterDrop />,
          title: "Smart Irrigation",
          details: "Water-efficient systems for optimal crop growth"
        },
        {
          icon: <MdSolarPower />,
          title: "Solar Pumps",
          details: "Reliable water supply for consistent yields"
        },
        {
          icon: <FaLeaf />,
          title: "Eco-Friendly",
          details: "Reduced carbon footprint in farming"
        }
      ],
      benefits: [
        "Year-round crop cultivation",
        "Reduced operational costs",
        "Enhanced crop yields",
        "Sustainable farming practices"
      ]
    },
    {
      title: "Commercial Solutions",
      description: "Power your business with renewable energy",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80",
      features: [
        {
          icon: <MdSolarPower />,
          title: "Industrial Scale Systems",
          details: "Custom solutions for large-scale operations"
        },
        {
          icon: <BsFillLightningFill />,
          title: "Energy Management",
          details: "Smart monitoring and optimization"
        },
        {
          icon: <FaLeaf />,
          title: "Carbon Reduction",
          details: "Meet sustainability goals effectively"
        }
      ],
      benefits: [
        "Significant cost savings",
        "Enhanced brand value",
        "Tax incentives",
        "Environmental compliance"
      ]
    },
    {
      title: "Community Projects",
      description: "Empowering communities through shared solar",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80",
      features: [
        {
          icon: <FaUsers />,
          title: "Shared Resources",
          details: "Community-based solar installations"
        },
        {
          icon: <MdSolarPower />,
          title: "Micro-grid Solutions",
          details: "Local power distribution networks"
        },
        {
          icon: <FaLeaf />,
          title: "Social Impact",
          details: "Economic benefits for entire communities"
        }
      ],
      benefits: [
        "Affordable clean energy",
        "Community development",
        "Shared maintenance",
        "Collective savings"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">Sustainable Solutions</h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Powering a healthier future with clean, renewable energy solutions for homes and agriculture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-green-50">{solution.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid gap-4">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full text-green-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-semibold text-green-800 mb-4">Key Benefits:</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-600">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;