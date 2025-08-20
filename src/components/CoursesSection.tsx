import React from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface CoursesSectionProps {
  onNavigate: (page: string) => void;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ onNavigate }) => {
  const courses = [
    {
      id: 1,
      title: 'Curso Inicial',
      level: 'Básico',
      levelColor: 'bg-orange-500',
      duration: '1 mes de duración',
      hoursPerClass: '2 horas por clase',
      frequency: '2 veces por semana',
      bgColor: 'from-green-600 to-green-800',
      hoverColor: 'hover:from-green-700 hover:to-green-900',
      content: {
        title: 'Contenido del Curso',
        topics: [
          'Bioseguridad',
          'Estilos de tatuajes',
          'Máquinas',
          'Materiales',
          'Línea sólida',
          'Relleno sólida'
        ]
      }
    },
    {
      id: 2,
      title: 'Curso Completo',
      level: 'Intermedio',
      levelColor: 'bg-green-500',
      duration: '2 meses de duración',
      hoursPerClass: '2 horas por clase',
      frequency: '2 veces por semana',
      bgColor: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900',
      content: {
        title: 'Contenido del Curso',
        topics: [
          'Bioseguridad',
          'Estilos de tatuajes',
          'Máquinas',
          'Materiales',
          'Línea sólida',
          'Relleno sólida',
          'Color sólido',
          'Sombras'
        ]
      }
    },
    {
      id: 3,
      title: 'Curso Full',
      level: 'Completo',
      levelColor: 'bg-yellow-500',
      duration: '3 meses de duración',
      hoursPerClass: '2 horas por clase',
      frequency: '2 veces por semana',
      specialFeature: 'Posibilidad laboral',
      bgColor: 'from-purple-600 to-purple-800',
      hoverColor: 'hover:from-purple-700 hover:to-purple-900',
      content: {
        title: 'Contenido del Curso',
        topics: [
          'Bioseguridad',
          'Estilos de tatuajes',
          'Máquinas y materiales',
          'Línea y relleno sólido',
          'Color sólido',
          'Sombras y texturas',
          'Técnica realismo color',
          'Posibilidad laboral en el estudio'
        ]
      }
    }
  ];

  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/wallpaperflare.com_wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative mb-12">
            <h2 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              {/* Glow layers */}
              <span className="absolute inset-0 text-red-500 blur-md opacity-60 animate-pulse">NUESTROS CURSOS</span>
              <span className="absolute inset-0 text-red-400 blur-sm opacity-40">NUESTROS CURSOS</span>
              {/* Main text */}
              <span className="relative text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                NUESTROS CURSOS
              </span>
            </h2>
            
            {/* Decorative line with glow */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-gray-300">
              Todos nuestros cursos son <span className="text-white font-semibold">exclusivamente presenciales</span> con un máximo de <span className="text-white font-semibold">2 alumnos por clase</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              para garantizar una atención personalizada y de calidad.
            </p>
            <p className="text-base md:text-lg text-gray-400 mt-6">
              Incluyen materiales, certificado de finalización y seguimiento personalizado por parte del instructor.
            </p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group perspective-1000 h-96">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer">
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${course.bgColor} rounded-2xl p-8 backface-hidden border border-white/10 shadow-xl`}>
                  {/* Level Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {course.title}
                    </h3>
                    <span className={`${course.levelColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 text-white/90">
                      <Calendar className="h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-white/90">
                      <Clock className="h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">{course.hoursPerClass}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-white/90">
                      <Users className="h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">{course.frequency}</span>
                    </div>

                    {course.specialFeature && (
                      <div className="flex items-center space-x-3 text-yellow-300">
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        <span className="text-lg font-semibold">{course.specialFeature}</span>
                      </div>
                    )}
                  </div>

                  {/* Call to Action */}
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-white/70 text-center mb-4">
                      Haz hover para más detalles
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${course.bgColor} rounded-2xl p-8 backface-hidden rotate-y-180 border border-white/10 shadow-xl`}>
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">
                        {course.title}
                      </h3>
                      <span className={`${course.levelColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {course.level}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-4">{course.content.title}</h4>
                      <p className="text-white/80 text-sm mb-4">Temas a dar:</p>
                      
                      <div className="space-y-2 mb-6">
                        {course.content.topics.map((topic, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                            <span className="text-white/90 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('cursos');
                      }}
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 rounded-full font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center space-x-2"
                    >
                      <span>Inscribirse</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate('cursos')}
            className="group relative bg-black hover:bg-gray-900 text-red-400 hover:text-red-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-red-500/25 border border-red-500/50 hover:border-red-400/70"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Ver Todos los Cursos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default CoursesSection;