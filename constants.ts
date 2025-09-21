import { MenuItem, Outlet, Promotion, SpiceLevel, JobOpening, Testimonial } from './types';

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

export const MENU_ITEMS: MenuItem[] = [
  // Krispy Sets
  { id: 'k1', category: 'Krispy', set: 'A', name: 'Set A Krispy', description: 'Your perfect solo meal! Enjoy our super-crispy fried chicken (1 or 2 pieces) served with fluffy white rice, our signature fiery sambal, sweet soy sauce, and fresh greens.', price: 8.99, price2pcs: 12.99, imageUrl: `${IMG_BASE_URL}set-a-krispy-1.webp` },
  { id: 'k2', category: 'Krispy', set: 'B', name: 'Set B Krispy', description: 'A complete and satisfying meal. Features our signature crispy chicken, golden-fried tempeh and tofu, served alongside steamed rice, our explosive sambal, and fresh greens.', price: 11.99, imageUrl: `${IMG_BASE_URL}set-b-krispy.webp` },
  { id: 'k3', category: 'Krispy', set: 'C', name: 'Set C Krispy', description: 'The ultimate feast! Comes with two pieces of our extra-crispy chicken, fried tempeh, tofu puffs, savoury fried cabbage, our signature sambal, and fluffy white rice.', price: 12.99, imageUrl: `${IMG_BASE_URL}set-c-krispy.webp` },
  // Klasik Sets
  { id: 'c1', category: 'Klasik', set: 'A', name: 'Set A Klasik', description: 'Experience the authentic taste! Our classic smashed chicken, tender and flavourful, served with fried tempeh, signature sambal, steamed rice, and fresh greens.', price: 10.99, imageUrl: `${IMG_BASE_URL}set-a-klasik.webp` },
  { id: 'c2', category: 'Klasik', set: 'B', name: 'Set B Klasik', description: 'A balanced classic combo. Tender smashed chicken paired with golden-fried tempeh and tofu, served with our signature sambal, sweet soy sauce, and fluffy rice.', price: 11.99, imageUrl: `${IMG_BASE_URL}set-b-klasik-1.webp` },
  { id: 'c3', category: 'Klasik', set: 'C', name: 'Set C Klasik', description: 'The ultimate classic indulgence. Our tender smashed chicken, fried tempeh, tofu puffs, savoury fried cabbage, signature sambal, and a serving of steamed white rice.', price: 12.99, imageUrl: `${IMG_BASE_URL}set-c-klasik.webp` },
  // Side Dishes
  { id: 's1', category: 'Side Dish', name: 'Ayam Klasik Quarter', description: 'Our authentic, tender smashed chicken quarter, marinated and cooked to perfection. A true taste of classic Indonesian flavour.', price: 6.90, imageUrl: `${IMG_BASE_URL}ayam-klasik.webp` },
  { id: 's2', category: 'Side Dish', name: 'Ayam Krispy', description: 'One piece of our incredibly juicy and crispy fried chicken. The perfect crunch in every bite!', price: 3.90, imageUrl: `${IMG_BASE_URL}ayam-krispy-pile.webp` },
  { id: 's3', category: 'Side Dish', name: 'Tempe Goreng', description: 'Six pieces of perfectly seasoned and golden-fried tempeh. A nutty and satisfying side dish.', price: 2.20, imageUrl: `${IMG_BASE_URL}tempe-goreng.webp` },
  { id: 's4', category: 'Side Dish', name: 'Sambal Gajus', description: 'The heart of our flavour! A fiery, addictive sambal made with a secret recipe featuring roasted cashews.', price: 2.00, imageUrl: `${IMG_BASE_URL}sambal-gajus.webp` },
  { id: 's5', category: 'Side Dish', name: 'Kubis Goreng', description: 'A simple yet delicious side of savoury stir-fried cabbage, cooked to tender-crisp perfection.', price: 3.20, imageUrl: `${IMG_BASE_URL}kubis-goreng.webp` },
  { id: 's6', category: 'Side Dish', name: 'Tauhu Goreng', description: 'Light and airy fried tofu puffs, golden on the outside and soft on the inside. Perfect for soaking up our delicious sambal.', price: 1.40, imageUrl: `${IMG_BASE_URL}tauhu-goreng.webp` },
  { id: 's7', category: 'Side Dish', name: 'Nasi Putih', description: 'A serving of fluffy, steamed white rice, the perfect base for your Ayam Gepuk meal.', price: 2.20, imageUrl: `${IMG_BASE_URL}nasi-putih.webp` },
  { id: 's8', category: 'Side Dish', name: 'Minuman', description: 'A refreshing glass of classic iced lemon tea to cool down the heat from our sambal.', price: 2.00, imageUrl: `${IMG_BASE_URL}minuman.webp` },
];

