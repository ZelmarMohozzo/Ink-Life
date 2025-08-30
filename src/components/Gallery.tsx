import React, { useState } from 'react';
import { X, Eye, Play, Pause } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [animationOffset, setAnimationOffset] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const images = [
    {
      id: 1,
      url: '/tatuajes/IMG-20250614-WA0016.jpg', 
      title: 'Horus Egipcio',
      category: 'Realismo'
    },
    {
      id: 2,
      url: '/tatuajes/IMG-20250614-WA0023.jpg',
      title: 'Carnero Realista',
      category: 'Realismo'
    },
    {
      id: 3,
      url: '/tatuajes/IMG-20250614-WA0028.jpg',
      title: 'Rosa y Ojo',
      category: 'Realismo'
    },
    {
      id: 4,
      url: '/tatuajes/IMG-20250614-WA0030.jpg',
      title: 'Águila y Tigre',
      category: 'Realismo'
    },
    {
      id: 5,
      url: '/tatuajes/IMG-20250614-WA0043.jpg',
      title: 'Guerrero Nativo',
      category: 'Realismo'
    },
    {
      id: 6,
      url: '/tatuajes/IMG-20250614-WA0025.jpg',
      title: 'Águila Detallada',
      category: 'Realismo'
    },
    {
      id: 7,
      url: '/tatuajes/IMG-20250614-WA0026.jpg',
      title: 'Retratos Clásicos',
      category: 'Realismo'
    },
    {
      id: 8,
      url: '/tatuajes/IMG-20250614-WA0027.jpg',
      title: 'Brújula y Paisaje',
      category: 'Realismo'
    },
    {
      id: 9,
      url: '/tatuajes/IMG-20250614-WA0028 copy.jpg',
      title: 'Manga Completa',
      category: 'Realismo'
    },
    {
      id: 10,
      url: '/tatuajes/IMG-20250614-WA0029.jpg',
      title: 'Ozzy Osbourne',
      category: 'Geométrico'
    }
  ];

  // Duplicamos las imágenes para crear el efecto infinito
  const duplicatedImages = [...images, ...images, ...images];

  // Funciones para el arrastre con mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2;
    setCurrentOffset(currentOffset + walk);
    setStartX(x); // Actualizar startX para el próximo movimiento
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Sincronizar el offset de animación con la posición actual
    setAnimationOffset(currentOffset);
    // Reanudar después de un breve momento
    setTimeout(() => {
      setIsPaused(false);
    }, 100);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  // Funciones para el arrastre con touch (móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    setCurrentOffset(currentOffset + walk);
    setStartX(x); // Actualizar startX para el próximo movimiento
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Sincronizar el offset de animación con la posición actual
    setAnimationOffset(currentOffset);
    // Reanudar después de un breve momento
    setTimeout(() => {
      setIsPaused(false);
    }, 100);
  };

  // Prevenir el comportamiento por defecto en móviles
  React.useEffect(() => {
    const preventDefault = (e: Event) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventDefault, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, [isDragging]);

  return (
    <section 
      className="py-20 px-4 relative overflow-hidden" 
      style={{
        backgroundImage: 'url(/texture-dark.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Enhanced Header Container */}
          <div className="relative mb-16 bg-black/30 backdrop-blur-xl rounded-3xl p-12 border border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-700">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-lime-400 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Main Title with enhanced effects */}
            <div className="relative mb-8">
              <h2 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
                {/* Multiple glow layers for dramatic effect */}
                <span className="absolute inset-0 text-green-500 blur-2xl opacity-80 animate-pulse">GALERÍA DE TRABAJOS</span>
                <span className="absolute inset-0 text-green-400 blur-xl opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}>GALERÍA DE TRABAJOS</span>
                <span className="absolute inset-0 text-emerald-300 blur-lg opacity-40 animate-pulse" style={{animationDelay: '1s'}}>GALERÍA DE TRABAJOS</span>
                <span className="absolute inset-0 text-lime-400 blur-md opacity-30">GALERÍA DE TRABAJOS</span>
                {/* Main text with enhanced gradient and shadow */}
                <span className="relative bg-gradient-to-b from-white via-green-100 to-green-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.9)] filter brightness-110">
                  GALERÍA DE TRABAJOS
                </span>
              </h2>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-80 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
                <div className="w-80 h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent blur-sm opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-60 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent blur-md opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced description container */}
          <div className="max-w-4xl mx-auto mb-12 bg-black/20 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 shadow-xl hover:shadow-green-500/10 transition-all duration-500">
            <p className="text-xl md:text-2xl text-gray-100 mb-6 leading-relaxed font-light">
              Cada tatuaje cuenta una historia única. Descubre nuestros trabajos más destacados y la calidad artística que nos caracteriza.
            </p>
            <p className="text-lg md:text-xl text-green-300 italic font-medium bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              "El arte permanece, la piel es solo el lienzo"
            </p>
          </div>
          
          {/* Enhanced CTA button container */}
          <div className="relative inline-block group">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            
            <button
              onClick={() => onNavigate('galeria')}
              className="relative bg-black/40 backdrop-blur-xl hover:bg-black/20 text-green-400 hover:text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-700 transform hover:scale-110 shadow-2xl hover:shadow-green-500/40 border-2 border-green-500/60 hover:border-green-300/80 overflow-hidden"
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center space-x-3">
                <span className="tracking-wide">Ver Galería Completa</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          
            {/* Enhanced decorative elements */}
            <div className="absolute -left-6 -top-6 w-12 h-12 border-l-2 border-t-2 border-green-400/50 opacity-80 animate-pulse"></div>
            <div className="absolute -right-6 -bottom-6 w-12 h-12 border-r-2 border-b-2 border-green-400/50 opacity-80 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute -left-3 -bottom-3 w-6 h-6 border-l-2 border-b-2 border-emerald-300/40 opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -right-3 -top-3 w-6 h-6 border-r-2 border-t-2 border-emerald-300/40 opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>

        {/* Continuous Scroll Container */}
        <div className="relative">
          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
          </button>

          {/* Scrolling Container */}
          <div 
            className="overflow-hidden rounded-2xl select-none"
            ref={containerRef}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`flex gap-6 ${isPaused || isDragging ? '' : 'animate-scroll'}`}
              style={{
                width: `${duplicatedImages.length * 320}px`,
                transform: `translateX(${isDragging || isPaused ? currentOffset : animationOffset}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] flex-shrink-0"
                  style={{ width: '300px', height: '400px' }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ userSelect: 'none' }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {image.category}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(image.url);
                          }}
                          className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Eye className="h-5 w-5 text-white" />
                        </button>
                      </div>
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                  
                  {/* Clickeable overlay for entire image */}
                  <div 
                    className="absolute inset-0 cursor-pointer z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isDragging) {
                        setSelectedImage(image.url);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-red-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Ampliado"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(var(--start-offset, 0px));
          }
          100% {
            transform: translateX(calc(var(--start-offset, 0px) - ${images.length * 320}px));
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
          --start-offset: ${animationOffset}px;
        }
      `}</style>
    </section>
  );
};

export default Gallery;