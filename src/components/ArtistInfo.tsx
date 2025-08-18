import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const ArtistInfo: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-purple-900/10 to-blue-900/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,0,100,0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(0,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '60px 60px, 40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Artist Photo and Info */}
          <div className="flex flex-col group">
            {/* Artist Photo */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-red-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src="/instructor_rectangular.png"
                alt="Nico Lemos"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl"></div>
            </div>

            {/* Artist Info Card */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl -mt-2 border border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:border-red-500/30 group-hover:transform group-hover:translate-y-[-2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-1 group-hover:from-red-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-500">
                  Nico Lemos
                </h2>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm mb-4 group-hover:text-red-300 transition-colors duration-300">
                TATUADOR PROFESIONAL
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                Tatuador profesional con más de <span className="text-transparent bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text font-semibold">12 años de experiencia</span> en el arte del tatuaje y artista plástico reconocido. Ha trabajado en el exterior perfeccionando sus técnicas y estilos.
              </p>
              
              {/* Specialties Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-8 mb-6">
                <div className="flex items-center space-x-2 group/item hover:transform hover:translate-x-1 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full group-hover/item:shadow-lg group-hover/item:shadow-red-500/50 transition-all duration-300"></div>
                  <span className="text-gray-300 text-sm group-hover/item:text-red-300 transition-colors duration-300">Blackwork</span>
                </div>
                <div className="flex items-center space-x-2 group/item hover:transform hover:translate-x-1 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full group-hover/item:shadow-lg group-hover/item:shadow-purple-500/50 transition-all duration-300"></div>
                  <span className="text-gray-300 text-sm group-hover/item:text-purple-300 transition-colors duration-300">Black & Gray</span>
                </div>
                <div className="flex items-center space-x-2 group/item hover:transform hover:translate-x-1 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50 transition-all duration-300"></div>
                  <span className="text-gray-300 text-sm group-hover/item:text-blue-300 transition-colors duration-300">Realismo</span>
                </div>
                <div className="flex items-center space-x-2 group/item hover:transform hover:translate-x-1 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover/item:shadow-lg group-hover/item:shadow-green-500/50 transition-all duration-300"></div>
                  <span className="text-gray-300 text-sm group-hover/item:text-green-300 transition-colors duration-300">Color</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Vive en <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-medium">Maldonado, Uruguay</span>, donde combina su estudio de tatuajes con una academia donde forma a los próximos tatuadores profesionales.
              </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Cards Stack */}
          <div className="space-y-6">
            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/50 hover:transform hover:scale-[1.02] group/instagram">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover/instagram:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover/instagram:shadow-purple-500/50 group-hover/instagram:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-sm">IG</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover/instagram:text-purple-200 transition-colors duration-300">Instagram</h4>
                  <p className="text-gray-400 text-sm group-hover/instagram:text-purple-300 transition-colors duration-300">@nicolemos.tattoo</p>
                </div>
              </div>
              
              <div className="space-y-1 mb-6 text-sm">
                <p className="text-white font-medium group-hover/instagram:text-purple-200 transition-colors duration-300">Nicolas Lemos</p>
                <p className="text-gray-400">Artista</p>
                <p className="text-gray-400">INK LIFE TATTOO</p>
                <p className="text-gray-400">Estudio de tattoo y piercing</p>
                <p className="text-gray-400">✏️ Desde 2013</p>
                <p className="text-gray-400">📍 Punta del Este, Uruguay</p>
                <p className="text-gray-400">Agenda por mp, wpp ⬇️</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                VISITAR INSTAGRAM
              </button>
              </div>
            </div>
            
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:border-green-500/50 hover:transform hover:scale-[1.02] group/whatsapp">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-600/10 rounded-2xl opacity-0 group-hover/whatsapp:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover/whatsapp:shadow-green-500/50 group-hover/whatsapp:scale-110 transition-all duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover/whatsapp:text-green-200 transition-colors duration-300">WhatsApp</h4>
                  <p className="text-gray-400 text-sm group-hover/whatsapp:text-green-300 transition-colors duration-300">Contacto directo</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="text-gray-300">¿Tienes preguntas sobre nuestros cursos?</p>
                <p className="text-gray-300">¡Contáctanos directamente por WhatsApp!</p>
                <p className="text-gray-300">Respuesta rápida y personalizada</p>
                <p className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-medium">📱 +598 92 153 567</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30">
                CONTACTAR POR WHATSAPP
              </button>
              </div>
            </div>
            
            {/* Consultation Card */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:border-blue-500/50 hover:transform hover:scale-[1.02] group/consultation">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover/consultation:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover/consultation:shadow-blue-500/50 group-hover/consultation:scale-110 transition-all duration-300">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover/consultation:text-blue-200 transition-colors duration-300">Agendar Cita</h4>
                  <p className="text-gray-400 text-sm group-hover/consultation:text-blue-300 transition-colors duration-300">Reserva tu consulta</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm">
                <p className="text-gray-300">¿Quieres conocer más sobre nuestros cursos?</p>
                <p className="text-gray-300">¡Agenda una consulta personalizada!</p>
                <p className="text-gray-300">Evaluamos tu nivel y te recomendamos el mejor curso</p>
                <p className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-medium">📅 Consultas gratuitas disponibles</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
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