import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bangers text-[var(--brand-red)] tracking-wide">{item.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">{item.description}</p>
        <div className="mt-4 text-right">
            {item.price2pcs ? (
                <div>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">RM{item.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400"> (1pc)</span>
                    <span className="mx-1">/</span>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">RM{item.price2pcs.toFixed(2)}</span>
                     <span className="text-sm text-gray-500 dark:text-gray-400"> (2pcs)</span>
                </div>
            ) : (
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">RM{item.price.toFixed(2)}</span>
            )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
