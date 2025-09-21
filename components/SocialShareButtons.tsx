import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className="flex items-center space-x-3">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Share:</span>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Share on Facebook">
            <FacebookIcon className="w-6 h-6" />
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="Share on Twitter">
            <TwitterIcon className="w-6 h-6" />
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors" aria-label="Share on WhatsApp">
            <WhatsappIcon className="w-6 h-6" />
        </a>
    </div>
  );
};

export default SocialShareButtons;
