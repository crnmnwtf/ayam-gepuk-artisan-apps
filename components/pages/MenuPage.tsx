import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, SPICE_LEVELS } from '../../constants';
import { Category, MenuItem } from '../../types';
import { FlameIcon } from '../icons/FlameIcon';

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

const MenuBuilder: React.FC = () => {
    const chickenOptions = MENU_ITEMS.filter(item => item.id === 's1' || item.id === 's2');
    const sideOptions = MENU_ITEMS.filter(item => ['s3','s5', 's6'].includes(item.id));

    const [selectedChicken, setSelectedChicken] = useState<MenuItem | null>(chickenOptions[0]);
    const [selectedSides, setSelectedSides] = useState<MenuItem[]>([]);
    const [selectedSpice, setSelectedSpice] = useState<number>(1);

    const handleSideToggle = (side: MenuItem) => {
        setSelectedSides(prev =>
            prev.find(s => s.id === side.id)
                ? prev.filter(s => s.id !== side.id)
                : [...prev, side]
        );
    };

    const totalPrice = useMemo(() => {
        const chickenPrice = selectedChicken ? selectedChicken.price : 0;
        const sidesPrice = selectedSides.reduce((total, side) => total + side.price, 0);
        return chickenPrice + sidesPrice + 2.20; // +2.20 for base rice
    }, [selectedChicken, selectedSides]);

    const previewImage = selectedChicken?.id === 's1' ? `${IMG_BASE_URL}set-a-klasik.jpg` : `${IMG_BASE_URL}set-a-krispy-1.jpg`;

    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl mt-12 border-4 border-[var(--brand-yellow)]">
            <h2 className="text-4xl font-bangers text-center text-[var(--brand-red)] mb-8">Build Your Own Meal</h2>
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Side: Options */}
                <div>
                    {/* 1. Choose Chicken */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">1. Pilih Ayam (Choose Chicken)</h3>
                        <div className="flex gap-4">
                            {chickenOptions.map(chicken => (
                                <button key={chicken.id} onClick={() => setSelectedChicken(chicken)} className={`p-3 rounded-lg border-2 transition-all w-full ${selectedChicken?.id === chicken.id ? 'border-[var(--brand-red)] bg-red-50 dark:bg-red-900/50' : 'border-gray-300 dark:border-gray-600'}`}>
                                    <img src={chicken.imageUrl} alt={chicken.name} className="w-full h-24 object-cover rounded-md mb-2" />
                                    <p className="font-semibold">{chicken.name}</p>
                                    <p className="text-sm">RM{chicken.price.toFixed(2)}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 2. Add Sides */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">2. Tambah Sides (Add Sides)</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {sideOptions.map(side => (
                                <button key={side.id} onClick={() => handleSideToggle(side)} className={`p-2 rounded-lg border-2 text-center transition-all ${selectedSides.find(s=>s.id === side.id) ? 'border-[var(--brand-red)] bg-red-50 dark:bg-red-900/50' : 'border-gray-300 dark:border-gray-600'}`}>
                                    <p className="font-semibold text-sm">{side.name}</p>
                                    <p className="text-xs">+RM{side.price.toFixed(2)}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                     {/* 3. Choose Spice */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">3. Pilih Tahap Pedas (Choose Spice)</h3>
                         <div className="flex justify-around items-end p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            {SPICE_LEVELS.map(spice => (
                                <div key={spice.name} onClick={() => setSelectedSpice(spice.level)} className={`text-center font-bold cursor-pointer group p-2 rounded-lg ${selectedSpice === spice.level ? 'bg-yellow-300' : ''}`}>
                                    <div className="flex justify-center text-gray-400 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                                        {[...Array(spice.level)].map((_, i) => (
                                            <FlameIcon key={i} className={`w-8 h-8 ${selectedSpice >= spice.level ? 'text-[var(--brand-red)]' : ''}`} />
                                        ))}
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 mt-2 text-sm md:text-base">{spice.name.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Preview & Price */}
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bangers text-center text-[var(--brand-red)] mb-4">Your Custom Set</h3>
                        <img src={previewImage} alt="Meal preview" className="w-full h-48 object-cover rounded-lg shadow-md" />
                        <ul className="text-left mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>Nasi Putih</li>
                            {selectedChicken && <li>{selectedChicken.name}</li>}
                            {selectedSides.map(s => <li key={s.id}>{s.name}</li>)}
                            <li>Sambal ({SPICE_LEVELS.find(s=>s.level === selectedSpice)?.name})</li>
                        </ul>
                    </div>
                    <div className="w-full mt-6">
                        <div className="text-center">
                            <p className="text-lg">Total Price:</p>
                            <p className="text-4xl font-bold text-gray-900 dark:text-white">RM{totalPrice.toFixed(2)}</p>
                        </div>
                         <button className="mt-4 w-full bg-[var(--brand-red)] text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg">
                            Add to Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const MenuPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-6xl md:text-7xl font-bangers text-center text-[var(--brand-yellow)] mb-12" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>OUR MENU</h1>
      
      <MenuBuilder />

    </div>
  );
};

export default MenuPage;
