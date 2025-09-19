import React from 'react';

const IMG_BASE_URL = 'https://storage.googleapis.com/gen-ai-hackathon-2024-invincible-mango/';

const ValueCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-[var(--brand-yellow)] h-full">
        <h3 className="text-xl font-bangers text-[var(--brand-red)]">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6 py-16">
            <div className="text-center">
                <h1 className="text-6xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>About Us / Tentang Kami</h1>
                <p className="text-xl font-bold text-[var(--brand-red)] mt-2">Rasa Ayam Gepuk Sebenar!</p>
            </div>

            <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        <strong>Ayam Gepuk Artisan</strong> is a 100% Malaysian Muslim-owned brand committed to serving the most delicious and authentic ayam gepuk. We started with one goal: to share the joy of 'The Real Taste of Ayam Gepuk' with everyone.
                    </p>
                    <p>
                        Every dish is prepared using fresh, high-quality ingredients and is guaranteed <strong className="text-[var(--brand-red)]">Halal</strong>. Our special cashew sambal is a secret recipe that makes us unique and loved by many.
                    </p>
                    <p>
                        We are proud to be part of the <strong className="text-[var(--brand-red)]">#SupportLokal</strong> initiative and always strive to provide the best service to our customers. Thank you for your support!
                    </p>
                </div>
                 <div className="flex justify-center">
                    <img src={`${IMG_BASE_URL}logo-yellow-bg.png`} alt="Ayam Gepuk Artisan Brand" className="rounded-2xl shadow-2xl w-64 md:w-80"/>
                 </div>
            </div>

            {/* Our Values Section */}
            <div className="max-w-5xl mx-auto mt-20">
                <h2 className="text-4xl font-bangers text-center text-gray-800 dark:text-gray-200 mb-8">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ValueCard title="Authentic Taste" description="Serving the true, original taste of Ayam Gepuk with our secret cashew sambal recipe." />
                    <ValueCard title="Quality Ingredients" description="Using only fresh, locally-sourced ingredients to ensure the best flavor in every meal." />
                    <ValueCard title="Halal Certified" description="Strictly adhering to Halal standards, providing our customers with peace of mind." />
                    <ValueCard title="Customer Happiness" description="From our unlimited refills to our friendly service, your satisfaction is our priority." />
                </div>
            </div>
            
             {/* Contact Section */}
             <div className="max-w-4xl mx-auto mt-20 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left side: Direct contact */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bangers text-gray-800 dark:text-gray-200 border-b-4 border-[var(--brand-yellow)] pb-2">Contact & Feedback</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Have questions or feedback? We're here to listen! Contact us via WhatsApp for catering or scan the QR code for feedback.
                        </p>
                        <a
                            href="https://wa.me/601153242727"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300 text-lg"
                        >
                            WhatsApp Us for Catering
                        </a>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">Feedback / Maklum Balas</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scan for any feedback regarding our products and services.</p>
                            <img src={`${IMG_BASE_URL}complaint-qr-code.jpg`} alt="QR Code Aduan" className="w-32 h-32" />
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bangers text-gray-800 dark:text-gray-200 border-b-4 border-[var(--brand-yellow)] pb-2">Inquiry Form</h2>
                        <form className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="about-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" id="about-name" className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
                            </div>
                            <div>
                                <label htmlFor="about-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" id="about-email" className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
                            </div>
                            <div>
                                <label htmlFor="about-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea id="about-message" rows={4} className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-[var(--brand-red)] text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 text-lg">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;