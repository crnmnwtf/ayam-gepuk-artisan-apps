import React, { useState, useContext } from 'react';
import { Page, Language } from '../types';
import { AppContext } from '../context/AppContext';
import copy from '../copy';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';


interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, activePage, onClick, children }) => {
  const isActive = activePage === page;
  return (
    <button
      onClick={() => onClick(page)}
      className={`px-3 py-2 rounded-md text-sm sm:text-base font-bold transition-colors duration-300 ${
        isActive
          ? 'bg-[var(--brand-yellow)] text-red-700'
          : 'text-gray-700 dark:text-gray-300 hover:bg-yellow-400/20'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage } = useContext(AppContext);
  
  const t = (pageKey: Page) => copy.nav[pageKey][language];

  const navItems = [Page.Home, Page.Menu, Page.Outlets, Page.Promotions, Page.Testimonials, Page.Careers, Page.About, Page.Contact];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };
  
  const handleLangChange = (lang: Language) => {
      setLanguage(lang);
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setActivePage(Page.Home)}>
             <img src={`${IMG_BASE_URL}logo-yellow-bg.png`} alt="Ayam Gepuk Artisan Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((page) => (
              <NavLink key={page} page={page} activePage={activePage} onClick={handleNavClick}>
                {t(page)}
              </NavLink>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
             {/* Language Toggle */}
            <div className="hidden md:flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-0.5">
                <button onClick={() => handleLangChange('bm')} className={`px-2 py-0.5 text-xs font-bold rounded-full ${language === 'bm' ? 'bg-[var(--brand-red)] text-white' : 'text-gray-600 dark:text-gray-300'}`}>BM</button>
                <button onClick={() => handleLangChange('en')} className={`px-2 py-0.5 text-xs font-bold rounded-full ${language === 'en' ? 'bg-[var(--brand-red)] text-white' : 'text-gray-600 dark:text-gray-300'}`}>EN</button>
            </div>
            
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-[var(--brand-red)] focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((page) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activePage === page
                    ? 'bg-[var(--brand-yellow)] text-red-700'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-yellow-400/20'
                }`}
              >
                {t(page)}
              </button>
            ))}
             <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 mx-3 mt-2">
                <button onClick={() => handleLangChange('bm')} className={`w-1/2 py-1 text-sm font-bold rounded-full ${language === 'bm' ? 'bg-[var(--brand-red)] text-white' : 'text-gray-600 dark:text-gray-300'}`}>Bahasa Melayu</button>
                <button onClick={() => handleLangChange('en')} className={`w-1/2 py-1 text-sm font-bold rounded-full ${language === 'en' ? 'bg-[var(--brand-red)] text-white' : 'text-gray-600 dark:text-gray-300'}`}>English</button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;