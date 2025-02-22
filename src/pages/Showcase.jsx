import React from 'react'
import { FaLeaf, FaSun } from 'react-icons/fa';

const Showcase = () => {
  return (
    <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Solutions</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Comprehensive solar energy solutions for households and agricultural needs
          </p>
        </div>
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6 space-y-2">
              <FaSun className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Household Solar Systems</h3>
              <p className="text-muted-foreground">
                Affordable solar energy systems for homes with flexible payment options through our price-sharing model.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-bold">Solar Irrigation</h3>
              <p className="text-muted-foreground">
                Solar-powered irrigation systems for farmer cooperatives, ensuring year-round water access for crops.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <FaLeaf className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Sustainable Solutions</h3>
              <p className="text-muted-foreground">
                Eco-friendly energy alternatives reducing reliance on grid electricity and fossil fuels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default Showcase;