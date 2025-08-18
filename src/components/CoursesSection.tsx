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
      hoverColor: 'hover:from-green-700 hover:to-green-900'
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
      hoverColor: 'hover:from-blue-700 hover:to-blue-900'
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
      hoverColor: 'hover:from-purple-700 hover:to-purple-900'
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Cinzel'] mb-6 text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text relative">
            <span className="absolute inset-0 text-purple-400 blur-sm opacity-75">NUESTROS CURSOS</span>
            <span className="relative z-10">NUESTROS CURSOS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 shadow-lg shadow-purple-500/50"></div>
          
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
            <div
              key={course.id}
              className={`group relative bg-gradient-to-br ${course.bgColor} ${course.hoverColor} rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-white/10`}
              onClick={() => onNavigate('cursos')}
            >
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
                
                <div className="flex items-center justify-center space-x-2 text-white group-hover:text-yellow-300 transition-colors">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => onNavigate('cursos')}
            className="bg-black hover:bg-gray-900 text-green-400 hover:text-green-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25 border border-green-500/50 hover:border-green-400/70"
          >
            Ver Todos los Cursos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;