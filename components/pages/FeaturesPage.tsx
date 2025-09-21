import React from 'react';
import MagicBento from '../MagicBento';

const featuresCardData = [
  {
    title: 'Analytics',
    description: 'Track user behavior',
    label: 'Insights'
  },
  {
    title: 'Dashboard',
    description: 'Centralized data view',
    label: 'Overview'
  },
  {
    title: 'Collaboration',
    description: 'Work together seamlessly',
    label: 'Teamwork'
  },
  {
    title: 'Automation',
    description: 'Streamline workflows',
    label: 'Efficiency'
  },
  {
    title: 'Integration',
    description: 'Connect favorite tools',
    label: 'Connectivity'
  },
  {
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Protection'
  }
];

const renderFeatureCardContent = (card: {label: string, title: string, description: string}) => (
    <>
      <div className="card__header">
        <div className="card__label">{card.label}</div>
      </div>
      <div className="card__content">
        <h2 className="card__title">{card.title}</h2>
        <p className="card__description">{card.description}</p>
      </div>
    </>
);


const FeaturesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
            Our Features
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Interactive Bento Grid Showcase</p>
        </div>
        <div className="flex justify-center">
             <MagicBento
                cardData={featuresCardData}
                renderCardContent={renderFeatureCardContent}
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="244, 96, 54"
            />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
