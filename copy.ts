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
        Features: { bm: 'Ciri-ciri', en: 'Features' },
        Testimonials: { bm: 'Testimoni', en: 'Testimonials' },
        Careers: { bm: 'Kerjaya', en: 'Careers' },
        About: { bm: 'Tentang Kami', en: 'About Us' },
        Contact: { bm: 'Hubungi Kami', en: 'Contact Us' },
        // FIX: Add navigation text for ImageGenerator page.
        ImageGenerator: { bm: 'Penjana Imej', en: 'AI Generator' },
        ImageGallery: { bm: 'Galeri Imej', en: 'Image Gallery' },
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
    // FIX: Add copy for ImageGeneratorPage to resolve error.
    imageGeneratorPage: {
        title: {
            bm: 'Penjana Imej AI',
            en: 'AI Image Generator'
        },
        subtitle: {
            bm: 'Cipta imej unik berkaitan Ayam Gepuk Artisan menggunakan AI! Terangkan apa yang anda mahu lihat.',
            en: 'Create unique images related to Ayam Gepuk Artisan using AI! Describe what you want to see.'
        },
        promptPlaceholder: {
            bm: 'Contoh: Seekor ayam jantan adiwira sedang makan ayam gepuk di atas Menara KL',
            en: 'e.g., A superhero rooster eating ayam gepuk on top of KL Tower'
        },
        generateButton: {
            bm: 'Jana Imej',
            en: 'Generate Image'
        },
        generatingText: {
            bm: 'Menjana...',
            en: 'Generating...'
        },
        errorText: {
            bm: 'Maaf, penjanaan imej gagal. Sila cuba lagi.',
            en: 'Sorry, the image generation failed. Please try again.'
        }
    },
    imageGalleryPage: {
        title: {
            bm: 'Galeri Imej',
            en: 'Image Gallery'
        },
        subtitle: {
            bm: 'Lihat semua imej yang telah dijana dan disimpan. Salin URL untuk digunakan di tempat lain.',
            en: 'View all previously generated and stored images. Copy the URL to reuse them elsewhere.'
        },
        copyButton: {
            bm: 'Salin URL',
            en: 'Copy URL'
        },
        copiedButton: {
            bm: 'Disalin!',
            en: 'Copied!'
        },
    },
    seo: {
        Home: {
            title: { bm: 'Laman Utama | Ayam Gepuk Artisan', en: 'Home | Ayam Gepuk Artisan' },
            description: { bm: 'Alami Rasa Ayam Gepuk Sebenar! Nikmati ayam gepuk pedas dengan sambal gajus istimewa, dan refill tanpa had. Cari cawangan berdekatan anda hari ini!', en: 'Experience The True Taste of Ayam Gepuk! Enjoy spicy smashed chicken with our signature cashew sambal, and get unlimited refills. Find an outlet near you today!' }
        },
        Menu: {
            title: { bm: 'Menu Kami | Ayam Gepuk Artisan', en: 'Our Menu | Ayam Gepuk Artisan' },
            description: { bm: 'Lihat menu penuh kami, dari Set Krispy dan Klasik hingga lauk-pauk seperti tempe goreng dan sambal gajus. Bina hidangan anda sendiri!', en: 'Explore our full menu, from Krispy and Klasik sets to side dishes like fried tempeh and cashew sambal. Build your own perfect meal!' }
        },
        Outlets: {
            title: { bm: 'Cawangan Kami | Ayam Gepuk Artisan', en: 'Our Outlets | Ayam Gepuk Artisan' },
            description: { bm: 'Cari cawangan Ayam Gepuk Artisan terdekat anda. Dapatkan alamat, waktu operasi, dan pautan ke Peta Google, Waze, dan WhatsApp untuk semua lokasi kami.', en: 'Find your nearest Ayam Gepuk Artisan outlet. Get addresses, opening hours, and links to Google Maps, Waze, and WhatsApp for all our locations.' }
        },
        Promotions: {
            title: { bm: 'Promosi & Berita | Ayam Gepuk Artisan', en: 'Promotions & News | Ayam Gepuk Artisan' },
            description: { bm: 'Dapatkan tawaran terkini, diskaun, dan berita pembukaan cawangan baru dari Ayam Gepuk Artisan. Jangan lepaskan promosi hebat kami!', en: 'Get the latest deals, discounts, and new outlet opening news from Ayam Gepuk Artisan. Don\'t miss out on our exciting promotions!' }
        },
        Features: {
            title: { bm: 'Ciri-ciri | Ayam Gepuk Artisan', en: 'Features | Ayam Gepuk Artisan' },
            description: { bm: 'Terokai ciri-ciri interaktif platform kami dengan Magic Bento Grid.', en: 'Explore the interactive features of our platform with the Magic Bento Grid.' }
        },
        Testimonials: {
            title: { bm: 'Testimoni Pelanggan | Ayam Gepuk Artisan', en: 'Customer Testimonials | Ayam Gepuk Artisan' },
            description: { bm: 'Baca apa yang pelanggan kami katakan tentang ayam gepuk, sambal pedas, dan perkhidmatan kami. Lihat mengapa mereka sentiasa kembali!', en: 'Read what our customers are saying about our smashed chicken, spicy sambal, and service. See why they keep coming back for more!' }
        },
        Careers: {
            title: { bm: 'Kerjaya | Sertai Pasukan Kami | Ayam Gepuk Artisan', en: 'Careers | Join Our Team | Ayam Gepuk Artisan' },
            description: { bm: 'Berminat untuk menyertai keluarga Ayam Gepuk Artisan? Terokai peluang kerjaya di cawangan kami dan jadi sebahagian daripada pasukan kami yang sedang berkembang.', en: 'Interested in joining the Ayam Gepuk Artisan family? Explore job openings at our outlets and become a part of our growing team.' }
        },
        About: {
            title: { bm: 'Tentang Kami | Ayam Gepuk Artisan', en: 'About Us | Ayam Gepuk Artisan' },
            description: { bm: 'Ketahui lebih lanjut tentang Ayam Gepuk Artisan, sebuah jenama milik 100% Muslim Malaysia yang komited untuk menyajikan Rasa Ayam Gepuk Sebenar.', en: 'Learn more about Ayam Gepuk Artisan, a 100% Malaysian Muslim-owned brand committed to serving The True Taste of Ayam Gepuk.' }
        },
        Contact: {
            title: { bm: 'Hubungi Kami | Ayam Gepuk Artisan', en: 'Contact Us | Ayam Gepuk Artisan' },
            description: { bm: 'Hubungi kami untuk pertanyaan, maklum balas, atau tempahan katering. Kami sedia membantu anda. Hantarkan mesej kepada kami hari ini!', en: 'Get in touch with us for inquiries, feedback, or catering bookings. We are here to help. Send us a message today!' }
        },
        ImageGenerator: {
            title: { bm: 'Penjana Imej AI | Ayam Gepuk Artisan', en: 'AI Image Generator | Ayam Gepuk Artisan' },
            description: { bm: 'Cipta imej unik bertemakan Ayam Gepuk Artisan menggunakan penjana imej AI kami. Hidupkan idea kreatif anda!', en: 'Create unique Ayam Gepuk Artisan themed images with our AI image generator. Bring your creative ideas to life!' }
        },
        ImageGallery: {
            title: { bm: 'Galeri Imej | Ayam Gepuk Artisan', en: 'Image Gallery | Ayam Gepuk Artisan' },
            description: { bm: 'Terokai koleksi imej yang disimpan. Salin URL untuk digunakan semula dalam promosi atau media sosial anda.', en: 'Explore the collection of stored images. Copy URLs to reuse in your promotions or social media.' }
        }
    }
};

export const useCopy = (lang: Language) => {
    return (key: keyof typeof copy, subkey: string) => {
        const section = copy[key as keyof typeof copy] as any;
        if (section && section[subkey]) {
            return section[subkey][lang];
        }
        return `[${key}.${subkey}]`;
    };
};

export default copy;