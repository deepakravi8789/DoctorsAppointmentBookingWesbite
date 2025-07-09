import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'John Doe', text: "Dr. Smith's acne treatment completely transformed my skin. I feel so much more confident now!" },
  { name: 'Jane Smith', text: 'The annual skin cancer screening gave me peace of mind. Dr. Smith is thorough and professional.' },
  { name: 'Mike Johnson', text: 'I love the results of my cosmetic procedure. Dr. Smith has a great eye for natural-looking enhancements.' },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;