import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
import OutletsPage from './components/pages/OutletsPage';
import PromotionsPage from './components/pages/PromotionsPage';
import CareersPage from './components/pages/CareersPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import SplashScreen from './components/SplashScreen';
import { Page } from './types';
import { AppContext } from './context/AppContext';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [showSplash, setShowSplash] = useState(true);
  const { theme } = useContext(AppContext);

  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }, [theme]);
  
  const handleEnter = () => {
      setShowSplash(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        // Automatically hide splash after 3.5s if user doesn't click
        // setShowSplash(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
      return <SplashScreen onEnter={handleEnter} />;
  }


  const renderPage = () => {
    switch (activePage) {
      case Page.Menu:
        return <MenuPage />;
      case Page.Outlets:
        return <OutletsPage />;
      case Page.Promotions:
        return <PromotionsPage />;
      case Page.Careers:
        return <CareersPage />;
      case Page.Testimonials:
        return <TestimonialsPage />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.Home:
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-brand-black text-gray-800 dark:text-gray-200">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;