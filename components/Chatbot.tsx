// FIX: Replaced placeholder content with a complete implementation for the Chatbot component.
import React, { useState, useRef, useEffect, useContext } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { AppContext } from '../context/AppContext';
import { ChatIcon } from './icons/ChatIcon';
import { CloseIcon } from './icons/CloseIcon';
import { SendIcon } from './icons/SendIcon';
import copy from '../copy';
import { MENU_ITEMS, OUTLETS, PROMOTIONS } from '../constants';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { language } = useContext(AppContext);

    const menuCopy = Object.entries(copy.nav).map(([key, value]) => `- ${key}: ${value[language]}`).join('\n');
    
    const menuDataForPrompt = MENU_ITEMS.map(item =>
        `- ${item.name}: ${item.description}. Price: RM${item.price.toFixed(2)}${item.price2pcs ? ` (1pc) / RM${item.price2pcs.toFixed(2)} (2pcs)` : ''}`
    ).join('\n');

    const outletDataForPrompt = OUTLETS.map(outlet =>
        `- ${outlet.name}: Located at ${outlet.address}. Open from ${outlet.hours}.`
    ).join('\n');
    
    const promotionDataForPrompt = PROMOTIONS.map(promo =>
        `- ${promo.title}: ${promo.description}`
    ).join('\n');

    const systemInstruction = `You are a friendly and helpful chatbot for a Malaysian restaurant called "Ayam Gepuk Artisan".
Your goal is to assist customers with their questions.
You must be polite and use friendly language (Bahasa Melayu or English, depending on the user).

**Core Instructions:**
1.  **Be Helpful & Concise:** Answer questions about the menu, outlets, promotions, and general information. Keep answers brief and to the point.
2.  **Stay On Topic:** Do not answer questions unrelated to Ayam Gepuk Artisan. If asked, politely steer the conversation back, for example by saying: "I'm the Ayam Gepuk Artisan bot and can only help with questions about our restaurant. How can I help you with our menu or outlets?"
3.  **Encourage Engagement:** Encourage users to visit an outlet or order online (e.g., via Foodpanda, if mentioned in promotions).
4.  **Guide, Don't Just Answer:** When a user's question can be answered by a specific page, provide a concise answer AND guide them to the relevant page for more details. For example: "Our Seremban 2 outlet is open from 11:00 AM to 9:30 PM. You can find details for all our locations on the 'Outlets' page."

**Handling Common Inquiries:**
-   **Operating Hours:** If a user asks for opening hours, provide the specific hours for the outlet if they name one. Then, guide them to the 'Outlets' page for a complete list.
-   **Menu Items:** If a user asks about a specific dish (e.g., "What's in Set B Krispy?"), describe it based on the menu data provided below and state its price. Suggest they check the 'Menu' page to see all our offerings or build their own meal.
-   **Location:** If asked for the nearest outlet, guide them to the 'Outlets' page where they can see all locations, addresses, and map links.
-   **Promotions:** If asked about deals, mention current promotions from the list below, especially the upcoming 'COMING SOON: SUBANG BESTARI' opening on September 15, 2025. Guide them to the 'Promotions' page for more details.
-   **Catering:** If asked about catering services, provide the dedicated WhatsApp number (+601153242727) and suggest they visit the 'Contact Us' or 'About Us' page for more information.
-   **Feedback & Complaints:** If a user expresses feedback or has a complaint, be empathetic. Guide them to our official feedback channels. Inform them they can send a message to our dedicated feedback WhatsApp at +601153242727, or scan the feedback QR code which can be found on our 'About Us' page.

**Restaurant Information (for your reference):**

**Navigation Pages:**
${menuCopy}

**Full Menu:**
${menuDataForPrompt}

**Outlet Information:**
${outletDataForPrompt}

**Current Promotions:**
${promotionDataForPrompt}

Today's date is ${new Date().toDateString()}.
`;
    
    const initializeChat = () => {
        try {
            // FIX: Initialize GoogleGenAI with apiKey from environment variables as per guidelines.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            // FIX: Use 'gemini-2.5-flash' model and create a chat session with a system instruction.
            const chatSession = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: systemInstruction,
                },
            });
            setChat(chatSession);
            setMessages([{ sender: 'bot', text: language === 'bm' ? 'Salam! Saya chatbot Ayam Gepuk Artisan. Tanya saya apa sahaja!' : 'Hi! I\'m the Ayam Gepuk Artisan chatbot. Ask me anything!' }]);
        } catch (error) {
            console.error("Failed to initialize chatbot:", error);
            setMessages([{ sender: 'bot', text: 'Sorry, the chatbot is currently unavailable.' }]);
        }
    };

    useEffect(() => {
        if (isOpen) {
            initializeChat();
        } else {
            setChat(null);
            setMessages([]);
        }
    }, [isOpen]);

    // Effect to reset chat if language changes while open
    useEffect(() => {
        if (isOpen && chat) {
           initializeChat();
        }
    }, [language]);


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // FIX: Use chat.sendMessageStream for streaming responses.
            const stream = await chat.sendMessageStream({ message: input });
            let botResponse = '';
            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

            for await (const chunk of stream) {
                // FIX: Access the text directly from the chunk, which is of type GenerateContentResponse.
                botResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = botResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-[var(--brand-red)] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50"
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatIcon className="w-8 h-8" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[90vw] max-w-sm h-[60vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 transition-all duration-300 ease-out transform origin-bottom-right scale-100">
                    <header className="bg-[var(--brand-yellow)] text-red-700 p-4 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-bold text-lg">Ayam Gepuk Artisan Bot</h3>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex flex-col space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user'
                                                ? 'bg-red-500 text-white rounded-br-none'
                                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text || '...'}
                                    </div>

                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none">
                                        <div className="flex items-center space-x-1">
                                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
                                            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={language === 'bm' ? "Taip mesej anda..." : "Type your message..."}
                            className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="ml-3 p-2 bg-[var(--brand-red)] text-white rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed">
                            <SendIcon className="w-6 h-6" />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;