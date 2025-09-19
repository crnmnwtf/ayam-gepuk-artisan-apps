import { Language } from "./types";

const copy = {
    splash: {
        welcome: {
            bm: "Selamat datang ke dunia pedas sebenar!",
            en: "Welcome to the world of real spice!",
        },
        enter: {
            bm: "Masuk",
            en: "Enter",
        }
    },
    nav: {
        Home: { bm: 'Laman Utama', en: 'Home' },
        Menu: { bm: 'Menu', en: 'Menu' },
        Outlets: { bm: 'Cawangan', en: 'Outlets' },
        Promotions: { bm: 'Promosi', en: 'Promotions' },
        Testimonials: { bm: 'Testimoni', en: 'Testimonials' },
        Careers: { bm: 'Kerjaya', en: 'Careers' },
        About: { bm: 'Tentang Kami', en: 'About Us' },
        Contact: { bm: 'Hubungi Kami', en: 'Contact Us' },
    },
    homepage: {
        heroTitle: {
            bm: "REFILL TANPA HAD. KUASA TANPA HAD.",
            en: "UNLIMITED REFILL. UNLIMITED POWER."
        },
        heroSubtitle: {
            bm: "Rasa Ayam Gepuk Sebenar!",
            en: "The True Taste of Ayam Gepuk!"
        },
        orderNow: { bm: "Order Sekarang", en: "Order Now" },
        findOutlet: { bm: "Cari Cawangan", en: "Find Outlet" },
        viewMenu: { bm: "Lihat Menu", en: "View Menu" },
        hotPromos: { bm: "PROMOSI HEBAT!", en: "HOT PROMOTIONS!" },
        viewAllPromos: { bm: "Lihat Semua Promosi", en: "View All Promotions" },
        fanFavourites: { bm: "Pilihan Ramai", en: "Fan Favourites" },
        fanFavDesc: { bm: "Pilihan istimewa yang digemari pelanggan kami!", en: "Hand-picked selections our customers love!" },
    },
    // Add other pages here
};

export const useCopy = (lang: Language) => {
    return (key: keyof typeof copy, subkey: string) => {
        const section = copy[key];
        if (section && section[subkey]) {
            return section[subkey][lang];
        }
        return `[${key}.${subkey}]`;
    };
};

export default copy;