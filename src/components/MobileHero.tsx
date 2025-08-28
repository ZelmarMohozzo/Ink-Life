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
        {/* Main Content */}
        <div className="space-y-6">
          {/* Main Title */}
          <div className="relative space-y-3">
            {/* Title with effects */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold font-['Cinzel'] tracking-wider mb-16">
              {/* Multiple glow layers for dramatic effect */}
              <span className="absolute inset-0 text-yellow-400 blur-lg opacity-80 animate-pulse">INK LIFE</span>
              <span className="absolute inset-0 text-yellow-300 blur-md opacity-60">INK LIFE</span>
              <span className="absolute inset-0 text-orange-400 blur-sm opacity-40">INK LIFE</span>
              {/* Main text with gradient and shadow */}
              <span className="relative bg-gradient-to-b from-yellow-200 via-yellow-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] animate-pulse">
                INK LIFE
              </span>
            </h1>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2 font-['Oswald']">
                CURSOS PROFESIONALES
              </h3>
              <p className="text-gray-300 text-sm">
                Aprende el arte del tatuaje con instructores expertos
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2 font-['Oswald']">
                TATUAJES PERSONALIZADOS
              </h3>
              <p className="text-gray-300 text-sm">
                Diseños únicos creados especialmente para ti
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2 font-['Oswald']">
                REMOCIÓN LÁSER
              </h3>
              <p className="text-gray-300 text-sm">
                Tecnología avanzada para eliminar tatuajes
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col space-y-3 max-w-xs mx-auto">
            <button
              onClick={() => onNavigate('cursos')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Cursos
            </button>
            
            <button
              onClick={() => onNavigate('tatuate')}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reservar Tatuaje
            </button>
          </div>
        </div>

      </div>
      
      {/* Animated scroll arrow - positioned at very bottom */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div 
          className="flex flex-col items-center animate-bounce cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <div className="w-6 h-6 border-r-2 border-b-2 border-white/70 transform rotate-45 mb-2"></div>
          <div className="w-6 h-6 border-r-2 border-b-2 border-white/50 transform rotate-45 mb-2 animate-pulse"></div>
          <div className="w-6 h-6 border-r-2 border-b-2 border-white/30 transform rotate-45 animate-pulse" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;