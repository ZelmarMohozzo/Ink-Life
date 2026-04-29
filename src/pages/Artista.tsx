import React from 'react';
import { ArrowLeft, Calendar, Users, Award, Star, Clock } from 'lucide-react';

interface ArtistaProps {
  onNavigate: (page: string) => void;
}

const Artista: React.FC<ArtistaProps> = ({ onNavigate }) => {
  return (
    <div 
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/fondo_inicio.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Nico Lemos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La historia, experiencia y pasión detrás de Ink Life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Artist Photo */}
          <div className="relative lg:col-span-1">
            <div className="relative overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 rounded-2xl">
              <img
                src="/instructor_full.png"
                alt="Nico Lemos"
                className="w-full h-96 lg:h-[500px] object-contain rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              
              {/* Artist Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-2">Nico Lemos</h2>
                <p className="text-gray-300 font-medium uppercase tracking-wider">
                  TATUADOR PROFESIONAL
                </p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <Users className="h-6 w-6 text-purple-500 mb-2" />
                <div className="text-xl font-bold text-white mb-1">10+</div>
                <div className="text-gray-400 text-xs">Tatuadores Formados</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <Award className="h-6 w-6 text-purple-500 mb-2" />
                <div className="text-xl font-bold text-white mb-1">12+</div>
                <div className="text-gray-400 text-xs">Años de Experiencia</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <Calendar className="h-6 w-6 text-purple-500 mb-2" />
                <div className="text-xl font-bold text-white mb-1">2013</div>
                <div className="text-gray-400 text-xs">Inicio en el Arte</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <Star className="h-6 w-6 text-purple-500 mb-2" />
                <div className="text-xl font-bold text-white mb-1">Tatuador Calificado</div>
                <div className="text-gray-400 text-xs">Confianza</div>
              </div>
            </div>
          </div>

          {/* Artist Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Historia y Experiencia</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Tatuador profesional con más de <span className="text-purple-400 font-semibold">12 años de experiencia</span> en el arte del tatuaje y artista plástico reconocido. Ha trabajado tanto en el exterior perfeccionando sus técnicas y estilos.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Su pasión por el arte comenzó desde muy joven, y encontró en el tatuaje la forma perfecta de combinar su talento artístico con la conexión humana. Cada pieza que crea no es solo un tatuaje, sino una obra de arte personalizada que cuenta la historia única de cada cliente.
              </p>
              
              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-4">Especialidades</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Blackwork</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Black & Gray</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Realismo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Color</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Vive en <span className="text-white font-medium">Maldonado, Uruguay</span>, donde combina su estudio de tatuajes con una academia donde forma a los próximos tatuadores profesionales. Su enfoque no solo se centra en la técnica, sino también en la ética profesional y la seguridad en el trabajo.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Instagram Card */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src="/437783604_287457661076839_4543038176797207402_n.jpg" 
                      alt="Instagram Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Instagram</h4>
                    <p className="text-gray-400 text-xs">@nicolemos.tattoo</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-4">
                  <p className="font-medium">Nicolas Lemos</p>
                  <p className="text-gray-400">Artista</p>
                  <p className="text-gray-400">INK LIFE TATTOO</p>
                  <p className="text-gray-400">Estudio de tattoo y piercing</p>
                  <p className="text-gray-400">✏️ Desde 2013</p>
                  <p className="text-gray-400">📍 Punta del Este, Uruguay</p>
                  <p className="text-gray-400">Agenda por mp, wpp ⬇️</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  VISITAR INSTAGRAM
                </button>
              </div>
              
              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src="/15707820.png" 
                      alt="WhatsApp" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp</h4>
                    <p className="text-gray-400 text-xs">Contacto directo</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-4">
                  <p>¿Tienes preguntas sobre nuestros cursos?</p>
                  <p>¡Contáctanos directamente por WhatsApp!</p>
                  <p className="text-gray-400 mt-2">Respuesta rápida y personalizada</p>
                  <p className="text-green-400 font-medium">📱 +598 92 542 158</p>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  CONTACTAR POR WHATSAPP
                </button>
              </div>
              
              {/* Consultation Card */}
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Agendar Cita</h4>
                    <p className="text-gray-400 text-xs">Reserva tu consulta</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-4">
                  <p>¿Quieres conocer más sobre nuestros cursos?</p>
                  <p>¡Agenda una consulta personalizada!</p>
                  <p className="text-gray-400 mt-2">Evaluamos tu nivel y te recomendamos el mejor curso</p>
                  <p className="text-blue-400 font-medium">📅 Consultas gratuitas disponibles</p>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  <a
                    href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center"
                  >
                    AGENDAR CONSULTA
                  </a>
                </button>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Filosofía del Arte</h3>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                "Cada tatuaje es una historia que se graba en la piel, pero que nace en el corazón. Mi trabajo no es solo crear arte, sino ser el puente entre la visión del cliente y la realidad que llevará para siempre."
              </blockquote>
              <p className="text-purple-400 font-medium mt-4">- Nico Lemos</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Artista;