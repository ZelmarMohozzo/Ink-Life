import React from 'react';
import { Award, Users, Calendar, Star } from 'lucide-react';

const ArtistInfo: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Artist Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/instructor.png"
                alt="Nico Lemos"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-red-100 text-sm">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Artist Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Nico Lemos
              </h2>
              <p className="text-xl text-red-400 mb-6 font-medium">
                Artista & Instructor Principal
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Con más de 15 años de experiencia en el arte del tatuaje, Nico Lemos ha perfeccionado su técnica 
                trabajando en diferentes estilos, desde el realismo fotográfico hasta diseños tradicionales. 
                Su pasión por enseñar lo ha llevado a formar a cientos de nuevos artistas.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/30 transition-colors">
                <Users className="h-8 w-8 text-red-500 mb-3" />
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm">Estudiantes Formados</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/30 transition-colors">
                <Award className="h-8 w-8 text-red-500 mb-3" />
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Premios Obtenidos</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/30 transition-colors">
                <Calendar className="h-8 w-8 text-red-500 mb-3" />
                <div className="text-2xl font-bold text-white mb-1">2009</div>
                <div className="text-gray-400 text-sm">Inicio en el Arte</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/30 transition-colors">
                <Star className="h-8 w-8 text-red-500 mb-3" />
                <div className="text-2xl font-bold text-white mb-1">4.9</div>
                <div className="text-gray-400 text-sm">Rating Promedio</div>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-3">
                {['Realismo', 'Blackwork', 'Tradicional', 'Geométrico', 'Biomecánico'].map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistInfo;