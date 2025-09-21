import React from 'react';

export const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a1.125 1.125 0 01-1.59 0l-3.72-3.72a2.123 2.123 0 01-1.98-2.193V10.608c0-.97.616-1.813 1.5-2.097m6.75-3.686l-3.72-3.72a1.125 1.125 0 00-1.59 0l-3.72 3.72a2.123 2.123 0 00-1.98 2.193v4.286c0 1.136.847 2.1 1.98 2.193l3.72 3.72a1.125 1.125 0 001.59 0l3.72-3.72a2.123 2.123 0 001.98-2.193V10.608c0-.97-.616-1.813-1.5-2.097"
    />
  </svg>
);
