import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Testimonial } from '../../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
    <div className="text-6xl text-[var(--brand-yellow)] -mt-2">“</div>
    <p className="text-lg italic text-gray-700 dark:text-gray-300 mt-2">
      {testimonial.quote}
    </p>
    <p className="font-bold text-[var(--brand-red)] mt-4">{testimonial.author}</p>
  </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          WHAT CUSTOMERS SAY
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Don't just take our word for it!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {TESTIMONIALS.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="text-center mt-16">
         <h2 className="text-4xl font-bangers text-gray-800 dark:text-gray-200 mb-6">Find Us On Social Media!</h2>
         <p className="text-gray-600 dark:text-gray-400 mb-8">Check out more reviews on TikTok and Foodpanda!</p>
          <div className="flex justify-center space-x-8">
              <div className="text-center">
                <p className="font-bold text-lg">TikTok Reviews</p>
                <div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-2">
                    <p className="text-sm text-gray-500">#AyamGepukArtisan</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">Foodpanda Ratings</p>
                 <div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mt-2">
                    <p className="text-sm text-gray-500">Avg. 4.8 ⭐</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
