import React from 'react';
import { Zap, Sun, Sparkles } from 'lucide-react';

const services = [
  { icon: Zap, title: 'Acne Treatment', description: 'Effective solutions for all types of acne.' },
  { icon: Sun, title: 'Skin Cancer Screening', description: 'Early detection and prevention of skin cancer.' },
  { icon: Sparkles, title: 'Cosmetic Dermatology', description: 'Enhance your natural beauty with our cosmetic procedures.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;