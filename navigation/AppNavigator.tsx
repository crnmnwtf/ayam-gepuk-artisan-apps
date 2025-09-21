import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Page } from '../types';
import { AppContext } from '../context/AppContext';
import copy from '../copy';
import useSEO from '../hooks/useSEO';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import LoadingSpinner from '../components/LoadingSpinner';
import Chatbot from '../components/Chatbot';

// Icons for Tab Navigator
import { HomeIcon, MenuIcon, LocationIcon as OutletsIcon, GiftIcon as PromotionsIcon, MoreIcon } from '../components/icons/TabIcons';

// Lazy-load screen components
const HomeScreen = React.lazy(() => import('../screens/HomeScreen'));
const MenuScreen = React.lazy(() => import('../screens/MenuScreen'));
const OutletsScreen = React.lazy(() => import('../screens/OutletsScreen'));
const PromotionsScreen = React.lazy(() => import('../screens/PromotionsScreen'));
const MoreScreen = React.lazy(() => import('../screens/MoreScreen'));

const SCREENS: { [key in Page]?: React.LazyExoticComponent<React.FC<any>> } = {
  [Page.Home]: HomeScreen,
  [Page.Menu]: MenuScreen,
  [Page.Outlets]: OutletsScreen,
  [Page.Promotions]: PromotionsScreen,
  [Page.Features]: MoreScreen, // Grouping less frequent pages under 'More'
  [Page.Testimonials]: MoreScreen,
  [Page.Careers]: MoreScreen,
  [Page.About]: MoreScreen,
  [Page.Contact]: MoreScreen,
  [Page.ImageGenerator]: MoreScreen,
  [Page.ImageGallery]: MoreScreen,
};

const TAB_ITEMS = [
    { page: Page.Home, Icon: HomeIcon },
    { page: Page.Menu, Icon: MenuIcon },
    { page: Page.Outlets, Icon: OutletsIcon },
    { page: Page.Promotions, Icon: PromotionsIcon },
    { page: Page.Features, Icon: MoreIcon } // 'More' tab
];


const AppNavigator: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [showSplash, setShowSplash] = useState(true);
  const { theme, language } = useContext(AppContext);
  
  // Centralized SEO hook
  useSEO(activePage, language);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleEnter = () => setShowSplash(false);

  const ActiveScreen = SCREENS[activePage] || HomeScreen;
  
  // The 'More' tab can handle multiple sub-pages. We pass the specific page to it.
  const screenProps = activePage === Page.Features || activePage === Page.Testimonials || activePage === Page.Careers || activePage === Page.About || activePage === Page.Contact || activePage === Page.ImageGenerator || activePage === Page.ImageGallery
    ? { initialPage: activePage, setActivePage }
    : { setActivePage };


  if (showSplash) {
    return <SplashScreen onEnter={handleEnter} />;
  }

  return (
    <div className={`bg-gray-100 dark:bg-[var(--brand-black)] text-gray-800 dark:text-gray-200 min-h-screen flex flex-col font-sans transition-colors duration-300 pb-20`}>
      <Header activePage={activePage} />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex justify-center items-center h-96">
            <LoadingSpinner />
          </div>
        }>
          <ActiveScreen {...screenProps} />
        </Suspense>
      </main>
      
      {/* Bottom Tab Navigator */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[var(--brand-black)] border-t border-gray-200 dark:border-gray-700 h-16 flex justify-around items-center z-40">
        {TAB_ITEMS.map(({ page, Icon }) => {
            const t = copy.nav[page][language];
            const isMoreTab = page === Page.Features;
            const isActive = isMoreTab 
                ? [Page.Features, Page.Testimonials, Page.Careers, Page.About, Page.Contact, Page.ImageGenerator, Page.ImageGallery].includes(activePage)
                : activePage === page;

            const handleClick = () => {
                // If it's the more tab and it's already active, do nothing to stay on the subpage.
                // Otherwise, switch to the tab's default page.
                if (isMoreTab && isActive) return;
                setActivePage(page);
            };

            return (
                <button
                    key={page}
                    onClick={handleClick}
                    className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive ? 'text-[var(--brand-red)]' : 'text-gray-500 dark:text-gray-400'}`}
                >
                    <Icon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium">{isMoreTab ? (language === 'bm' ? 'Lagi' : 'More') : t}</span>
                </button>
            )
        })}
      </nav>

      <Chatbot />
    </div>
  );
};

export default AppNavigator;