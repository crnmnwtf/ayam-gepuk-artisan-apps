import React, { useState, useMemo, useEffect } from 'react';
import { MENU_ITEMS, SPICE_LEVELS } from '../constants';
import { Category, MenuItem } from '../types';
import { FlameIcon } from '../components/icons/FlameIcon';
import LoadingSpinner from '../components/LoadingSpinner';
import MagicBento from '../components/MagicBento';
import LazyImage from '../components/LazyImage';

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

    const previewImage = selectedChicken?.imageUrl;

    return (
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-lg shadow-2xl mt-8 border-2 md:border-4 border-[var(--brand-yellow)]">
            <h2 className="text-3xl sm:text-4xl font-bangers text-center text-[var(--brand-red)] mb-6">Build Your Own Meal</h2>
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Left Side: Options */}
                <div>
                    {/* 1. Choose Chicken */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">1. Pilih Ayam (Choose Chicken)</h3>
                        <div className="flex gap-2 sm:gap-4">
                            {chickenOptions.map(chicken => (
                                <button key={chicken.id} onClick={() => setSelectedChicken(chicken)} className={`p-2 rounded-lg border-2 transition-all w-full ${selectedChicken?.id === chicken.id ? 'border-[var(--brand-red)] bg-red-50 dark:bg-red-900/50' : 'border-gray-300 dark:border-gray-600'}`}>
                                    <img src={chicken.imageUrl} alt={`Image of ${chicken.name}`} className="w-full h-16 sm:h-24 object-cover rounded-md mb-2" />
                                    <p className="font-semibold text-sm sm:text-base">{chicken.name}</p>
                                    <p className="text-xs sm:text-sm">RM{chicken.price.toFixed(2)}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 2. Add Sides */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">2. Tambah Sides (Add Sides)</h3>
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
                        <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">3. Pilih Tahap Pedas (Choose Spice)</h3>
                         <div className="flex justify-around items-end p-2 sm:p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            {SPICE_LEVELS.map(spice => (
                                <div key={spice.name} onClick={() => setSelectedSpice(spice.level)} className={`text-center font-bold cursor-pointer group p-1 sm:p-2 rounded-lg ${selectedSpice === spice.level ? 'bg-yellow-300' : ''}`}>
                                    <div className="flex justify-center text-gray-400 group-hover:text-[var(--brand-red)] transition-colors duration-300">
                                        {[...Array(spice.level)].map((_, i) => (
                                            <FlameIcon key={i} className={`w-6 h-6 sm:w-8 sm:h-8 ${selectedSpice >= spice.level ? 'text-[var(--brand-red)]' : ''}`} />
                                        ))}
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 mt-2 text-xs sm:text-base">{spice.name.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Preview & Price */}
                <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-between">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bangers text-center text-[var(--brand-red)] mb-4">Your Custom Set</h3>
                        <img src={previewImage} alt="Preview of your custom Ayam Gepuk meal" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-md" />
                        <ul className="text-left mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                            <li>Nasi Putih</li>
                            {selectedChicken && <li>{selectedChicken.name}</li>}
                            {selectedSides.map(s => <li key={s.id}>{s.name}</li>)}
                            <li>Sambal ({SPICE_LEVELS.find(s=>s.level === selectedSpice)?.name})</li>
                        </ul>
                    </div>
                    <div className="w-full mt-6">
                        <div className="text-center">
                            <p className="text-md">Total Price:</p>
                            <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">RM{totalPrice.toFixed(2)}</p>
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

const renderMenuItemCard = (item: MenuItem) => (
    <div className="absolute inset-0">
        <LazyImage src={item.imageUrl} alt={`Image of ${item.name}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5 text-white">
             <div>
                <h3 className="text-xl font-bangers text-[var(--brand-yellow)] tracking-wide drop-shadow-md">{item.name}</h3>
                <p className="text-gray-200 text-xs mt-1 leading-tight">{item.description}</p>
            </div>
            <div className="mt-2 text-right">
                {item.price2pcs ? (
                    <div className="text-white">
                        <span className="text-sm font-bold">RM{item.price.toFixed(2)}</span><span className="text-xs text-gray-400"> (1pc)</span>
                        <span className="mx-1">/</span>
                        <span className="text-sm font-bold">RM{item.price2pcs.toFixed(2)}</span><span className="text-xs text-gray-400"> (2pcs)</span>
                    </div>
                ) : (
                    <span className="text-lg font-bold text-white">RM{item.price.toFixed(2)}</span>
                )}
            </div>
        </div>
    </div>
);

const MenuScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'Krispy', 'Klasik', 'Side Dish'];

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'All') {
      return MENU_ITEMS;
    }
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);


  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center" style={{minHeight: '50vh'}}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl md:text-7xl font-bangers text-center text-[var(--brand-yellow)] mb-4" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>OUR MENU</h1>
      
      <MenuBuilder />

      <div className="mt-12">
        <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 font-bold rounded-full transition-colors duration-300 text-sm ${activeCategory === category ? 'bg-[var(--brand-red)] text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                >
                    {category}
                </button>
            ))}
        </div>
         <div className="flex justify-center">
            <MagicBento
                cardData={filteredMenu}
                renderCardContent={renderMenuItemCard}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                glowColor="244, 96, 54" // Brand orange
            />
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
