import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <h2>Testimonials of people working @ Manipal</h2>
      <div className='testimonialkeeper'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
