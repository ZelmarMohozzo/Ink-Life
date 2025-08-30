import React from 'react';
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Cursos', page: 'cursos' },
    { name: 'Tatuate', page: 'tatuate' },
    { name: 'Artista', page: 'artista' },
    { name: 'Galería', page: 'galeria' },
    { name: 'Remoción Láser', page: 'remover-tatuaje' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Principal */}
      <header className="bg-black/80 backdrop-blur-sm fixed w-full top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center w-full">
              {/* Left Menu Items */}
              <nav className="flex space-x-4 lg:space-x-6 xl:space-x-8">
                {menuItems.slice(0, 3).map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`px-2 lg:px-3 py-2 text-base lg:text-lg font-medium transition-all duration-300 hover:text-purple-400 font-['Cinzel'] ${
                      currentPage === item.page 
                        ? 'text-purple-500 border-b-2 border-purple-500' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Center Space for Logo */}
              <div className="flex-1 flex justify-center mx-4 lg:mx-8 xl:mx-12">
                {/* Logo space */}
              </div>

              {/* Right Menu Items */}
              <nav className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
                {menuItems.slice(3).map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`px-2 lg:px-3 py-2 text-sm lg:text-base xl:text-lg font-medium transition-all duration-300 hover:text-purple-400 font-['Cinzel'] whitespace-nowrap ${
                      currentPage === item.page 
                        ? 'text-purple-500 border-b-2 border-purple-500' 
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="ml-2 lg:ml-4">
                  <CartIcon />
                </div>
              </nav>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Cart - Izquierda */}
              <div className="flex items-center space-x-2">
                <CartIcon />
              </div>
              
              {/* Logo Móvil - Centro */}
              {/* Menu Button - Derecha */}
              <div className="flex items-center space-x-2 -mr-0">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-purple-400 transition-colors p-3"
                >
                  {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Logo Desktop - Centrado */}
      <div className="hidden md:block fixed top-0 left-1/2 transform -translate-x-[75%] z-50">
        <div 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/banner_inkedlife.png" 
            alt="Inked Life" 
            className="h-32 object-contain mt-2"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Fondo con blur */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-95"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
            onClick={toggleMenu}
          />
          
          {/* Contenido del menú */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
            {/* Botón de cerrar en la esquina */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors p-2"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Items del menú */}
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => handleMenuItemClick(item.page)}
                  className={`text-3xl font-medium transition-all duration-300 transform hover:scale-110 font-['Cinzel'] ${
                    currentPage === item.page 
                      ? 'text-purple-500' 
                      : 'text-white hover:text-purple-400'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Información adicional */}
            <div className="absolute bottom-8 text-center">
              <p className="text-gray-400 text-sm">
                Ink Life Academia de Tatuajes
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Maldonado, Uruguay
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;