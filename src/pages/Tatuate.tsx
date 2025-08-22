import React, { useState } from 'react';
import { ArrowLeft, Calendar, DollarSign, Palette, Clock, Star, CheckCircle } from 'lucide-react';
import { useCart } from '../components/CartContext';

interface TatuateProps {
  onNavigate: (page: string) => void;
}

const Tatuate: React.FC<TatuateProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [formData, setFormData] = useState({
    design: '',
    size: '',
    placement: '',
    date: '',
    time: '',
    notes: ''
  });

  const tattooServices = [
    {
      id: 101,
      title: 'Tatuaje Pequeño',
      size: 'Hasta 5cm',
      price: '$150',
      duration: '1-2 horas',
      image: '/tatuajes/IMG-20250614-WA0016.jpg',
      description: 'Perfecto para diseños simples, letras o símbolos pequeños.',
      features: ['Diseño personalizado', 'Consulta incluida', 'Cuidados post-tatuaje', 'Retoque gratuito']
    },
    {
      id: 102,
      title: 'Tatuaje Mediano',
      size: '5cm - 15cm',
      price: '$350',
      duration: '2-4 horas',
      image: '/tatuajes/IMG-20250614-WA0023.jpg',
      description: 'Ideal para diseños con más detalle y complejidad.',
      features: ['Diseño personalizado', 'Múltiples sesiones si es necesario', 'Consulta incluida', 'Cuidados post-tatuaje', 'Retoque gratuito']
    },
    {
      id: 103,
      title: 'Tatuaje Grande',
      size: 'Más de 15cm',
      price: '$650',
      duration: '4-8 horas',
      image: '/tatuajes/IMG-20250614-WA0043.jpg',
      description: 'Para diseños complejos, mangas o piezas grandes.',
      features: ['Diseño completamente personalizado', 'Múltiples sesiones', 'Consulta y bocetos incluidos', 'Seguimiento completo', 'Retoques gratuitos']
    },
    {
      id: 104,
      title: 'Sesión Completa',
      size: 'Todo el día',
      price: '$1,200',
      duration: '6-10 horas',
      image: '/tatuajes/IMG-20250614-WA0030.jpg',
      description: 'Sesión completa para proyectos grandes o múltiples tatuajes.',
      features: ['Diseños múltiples', 'Día completo dedicado', 'Descansos incluidos', 'Comida incluida', 'Seguimiento VIP']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddToCart = (service: any) => {
    if (!formData.design || !formData.date || !formData.time) {
      alert('Por favor completa todos los campos obligatorios (diseño, fecha y hora)');
      return;
    }

    const cartItem = {
      id: service.id,
      title: `${service.title} - ${formData.design}`,
      price: service.price,
      duration: `${formData.date} a las ${formData.time}`,
      image: service.image
    };

    addToCart(cartItem);
    
    // Reset form
    setFormData({
      design: '',
      size: '',
      placement: '',
      date: '',
      time: '',
      notes: ''
    });
    
    setSelectedService(null);
    alert('¡Tatuaje agregado al carrito! Te contactaremos para confirmar la cita.');
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="text-center mb-16">
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-['Cinzel'] tracking-wide relative">
              <span className="absolute inset-0 text-purple-500 blur-lg opacity-60 animate-pulse">Tatuate</span>
              <span className="absolute inset-0 text-purple-400 blur-md opacity-40">Tatuate</span>
              <span className="absolute inset-0 text-green-400 blur-sm opacity-30">Tatuate</span>
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
                Tatuate
              </span>
            </h1>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Reserva tu cita para tatuarte. Deja una seña y agenda tu fecha preferida.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Tu piel es el lienzo, nosotros creamos la obra de arte"
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tattooServices.map((service) => (
            <div key={service.id} className="group bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-2 border border-purple-500/20 hover:border-purple-400/40">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-purple-400/30">
                  {service.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Palette className="h-4 w-4 text-purple-400" />
                    <span>{service.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-green-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/30 hover:border-purple-400/50"
                >
                  Reservar Cita
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-purple-500/30 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Reservar: {selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="bg-purple-900/20 p-4 rounded-lg">
                    <h3 className="text-white font-semibold mb-2">Detalles del Servicio</h3>
                    <p className="text-gray-300 text-sm mb-2">{selectedService.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Precio:</span>
                      <span className="text-purple-400 font-bold">{selectedService.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duración:</span>
                      <span className="text-green-400">{selectedService.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Diseño que quieres *
                    </label>
                    <input
                      type="text"
                      name="design"
                      value={formData.design}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Describe tu tatuaje..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Ubicación en el cuerpo
                    </label>
                    <input
                      type="text"
                      name="placement"
                      value={formData.placement}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Ej: brazo, espalda, pierna..."
                    />
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
                      placeholder="Cualquier detalle adicional..."
                    />
                  </div>

                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                    <h4 className="text-green-400 font-semibold mb-2">💰 Seña Requerida</h4>
                    <p className="text-gray-300 text-sm">
                      Se requiere una seña del 30% para confirmar la cita. El resto se paga el día del tatuaje.
                    </p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(selectedService)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agregar al Carrito (Seña: {selectedService.price})
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Contact Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900/40 to-green-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-4 rounded-full">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes dudas sobre tu tatuaje?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contáctanos por WhatsApp para discutir tu diseño, ver referencias o resolver cualquier duda antes de reservar.
            </p>
            
            <a
              href="https://api.whatsapp.com/send/?phone=59892153567&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tatuate;