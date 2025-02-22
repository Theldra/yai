import React from 'react'
import { FaLeaf, FaSun, FaUsers } from 'react-icons/fa';

const AboutProduct = () => {
  return (
    <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Empowering Communities Through Solar Energy
            </h2>
            <p className="text-muted-foreground">
              E-Power Construction introduces an innovative price-sharing model that makes solar energy systems
              accessible to households and farmer cooperatives. Our solution addresses the challenge of limited access
              to affordable and reliable energy in rural and peri-urban areas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaSun className="h-5 w-5 text-primary" />
                <span>Affordable solar energy systems</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="h-5 w-5 text-primary" />
                <span>Community-focused price-sharing model</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLeaf className="h-5 w-5 text-primary" />
                <span>Environmental sustainability</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Solar panels installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
  );
};

export default AboutProduct;