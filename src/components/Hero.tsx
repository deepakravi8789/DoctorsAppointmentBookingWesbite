import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <img 
            src="https://i.postimg.cc/rscXLPXg/istockphoto-177373093-612x612.jpg" 
            alt="Dr. Smith" 
            className="rounded-full w-48 h-48 md:w-full md:h-auto mx-auto shadow-lg animate-float"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Expert Dermatology Care for Your Skin</h1>
          <p className="text-lg md:text-xl mb-8">Discover the path to healthy, radiant skin with Dr. Smith's personalized treatments.</p>
          <a href="#appointment" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Book an Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;