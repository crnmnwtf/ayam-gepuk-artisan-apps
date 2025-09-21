import React, { useState, useEffect } from 'react';
import { OUTLETS } from '../constants';
import { Outlet } from '../types';
import { LocationIcon } from '../components/icons/LocationIcon';
import { ClockIcon } from '../components/icons/ClockIcon';
import { WazeIcon } from '../components/icons/WazeIcon';
import { WhatsappIcon } from '../components/icons/WhatsappIcon';
import LoadingSpinner from '../components/LoadingSpinner';
import SocialShareButtons from '../components/SocialShareButtons';
import { ListIcon } from '../components/icons/ListIcon';
import { MapIcon } from '../components/icons/MapIcon';
import MapView from '../components/MapView';
import MagicBento from '../components/MagicBento';

const renderOutletCard = (outlet: Outlet) => (
  <div className="p-1 flex flex-col h-full text-white">
    <div className="p-5 flex-grow">
      <h3 className="text-xl font-bangers text-[var(--brand-yellow)] tracking-wider drop-shadow-md">{outlet.name}</h3>
      <div className="mt-4 text-gray-300 space-y-3 text-sm">
          <div className="flex items-start">
            <LocationIcon className="w-5 h-5 mr-3 mt-1 text-yellow-400 flex-shrink-0" />
            <a href={outlet.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-orange)] hover:underline transition-colors">
              <p>{outlet.address}</p>
            </a>
          </div>
           <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-3 text-yellow-400 flex-shrink-0" />
            <p>{outlet.hours}</p>
          </div>
      </div>
    </div>
    <div className="bg-black/20 p-4 mt-auto space-y-4 rounded-b-lg">
      <div className="grid grid-cols-3 gap-2">
          <a 
              href={outlet.mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-red-600 text-white font-bold py-2 px-3 rounded-md hover:bg-red-700 transition-colors duration-300 text-sm"
          >
              <LocationIcon className="w-4 h-4 mr-1.5" /> Map
          </a>
          <a 
              href={outlet.wazeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#33ccff] text-white font-bold py-2 px-3 rounded-md hover:bg-[#00bfff] transition-colors duration-300 text-sm"
          >
              <WazeIcon className="w-4 h-4 mr-1.5" /> Waze
          </a>
          <a 
              href={outlet.whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white font-bold py-2 px-3 rounded-md hover:bg-[#128C7E] transition-colors duration-300 text-sm"
          >
            <WhatsappIcon className="w-4 h-4 mr-1.5" /> Chat
          </a>
      </div>
       <div className="border-t border-white/20 pt-3 flex justify-center">
          <SocialShareButtons 
              url={outlet.mapsUrl}
              title={`Jom makan at ${outlet.name}! Check out their location:`}
          />
      </div>
    </div>
  </div>
);


const OutletsScreen: React.FC = () => {
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setOutlets(OUTLETS);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>FIND AN OUTLET</h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Find an Ayam Gepuk Artisan near you!</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm bg-white dark:bg-gray-800 p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md transition-colors flex items-center ${
              viewMode === 'list'
                ? 'bg-[var(--brand-red)] text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-pressed={viewMode === 'list'}
          >
            <ListIcon className="w-5 h-5 mr-2" />
            List View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md transition-colors flex items-center ${
              viewMode === 'map'
                ? 'bg-[var(--brand-red)] text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
             aria-pressed={viewMode === 'map'}
          >
            <MapIcon className="w-5 h-5 mr-2" />
            Map View
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="h-96 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : viewMode === 'list' ? (
        <div className="flex justify-center animate-fade-in">
          <MagicBento
              cardData={outlets}
              renderCardContent={renderOutletCard}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="244, 96, 54"
          />
        </div>
      ) : (
        <div className="animate-fade-in">
           <MapView outlets={outlets} />
        </div>
      )}
    </div>
  );
};

export default OutletsScreen;
