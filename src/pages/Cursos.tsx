import React from 'react';
import { ArrowLeft, Clock, Users, Award } from 'lucide-react';
import { useCart } from '../components/CartContext';

interface CursosProps {
  onNavigate: (page: string) => void;
}

const Cursos: React.FC<CursosProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();

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
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147,51,234,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-16 relative">
          {/* Glowing title with multiple layers */}
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              {/* Glow layers */}
              <span className="absolute inset-0 text-purple-500 blur-lg opacity-60 animate-pulse">Nuestros Cursos</span>
              <span className="absolute inset-0 text-purple-400 blur-md opacity-40">Nuestros Cursos</span>
              <span className="absolute inset-0 text-green-400 blur-sm opacity-30">Nuestros Cursos</span>
              {/* Main text */}
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
                Nuestros Cursos
              </span>
            </h1>
            
            {/* Decorative lines with glow */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-60"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-md opacity-40"></div>
          </div>
          
                
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* WhatsApp Contact Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900/40 to-green-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-4 rounded-full">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas más información?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contáctanos directamente por WhatsApp para resolver todas tus dudas sobre nuestros cursos, 
              horarios, precios y métodos de pago. ¡Respuesta rápida garantizada!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Chatear por WhatsApp</span>
              </button>
              
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50">
                Llamar: +598 92 153 567
              </button>
            </div>
          </div>
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