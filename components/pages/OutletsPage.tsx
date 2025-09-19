import React from 'react';
import { OUTLETS } from '../../constants';
import { Outlet } from '../../types';
import { LocationIcon } from '../icons/LocationIcon';
import { ClockIcon } from '../icons/ClockIcon';
import { WazeIcon } from '../icons/WazeIcon';
import { WhatsappIcon } from '../icons/WhatsappIcon';

const OutletCard: React.FC<{ outlet: Outlet }> = ({ outlet }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold font-bangers text-[var(--brand-red)] tracking-wider">{outlet.name}</h3>
      <div className="mt-4 text-gray-600 dark:text-gray-400 space-y-3">
          <div className="flex items-start">
            <LocationIcon className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" />
            <p>{outlet.address}</p>
          </div>
           <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" />
            <p>{outlet.hours}</p>
          </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-900/50 p-3 grid grid-cols-2 gap-3">
        <a 
            href={outlet.wazeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#33ccff] text-white font-bold py-2 px-4 rounded-md hover:bg-[#00bfff] transition-colors duration-300"
        >
            <WazeIcon className="w-5 h-5 mr-2" /> Waze
        </a>
         <a 
            href={outlet.whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] text-white font-bold py-2 px-4 rounded-md hover:bg-[#128C7E] transition-colors duration-300"
        >
           <WhatsappIcon className="w-5 h-5 mr-2" /> WhatsApp
        </a>
    </div>
  </div>
);


const OutletsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>FIND AN OUTLET</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Find an Ayam Gepuk Artisan near you!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OUTLETS.map(outlet => (
          <OutletCard key={outlet.id} outlet={outlet} />
        ))}
      </div>
    </div>
  );
};

export default OutletsPage;
