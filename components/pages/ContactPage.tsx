import React from 'react';
import { WhatsappIcon } from '../icons/WhatsappIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          HUBUNGI KAMI / CONTACT US
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Ada soalan, maklum balas, atau tempahan katering? Kami sedia membantu!</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-10">
        {/* Direct Contact */}
        <div className="space-y-6">
            <h2 className="text-3xl font-bangers text-gray-800 dark:text-gray-200 border-b-4 border-[var(--brand-yellow)] pb-2">Direct Contact</h2>
             <a href="https://wa.me/601156277251" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
                <WhatsappIcon className="w-8 h-8 mr-4"/>
                <div>
                    <p className="font-bold">WhatsApp for Orders</p>
                    <p className="text-sm">+60 11-5627 7251</p>
                </div>
            </a>
            <a href="https://wa.me/601153242727" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                 <WhatsappIcon className="w-8 h-8 mr-4"/>
                <div>
                    <p className="font-bold">WhatsApp for Feedback/Complaints</p>
                    <p className="text-sm">+60 11-5324 2727</p>
                </div>
            </a>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
                <p className="font-bold">Follow Us:</p>
                <p>Instagram: <a href="https://www.instagram.com/ayamgepukartisan/" className="text-[var(--brand-red)] hover:underline">@ayamgepukartisan</a></p>
                 <p>Facebook: <a href="https://www.facebook.com/AyamGepukArtisan/" className="text-[var(--brand-red)] hover:underline">Ayam Gepuk Artisan</a></p>
            </div>
        </div>
        
        {/* Form */}
        <div>
            <h2 className="text-3xl font-bangers text-gray-800 dark:text-gray-200 border-b-4 border-[var(--brand-yellow)] pb-2">Inquiry Form</h2>
             <form className="mt-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama</label>
                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Emel</label>
                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]" />
                </div>
                 <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Inquiry Type</label>
                    <select id="inquiryType" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]">
                        <option>Pertanyaan Umum / General Inquiry</option>
                        <option>Tempahan Katering / Catering Booking</option>
                        <option>Minat Francais / Franchise Interest</option>
                    </select>
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesej</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[var(--brand-red)] focus:border-[var(--brand-red)]"></textarea>
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
  );
};

export default ContactPage;
