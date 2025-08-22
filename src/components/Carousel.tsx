import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Clock, Users, Award } from 'lucide-react';

interface CarouselProps {
  onNavigate: (page: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      category: 'APRENDE A TATUAR',
      title: 'Cursos de Tatuaje Profesional',
      subtitle: 'Conviértete en un artista certificado',
      description: 'Aprende las técnicas más avanzadas del tatuaje con un instructor profesional con años en el sector. Desde fundamentos básicos hasta especialización en realismo y blackwork.',
      stats: [
        { icon: Clock, label: 'Duración', value: '8-12 semanas' },
        { icon: Users, label: 'Estudiantes', value: '10+ formados' },
        { icon: Award, label: 'Oficial', value: 'Certificación' }
      ],
      primaryAction: { text: 'Ver Cursos', action: () => onNavigate('cursos') },
      secondaryAction: { text: 'Más Info', action: () => onNavigate('artista') },
      image: '/instructor.png',
      gradient: 'from-purple-900 via-purple-900 to-indigo-900'
    },
    {
      id: 2,
      category: 'REMOCIÓN LÁSER',
      title: '¿Te arrepientes de ese tatuaje?',
      subtitle: 'Eliminalo de forma segura!',
      description: 'Tecnología láser Q-Switched de última generación para la eliminación efectiva de tatuajes. Proceso seguro, mínimo dolor y resultados garantizados.',
      stats: [
        { icon: Clock, label: 'Sesiones', value: '6-12 promedio' },
        { icon: Users, label: 'Éxito', value: '95% efectividad' },
        { icon: Award, label: 'Tecnología Láser', value: 'Q-Switched' }
      ],
      primaryAction: { text: 'Ver Precios', action: () => onNavigate('precios') },
      secondaryAction: { text: 'Consultar', action: () => onNavigate('precios') },
      image: 'https://inkster.es/cdn/shop/articles/Blog_Banner_Inkster_-_1200x1800_1_800x.jpg',
      gradient: 'from-emerald-950 via-esmerald-900 to-cyan-900'
    },
    {
      id: 3,
      category: 'EL ARTE CON UN PROFESIONAL',
      title: 'Quieres tatuarte?',
      subtitle: 'Dale vida a tu piel con arte único',
      description: 'Creo diseños únicos en base a tus personalidad. Especialista en realismo, blackwork, tradicional y estilos contemporáneos.',
      stats: [
        { icon: Clock, label: 'Experiencia', value: '12+ años' },
        { icon: Users, label: 'Clientes', value: 'Confianza y profesionalismo' },
        { icon: Award, label: 'Realismo, Blackwork, etc', value: 'Todos los estilos' }
      ],
      primaryAction: { text: 'Ver Galería', action: () => onNavigate('galeria') },
      secondaryAction: { text: 'Contactar', action: () => onNavigate('artista') },
      image: '/tatuajes/IMG-20250614-WA0043.jpg',
      gradient: 'from-red-900 via-pink-900 to-rose-900'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 7000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-8 md:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Slides Container */}
      <div className="relative min-h-screen flex items-center pb-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
            style={{
              backgroundImage: 'url(/fondo_inicio.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-40`}></div>
            
            {/* Content Grid */}
            <div className="relative z-10 w-full py-12 md:py-20">
              <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  
                  {/* Left Content */}
                  <div className="space-y-4 md:space-y-6 lg:space-y-8">
                    {/* Category Badge */}
                    <div className="inline-flex items-center">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wider border border-white/30">
                        {slide.category}
                      </span>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-2 md:space-y-3 lg:space-y-4">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
                      {slide.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-3 lg:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-white mx-auto mb-1 md:mb-2" />
                            <div className="text-white font-bold text-xs md:text-sm lg:text-lg">{stat.value}</div>
                            <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1 md:pt-2 lg:pt-4">
                      <button
                        onClick={slide.primaryAction.action}
                        className="group bg-white text-black px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-bold text-sm md:text-base lg:text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <span>{slide.primaryAction.text}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <button
                        onClick={slide.secondaryAction.action}
                        className="bg-white/10 backdrop-blur-sm text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full font-semibold text-sm md:text-base lg:text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50"
                      >
                        {slide.secondaryAction.text}
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative">
                    <div className={`relative ${index === 0 ? '' : 'drop-shadow-custom'}`}>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className={`w-full h-[300px] md:h-[500px] lg:h-[600px] transform hover:scale-105 transition-transform duration-700 rounded-3xl ${
                          index === 0 ? 'object-contain' : 'object-cover'
                        }`}
                      />
                      
                      {/* Image Overlay */}
                      
                      {/* Floating Elements */}
                      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Play/Pause Button */}
          <div className="w-px h-6 bg-white/20 mx-2"></div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 border border-white/20"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 md:top-12 right-4 md:right-8 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <span className="text-white font-semibold">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Carousel;