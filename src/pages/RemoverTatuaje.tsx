import React, { useState } from 'react';
import { ArrowLeft, Zap, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';

interface RemoverTatuajeProps {
  onNavigate: (page: string) => void;
}

const RemoverTatuaje: React.FC<RemoverTatuajeProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [formData, setFormData] = useState({
    tattooSize: '',
    tattooLocation: '',
    tattooAge: '',
    colors: '',
    date: '',
    time: '',
    notes: ''
  });

  const laserPackages = [
    {
      id: 201,
      name: 'Paquete Básico',
      sessions: '3-5 sesiones',
      price: '$299',
      description: 'Para tatuajes pequeños y simples',
      image: 'https://inkster.es/cdn/shop/articles/Blog_Banner_Inkster_-_1200x1800_1_800x.jpg',
      features: [
        'Evaluación inicial gratuita',
        'Tratamiento con láser Q-Switched',
        'Cuidados post-tratamiento',
        'Seguimiento profesional'
      ],
      popular: false
    },
    {
      id: 202,
      name: 'Paquete Estándar',
      sessions: '6-10 sesiones',
      price: '$599',
      description: 'Para tatuajes medianos con colores',
      image: 'https://inkster.es/cdn/shop/articles/Blog_Banner_Inkster_-_1200x1800_1_800x.jpg',
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
      id: 203,
      name: 'Paquete Premium',
      sessions: '10-15 sesiones',
      price: '$999',
      description: 'Para tatuajes grandes y complejos',
      image: 'https://inkster.es/cdn/shop/articles/Blog_Banner_Inkster_-_1200x1800_1_800x.jpg',
      features: [
        'Evaluación inicial gratuita',
        'Láser de última generación',
        'Tratamiento sin dolor',
        'Plan personalizado completo',
        'Garantía de resultados',
        'Descuentos en sesiones adicionales'
      ],
      popular: false
    },
    {
      id: 204,
      name: 'Sesión Individual',
      sessions: '1 sesión',
      price: '$120',
      description: 'Prueba una sesión antes de comprometerte',
      image: '/remocion_laser.webp',
      features: [
        'Evaluación completa',
        'Una sesión de prueba',
        'Cuidados incluidos',
        'Asesoramiento profesional'
      ],
      popular: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddToCart = (pkg: any) => {
    if (!formData.tattooSize || !formData.date || !formData.time) {
      alert('Por favor completa todos los campos obligatorios (tamaño del tatuaje, fecha y hora)');
      return;
    }

    const cartItem = {
      id: pkg.id,
      title: `${pkg.name} - Remoción Láser`,
      price: pkg.price,
      duration: `${formData.date} a las ${formData.time}`,
      image: pkg.image
    };

    addToCart(cartItem);
    
    // Reset form
    setFormData({
      tattooSize: '',
      tattooLocation: '',
      tattooAge: '',
      colors: '',
      date: '',
      time: '',
      notes: ''
    });
    
    setSelectedPackage(null);
    alert('¡Paquete de remoción agregado al carrito! Te contactaremos para confirmar la cita.');
  };

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
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/40 to-black/90"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147,51,234,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-16 relative">
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              {/* Glow layers */}
              <span className="absolute inset-0 text-purple-500 blur-lg opacity-60 animate-pulse">Remoción Láser</span>
              <span className="absolute inset-0 text-purple-400 blur-md opacity-40">Remoción Láser</span>
              <span className="absolute inset-0 text-green-400 blur-sm opacity-30">Remoción Láser</span>
              {/* Main text */}
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
                Remoción Láser
              </span>
            </h1>
            
            {/* Decorative lines with glow */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          {/* Hero Image */}
          <div className="mb-8 relative">
            <img
              src="https://inkster.es/cdn/shop/articles/Blog_Banner_Inkster_-_1200x1800_1_800x.jpg"
              alt="Remoción Láser de Tatuajes"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl object-cover h-64 border border-purple-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl max-w-2xl mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Tecnología de última generación para la eliminación segura y efectiva de tatuajes. 
              Resultados profesionales con el mínimo dolor y tiempo de recuperación.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Borramos el pasado, creamos el futuro"
            </p>
          </div>
          
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 max-w-2xl mx-auto border border-purple-500/20 mt-8 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-4">¿Cómo funciona?</h3>
            <p className="text-gray-300 text-left leading-relaxed">
              Utilizamos tecnología láser Q-Switched que rompe las partículas de tinta en fragmentos microscópicos. 
              El sistema inmunológico elimina naturalmente estos fragmentos, desvaneciendo gradualmente el tatuaje 
              sin dañar la piel circundante.
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {laserPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-2 border border-purple-500/20 hover:border-purple-400/40 ${
                pkg.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{pkg.name}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-purple-400 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-400">{pkg.sessions}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  }`}
                >
                  Reservar Consulta
                </button>
              </div>
              
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-green-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Booking Form Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-purple-500/30 max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Reservar: {selectedPackage.name}</h2>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 border border-purple-500/30"
                  />
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="text-white font-semibold mb-2">Detalles del Paquete</h3>
                    <p className="text-gray-300 text-sm mb-2">{selectedPackage.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Precio:</span>
                      <span className="text-purple-400 font-bold">{selectedPackage.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sesiones:</span>
                      <span className="text-green-400">{selectedPackage.sessions}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Tamaño del tatuaje *
                    </label>
                    <select
                      name="tattooSize"
                      value={formData.tattooSize}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar tamaño</option>
                      <option value="Pequeño (hasta 5cm)">Pequeño (hasta 5cm)</option>
                      <option value="Mediano (5-15cm)">Mediano (5-15cm)</option>
                      <option value="Grande (más de 15cm)">Grande (más de 15cm)</option>
                      <option value="Muy grande (manga/espalda)">Muy grande (manga/espalda)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Ubicación del tatuaje
                    </label>
                    <input
                      type="text"
                      name="tattooLocation"
                      value={formData.tattooLocation}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Ej: brazo, espalda, pierna..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Antigüedad del tatuaje
                    </label>
                    <select
                      name="tattooAge"
                      value={formData.tattooAge}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar antigüedad</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="1-3 años">1-3 años</option>
                      <option value="3-5 años">3-5 años</option>
                      <option value="Más de 5 años">Más de 5 años</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Colores del tatuaje
                    </label>
                    <select
                      name="colors"
                      value={formData.colors}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar colores</option>
                      <option value="Solo negro">Solo negro</option>
                      <option value="Negro y gris">Negro y gris</option>
                      <option value="Con colores">Con colores</option>
                      <option value="Muchos colores">Muchos colores</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Fecha preferida *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Hora preferida *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                      >
                        <option value="">Seleccionar hora</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
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
                      placeholder="Medicamentos, alergias, expectativas..."
                    />
                  </div>

                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="text-purple-400 font-semibold mb-2">💡 Consulta Gratuita</h4>
                    <p className="text-gray-300 text-sm">
                      La primera consulta es gratuita. Evaluaremos tu tatuaje y te daremos un plan personalizado.
                    </p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(selectedPackage)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agregar al Carrito - {selectedPackage.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-purple-900/40 to-green-900/40 backdrop-blur-md rounded-2xl p-8 text-center border border-purple-500/30 shadow-2xl">
          <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
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
              <div key={index} className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <h4 className="font-semibold text-white mb-3">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default RemoverTatuaje;