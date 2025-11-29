
import React from 'react';
import Card from './common/Card.tsx';
import { AcademicCapIcon, BookOpenIcon, InformationCircleIcon, ComputerDesktopIcon } from './icons/FeatureIcons.tsx';

const featuresData = [
  {
    icon: <AcademicCapIcon className="h-10 w-10 text-white" />,
    title: 'SIAKAD',
    description: 'Akses Sistem Informasi Akademik untuk nilai, KRS, dan data mahasiswa.',
    link: '#siakad',
    bgColor: 'bg-blue-500'
  },
  {
    icon: <ComputerDesktopIcon className="h-10 w-10 text-white" />,
    title: 'E-Learning',
    description: 'Masuk ke platform pembelajaran daring untuk materi kuliah dan tugas.',
    link: '#e-learning',
    bgColor: 'bg-green-500'
  },
  {
    icon: <BookOpenIcon className="h-10 w-10 text-white" />,
    title: 'Perpustakaan Digital',
    description: 'Cari dan pinjam koleksi buku, jurnal, dan skripsi secara online.',
    link: '#library',
    bgColor: 'bg-yellow-500'
  },
  {
    icon: <InformationCircleIcon className="h-10 w-10 text-white" />,
    title: 'Info Kampus',
    description: 'Dapatkan pengumuman dan informasi terbaru seputar kegiatan kampus.',
    link: '#info',
    bgColor: 'bg-purple-500'
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Akses Cepat Layanan Kami</h2>
          <p className="mt-4 text-lg text-gray-500">
            Tautan penting untuk mendukung aktivitas akademik Anda.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <Card
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;