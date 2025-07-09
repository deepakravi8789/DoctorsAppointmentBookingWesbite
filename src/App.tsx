import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <AppointmentForm />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;