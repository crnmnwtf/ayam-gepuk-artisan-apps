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
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h1 className="text-5xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>About Us / Tentang Kami</h1>
                <p className="text-lg font-bold text-[var(--brand-red)] mt-2">Rasa Ayam Gepuk Sebenar!</p>
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
                    <img src={`${IMG_BASE_URL}logo-yellow-bg.webp`} alt="Ayam Gepuk Artisan Brand" className="rounded-2xl shadow-2xl w-48 md:w-80"/>
                 </div>
            </div>

            {/* Our Values Section */}
            <div className="max-w-5xl mx-auto mt-16">
                <h2 className="text-3xl font-bangers text-center text-gray-800 dark:text-gray-200 mb-8">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ValueCard title="Authentic Taste" description="Serving the true, original taste of Ayam Gepuk with our secret cashew sambal recipe." />
                    <ValueCard title="Quality Ingredients" description="Using only fresh, locally-sourced ingredients to ensure the best flavor in every meal." />
                    <ValueCard title="Halal Certified" description="Strictly adhering to Halal standards, providing our customers with peace of mind." />
                    <ValueCard title="Customer Happiness" description="From our unlimited refills to our friendly service, your satisfaction is our priority." />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutPage;
