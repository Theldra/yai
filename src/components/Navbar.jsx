import React from 'react'

const Navbar = () => {
  return (
    <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">E-Power Construction</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="#innovator" className="text-sm font-medium hover:underline underline-offset-4">
            Innovator
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex">Get Started</Button>
      </div>
  );
};

export default Navbar;