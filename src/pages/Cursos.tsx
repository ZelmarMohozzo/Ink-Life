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
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-red-400 hover:text-red-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Nuestros Cursos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprende el arte del tatuaje con los mejores instructores. Desde nivel principiante hasta técnicas avanzadas profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <Award className="h-4 w-4 text-red-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Inscribirse Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;