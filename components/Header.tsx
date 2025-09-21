import React, { useState, useContext } from 'react';
import { Page, Language } from '../types';
import { AppContext } from '../context/AppContext';
import copy from '../copy';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';


interface HeaderProps {
  activePage: Page;
}

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';


const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const { theme, toggleTheme, language, setLanguage } = useContext(AppContext);
  
  const t = (pageKey: Page) => copy.nav[pageKey][language];
  
  const handleLangChange = (lang: Language) => {
      setLanguage(lang);
  }

  return (
    <header className="bg-white dark:bg-[var(--brand-black)] shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
             <img src={`${IMG_BASE_URL}logo-yellow-bg.webp`} alt="Ayam Gepuk Artisan Logo" className="h-16 w-auto" />
          </div>

          {/* Page Title (Mobile) */}
           <div className="md:hidden">
              <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">{t(activePage)}</h1>
           </div>


          {/* Controls */}
          <div className="flex items-center space-x-2">
             {/* Language Toggle */}
            <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-0.5">
                <button onClick={() => handleLangChange('bm')} className={`px-2 py-0.5 text-xs font-bold rounded-full ${language === 'bm' ? 'bg-[var(--brand-red)] text-white' : 'text-gray-600 dark:text-gray-300'}`}>BM</button>
                <button onClick={() => handleLangChange('en')} className={`px-2 py-0.5 text-xs font-bold rounded-full ${language === 'en' ? 'bg-[var(--brand-red)] text-white' : 'text-gray-600 dark:text-gray-300'}`}>EN</button>
            </div>
            
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
