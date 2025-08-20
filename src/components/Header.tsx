import React from 'react';
import { Menu, X, Zap } from 'lucide-react';
import CartIcon from './CartIcon';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [showFloatingLogo, setShowFloatingLogo] = React.useState(false);

  const menuItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Cursos', page: 'cursos' },
    { name: 'Artista', page: 'artista' },
    { name: 'Galería', page: 'galeria' },
    { name: 'Precios', page: 'precios' },
  ];

  // Detectar scroll para mostrar/ocultar logo flotante
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Mostrar logo cuando se haga scroll hacia abajo (más de 100px)
      setShowFloatingLogo(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-black/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-4 md:justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center w-full">
              {/* Left Menu Items */}
              <nav className="flex space-x-8">
                {menuItems.slice(0, 2).map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`px-3 py-2 text-lg font-medium transition-all duration-300 hover:text-red-400 font-['Cinzel'] ${
                      currentPage === item.page 
                        ? 'text-red-500 border-b-2 border-red-500' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Center Space for Logo */}
              <div className="flex-1 flex justify-center">
                {/* Logo space - will be positioned here */}
              </div>

              {/* Right Menu Items */}
              <nav className="flex items-center space-x-8">
                {menuItems.slice(2).map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`px-3 py-2 text-lg font-medium transition-all duration-300 hover:text-red-400 font-['Cinzel'] ${
                      currentPage === item.page 
                        ? 'text-red-500 border-b-2 border-red-500' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <CartIcon />
              </nav>
            </div>

            {/* Mobile Menu Button - Right */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Logo flotante en móvil */}
              <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                showFloatingLogo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <img 
                  src="/banner_inkedlife.png" 
                  alt="Inked Life" 
                  className="h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => onNavigate('home')}
                />
              </div>
              
              <CartIcon />
              
              <button
                className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors font-['Cinzel'] text-lg"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 top-0"
              onClick={toggleMenu}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
                {menuItems.map((item, index) => (
                  <button
                    key={item.page}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(item.page);
                      toggleMenu();
                    }}
                    className={`text-2xl font-medium transition-all duration-500 transform hover:scale-110 font-['Cinzel'] ${
                      currentPage === item.page ? 'text-red-500' : 'text-white hover:text-red-400'
                    } ${isAnimating ? 'animate-pulse' : `animate-fade-in-up`}`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    {item.name}
                  </button>
                ))}
                
              </div>
              
              {/* Logo at the bottom - positioned fixed independently */}
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <img 
                  src="/logo.png" 
                  alt="Inked Life Logo" 
                  className="h-40 object-contain opacity-80"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>

      {/* Logo positioned below navbar - only on desktop */}
      <div className="hidden md:block fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <div 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/banner_inkedlife.png" 
            alt="Inked Life" 
            className="h-32 object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Header;