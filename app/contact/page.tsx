import React from 'react';
import HeroSection from '../components/HeroSection';
import CoachingProgramCard from '../components/CoachingProgramCard';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const testimonials = [
  {
    id: 1,
    quote: "This program changed my life and my community!",
    author: "Student A"
  },
  {
    id: 2,
    quote: "I gained skills that I never thought I could have.",
    author: "Student B"
  },
  {
    id: 3,
    quote: "The support from the coaches was incredible.",
    author: "Student C"
  }
];

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Community Coaching Programme</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CoachingProgramCard title="Adaptable Workshops" description="Industry or community specific workshops tailored to your needs." />
          <CoachingProgramCard title="Why Us" description="Proudly South African, adaptable, and a winning combination." />
          <CoachingProgramCard title="30-Person Impact Model" description="Visual breakdown showing benefits for Intern Coach, Students, and Community." />
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;