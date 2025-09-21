import React, { useContext, useState, useEffect } from 'react';
import { Page, MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';
import { AppContext } from '../context/AppContext';
import copy from '../copy';
import LoadingSpinner from '../components/LoadingSpinner';
import LazyVideo from '../components/LazyVideo';
import SocialShareButtons from '../components/SocialShareButtons';
import MagicBento from '../components/MagicBento';
import LazyImage from '../components/LazyImage';
import { generatedImages } from '../database/generatedImages';

interface HomeScreenProps {
  setActivePage: (page: Page) => void;
}

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

const renderMenuItemCard = (item: MenuItem) => {
    const displayImageUrl = generatedImages[item.id] || item.imageUrl;
    return (
        <div className="absolute inset-0">
            <LazyImage src={displayImageUrl} alt={`Image of ${item.name}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5 text-white">
                 <div>
                    <h3 className="text-xl font-bangers text-[var(--brand-yellow)] tracking-wide drop-shadow-md">{item.name}</h3>
                    <p className="text-gray-200 text-xs mt-1 leading-tight">{item.description}</p>
                </div>
                <div className="mt-2 text-right">
                    {item.price2pcs ? (
                        <div className="text-white">
                            <span className="text-sm font-bold">RM{item.price.toFixed(2)}</span><span className="text-xs text-gray-400"> (1pc)</span>
                            <span className="mx-1">/</span>
                            <span className="text-sm font-bold">RM{item.price2pcs.toFixed(2)}</span><span className="text-xs text-gray-400"> (2pcs)</span>
                        </div>
                    ) : (
                        <span className="text-lg font-bold text-white">RM{item.price.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};


const HomeScreen: React.FC<HomeScreenProps> = ({ setActivePage }) => {
  const { language } = useContext(AppContext);
  const t = (key: keyof typeof copy.homepage) => copy.homepage[key][language];

  const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const items = MENU_ITEMS.filter(item => ['k1', 'c1', 'k3', 's2', 's4', 's5'].includes(item.id));
      setFeaturedItems(items);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <LazyVideo 
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            poster={`${IMG_BASE_URL}ayam-gepuk-on-table.webp`}
        >
        </LazyVideo>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 p-4">
          <h1 className="text-5xl md:text-7xl font-bangers tracking-wider text-white" style={{ textShadow: '4px 4px 0px rgba(255, 69, 0, 0.8)' }}>
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-semibold text-red-600 bg-white/90 px-4 py-1 rounded-full inline-block">
            {t('heroSubtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
             <button 
                onClick={() => window.open('https://wa.me/601156277251', '_blank')}
                className="px-8 py-3 bg-[var(--brand-yellow)] text-red-700 font-bold text-lg rounded-full hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                {t('orderNow')}
              </button>
               <button 
                onClick={() => setActivePage(Page.Outlets)}
                className="px-8 py-3 bg-white text-red-700 font-bold text-lg rounded-full hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                {t('findOutlet')}
              </button>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bangers text-[var(--brand-red)] mb-2">{t('fanFavourites')}</h2>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-8">{t('fanFavDesc')}</p>
          {loading ? (
            <div className="h-96 flex justify-center items-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="flex justify-center">
                <MagicBento
                    cardData={featuredItems}
                    renderCardContent={renderMenuItemCard}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                />
            </div>
          )}
           <button 
            onClick={() => setActivePage(Page.Menu)}
            className="mt-12 px-8 py-3 bg-[var(--brand-red)] text-white font-bold text-lg rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {t('viewMenu')}
          </button>
           <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 max-w-sm mx-auto flex justify-center">
            <SocialShareButtons 
              url={window.location.href} 
              title="Check out Ayam Gepuk Artisan! The True Taste of Ayam Gepuk!" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
