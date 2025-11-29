
import React from 'react';
import { MegaphoneIcon } from './icons/MiscIcons.tsx';

const announcementsData = [
  {
    id: 1,
    title: 'Jadwal Ujian Akhir Semester (UAS) Gasal 2023/2024',
    date: '15 Desember 2023',
    link: '#',
  },
  {
    id: 2,
    title: 'Pemeliharaan Sistem SIAKAD Terjadwal',
    date: '12 Desember 2023',
    link: '#',
  },
  {
    id: 3,
    title: 'Pendaftaran Wisuda Gelombang II Dibuka',
    date: '10 Desember 2023',
    link: '#',
  },
];

const Announcements: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pengumuman Penting</h2>
            <p className="mt-4 text-lg text-gray-500">
              Informasi terbaru seputar kegiatan akademik dan layanan kampus.
            </p>
          </div>
          <div className="space-y-4">
            {announcementsData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MegaphoneIcon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  </div>
                   <div className="flex-shrink-0 self-center">
                     <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">&rarr;</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;