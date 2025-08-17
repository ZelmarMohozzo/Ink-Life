import React from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Cursos', page: 'cursos' },
    { name: 'Galería', page: 'galeria' },
    { name: 'Precios', page: 'precios' },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
              <nav className="flex space-x-8">
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
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-lg font-medium transition-colors hover:text-red-400 font-['Cinzel'] ${
                    currentPage === item.page ? 'text-red-500' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Logo positioned below navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/banner_inkedlife.png" 
            alt="Inked Life" 
            className="h-28 object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Header;