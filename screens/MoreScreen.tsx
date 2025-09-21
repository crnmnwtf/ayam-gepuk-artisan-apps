import React, { useState, Suspense, lazy, useContext } from 'react';
import { Page } from '../types';
import copy from '../copy';
import { AppContext } from '../context/AppContext';
import LoadingSpinner from '../components/LoadingSpinner';

const TestimonialsPage = lazy(() => import('../components/pages/TestimonialsPage'));
const CareersPage = lazy(() => import('../components/pages/CareersPage'));
const AboutPage = lazy(() => import('../components/pages/AboutPage'));
const ContactPage = lazy(() => import('../components/pages/ContactPage'));
const ImageGeneratorPage = lazy(() => import('../components/pages/ImageGeneratorPage'));
const ImageGalleryPage = lazy(() => import('../components/pages/ImageGalleryPage'));
const FeaturesPage = lazy(() => import('../components/pages/FeaturesPage'));

interface MoreScreenProps {
    setActivePage: (page: Page) => void;
}

const MoreScreen: React.FC<MoreScreenProps> = ({ setActivePage }) => {
    const [selectedPage, setSelectedPage] = useState<Page | null>(null);
    const { language } = useContext(AppContext);

    const menuItems = [
        Page.Features,
        Page.Testimonials,
        Page.Careers,
        Page.About,
        Page.Contact,
        Page.ImageGenerator,
        Page.ImageGallery
    ];

    const renderPage = () => {
        switch (selectedPage) {
            case Page.Features: return <FeaturesPage />;
            case Page.Testimonials: return <TestimonialsPage />;
            case Page.Careers: return <CareersPage />;
            case Page.About: return <AboutPage />;
            case Page.Contact: return <ContactPage />;
            case Page.ImageGenerator: return <ImageGeneratorPage />;
            case Page.ImageGallery: return <ImageGalleryPage />;
            default: return null;
        }
    }

    if (selectedPage) {
        return (
            <div className="container mx-auto px-4 py-4">
                <button onClick={() => setSelectedPage(null)} className="mb-4 text-[var(--brand-red)] font-semibold">
                    &larr; Back to More
                </button>
                <Suspense fallback={<LoadingSpinner />}>
                    {renderPage()}
                </Suspense>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bangers text-center text-gray-800 dark:text-gray-200 mb-8">
                {language === 'bm' ? 'Lagi' : 'More'}
            </h1>
            <div className="max-w-md mx-auto">
                <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
                    {menuItems.map(page => (
                        <li key={page}>
                            <button 
                                onClick={() => {
                                    setSelectedPage(page);
                                    setActivePage(page);
                                }} 
                                className="w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex justify-between items-center"
                            >
                                <span className="font-semibold">{copy.nav[page][language]}</span>
                                <span>&rarr;</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MoreScreen;