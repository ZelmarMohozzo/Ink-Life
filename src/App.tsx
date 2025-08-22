import React, { useState } from 'react';
import { CartProvider, useCart } from './components/CartContext';
import Cart from './components/Cart';
import Header from './components/Header';
import MobileHero from './components/MobileHero';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';
import CoursesSection from './components/CoursesSection';
import ArtistInfo from './components/ArtistInfo';
import Footer from './components/Footer';
import Cursos from './pages/Cursos';
import Galeria from './pages/Galeria';
import Precios from './pages/Precios';
import Artista from './pages/Artista';
import CheckoutForm from './pages/CheckoutForm';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { cartItems, getTotalPrice } = useCart();

  const renderPage = () => {
    switch (currentPage) {
      case 'cursos':
        return <Cursos onNavigate={setCurrentPage} />;
      case 'artista':
        return <Artista onNavigate={setCurrentPage} />;
      case 'galeria':
        return <Galeria onNavigate={setCurrentPage} />;
      case 'precios':
        return <Precios onNavigate={setCurrentPage} />;
      case 'checkout':
        return <CheckoutForm onNavigate={setCurrentPage} cartItems={cartItems} totalPrice={getTotalPrice()} />;
      default:
        return (
          <>
            <MobileHero onNavigate={setCurrentPage} />
            <Carousel onNavigate={setCurrentPage} />
            <Gallery onNavigate={setCurrentPage} />
            <CoursesSection onNavigate={setCurrentPage} />
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
      <Cart onNavigate={setCurrentPage} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;