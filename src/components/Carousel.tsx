import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Camera, Zap } from 'lucide-react';

interface CarouselProps {
  onNavigate: (page: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Aprende el Arte del Tatuaje',
      subtitle: 'Conviértete en un artista profesional',
      description: 'Cursos completos desde nivel principiante hasta avanzado. Técnicas profesionales, higiene, teoría del color y práctica supervisada.',
      buttonText: 'Ver Cursos',
      action: () => onNavigate('cursos'),
      icon: <GraduationCap className="h-12 w-12" />,
      bgGradient: 'from-red-900/80 to-gray-900/80',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 2,
      title: 'Galería de Trabajos',
      subtitle: 'Arte en la piel',
      description: 'Descubre nuestros mejores trabajos realizados. Cada tatuaje es una obra de arte única y personalizada.',
      buttonText: 'Ver Galería',
      action: () => onNavigate('galeria'),
      icon: <Camera className="h-12 w-12" />,
      bgGradient: 'from-gray-900/80 to-red-900/80',
      image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 3,
      title: 'Remoción Láser',
      subtitle: 'Tecnología avanzada',
      description: 'Servicio profesional de eliminación de tatuajes con tecnología láser de última generación. Resultados seguros y efectivos.',
      buttonText: 'Consultar Precios',
      action: () => onNavigate('precios'),
      icon: <Zap className="h-12 w-12" />,
      bgGradient: 'from-blue-900/80 to-gray-900/80',
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          } ${index < currentSlide ? '-translate-x-full' : ''}`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                    {slide.id === 1 ? (
                      <img 
                        src="/instructor.png" 
                        alt="Nico Lemos" 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <div className="p-2">
                        {slide.icon}
                      </div>
                    )}
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-red-400 mb-6 font-medium">
                  {slide.subtitle}
                </p>
                
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                <button
                  onClick={slide.action}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-red-500/25"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-red-500 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;