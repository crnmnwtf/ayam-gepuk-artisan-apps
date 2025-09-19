import React, { useContext } from 'react';
import { Page } from '../../types';
import { MENU_ITEMS } from '../../constants';
import MenuItemCard from '../MenuItemCard';
import { AppContext } from '../../context/AppContext';
import copy from '../../copy';

interface HomePageProps {
  setActivePage: (page: Page) => void;
}

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const { language } = useContext(AppContext);
  const t = (key: keyof typeof copy.homepage) => copy.homepage[key][language];

  const featuredItems = MENU_ITEMS.filter(item => item.id === 'k1' || item.id === 'c1' || item.id === 's5');

  return (
    <div className="relative">
      {/* Floating Promo Badges */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-3">
        <a href="#" className="bg-yellow-400 text-red-700 font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform animate-pulse">
            🔥 RM8.99 Set – Hari Ini!
        </a>
         <a href="#" className="bg-pink-500 text-white font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform">
            🛵 Delivery via Foodpanda
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            poster={`${IMG_BASE_URL}ayam-gepuk-on-table.jpg`}
        >
            {/* Add a real video source here if available */}
            {/* <source src="path/to/video.mp4" type="video/mp4" /> */}
        </video>
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bangers text-[var(--brand-red)] mb-2">{t('fanFavourites')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">{t('fanFavDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
           <button 
            onClick={() => setActivePage(Page.Menu)}
            className="mt-12 px-8 py-3 bg-[var(--brand-red)] text-white font-bold text-lg rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {t('viewMenu')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
