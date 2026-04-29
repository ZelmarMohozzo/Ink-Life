import React, { useState } from 'react';
import { ArrowLeft, Zap, Calendar, Clock, CheckCircle, Star, Shield, Award, Phone, Mail, MapPin, Users, Target, Heart } from 'lucide-react';
import { useCart } from '../components/CartContext';

interface RemoverTatuajeProps {
  onNavigate: (page: string) => void;
}

const RemoverTatuaje: React.FC<RemoverTatuajeProps> = ({ onNavigate }) => {
  const { addToCart } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('precios');
  const [formData, setFormData] = useState({
    tattooSize: '',
    tattooLocation: '',
    tattooAge: '',
    colors: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const laserPackages = [
    {
      id: 201,
      name: 'Sesión Individual',
      sessions: '1 sesión',
      price: '$120',
      originalPrice: '$150',
      description: 'Perfecto para probar el tratamiento',
      image: '/maquina_laser.jpg',
      features: [
        'Evaluación completa gratuita',
        'Una sesión de prueba',
        'Cuidados post-tratamiento',
        'Asesoramiento profesional',
        'Sin compromiso'
      ],
      popular: false,
      badge: 'Prueba',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 202,
      name: 'Paquete Básico',
      sessions: '3-5 sesiones',
      price: '$299',
      originalPrice: '$450',
      description: 'Para tatuajes pequeños y simples',
      image: '/maquina_laser.jpg',
      features: [
        'Evaluación inicial gratuita',
        'Láser Q-Switched profesional',
        'Cuidados post-tratamiento',
        'Seguimiento personalizado',
        'Garantía de calidad'
      ],
      popular: false,
      badge: 'Ahorro 34%',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 203,
      name: 'Paquete Estándar',
      sessions: '6-10 sesiones',
      price: '$599',
      originalPrice: '$900',
      description: 'Para tatuajes medianos con colores',
      image: '/maquina_laser.jpg',
      features: [
        'Evaluación inicial gratuita',
        'Tecnología láser avanzada',
        'Cremas anestésicas incluidas',
        'Plan de cuidados personalizado',
        'Garantía de resultados',
        'Descuento en sesiones extra'
      ],
      popular: true,
      badge: 'Más Popular',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 204,
      name: 'Paquete Premium',
      sessions: '10-15 sesiones',
      price: '$999',
      originalPrice: '$1500',
      description: 'Para tatuajes grandes y complejos',
      image: '/maquina_laser.jpg',
      features: [
        'Evaluación inicial gratuita',
        'Láser de última generación',
        'Tratamiento completamente sin dolor',
        'Plan personalizado completo',
        'Garantía total de resultados',
        'Descuentos en sesiones adicionales',
        'Seguimiento post-tratamiento',
        'Cremas premium incluidas'
      ],
      popular: false,
      badge: 'Ahorro 33%',
      color: 'from-orange-600 to-red-800'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookPackage = (pkg: any) => {
    setSelectedPackage(pkg);
  };

  const handleSubmitBooking = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.tattooSize) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Simular envío
    alert('¡Consulta enviada! Te contactaremos pronto para coordinar tu primera sesión.');
    
    // Reset
    setFormData({
      tattooSize: '',
      tattooLocation: '',
      tattooAge: '',
      colors: '',
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      notes: ''
    });
    setSelectedPackage(null);
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/95"></div>
      
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
              <span className="absolute inset-0 text-blue-500 blur-lg opacity-60 animate-pulse">Remoción Láser</span>
              <span className="absolute inset-0 text-blue-400 blur-md opacity-40">Remoción Láser</span>
              <span className="absolute inset-0 text-cyan-400 blur-sm opacity-30">Remoción Láser</span>
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
                Remoción Láser
              </span>
            </h1>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 shadow-2xl mb-12">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Tecnología láser Q-Switched de última generación para eliminar tatuajes de forma segura y efectiva.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Borramos el pasado, creamos nuevas posibilidades"
            </p>
          </div>

          {/* Hero Image with Technology Info */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="/maquina_laser.jpg"
                alt="Máquina Láser Q-Switched"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-blue-500/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold mb-2">Tecnología Q-Switched</h3>
                <p className="text-gray-200 text-sm">Láser de última generación para resultados óptimos</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-blue-400" />
                  <span>¿Cómo Funciona?</span>
                </h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  El láser Q-Switched emite pulsos de luz ultra-cortos que fragmentan las partículas de tinta del tatuaje. 
                  Tu sistema inmunológico elimina naturalmente estos fragmentos microscópicos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-black/30 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">100% Seguro</p>
                  </div>
                  <div className="text-center p-3 bg-black/30 rounded-lg">
                    <Target className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Precisión Total</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-6 rounded-xl border border-green-500/30">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-green-400" />
                  <span>Beneficios</span>
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Mínimo dolor con anestesia</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Sin cicatrices permanentes</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Recuperación rápida</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Resultados garantizados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/60 backdrop-blur-md rounded-full p-2 border border-gray-700/50">
            <div className="flex space-x-2">
              {[
                { id: 'precios', label: 'Paquetes y Precios', icon: Zap },
                { id: 'proceso', label: 'Proceso', icon: Clock },
                { id: 'contacto', label: 'Reservar Cita', icon: Calendar }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'precios' && (
          <div className="space-y-12">
            {/* Pricing Plans */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {laserPackages.map((pkg) => (
                <div key={pkg.id} className="relative">
                  {/* Badge */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <span className={`${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700'
                    } text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
                      {pkg.badge}
                    </span>
                  </div>
                  
                  <div
                    className={`bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.05] hover:-translate-y-2 border ${
                      pkg.popular 
                        ? 'border-purple-500/50 ring-2 ring-purple-500/30' 
                        : 'border-gray-700/50 hover:border-blue-500/50'
                    }`}
                  >
                    <div className="p-6 pt-8">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline space-x-2 mb-1">
                        <span className="text-3xl font-black text-blue-400">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">{pkg.sessions}</div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => handleBookPackage(pkg)}
                      className={`w-full py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                      }`}
                    >
                      Reservar Ahora
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee Section */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-2xl p-8 border border-green-500/30 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-500 p-4 rounded-full">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Garantía de Satisfacción</h3>
              <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Estamos tan seguros de nuestros resultados que ofrecemos una garantía completa. 
                Si no estás satisfecho con el progreso después de las primeras 3 sesiones, 
                te devolvemos el 100% de tu dinero.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'proceso' && (
          <div className="space-y-12">
            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consulta Gratuita',
                  description: 'Evaluamos tu tatuaje y diseñamos un plan personalizado',
                  icon: Users,
                  color: 'from-blue-600 to-blue-800'
                },
                {
                  step: '02',
                  title: 'Preparación',
                  description: 'Aplicamos anestesia tópica para tu comodidad',
                  icon: Shield,
                  color: 'from-green-600 to-green-800'
                },
                {
                  step: '03',
                  title: 'Tratamiento Láser',
                  description: 'Sesión de 15-30 minutos con tecnología Q-Switched',
                  icon: Zap,
                  color: 'from-purple-600 to-purple-800'
                },
                {
                  step: '04',
                  title: 'Cuidados Post',
                  description: 'Seguimiento y cuidados para una recuperación óptima',
                  icon: Heart,
                  color: 'from-orange-600 to-red-800'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-gradient-to-br ${process.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-full">
                    <div className="text-3xl font-black text-white mb-2">{process.step}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{process.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Cronograma Típico</h3>
              <div className="space-y-6">
                {[
                  { week: 'Semana 1', activity: 'Primera sesión y evaluación inicial', progress: '10-20%' },
                  { week: 'Semana 6-8', activity: 'Segunda sesión - Primeros resultados visibles', progress: '30-40%' },
                  { week: 'Semana 12-16', activity: 'Tercera sesión - Progreso significativo', progress: '50-70%' },
                  { week: 'Semana 18-24', activity: 'Sesiones finales - Resultados completos', progress: '80-95%' }
                ].map((timeline, index) => (
                  <div key={index} className="flex items-center space-x-6 p-4 bg-black/30 rounded-lg">
                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{timeline.week}</h4>
                      <p className="text-gray-300 text-sm">{timeline.activity}</p>
                    </div>
                    <div className="text-green-400 font-bold">{timeline.progress}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contacto' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <span>Reservar Consulta Gratuita</span>
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+598 92 542 158"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Tamaño del tatuaje *</label>
                      <select
                        name="tattooSize"
                        value={formData.tattooSize}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="">Seleccionar</option>
                        <option value="Pequeño (hasta 5cm)">Pequeño (hasta 5cm)</option>
                        <option value="Mediano (5-15cm)">Mediano (5-15cm)</option>
                        <option value="Grande (15-25cm)">Grande (15-25cm)</option>
                        <option value="Muy grande (más de 25cm)">Muy grande (más de 25cm)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Ubicación</label>
                      <input
                        type="text"
                        name="tattooLocation"
                        value={formData.tattooLocation}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Ej: brazo, espalda..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Antigüedad</label>
                      <select
                        name="tattooAge"
                        value={formData.tattooAge}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="">Seleccionar</option>
                        <option value="Menos de 1 año">Menos de 1 año</option>
                        <option value="1-3 años">1-3 años</option>
                        <option value="3-5 años">3-5 años</option>
                        <option value="Más de 5 años">Más de 5 años</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Colores</label>
                      <select
                        name="colors"
                        value={formData.colors}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="">Seleccionar</option>
                        <option value="Solo negro">Solo negro</option>
                        <option value="Negro y gris">Negro y gris</option>
                        <option value="Con colores">Con colores</option>
                        <option value="Muchos colores">Muchos colores</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Notas adicionales</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Medicamentos, alergias, expectativas..."
                    />
                  </div>

                  <button
                    onClick={handleSubmitBooking}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Enviar Consulta Gratuita
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-400" />
                      <div>
                        <p className="text-white font-semibold">Ubicación</p>
                        <p className="text-gray-300 text-sm">Av. Lussich. Calles Granada y Albatros</p>
                        <p className="text-gray-400 text-sm">Maldonado, Uruguay</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-400" />
                      <div>
                        <p className="text-white font-semibold">Teléfono</p>
                        <p className="text-gray-300">+598 92 542 158</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg">
                      <Mail className="h-6 w-6 text-purple-400" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">info@inklifeacademia.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Horarios de Atención</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span className="text-white font-semibold">10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="text-white font-semibold">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span className="text-red-400 font-semibold">Cerrado</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://api.whatsapp.com/send/?phone=59892542158&text=Hola,%20me%20interesa%20información%20sobre%20la%20remoción%20láser%20de%20tatuajes&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8">Preguntas Frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: '¿Es doloroso el tratamiento láser?',
                a: 'Utilizamos cremas anestésicas de alta calidad que minimizan significativamente las molestias. La mayoría de pacientes describen la sensación como tolerable.'
              },
              {
                q: '¿Cuánto tiempo toma ver resultados?',
                a: 'Los primeros cambios son visibles después de 2-3 semanas de la primera sesión. Los resultados completos se ven gradualmente a lo largo del tratamiento.'
              },
              {
                q: '¿Todos los colores se pueden eliminar?',
                a: 'Los colores negro y rojo responden mejor al láser. Los colores claros como amarillo y verde pueden requerir más sesiones, pero también se pueden eliminar.'
              },
              {
                q: '¿Hay riesgo de cicatrices?',
                a: 'Con nuestra tecnología Q-Switched y siguiendo los cuidados post-tratamiento, el riesgo de cicatrices es mínimo. Tenemos un historial excelente de resultados.'
              },
              {
                q: '¿Cuánto cuesta el tratamiento completo?',
                a: 'El costo varía según el tamaño y complejidad del tatuaje. Ofrecemos paquetes desde $120 por sesión individual hasta $999 para tratamientos completos.'
              },
              {
                q: '¿Puedo hacer ejercicio después del tratamiento?',
                a: 'Recomendamos evitar ejercicio intenso por 24-48 horas después de cada sesión para permitir una recuperación óptima de la piel tratada.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoverTatuaje;