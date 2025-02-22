import React from 'react'

const Hero = () => {
    return (
        <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Sustainable Solar Solutions for All
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Innovative price-sharing model making solar energy accessible to rural and peri-urban communities
            </p>
          </div>
          <div className="space-x-4">
            <button size="lg">Learn More</button>
            <button variant="outline" size="lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      );
    };
    

export default Hero;