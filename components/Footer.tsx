
import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons/SocialIcons.tsx';
import { LogoIcon } from './icons/LogoIcon.tsx';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'YouTube', href: '#', icon: YoutubeIcon },
];

const quickLinks = [
    { name: 'SIAKAD', href: '#' },
    { name: 'E-Learning', href: '#' },
    { name: 'Perpustakaan', href: '#' },
    { name: 'Website Utama', href: '#' },
];

const contactLinks = [
    { name: 'Pusat Bantuan', href: '#' },
    { name: 'Kontak Admisi', href: '#' },
    { name: 'Peta Kampus', href: '#' },
    { name: 'Kebijakan Privasi', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white border-t-4 border-blue-600">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
                <LogoIcon className="h-10 w-10 text-white" />
                <span className="text-xl font-bold">UNUGHA</span>
            </div>
            <p className="text-sm text-gray-400">
              Universitas Nahdlatul Ulama Al-Ghazali (UNUGHA) Cilacap.
            </p>
             <p className="text-sm text-gray-400">
              Jl. Kemerdekaan Barat No.17, Kesugihan Kidul, Kec. Kesugihan, Kabupaten Cilacap, Jawa Tengah 53274
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Navigasi Cepat</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Kontak & Bantuan</h3>
            <ul className="mt-4 space-y-2">
              {contactLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
           <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Terhubung Dengan Kami</h3>
            <div className="flex space-x-6 mt-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Universitas Nahdlatul Ulama Al-Ghazali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;