import React from 'react';
import { LogoIcon } from './icons/LogoIcon.tsx';

const navLinks = [
  { name: 'Beranda', href: '#' },
  { name: 'Tentang Kampus', href: '#' },
  { name: 'Penerimaan', href: '#' },
  { name: 'Kontak', href: '#' },
  { name: 'Bantuan', href: '#' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href='/'}>
            <LogoIcon className="h-10 w-10 text-blue-700" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">UNUGHA</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Universitas Nahdlatul Ulama Al-Ghazali</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;