import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, link, bgColor }) => {
  return (
    <a href={link} className="block group">
      <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
        <div className="p-6 flex-grow">
          <div className={`flex items-center justify-center h-16 w-16 rounded-lg ${bgColor} mb-4 transition-transform duration-300 group-hover:scale-110`}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-base text-gray-500">
            {description}
          </p>
        </div>
        <div className="p-6 bg-gray-100 mt-auto">
          <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-500">
            Kunjungi Halaman <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;