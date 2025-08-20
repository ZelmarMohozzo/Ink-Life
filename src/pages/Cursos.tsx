import React from 'react';
import { ArrowLeft, Clock, Users, Award } from 'lucide-react';

interface CursosProps {
  onNavigate: (page: string) => void;
}

const Cursos: React.FC<CursosProps> = ({ onNavigate }) => {
  const courses = [
    {
      id: 1,
      title: 'Curso Básico de Tatuaje',
      duration: '8 semanas',
      students: '20 max',
      price: '$899',
      image: 'https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Fundamentos del tatuaje, técnicas básicas, higiene y seguridad.',
      features: ['Teoria del color', 'Técnicas de línea', 'Sombreado básico', 'Certificado oficial']
    },
    {
      id: 2,
      title: 'Curso Avanzado - Realismo',
      duration: '12 semanas',
      students: '10 max',
      price: '$1,299',
      image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Técnicas avanzadas para crear tatuajes realistas fotográficos.',
      features: ['Realismo en piel', 'Retratos', 'Texturas avanzadas', 'Portfolio profesional']
    },
    {
      id: 3,
      title: 'Workshop Blackwork',
      duration: '4 semanas',
      students: '15 max',
      price: '$599',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Especialización en tatuajes en negro, patrones y diseños geométricos.',
      features: ['Patrones complejos', 'Diseño geométrico', 'Técnicas de relleno', 'Estilo personal']
    }
  ];

  return (
    <div 
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/wallpaperflare.com_wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239,68,68,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-red-400 hover:text-red-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-16 relative">
          {/* Glowing title with multiple layers */}
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              {/* Glow layers */}
              <span className="absolute inset-0 text-red-500 blur-lg opacity-60 animate-pulse">Nuestros Cursos</span>
              <span className="absolute inset-0 text-red-400 blur-md opacity-40">Nuestros Cursos</span>
              <span className="absolute inset-0 text-red-300 blur-sm opacity-30">Nuestros Cursos</span>
              {/* Main text */}
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
                Nuestros Cursos
              </span>
            </h1>
            
            {/* Decorative lines with glow */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent blur-sm opacity-60"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-md opacity-40"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-red-500/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
            Aprende el arte del tatuaje con los mejores instructores. Desde nivel principiante hasta técnicas avanzadas profesionales.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Cada línea cuenta una historia, cada sombra tiene un propósito"
            </p>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-0 left-10 w-4 h-4 bg-red-500/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-10 w-3 h-3 bg-red-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-20 w-2 h-2 bg-red-300/50 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-2 border border-red-500/20 hover:border-red-400/40">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-red-400/30">
                  {course.price}
                </div>
                
                {/* Floating glow effect */}
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">{course.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-red-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-red-400" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200">
                      <Award className="h-4 w-4 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 border border-red-500/30 hover:border-red-400/50">
                  Inscribirse Ahora
                </button>
                
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Cursos;