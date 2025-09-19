import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-[var(--brand-red)] transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Ayam Gepuk Artisan. All Rights Reserved. <br/> 
            <span className="font-semibold">Rasa Ayam Gepuk Sebenar! / The True Taste of Ayam Gepuk!</span>
          </p>
          <div className="flex mt-4 sm:mt-0 space-x-6">
            <SocialIcon href="https://www.facebook.com/AyamGepukArtisan/">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/ayamgepukartisan/">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.25c-2.88 0-3.24.01-4.38.06-1.14.05-1.92.22-2.6.48-.7.26-1.28.63-1.85 1.2s-.94 1.15-1.2 1.85c-.26.68-.43 1.46-.48 2.6C1.26 8.76 1.25 9.12 1.25 12s.01 3.24.06 4.38c.05 1.14.22 1.92.48 2.6.26.7.63 1.28 1.2 1.85s1.15.94 1.85 1.2c.68.26 1.46.43 2.6.48 1.14.05 1.5.06 4.38.06s3.24-.01 4.38-.06c1.14-.05 1.92-.22 2.6-.48.7-.26 1.28-.63 1.85-1.2s.94-1.15-1.2-1.85c.26-.68.43-1.46.48-2.6.05-1.14.06-1.5.06-4.38s-.01-3.24-.06-4.38c-.05-1.14-.22-1.92-.48-2.6-.26-.7-.63-1.28-1.2-1.85s-1.15-.94-1.85-1.2c-.68-.26-1.46-.43-2.6-.48C15.24 2.26 14.88 2.25 12 2.25zm0 1.5c2.83 0 3.18.01 4.28.06 1.08.05 1.7.21 2.18.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.19.48.35 1.1.4 2.18.05 1.1.06 1.45.06 4.28s-.01 3.18-.06 4.28c-.05 1.08-.21 1.7-.4 2.18-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.48.19-1.1.35-2.18.4-1.1.05-1.45.06-4.28.06s-3.18-.01-4.28-.06c-1.08-.05-1.7-.21-2.18-.4-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.19-.48-.35-1.1-.4-2.18-.05-1.1-.06-1.45-.06-4.28s.01-3.18.06-4.28c.05-1.08.21-1.7.4-2.18.22-.56.48-.96.9-1.38.42-.42.82-.68-1.38-.9.48-.19 1.1-.35 2.18-.4 1.1-.05 1.45-.06 4.28-.06zm0 3.19a5.06 5.06 0 100 10.12 5.06 5.06 0 000-10.12zm0 8.62a3.56 3.56 0 110-7.12 3.56 3.56 0 010 7.12zm6.2-6.77a1.19 1.19 0 100-2.38 1.19 1.19 0 000 2.38z" clipRule="evenodd" /></svg>
            </SocialIcon>
             <SocialIcon href="https://wa.me/601156277251">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4 0-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.4.1-.2 0-.4 0-.5s-.6-1.5-.8-2.1c-.2-.5-.4-.5-.5-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.2.8 2.2 1 2.4.1.2 1.5 2.3 3.7 3.2.5.2.9.4 1.2.5.5.2 1 .1 1.4-.1.4-.2 1.5-1.7 1.7-1.9.2-.2.2-.4.1-.5l-.4-.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;