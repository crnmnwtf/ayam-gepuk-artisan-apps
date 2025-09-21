import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { generatedImages } from '../../database/generatedImages';
import copy from '../../copy';
import LazyImage from '../LazyImage';
import MagicBento from '../MagicBento';

const ImageGalleryPage: React.FC = () => {
  const { language } = useContext(AppContext);
  const [copiedUrlId, setCopiedUrlId] = useState<string | null>(null);
  const t = (key: keyof typeof copy.imageGalleryPage) => copy.imageGalleryPage[key][language];

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedUrlId(id);
      setTimeout(() => {
        setCopiedUrlId(null);
      }, 2000); // Reset after 2 seconds
    });
  };

  const galleryData = Object.entries(generatedImages).map(([id, url]) => ({ id, url }));

  const renderImageCard = (item: { id: string, url: string }) => (
    <>
        <LazyImage src={item.url} alt={`Stored image for ID: ${item.id}`} className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>
        <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
          <p className="text-xs font-mono text-gray-300 truncate" title={item.id}>ID: {item.id}</p>
           <button
                onClick={() => handleCopyUrl(item.id, item.url)}
                className={`mt-2 w-full font-bold py-2 px-4 rounded-md transition-colors duration-300 text-sm ${
                  copiedUrlId === item.id
                    ? 'bg-green-500 text-white'
                    : 'bg-[var(--brand-red)] text-white hover:bg-red-700'
                }`}
              >
                {copiedUrlId === item.id ? t('copiedButton') : t('copyButton')}
              </button>
        </div>
    </>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          {t('title')}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="flex justify-center">
         <MagicBento
            cardData={galleryData}
            renderCardContent={renderImageCard}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={false} // Disable click effect for gallery
            glowColor="244, 96, 54"
        />
      </div>
    </div>
  );
};

export default ImageGalleryPage;
