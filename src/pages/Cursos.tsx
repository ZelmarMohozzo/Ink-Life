import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Star, Briefcase, BookOpen, Target, Zap, Calendar, Mail } from 'lucide-react';
import { useCart } from '../components/CartContext';

interface CursosProps {
  onNavigate: (page: string) => void;
}

const Cursos: React.FC<CursosProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    notes: ''
  });

  const courses = [
    {
      id: 1,
      title: 'Curso Inicial',
      level: 'Básico',
      levelColor: 'bg-green-500',
      duration: '1 mes de duración',
      hoursPerClass: '2 horas por clase',
      frequency: '2 veces por semana',
      price: '$15,000',
      image: '/cursos/curso_inicial.jpg',
      description: 'Perfecto para comenzar en el mundo del tatuaje con bases sólidas',
      gradient: 'from-green-600 to-green-800',
      hoverGradient: 'hover:from-green-500 hover:to-green-700',
      topics: [
        'Bioseguridad',
        'Estilos de tatuajes',
        'Máquinas',
        'Materiales',
        'Línea sólida',
        'Relleno sólida'
      ],
      highlights: [
        'Bioseguridad',
        'Estilos de tatuajes',
        'Máquinas',
        'Materiales',
        'Línea sólida',
        'Relleno sólida'
      ]
    },
    {
      id: 2,
      title: 'Curso Completo',
      level: 'Intermedio',
      levelColor: 'bg-blue-500',
      duration: '1 mes de duración',
      hoursPerClass: '2 horas por clase',
      frequency: '2 veces por semana',
      price: '$25,000',
      image: '/cursos/curso_completo.jpg',
      description: 'Amplía tus conocimientos con técnicas avanzadas de color y sombras',
      gradient: 'from-blue-600 to-blue-800',
      hoverGradient: 'hover:from-blue-500 hover:to-blue-700',
      popular: true,
      topics: [
        'Bioseguridad',
        'Estilos de tatuajes',
        'Máquinas',
        'Materiales',
        'Línea sólida',
        'Relleno sólida',
        'Color sólido',
        'Sombras'
      ],
      highlights: [
        'Bioseguridad',
        'Estilos de tatuajes',
        'Máquinas',
        'Materiales',
        'Línea sólida',
        'Relleno sólida',
        'Color sólido',
        'Sombras'
      ]
    },
    {
      id: 3,
      title: 'Curso Full',
      level: 'Completo',
      levelColor: 'bg-purple-500',
      duration: '1 mes de duración',
      hoursPerClass: '2 horas por clase',
      frequency: '2 veces por semana',
      price: '$35,000',
      image: '/cursos/curso_full.jpg',
      description: 'Formación completa con posibilidades laborales en nuestro estudio',
      gradient: 'from-purple-600 to-purple-800',
      hoverGradient: 'hover:from-purple-500 hover:to-purple-700',
      specialFeature: 'Posibilidad laboral en el estudio',
      topics: [
        'Bioseguridad',
        'Estilos de tatuajes',
        'Máquinas y materiales',
        'Línea y relleno sólido',
        'Color sólido',
        'Sombras y texturas',
        'Técnica realismo color',
        'Posibilidad laboral en el estudio'
      ],
      highlights: [
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
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course);
    setFormData(prev => ({ ...prev, course: course.title }));
    setShowContactForm(true);
  };

  const handleSubmitForm = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Simular envío
    alert('¡Consulta enviada! Te contactaremos pronto para coordinar tu curso.');
    
    // Reset
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      experience: '',
      notes: ''
    });
    setSelectedCourse(null);
    setShowContactForm(false);
  };

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              <span className="absolute inset-0 text-purple-500 blur-lg opacity-60 animate-pulse">Academia de Tatuajes</span>
              <span className="absolute inset-0 text-purple-400 blur-md opacity-40">Academia de Tatuajes</span>
              <span className="absolute inset-0 text-green-400 blur-sm opacity-30">Academia de Tatuajes</span>
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
                Academia de Tatuajes
              </span>
            </h1>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-2xl mb-12">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Aprende el arte del tatuaje con instructores profesionales. Cursos presenciales con máximo 2 alumnos por clase.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Cada línea cuenta una historia, cada sombra tiene un propósito"
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <img
              src="/cursos_tatuador.png"
              alt="Cursos de Tatuaje"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-purple-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2">Formación Profesional</h3>
              <p className="text-gray-200">Aprende con equipos profesionales y técnicas actualizadas</p>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div key={course.id} className="relative">
              {/* Badge */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                {course.popular ? (
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {course.level}
                  </span>
                ) : course.specialFeature ? (
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {course.level}
                  </span>
                ) : (
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {course.level}
                  </span>
                )}
              </div>
              
              <div className={`bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-gray-700/50 hover:border-purple-500/50 pt-6`}>
                {/* Course Image */}
                <div className="relative mx-6 mb-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>

                <div className="px-6 pb-6">
                  {/* Course Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{course.description}</p>
                  </div>

                  {/* Course Details */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-200 bg-black/30 p-3 rounded-lg">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-200 bg-black/30 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-medium">{course.hoursPerClass}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-200 bg-black/30 p-3 rounded-lg">
                      <Users className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-medium">{course.frequency}</span>
                    </div>
                    {course.specialFeature && (
                      <div className="flex items-center space-x-3 text-yellow-300 bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/30">
                        <Briefcase className="h-5 w-5" />
                        <span className="text-sm font-semibold">{course.specialFeature}</span>
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-black text-white">{course.price}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>Incluye:</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {course.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleCourseSelect(course)}
                      className={`w-full bg-gradient-to-r ${course.gradient} ${course.hoverGradient} text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    >
                      Consultar Curso
                    </button>
                    
                    <button 
                      onClick={() => addToCart({
                        id: course.id,
                        title: course.title,
                        price: course.price,
                        duration: course.duration,
                        image: course.image
                      })}
                      className="w-full bg-black/40 hover:bg-black/60 text-white py-2 rounded-full font-medium transition-all duration-300 border border-gray-600 hover:border-purple-500/50"
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Comparison Table */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 mb-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-green-600/20 p-6 border-b border-purple-500/30">
            <h2 className="text-2xl font-bold text-white text-center">Comparación de Cursos</h2>
            <p className="text-gray-300 text-center mt-2">Encuentra el curso perfecto para tu nivel</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-white font-semibold">Contenido</th>
                  <th className="text-center p-4 text-green-400 font-semibold">Inicial</th>
                  <th className="text-center p-4 text-blue-400 font-semibold">Completo</th>
                  <th className="text-center p-4 text-purple-400 font-semibold">Full</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Bioseguridad',
                  'Estilos de tatuajes',
                  'Máquinas y materiales',
                  'Línea sólida',
                  'Relleno sólida',
                  'Color sólido',
                  'Sombras y texturas',
                  'Técnica realismo color',
                  'Posibilidad laboral'
                ].map((topic, index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-gray-300">{topic}</td>
                    <td className="text-center p-4">
                      {courses[0].topics.includes(topic) ? (
                        <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto"></div>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {courses[1].topics.includes(topic) ? (
                        <CheckCircle className="h-5 w-5 text-blue-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto"></div>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {true ? (
                        <CheckCircle className="h-5 w-5 text-purple-400 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto"></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 text-center">
            <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Clases Personalizadas</h3>
            <p className="text-gray-300">Máximo 2 estudiantes por clase para atención personalizada y aprendizaje efectivo.</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/30 text-center">
            <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Certificación Oficial</h3>
            <p className="text-gray-300">Recibe tu certificado oficial al completar el curso y accede a oportunidades laborales.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-500/30 text-center">
            <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Práctica Real</h3>
            <p className="text-gray-300">Practica en piel sintética y real bajo supervisión profesional constante.</p>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showContactForm && selectedCourse && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-purple-500/30 max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-purple-400" />
                  <span>Consultar: {selectedCourse.title}</span>
                </h2>
                <button
                  onClick={() => {
                    setShowContactForm(false);
                    setSelectedCourse(null);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Course Info */}
                <div>
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="text-white font-semibold mb-3">Detalles del Curso</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duración:</span>
                        <span className="text-white">{selectedCourse.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Clases:</span>
                        <span className="text-white">{selectedCourse.hoursPerClass}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Frecuencia:</span>
                        <span className="text-white">{selectedCourse.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Precio:</span>
                        <span className="text-green-400 font-bold">{selectedCourse.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mt-4 bg-black/40 p-4 rounded-lg border border-gray-700/50">
                    <h4 className="text-white font-semibold mb-3">Temario:</h4>
                    <div className="space-y-1">
                      {selectedCourse.topics.map((topic: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="+598 92 542 158"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Experiencia previa
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar nivel</option>
                      <option value="Ninguna">Sin experiencia</option>
                      <option value="Básica">Experiencia básica</option>
                      <option value="Intermedia">Experiencia intermedia</option>
                      <option value="Avanzada">Experiencia avanzada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Notas adicionales
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      placeholder="Preguntas, expectativas, horarios preferidos..."
                    />
                  </div>

                  <button
                    onClick={handleSubmitForm}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Enviar Consulta</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-purple-900/40 to-green-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">¿Por Qué Elegir Nuestra Academia?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Clases Reducidas',
                description: 'Máximo 2 alumnos por clase para atención personalizada',
                color: 'text-purple-400'
              },
              {
                icon: Award,
                title: '12+ Años Experiencia',
                description: 'Instructor con amplia trayectoria nacional e internacional',
                color: 'text-green-400'
              },
              {
                icon: Briefcase,
                title: 'Oportunidades Laborales',
                description: 'Posibilidad de trabajar en nuestro estudio al finalizar',
                color: 'text-blue-400'
              },
              {
                icon: Target,
                title: 'Práctica Real',
                description: 'Equipos profesionales y práctica en condiciones reales',
                color: 'text-yellow-400'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-black/40 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-gray-700/50">
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Contact Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-2xl p-8 border border-green-500/30 shadow-2xl">
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
              <a
                href="https://api.whatsapp.com/send/?phone=59892153567&text=Hola,%20me%20interesa%20información%20sobre%20los%20cursos%20de%20tatuaje&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Chatear por WhatsApp</span>
              </a>
              
              <a
                href="tel:+59892153567"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50 text-center"
              >
                Llamar: +598 92 153 567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;