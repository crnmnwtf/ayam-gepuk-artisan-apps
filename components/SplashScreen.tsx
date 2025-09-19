import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import copy from '../copy';

interface SplashScreenProps {
    onEnter: () => void;
}
const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';


const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
    const { language } = useContext(AppContext);
    const t = (key: keyof typeof copy.splash) => copy.splash[key][language];

    return (
        <div className="fixed inset-0 bg-yellow-400 flex flex-col items-center justify-center z-50 text-center p-4 splash-enter">
            <img 
                src={`${IMG_BASE_URL}logo-yellow-bg.png`} 
                alt="Ayam Gepuk Artisan Logo"
                className="w-48 md:w-64 rounded-2xl shadow-2xl mb-6 border-4 border-white"
            />
            <h1 className="text-3xl md:text-4xl font-bangers text-red-600" style={{ textShadow: '2px 2px 0 #fff'}}>
                {t('welcome')}
            </h1>
            <button
                onClick={onEnter}
                className="mt-8 px-10 py-3 bg-red-600 text-white font-bold text-xl rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
                {t('enter')}
            </button>
        </div>
    );
};

export default SplashScreen;