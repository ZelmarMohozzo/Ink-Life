import React, { useState } from 'react';
import { ArrowLeft, X, Filter } from 'lucide-react';

interface GaleriaProps {
  onNavigate: (page: string) => void;
}

const Galeria: React.FC<GaleriaProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Realismo', 'Tradicional', 'Geométrico', 'Blackwork', 'Floral', 'Mandala'];

  const images = [
    { id: 1, url: '/tatuajes/IMG-20250614-WA0016.jpg', category: 'Realismo', title: 'Horus Egipcio' },
    { id: 2, url: '/tatuajes/IMG-20250614-WA0023.jpg', category: 'Realismo', title: 'Carnero Realista' },
    { id: 3, url: '/tatuajes/IMG-20250614-WA0028.jpg', category: 'Realismo', title: 'Rosa y Ojo' },
    { id: 4, url: '/tatuajes/IMG-20250614-WA0030.jpg', category: 'Realismo', title: 'Águila y Tigre' },
    { id: 5, url: '/tatuajes/IMG-20250614-WA0043.jpg', category: 'Realismo', title: 'Guerrero Nativo' },
    { id: 6, url: '/tatuajes/IMG-20250614-WA0025.jpg', category: 'Realismo', title: 'Águila Detallada' },
    { id: 7, url: '/tatuajes/IMG-20250614-WA0026.jpg', category: 'Realismo', title: 'Retratos Clásicos' },
    { id: 8, url: '/tatuajes/IMG-20250614-WA0027.jpg', category: 'Realismo', title: 'Brújula y Paisaje' },
    { id: 9, url: '/tatuajes/IMG-20250614-WA0028 copy.jpg', category: 'Realismo', title: 'Manga Completa' },
    { id: 10, url: '/tatuajes/IMG-20250614-WA0029.jpg', category: 'Geométrico', title: 'Ozzy Osbourne' }
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-red-400 hover:text-red-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Galería Completa
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora todos nuestros trabajos organizados por categorías. Cada pieza refleja nuestra pasión y dedicación al arte del tatuaje.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="h-5 w-5 text-red-500 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium mb-2 inline-block">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No se encontraron imágenes para esta categoría.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;