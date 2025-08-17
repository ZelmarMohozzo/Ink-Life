import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Tatuaje Realista',
      category: 'Realismo'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Arte Geométrico',
      category: 'Geométrico'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Tatuaje Tradicional',
      category: 'Tradicional'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/2183027/pexels-photo-2183027.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Mandala',
      category: 'Mandala'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Arte Moderno',
      category: 'Moderno'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Diseño Floral',
      category: 'Floral'
    }
  ];

  return (
    <section 
      className="py-20 px-4 relative" 
      style={{
        backgroundColor: '#111827',
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
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
    </section>
  );
};

export default Gallery;