import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center" aria-label="Loading content">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--brand-yellow)]"></div>
      <div className="absolute animate-spin rounded-full h-16 w-16 border-l-4 border-r-4 border-[var(--brand-red)] opacity-75" style={{ animationDirection: 'reverse' }}></div>
    </div>
  );
};

export default LoadingSpinner;
