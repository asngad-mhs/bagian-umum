import React from 'react';

export const SpinnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 12h-3a7.5 7.5 0 00-7.5-7.5h1.5v-1.5a7.5 7.5 0 007.5-7.5h3zM10.5 6a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12 1.5a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V1.5zM12 21a.75.75 0 001.5 0v-2.25a.75.75 0 00-1.5 0v2.25zM18.75 6a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V6zM18.75 18a.75.75 0 001.5 0v-2.25a.75.75 0 00-1.5 0v2.25z" />
    </svg>
);