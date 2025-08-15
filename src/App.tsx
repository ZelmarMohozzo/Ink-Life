import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';
import ArtistInfo from './components/ArtistInfo';
import Footer from './components/Footer';
import Cursos from './pages/Cursos';
import Galeria from './pages/Galeria';
import Precios from './pages/Precios';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'cursos':
        return <Cursos onNavigate={setCurrentPage} />;
      case 'galeria':
        return <Galeria onNavigate={setCurrentPage} />;
      case 'precios':
        return <Precios onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Carousel onNavigate={setCurrentPage} />
            <Gallery onNavigate={setCurrentPage} />
            <ArtistInfo />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;