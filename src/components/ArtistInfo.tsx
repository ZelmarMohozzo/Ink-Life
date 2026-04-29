import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const ArtistInfo: React.FC = () => {
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/texture-dark.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Artist Photo and Info */}
          <div className="flex flex-col">
            {/* Artist Photo */}
            <div className="relative">
              <img
                src="/instructor_full.png"
                alt="Nico Lemos"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Artist Info Card */}
            <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg -mt-2 border border-gray-800/50">
              <h2 className="text-3xl font-bold text-white mb-1">Nico Lemos</h2>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4">
                TATUADOR PROFESIONAL
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Tatuador profesional con más de <span className="text-white font-semibold">12 años de experiencia</span> en el arte del tatuaje y artista plástico reconocido. Ha trabajado en el exterior perfeccionando sus técnicas y estilos.
              </p>
              
              {/* Separator */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
              
              {/* Specialties Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-8 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Blackwork</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Black & Gray</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Realismo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Color</span>
                </div>
              </div>
              
              {/* Separator */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
              
              <p className="text-gray-300 leading-relaxed">
                Vive en <span className="text-white font-medium">Maldonado, Uruguay</span>, donde combina su estudio de tatuajes con una academia donde forma a los próximos tatuadores profesionales.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Cards Stack */}
          <div className="space-y-6">
            {/* Instagram Card */}
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/437783604_287457661076839_4543038176797207402_n.jpg" 
                    alt="Instagram Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instagram</h4>
                  <p className="text-gray-400 text-sm">@nicolemos.tattoo</p>
                </div>
              </div>
              
              <div className="space-y-1 mb-6 text-sm">
                <p className="text-white font-medium">Nicolas Lemos</p>
                <p className="text-gray-400">Artista</p>
                <p className="text-gray-400">INK LIFE TATTOO</p>
                <p className="text-gray-400">Estudio de tattoo y piercing</p>
                <p className="text-gray-400">✏️ Desde 2013</p>
                <p className="text-gray-400">📍 Punta del Este, Uruguay</p>
                <p className="text-gray-400">Agenda por mp, wpp ⬇️</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-lg font-medium transition-all duration-300">
                <a
                  href="https://www.instagram.com/nicolemos.tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center"
                >
                  VISITAR INSTAGRAM
                </a>
              </button>
            </div>
            
            {/* WhatsApp Card */}
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/tatuajes/whatsapp.png" 
                    alt="WhatsApp" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">Contacto directo</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="text-gray-300">¿Tienes preguntas sobre nuestros cursos?</p>
                <p className="text-gray-300">¡Contáctanos directamente por WhatsApp!</p>
                <p className="text-gray-300">Respuesta rápida y personalizada</p>
                <p className="text-green-400 font-medium">📱 +598 92 542 158</p>
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-all duration-300">
                <a
                  href="https://api.whatsapp.com/send/?phone=59892153567&text=Hola,%20me%20interesa%20información%20sobre%20los%20cursos&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center"
                >
                  CONTACTAR POR WHATSAPP
                </a>
              </button>
            </div>
            
            {/* Consultation Card */}
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Agendar Cita</h4>
                  <p className="text-gray-400 text-sm">Reserva tu consulta</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="text-gray-300">¿Quieres conocer más sobre nuestros cursos?</p>
                <p className="text-gray-300">¡Agenda una consulta personalizada!</p>
                <p className="text-gray-300">Evaluamos tu nivel y te recomendamos el mejor curso</p>
                <p className="text-blue-400 font-medium">📅 Consultas gratuitas disponibles</p>
              </div>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300">
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
        </div>
      </div>
    </section>
  );
};

export default ArtistInfo;