import React from 'react';

export const MapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6.75V15m0 0v2.25m0-2.25h1.5M12 9.75V15m0 0v2.25m0-2.25h1.5m-1.5 0l3-3m-3 3l-3-3m-3-3v6.75m11.25-6.75v6.75m0 0h1.5m-1.5 0l3-3m-3 3l-3-3M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
