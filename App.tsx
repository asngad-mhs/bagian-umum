
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Announcements from './components/Announcements.tsx';
import Features from './components/Features.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Announcements />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;