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
          {/* Elegant Title Design */}
          <div className="relative mb-12">
            {/* Background frame for title */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                
                {/* Decorative top accent */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
                  <div className="mx-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-green-400 rounded-full"></div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-400"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-['Cinzel'] tracking-[0.3em] relative mb-4">
                  {/* Subtle background glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-green-500/20 blur-3xl"></span>
                  {/* Main elegant text */}
                  <span className="relative bg-gradient-to-r from-purple-100 via-white to-green-100 bg-clip-text text-transparent filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    GALERÍA
                  </span>
                </h2>
                
                {/* Subtitle with elegant styling */}
                <div className="relative">
                  <p className="text-lg md:text-xl font-light font-['Cinzel'] tracking-[0.2em] text-gray-300 mb-6">
                    DE TRABAJOS ARTÍSTICOS
                  </p>
                </div>
                
                {/* Decorative bottom accent */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
                  <div className="mx-3 flex space-x-1">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-green-300"></div>
                </div>
                
                {/* Subtle decorative accent at bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
              </div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-green-300"></div>
            </div>
          </div>
          
          {/* Elegant description with glass effect */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Explora nuestros <span className="text-transparent bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text font-semibold">trabajos más destacados</span> y la 
                <span className="text-transparent bg-gradient-to-r from-green-300 to-green-400 bg-clip-text font-semibold"> calidad artística</span> que nos define.
              </p>
              
              {/* Subtle decorative accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Enhanced CTA button with glow effects */}
          <div className="relative inline-block">
            <button
              onClick={() => onNavigate('galeria')}
              className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-green-600 hover:from-purple-500 hover:via-purple-600 hover:to-green-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 border border-purple-400/50 hover:border-purple-300/70 overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Button content */}
              <span className="relative flex items-center space-x-3">
                <span>Ver Galería Completa</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-green-500/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150"></div>
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