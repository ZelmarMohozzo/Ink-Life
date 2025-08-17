import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  onNavigate: (page: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: 'DALE VIDA A TU PIEL',
      title: 'HAZTE UN TATTOO',
      description: 'Especialistas certificados en técnicas avanzadas y diferentes estilos. Aplicación precisa, pigmentos de alta calidad y protocolos de bioseguridad profesional.',
      specialties: [
        { name: 'Blackwork', color: 'bg-gray-800 text-white' },
        { name: 'Realismo', color: 'bg-orange-500 text-white' },
        { name: 'Neotradicional', color: 'bg-blue-500 text-white' },
        { name: 'Tribales', color: 'bg-red-600 text-white' }
      ],
      buttons: [
        { text: 'VER PRECIOS', action: () => onNavigate('precios'), style: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' },
        { text: 'GALERÍA →', action: () => onNavigate('galeria'), style: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' }
      ],
      image: '/instructor.png'
    },
    {
      id: 2,
      badge: 'APRENDE EL ARTE',
      title: 'CURSOS DE TATUAJE',
      description: 'Conviértete en un artista profesional con nuestros cursos completos. Desde nivel principiante hasta técnicas avanzadas con instructores certificados.',
      specialties: [
        { name: 'Básico', color: 'bg-green-600 text-white' },
        { name: 'Avanzado', color: 'bg-blue-600 text-white' },
        { name: 'Realismo', color: 'bg-orange-500 text-white' },
        { name: 'Blackwork', color: 'bg-gray-800 text-white' }
      ],
      buttons: [
        { text: 'VER CURSOS', action: () => onNavigate('cursos'), style: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' },
        { text: 'GALERÍA →', action: () => onNavigate('galeria'), style: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' }
      ],
      image: 'https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      badge: 'TECNOLOGÍA AVANZADA',
      title: 'REMOCIÓN LÁSER',
      description: 'Eliminación segura y efectiva de tatuajes con tecnología láser de última generación. Resultados profesionales con mínimo dolor.',
      specialties: [
        { name: 'Q-Switched', color: 'bg-blue-600 text-white' },
        { name: 'Sin Dolor', color: 'bg-green-600 text-white' },
        { name: 'Seguro', color: 'bg-purple-600 text-white' },
        { name: 'Efectivo', color: 'bg-orange-500 text-white' }
      ],
      buttons: [
        { text: 'VER PRECIOS', action: () => onNavigate('precios'), style: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800' },
        { text: 'CONSULTAR →', action: () => onNavigate('precios'), style: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' }
      ],
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden mt-16 bg-black">
    <div className="relative h-screen overflow-hidden mt-28 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          } ${index < currentSlide ? '-translate-x-full' : ''}`}
        >
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {slide.badge}
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-4">Nuestros estilos especializados:</p>
                    <div className="flex flex-wrap gap-3">
                      {slide.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${specialty.color}`}
                        >
                          {specialty.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {slide.buttons.map((button, idx) => (
                      <button
                        key={idx}
                        onClick={button.action}
                        className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 ${button.style}`}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
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
                ? 'bg-purple-500 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;