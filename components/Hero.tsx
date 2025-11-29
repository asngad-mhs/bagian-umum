
import React from 'react';
import LoginFormComponent from './LoginFormComponent.tsx';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 to-indigo-900/90"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        <div className="md:w-1/2 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight animate-fadeInUp">
            Selamat Datang di Portal Sivitas Akademika UNUGHA
          </h1>
          <p className="text-lg md:text-xl text-blue-100 animate-fadeInUp animation-delay-300">
            Satu pintu untuk semua layanan akademik Anda. Silakan masuk untuk melanjutkan.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-2/5 w-full max-w-md">
          <LoginFormComponent />
        </div>
      </div>
    </section>
  );
};

export default Hero;