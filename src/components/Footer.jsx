import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">About Us</h4>
            <p className="text-sm text-muted-foreground">
              E-Power Construction provides innovative solar solutions for rural and peri-urban communities.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#about" className="hover:underline">
                About
              </Link>
              <Link href="#services" className="hover:underline">
                Services
              </Link>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:underline">
                Blog
              </Link>
              <Link href="#" className="hover:underline">
                Case Studies
              </Link>
              <Link href="#" className="hover:underline">
                FAQs
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} E-Power Construction. All rights reserved.
        </div>
      </div>
  );
};

export default Footer;