export const OUTLETS: Outlet[] = [
  { id: 'o1', name: 'Ayam Gepuk Artisan Seremban 2', address: '89-G, Jalan S2 D33, City Centre, 70300 Seremban, Negeri Sembilan', hours: '11:00 AM - 9:30 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Seremban+2', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Seremban%202', whatsappUrl: 'https://wa.me/60182442017', lat: 2.6841, lng: 101.9182 },
  { id: 'o2', name: 'Ayam Gepuk Artisan Taman Bahtera', address: 'Taman Bahtera, 35900 Tanjong Malim, Perak', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Taman+Bahtera', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Taman%20Bahtera', whatsappUrl: 'https://wa.me/601156277251', lat: 3.7384, lng: 101.5173 },
  { id: 'o3', name: 'Ayam Gepuk Artisan Ketoyong', address: 'Kampung Ketoyong, 28700 Bentong, Pahang', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Ketoyong', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Ketoyong', whatsappUrl: 'https://wa.me/601156277251', lat: 3.4868, lng: 101.9213 },
  { id: 'o4', name: 'Ayam Gepuk Artisan Pulau Indah', address: 'Lagoon Park, 42920 Pulau Indah, Selangor', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Pulau+Indah', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Pulau%20Indah', whatsappUrl: 'https://wa.me/601156277251', lat: 2.9723, lng: 101.3325 },
  { id: 'o5', name: 'Ayam Gepuk Artisan Behrang Resident', address: 'Behrang Stesen, 35900 Tanjong Malim, Perak', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Behrang+Resident', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Behrang%20Resident', whatsappUrl: 'https://wa.me/601156277251', lat: 3.7667, lng: 101.4728 },
  { id: 'o6', name: 'Ayam Gepuk Artisan Uniten Bangi', address: 'Lot 3, Pusat Komersial UNITEN, 43009 Kajang, Selangor', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Uniten', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Uniten%20Bangi', whatsappUrl: 'https://wa.me/601156277251', lat: 2.9733, lng: 101.7289 },
  { id: 'o7', name: 'Ayam Gepuk Artisan Slim River', address: 'Slim River, Perak', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Slim+River', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Slim%20River', whatsappUrl: 'https://wa.me/601156277251', lat: 3.8295, lng: 101.4035 },
  { id: 'o8', name: 'Ayam Gepuk Artisan Teluk Intan', address: 'Teluk Intan, Perak', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Teluk+Intan', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Teluk%20Intan', whatsappUrl: 'https://wa.me/601156277251', lat: 4.0226, lng: 101.0219 },
  { id: 'o9', name: 'Ayam Gepuk Artisan Maxim Sentul', address: 'G-40, Maxim Citylights, Sentul, 51000 Kuala Lumpur', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Maxim+Sentul', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Maxim%20Sentul', whatsappUrl: 'https://wa.me/60102778223', lat: 3.1952, lng: 101.6918 },
  { id: 'o10', name: 'Ayam Gepuk Artisan Subang Bestari', address: '16-1, Jalan Nova U5/N, Subang Bestari, 40150 Shah Alam, Selangor', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Subang+Bestari', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Subang%20Bestari', whatsappUrl: 'https://wa.me/60182455180', lat: 3.1672, lng: 101.5312 },
  { id: 'o11', name: 'Ayam Gepuk Artisan Ipoh', address: 'Ipoh, Perak', hours: '11:00 AM - 10:00 PM', mapsUrl: 'https://maps.google.com/?q=Ayam+Gepuk+Artisan+Ipoh', wazeUrl: 'https://waze.com/ul?q=Ayam%20Gepuk%20Artisan%20Ipoh', whatsappUrl: 'https://wa.me/601156277251', lat: 4.5975, lng: 101.0901 },
];

export const PROMOTIONS: Promotion[] = [
    { id: 'p1', title: 'UNLIMITED REFILL', description: 'Enjoy unlimited refills of rice, sambal, water & soy sauce!', imageUrl: `${IMG_BASE_URL}unlimited-refill-promo.webp` },
    { id: 'p2', title: 'NOW ON FOODPANDA', description: 'Get your favorite Ayam Gepuk Artisan delivered to your doorstep!', imageUrl: `${IMG_BASE_URL}foodpanda-delivery.webp` },
    { id: 'p3', title: 'LIMITED TIME: SET B KRISPY RM13.99', description: 'Grab the fan-favourite Set B Krispy at a special price!', imageUrl: `${IMG_BASE_URL}set-b-krispy.webp`, countdown: '2025-09-30T23:59:59' },
    { id: 'p4', title: 'COMING SOON: SUBANG BESTARI', description: 'Opening September 15, 2025! Subang, we are coming for you!', imageUrl: `${IMG_BASE_URL}new-outlet-subang-2.webp` },
];

export const SPICE_LEVELS: SpiceLevel[] = [
    { name: 'Biasa', level: 1 },
    { name: 'Pedas', level: 2 },
    { name: 'Extra Pedas', level: 3 },
];

export const JOB_OPENINGS: JobOpening[] = [
    {
        id: 'j1',
        title: 'Restaurant Crew',
        location: 'Maxim Sentul & Subang Bestari',
        positions: ['Kitchen Crew', 'Krew Kaunter', 'Pembantu Outlet', 'Manager'],
        benefits: [
            'Gaji menarik & kenaikan berdasarkan prestasi',
            'Elaun makan disediakan',
            'Suasana kerja mesra & seronok',
            'Latihan disediakan - tiada pengalaman pun boleh!',
        ],
        contact: '60102778223', // Maxim Sentul
    },
    {
        id: 'j2',
        title: 'Restaurant Crew',
        location: 'Seremban 2, Negeri Sembilan',
        positions: ['Restaurant Crew (Full-time)'],
        benefits: [
            'Gaji RM1800-RM2100 (Basic + Komisen)',
            'Latihan dan teori disediakan',
            'Kenaikan gaji & bonus',
            'EPF & SOCSO',
            'Makanan disediakan'
        ],
        contact: '60182442017',
    }
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 't1', quote: 'Sedap gila, sambal dia macam tamparan cinta! Wajib cuba tahap Extra Pedas!', author: '@spicyqueen' },
    { id: 't2', quote: 'Portion besar, harga madani. Unlimited refill tu memang penyelamat. Confirm repeat!', author: '@foodhunter.my' },
    { id: 't3', quote: 'The best Ayam Gepuk in town. Crispy chicken and the sambal is just perfect. 10/10!', author: 'Ahmad L.' },
];