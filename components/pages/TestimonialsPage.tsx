import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../constants';
import { Testimonial } from '../../types';
import LoadingSpinner from '../LoadingSpinner';
import MagicBento from '../MagicBento';

const renderTestimonialCard = (testimonial: Testimonial) => (
  <div className="p-6 flex flex-col items-center text-center text-white h-full justify-center">
    <div className="text-6xl text-[var(--brand-yellow)] -mt-2">“</div>
    <p className="text-lg italic text-gray-200 mt-2">
      {testimonial.quote}
    </p>
    <p className="font-bold text-[var(--brand-yellow)] mt-4">{testimonial.author}</p>
  </div>
);

const TestimonialsPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTestimonials(TESTIMONIALS);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          WHAT CUSTOMERS SAY
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Don't just take our word for it!</p>
      </div>

      {loading ? (
        <div className="h-64 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex justify-center">
          <MagicBento
            cardData={testimonials}
            renderCardContent={renderTestimonialCard}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="244, 96, 54"
          />
        </div>
      )}

      <div className="text-center mt-16">
         <h2 className="text-3xl font-bangers text-gray-800 dark:text-gray-200 mb-6">Find Us On Social Media!</h2>
         <p className="text-gray-600 dark:text-gray-400 mb-8">Check out more reviews on TikTok and Foodpanda!</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
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
