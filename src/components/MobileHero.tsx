import React from 'react';

interface MobileHeroProps {
  onNavigate: (page: string) => void;
}

const MobileHero: React.FC<MobileHeroProps> = ({ onNavigate }) => {
  return (
    <section 
      className="md:hidden relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/fondo_movil.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/banner_inkedlife.png" 
            alt="Inked Life" 
            className="h-40 mx-auto object-contain"
          />
        </div>

        {/* Main Text */}
        <h1 className="text-4xl font-bold text-white mb-4 font-['Oswald']">
          ACADEMIA DE TATUAJES
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 max-w-sm mx-auto leading-relaxed">
          Aprende el arte del tatuaje con más de 12 años de experiencia profesional
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['Realismo', 'Blackwork', 'Color', 'Black & Gray'].map((specialty, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-purple-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => onNavigate('cursos')}
            className="w-full max-w-xs bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          >
            VER CURSOS
          </button>
          
          <button
            onClick={() => onNavigate('galeria')}
            className="w-full max-w-xs bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          >
            GALERÍA
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;