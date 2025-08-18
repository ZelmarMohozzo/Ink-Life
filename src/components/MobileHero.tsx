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

        {/* Services */}
        <div className="space-y-2 mb-8">
          <p className="text-lg text-gray-300 font-light">
            Remoción de tatuajes
          </p>
          <p className="text-lg text-gray-300 font-light">
            Tatuajes personalizados
          </p>
        </div>

        {/* Animated scroll arrow */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-6 border-r-2 border-b-2 border-white/70 transform rotate-45 mb-2"></div>
            <div className="w-6 h-6 border-r-2 border-b-2 border-white/50 transform rotate-45 mb-2 animate-pulse"></div>
            <div className="w-6 h-6 border-r-2 border-b-2 border-white/30 transform rotate-45 animate-pulse" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;