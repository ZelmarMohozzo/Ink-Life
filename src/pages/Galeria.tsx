import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, Filter, Search, Heart, Share2, Download, Eye, ZoomIn } from 'lucide-react';

interface GaleriaProps {
  onNavigate: (page: string) => void;
}

const Galeria: React.FC<GaleriaProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const categories = ['Todos', 'Realismo', 'Tradicional', 'Geométrico', 'Blackwork', 'Floral', 'Mandala'];

  const images = [
    { id: 1, url: '/tatuajes/IMG-20250614-WA0016.jpg', category: 'Realismo', title: 'Horus Egipcio', artist: 'Nico Lemos', likes: 127, views: 1543 },
    { id: 2, url: '/tatuajes/IMG-20250614-WA0023.jpg', category: 'Realismo', title: 'Carnero Realista', artist: 'Nico Lemos', likes: 89, views: 1205 },
    { id: 3, url: '/tatuajes/IMG-20250614-WA0028.jpg', category: 'Realismo', title: 'Rosa y Ojo', artist: 'Nico Lemos', likes: 156, views: 2103 },
    { id: 4, url: '/tatuajes/IMG-20250614-WA0030.jpg', category: 'Realismo', title: 'Águila y Tigre', artist: 'Nico Lemos', likes: 203, views: 2847 },
    { id: 5, url: '/tatuajes/IMG-20250614-WA0043.jpg', category: 'Realismo', title: 'Guerrero Nativo', artist: 'Nico Lemos', likes: 178, views: 2456 },
    { id: 6, url: '/tatuajes/IMG-20250614-WA0025.jpg', category: 'Realismo', title: 'Águila Detallada', artist: 'Nico Lemos', likes: 134, views: 1876 },
    { id: 7, url: '/tatuajes/IMG-20250614-WA0026.jpg', category: 'Realismo', title: 'Retratos Clásicos', artist: 'Nico Lemos', likes: 167, views: 2234 },
    { id: 8, url: '/tatuajes/IMG-20250614-WA0027.jpg', category: 'Realismo', title: 'Brújula y Paisaje', artist: 'Nico Lemos', likes: 145, views: 1987 },
    { id: 9, url: '/tatuajes/IMG-20250614-WA0028 copy.jpg', category: 'Realismo', title: 'Manga Completa', artist: 'Nico Lemos', likes: 289, views: 3456 },
    { id: 10, url: '/tatuajes/IMG-20250614-WA0029.jpg', category: 'Geométrico', title: 'Ozzy Osbourne', artist: 'Nico Lemos', likes: 198, views: 2678 }
  ];

  // Simular carga
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === 'Todos' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (imageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newLikes = new Set(prev);
      if (newLikes.has(imageId)) {
        newLikes.delete(imageId);
      } else {
        newLikes.add(imageId);
      }
      return newLikes;
    });
  };

  const shareImage = (image: any, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: `Mira este increíble tatuaje: ${image.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-green-500/20 border-b-green-500 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <p className="text-white text-xl font-semibold mb-2">Cargando Galería</p>
          <p className="text-gray-400">Preparando las mejores obras de arte...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/Diseño sin título (5).png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147,51,234,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-400/50"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Volver al inicio</span>
        </button>

        {/* Header with enhanced effects */}
        <div className="text-center mb-16">
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              {/* Multiple glow layers */}
              <span className="absolute inset-0 text-purple-500 blur-lg opacity-60 animate-pulse">Galería Completa</span>
              <span className="absolute inset-0 text-purple-400 blur-md opacity-40">Galería Completa</span>
              <span className="absolute inset-0 text-green-400 blur-sm opacity-30">Galería Completa</span>
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
                Galería Completa
              </span>
            </h1>
            
            {/* Animated decorative lines */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Explora nuestra colección completa de trabajos artísticos. Cada pieza refleja nuestra pasión y dedicación al arte del tatuaje.
            </p>
            <p className="text-lg text-gray-400 italic">
              "El arte permanece, la piel es solo el lienzo"
            </p>
          </div>
        </div>

        {/* Enhanced Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por título o estilo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-full px-12 py-4 text-white placeholder-gray-400 focus:border-purple-400/70 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/25"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Buttons with enhanced design */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-purple-500" />
              <span className="text-white font-semibold">Filtrar por categoría:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 border border-purple-400/50'
                      : 'bg-black/40 backdrop-blur-sm text-gray-300 hover:bg-black/60 hover:text-white border border-gray-600/30 hover:border-gray-500/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results counter */}
          <div className="text-center">
            <p className="text-gray-400">
              Mostrando <span className="text-purple-400 font-semibold">{filteredImages.length}</span> de <span className="text-green-400 font-semibold">{images.length}</span> trabajos
            </p>
          </div>
        </div>

        {/* Enhanced Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer border border-gray-800/50 hover:border-purple-500/50"
              onClick={() => setSelectedImage(image.url)}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image container with multiple effects */}
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>

                {/* Stats overlay */}
                <div className="absolute top-4 left-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                  <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Eye className="h-4 w-4 text-gray-300" />
                    <span className="text-white text-sm font-medium">{image.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    {image.category}
                  </span>
                  
                  {/* Action buttons */}
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <button
                      onClick={(e) => toggleLike(image.id, e)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                        likedImages.has(image.id)
                          ? 'bg-red-500/80 text-white'
                          : 'bg-black/50 text-gray-300 hover:text-red-400'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${likedImages.has(image.id) ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button
                      onClick={(e) => shareImage(image, e)}
                      className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">por {image.artist}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Heart className={`h-4 w-4 ${likedImages.has(image.id) ? 'text-red-400 fill-current' : 'text-gray-400'}`} />
                    <span className="text-gray-300 text-sm">
                      {image.likes + (likedImages.has(image.id) ? 1 : 0)}
                    </span>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-purple-400 text-sm font-medium">Ver detalles →</span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-12 border border-gray-800/50 max-w-md mx-auto">
              <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl mb-2">No se encontraron resultados</p>
              <p className="text-gray-500">Intenta con otros términos de búsqueda o categorías</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-all duration-300 transform hover:scale-110 bg-black/50 backdrop-blur-sm p-2 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-1">
                      {images.find(img => img.url === selectedImage)?.title}
                    </h3>
                    <p className="text-gray-300">
                      por {images.find(img => img.url === selectedImage)?.artist}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                      <Heart className="h-6 w-6" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                      <Share2 className="h-6 w-6" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/20 transition-colors">
                      <Download className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default Galeria;