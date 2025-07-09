import React, { useState } from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Stethoscope className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">Dr. Smith Dermatology</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
            <li><a href="#appointment" className="text-gray-600 hover:text-blue-600">Appointment</a></li>
            <li><a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
            <li><a href="#appointment" className="text-gray-600 hover:text-blue-600">Appointment</a></li>
            <li><a href="#blog" className="text-gray-600 hover:text-blue-600">Blog</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;