import React from 'react';
import { Award, Users, Calendar, Star, MapPin, Phone } from 'lucide-react';

const ArtistInfo: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Artist Photo and Info */}
          <div className="space-y-8">
            {/* Artist Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900 border border-gray-800">
                <img
                  src="/instructor.png"
                  alt="Nico Lemos"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </div>

            {/* Artist Info Card */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
              <h2 className="text-4xl font-bold text-white mb-2">Nico Lemos</h2>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-6">
                TATUADOR PROFESIONAL
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Tatuador profesional con más de <span className="text-red-400 font-semibold">12 años de experiencia</span> en el arte del tatuaje y artista plástico reconocido. Ha trabajado tanto en el exterior perfeccionando sus técnicas y estilos.
              </p>
              
              {/* Specialties Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Blackwork</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Black & Gray</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Realismo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Color</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Vive en <span className="text-white font-medium">Maldonado, Uruguay</span>, donde combina su estudio de tatuajes con una academia donde forma a los próximos tatuadores profesionales.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Cards */}
          <div className="space-y-6">
            {/* Instagram Card */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">IG</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Instagram</h4>
                    <p className="text-gray-400 text-sm">@nicolemos.tattoo</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <p className="text-white font-medium">Nicolas Lemos</p>
                  <p className="text-gray-400">Artista</p>
                  <p className="text-gray-400">INK LIFE TATTOO</p>
                  <p className="text-gray-400">Estudio de tattoo y piercing</p>
                  <p className="text-gray-400">✏️ Desde 2013</p>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3 text-red-500" />
                    <p className="text-gray-400">Punta del Este, Uruguay</p>
                  </div>
                  <p className="text-gray-400">Agenda por mp, wpp ⬇️</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-300 text-sm">
                  VISITAR INSTAGRAM
                </button>
              </div>
            </div>
            
            {/* WhatsApp Card */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">WhatsApp</h4>
                    <p className="text-gray-400 text-sm">Contacto directo</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <p className="text-gray-300">¿Tienes preguntas sobre nuestros cursos?</p>
                  <p className="text-gray-300">¡Contáctanos directamente por WhatsApp!</p>
                  <p className="text-gray-400 mt-3">Respuesta rápida y personalizada</p>
                  <div className="flex items-center space-x-1">
                    <Phone className="h-3 w-3 text-green-500" />
                    <p className="text-green-400 font-medium">+598 92 153 567</p>
                  </div>
                </div>
                
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300 text-sm">
                  CONTACTAR POR WHATSAPP
                </button>
              </div>
            </div>
            
            {/* Consultation Card */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Agendar Cita</h4>
                    <p className="text-gray-400 text-sm">Reserva tu consulta</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <p className="text-gray-300">¿Quieres conocer más sobre nuestros cursos?</p>
                  <p className="text-gray-300">¡Agenda una consulta personalizada!</p>
                  <p className="text-gray-400 mt-3">Evaluamos tu nivel y te recomendamos el mejor curso</p>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3 text-blue-500" />
                    <p className="text-blue-400 font-medium">Consultas gratuitas disponibles</p>
                  </div>
                </div>
                
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-all duration-300 text-sm">
                  AGENDAR CONSULTA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistInfo;