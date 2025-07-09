import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Smith Dermatology</h3>
            <p className="mb-2 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              123 Main St, Anytown, USA 12345
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              (555) 123-4567
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              info@drsmithdermatology.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#appointment" className="hover:text-blue-400">Book Appointment</a></li>
              <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-400"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-400"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Dr. Smith Dermatology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;