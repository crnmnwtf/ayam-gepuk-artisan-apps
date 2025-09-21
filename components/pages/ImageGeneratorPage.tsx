import React, { useState, useContext } from 'react';
import { GoogleGenAI } from '@google/genai';
import { AppContext } from '../../context/AppContext';
import copy from '../../copy';
import LoadingSpinner from '../LoadingSpinner';
import LazyImage from '../LazyImage';

const ImageGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useContext(AppContext);
  const t = (key: keyof typeof copy.imageGeneratorPage) => copy.imageGeneratorPage[key][language];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setImageUrl(null);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: `Ayam Gepuk Artisan related image: ${prompt}`,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
      });

      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      const url = `data:image/jpeg;base64,${base64ImageBytes}`;
      setImageUrl(url);
    } catch (err) {
      console.error("Image generation failed:", err);
      setError(t('errorText'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
          {t('title')}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
        <form onSubmit={handleGenerate}>
          <label htmlFor="prompt-input" className="block text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Image Description
          </label>
          <textarea
            id="prompt-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t('promptPlaceholder')}
            rows={3}
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="mt-4 w-full bg-[var(--brand-red)] text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 text-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {isLoading ? t('generatingText') : t('generateButton')}
          </button>
        </form>
      </div>

      <div className="mt-12 flex justify-center items-center">
        {isLoading && <LoadingSpinner />}
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        {imageUrl && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-2xl animate-fade-in">
            <LazyImage 
              src={imageUrl} 
              alt={`AI-generated image based on prompt: ${prompt}`} 
              className="rounded-md max-w-full sm:max-w-md md:max-w-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGeneratorPage;
