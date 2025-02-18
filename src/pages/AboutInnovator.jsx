import React from 'react'

const AboutInnovator = () => {
  return (
    <div className="container px-4 md:px-6">
    <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=400" alt="Innovator portrait" fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet the Innovator</h2>
        <p className="text-muted-foreground">
          Aramani Tawiah, from Sekondi, Western Region, is a visionary entrepreneur passionate about bringing
          sustainable energy solutions to underserved communities. With a deep understanding of rural and peri-urban
          needs, he developed E-Power Construction's innovative price-sharing model.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Based in Sekondi, Western Region</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Young innovator (18-35)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutInnovator;