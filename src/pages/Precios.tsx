import React from 'react';
import { ArrowLeft, Zap, Check, Phone } from 'lucide-react';

interface PreciosProps {
  onNavigate: (page: string) => void;
}

const Precios: React.FC<PreciosProps> = ({ onNavigate }) => {
  const packages = [
    {
      id: 1,
      name: 'Básico',
      sessions: '3-5 sesiones',
      price: '$299',
      description: 'Para tatuajes pequeños y simples',
      features: [
        'Evaluación inicial gratuita',
        'Tratamiento con láser Q-Switched',
        'Cuidados post-tratamiento',
        'Seguimiento profesional'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Estándar',
      sessions: '6-10 sesiones',
      price: '$599',
      description: 'Para tatuajes medianos con colores',
      features: [
        'Evaluación inicial gratuita',
        'Tecnología láser avanzada',
        'Cremas anestésicas incluidas',
        'Plan de cuidados personalizado',
        'Garantía de resultados'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      sessions: '10-15 sesiones',
      price: '$999',
      description: 'Para tatuajes grandes y complejos',
      features: [
        'Evaluación inicial gratuita',
        'Láser de última generación',
        'Tratamiento sin dolor',
        'Plan personalizado completo',
        'Garantía de resultados',
        'Descuentos en sesiones adicionales'
      ],
      popular: false
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
          {/* Hero Image */}
          <div className="mb-8">
            <img
              src="https://inkster.es/cdn/shop/articles/Blog_Banner_Inkster_-_1200x1800_1_800x.jpg"
              alt="Remoción Láser de Tatuajes"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl object-cover h-64"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Remoción Láser de Tatuajes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tecnología de última generación para la eliminación segura y efectiva de tatuajes. 
            Resultados profesionales con el mínimo dolor y tiempo de recuperación.
          </p>
          
          <div className="bg-gray-900 rounded-xl p-6 max-w-2xl mx-auto border border-blue-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">¿Cómo funciona?</h3>
            <p className="text-gray-300 text-left leading-relaxed">
              Utilizamos tecnología láser Q-Switched que rompe las partículas de tinta en fragmentos microscópicos. 
              El sistema inmunológico elimina naturalmente estos fragmentos, desvaneciendo gradualmente el tatuaje 
              sin dañar la piel circundante.
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-blue-400 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-400">{pkg.sessions}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <Check className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                }`}>
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-gray-900/20 rounded-2xl p-8 text-center border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Consulta Personalizada Gratuita</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada tatuaje es único y requiere un plan personalizado. Agenda tu consulta gratuita 
            para recibir una evaluación profesional y un presupuesto exacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Agendar Consulta</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors border border-green-500/30 hover:border-green-400/50 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>WhatsApp: +598 92 153 567</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Preguntas Frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: '¿Duele el tratamiento láser?',
                a: 'El dolor es mínimo gracias a nuestras cremas anestésicas y tecnología avanzada. La mayoría de pacientes lo describen como una ligera molestia.'
              },
              {
                q: '¿Cuántas sesiones necesito?',
                a: 'Depende del tamaño, colores y antigüedad del tatuaje. En promedio, se requieren entre 6-12 sesiones espaciadas cada 6-8 semanas.'
              },
              {
                q: '¿Quedará alguna marca?',
                a: 'Con nuestra tecnología láser Q-Switched, las posibilidades de cicatrices son mínimas cuando se siguen las indicaciones post-tratamiento.'
              },
              {
                q: '¿Qué cuidados necesito después?',
                a: 'Proporcionamos un plan detallado de cuidados que incluye cremas especiales y recomendaciones para una recuperación óptima.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <h4 className="font-semibold text-white mb-3">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precios;