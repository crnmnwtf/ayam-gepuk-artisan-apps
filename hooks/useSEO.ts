import { useEffect } from 'react';
import { Page, Language } from '../types';
import copy from '../copy';

const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
    let element = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement;
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const useSEO = (page: Page, language: Language) => {
    useEffect(() => {
        const seoCopy = copy.seo[page];
        const defaultImage = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/logo-yellow-bg-512.webp';

        if (seoCopy) {
            const title = seoCopy.title[language];
            const description = seoCopy.description[language];

            // Standard SEO
            document.title = title;
            setMetaTag('name', 'description', description);

            // Open Graph (for Facebook, WhatsApp, etc.)
            setMetaTag('property', 'og:title', title);
            setMetaTag('property', 'og:description', description);
            setMetaTag('property', 'og:type', 'website');
            setMetaTag('property', 'og:url', window.location.href);
            setMetaTag('property', 'og:image', defaultImage);

            // Twitter Card
            setMetaTag('name', 'twitter:card', 'summary_large_image');
            setMetaTag('name', 'twitter:title', title);
            setMetaTag('name', 'twitter:description', description);
            setMetaTag('name', 'twitter:image', defaultImage);
        }
    }, [page, language]);
};

export default useSEO;
