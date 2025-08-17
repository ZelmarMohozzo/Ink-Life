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
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
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
    setScrollLeft(dragOffset);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; // Multiplicador para sensibilidad
    setDragOffset(scrollLeft + walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  // Funciones para el arrastre con touch (móvil)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(dragOffset);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    setDragOffset(scrollLeft + walk);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada tatuaje cuenta una historia única. Descubre nuestros trabajos más destacados y la calidad artística que nos caracteriza.
          </p>
          <button
            onClick={() => onNavigate('galeria')}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Ver Galería Completa
          </button>
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
                transform: `translateX(${dragOffset}px)`,
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
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {image.category}
                        </span>
                        <button
                          onClick={() => setSelectedImage(image.url)}
                          className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
                        >
                          <Eye className="h-5 w-5 text-white" />
                        </button>
                      </div>
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
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
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${images.length * 320}px);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;