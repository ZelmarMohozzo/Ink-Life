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
        subtitle: 'Temas a dar:',
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
        subtitle: 'Temas a dar:',
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
        subtitle: 'Temas a dar:',
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
          {/* Elegant Title Design */}
          <div className="relative mb-12">
            {/* Background frame for title */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                
                {/* Decorative top accent */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
                  <div className="mx-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-green-400 rounded-full"></div>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-400"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-['Cinzel'] tracking-[0.3em] relative mb-4">
                  {/* Subtle background glow */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-green-500/20 blur-3xl"></span>
                  {/* Main elegant text */}
                  <span className="relative bg-gradient-to-r from-purple-100 via-white to-green-100 bg-clip-text text-transparent filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    NUESTROS CURSOS
                  </span>
                </h2>
                
                {/* Decorative bottom accent */}
                <div className="flex items-center justify-center">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
                  <div className="mx-3 flex space-x-1">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  </div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-green-300"></div>
                </div>
                
                {/* Subtle decorative accent at bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Description with glass frame */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
              <>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                Todos nuestros cursos son <span className="text-transparent bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text font-semibold">exclusivamente presenciales</span> con un máximo de <span className="text-transparent bg-gradient-to-r from-green-300 to-green-400 bg-clip-text font-semibold">2 alumnos por clase</span>
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                para garantizar una atención personalizada y de calidad.
              </p>
              <p className="text-base md:text-lg text-gray-300">
                Incluyen materiales, certificado de finalización y seguimiento personalizado por parte del instructor.
              </p>
              </>
              
              {/* Subtle decorative accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="flip-card h-[520px]">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className={`flip-card-front bg-gradient-to-br ${course.bgColor}/20 backdrop-blur-2xl rounded-2xl p-8 border border-white/40 shadow-2xl hover:bg-gradient-to-br ${course.hoverColor}/30 transition-all duration-300`}>
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

                  {/* Course Image at bottom */}
                  <div className="relative mb-4">
                    <img
                      src={course.id === 1 ? '/cursos/curso_inicial.jpg' : course.id === 2 ? '/cursos/curso_completo.jpg' : '/cursos/curso_full.jpg'}
                      alt={course.title}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>

                  {/* Call to Action */}
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white/70 text-center mb-4">
                      Haz hover para más detalles
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className={`flip-card-back bg-gradient-to-br ${course.bgColor}/20 backdrop-blur-2xl rounded-2xl p-8 border border-white/40 shadow-2xl hover:bg-gradient-to-br ${course.hoverColor}/30 transition-all duration-300`}>
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
                      <p className="text-white/80 text-sm mb-4">{course.content.subtitle}</p>
                      
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
            className="group relative bg-black hover:bg-gray-900 text-purple-400 hover:text-purple-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/25 border border-purple-500/50 hover:border-purple-400/70"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Ver Todos los Cursos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom CSS for 3D flip effect */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default CoursesSection;