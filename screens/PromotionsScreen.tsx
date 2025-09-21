import React, { useState, useEffect } from 'react';
import { PROMOTIONS } from '../constants';
import { Promotion } from '../types';
import Countdown from '../components/Countdown';
import LoadingSpinner from '../components/LoadingSpinner';
import { generatedImages } from '../database/generatedImages';
import LazyImage from '../components/LazyImage';
import SocialShareButtons from '../components/SocialShareButtons';
import MagicBento from '../components/MagicBento';

const renderPromoCard = (promo: Promotion) => {
  const displayImageUrl = generatedImages[promo.id] || promo.imageUrl;
  return (
    <>
      <div className="absolute inset-0">
         <LazyImage src={displayImageUrl} alt={`Promotional image for ${promo.title}`} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full p-5 text-white">
        <div>
           <h3 className="text-2xl font-bangers text-[var(--brand-yellow)] tracking-wide drop-shadow-md">{promo.title}</h3>
           <p className="text-gray-200 text-sm mt-1 leading-tight">{promo.description}</p>
        </div>
        <div className="space-y-3">
          {promo.countdown && <Countdown targetDate={promo.countdown} />}
           <div className="flex justify-end pt-2 border-t border-white/20">
               <SocialShareButtons 
                    url={window.location.href}
                    title={`Check out this promo from Ayam Gepuk Artisan: ${promo.title}`}
                />
           </div>
        </div>
      </div>
    </>
  );
};


const PromotionsScreen: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPromotions(PROMOTIONS);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          PROMOTIONS &amp; NEWS
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Don't miss out on our latest deals and opening announcements!</p>
      </div>
      {loading ? (
        <div className="h-96 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex justify-center">
            <MagicBento
                cardData={promotions}
                renderCardContent={renderPromoCard}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="244, 96, 54" // Brand orange
            />
        </div>
      )}
    </div>
  );
};

export default PromotionsScreen;
