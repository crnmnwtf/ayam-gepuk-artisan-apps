import React from 'react';
import { PROMOTIONS } from '../../constants';
import Countdown from '../Countdown';

const PromotionsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          PROMOTIONS &amp; NEWS
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Don't miss out on our latest deals and opening announcements!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {PROMOTIONS.map(promo => (
          <div key={promo.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
            <div className="relative">
                <img src={promo.imageUrl} alt={promo.title} className="w-full h-auto object-contain"/>
                {promo.countdown && (
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50">
                        <Countdown targetDate={promo.countdown} />
                    </div>
                )}
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bangers text-[var(--brand-red)]">{promo.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mt-2">{promo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
