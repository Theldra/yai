import React from 'react'
import { FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
            <p className="text-muted-foreground">
              Interested in our solar solutions? Contact us to learn more about how we can help power your home or farm.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMailBulk className="h-5 w-5 text-primary" />
                <span>info@epowerconstruction.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="h-5 w-5 text-primary" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapPin className="h-5 w-5 text-primary" />
                <span>Sekondi, Western Region, Ghana</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Message" />
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;