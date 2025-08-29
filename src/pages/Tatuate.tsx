import React, { useState } from 'react';
import { ArrowLeft, Calendar, Palette, Clock, Star, CheckCircle, Upload, X, Camera, Mail, Send } from 'lucide-react';

interface TatuateProps {
  onNavigate: (page: string) => void;
}

const Tatuate: React.FC<TatuateProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    bodyZone: '',
    widthCm: '',
    heightCm: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    hasReference: false
  });

  const tattooServices = [
    {
      id: 101,
      title: 'Consulta de Tatuaje Personalizado',
      description: 'Envíanos tu diseño y las medidas para recibir una cotización personalizada.',
      image: '/tatuajes/IMG-20250614-WA0043.jpg',
      features: ['Diseño personalizado', 'Consulta incluida', 'Presupuesto detallado', 'Cuidados post-tatuaje', 'Retoque gratuito'],
      popular: true
    }
  ];

  // Función para determinar el tipo de tatuaje según las dimensiones
  const getTattooType = (width: number, height: number) => {
    const maxDimension = Math.max(width, height);
    const area = width * height;
    
    if (maxDimension <= 5) {
      return { type: 'Pequeño', duration: '1-2 horas', description: 'Perfecto para diseños simples, letras o símbolos pequeños' };
    } else if (maxDimension <= 15) {
      return { type: 'Mediano', duration: '2-4 horas', description: 'Ideal para diseños con más detalle y complejidad' };
    } else if (maxDimension <= 25 || area <= 400) {
      return { type: 'Grande', duration: '4-8 horas', description: 'Para diseños complejos, mangas o piezas grandes' };
    } else {
      return { type: 'Sesión Completa', duration: '6-10 horas', description: 'Sesión completa para proyectos grandes o múltiples tatuajes' };
    }
  };

  // Calcular el tipo de tatuaje basado en las dimensiones actuales
  const currentTattooInfo = formData.widthCm && formData.heightCm 
    ? getTattooType(parseFloat(formData.widthCm), parseFloat(formData.heightCm))
    : null;

  const bodyZones = [
    'Brazo (antebrazo)',
    'Brazo (bíceps)',
    'Brazo (hombro)',
    'Espalda (alta)',
    'Espalda (baja)',
    'Espalda (completa)',
    'Pecho',
    'Pierna (muslo)',
    'Pierna (pantorrilla)',
    'Pierna (tobillo)',
    'Cuello',
    'Mano',
    'Pie',
    'Costillas',
    'Otro (especificar en notas)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen válido (JPG, PNG, etc.)');
        return;
      }
      
      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('El archivo es demasiado grande. Máximo 5MB permitido.');
        return;
      }

      setUploadedImage(file);
      
      // Crear preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setImagePreview(null);
  };

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.bodyZone) {
      alert('Por favor completa todos los campos obligatorios (nombre, email, teléfono y zona del cuerpo)');
      return;
    }

    if (!uploadedImage && !formData.hasReference) {
      alert('Por favor sube una imagen de referencia o marca que no tienes referencia');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío de email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí se integraría con un servicio de email como EmailJS o similar
      console.log('Datos del formulario:', {
        service: selectedService.title,
        clientData: formData,
        hasImage: !!uploadedImage,
        imageFile: uploadedImage
      });

      alert('¡Información enviada correctamente! Te contactaremos pronto para coordinar tu tatuaje y enviarte el presupuesto.');
      
      // Reset form
      setFormData({
        bodyZone: '',
        widthCm: '',
        heightCm: '',
        name: '',
        email: '',
        phone: '',
        notes: '',
        hasReference: false
      });
      setUploadedImage(null);
      setImagePreview(null);
      setSelectedService(null);
      setShowBookingForm(false);
      
    } catch (error) {
      alert('Error al enviar la información. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
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
              <span className="absolute inset-0 text-purple-500 blur-lg opacity-60 animate-pulse">Reserva tu Tatuaje</span>
              <span className="absolute inset-0 text-purple-400 blur-md opacity-40">Reserva tu Tatuaje</span>
              <span className="absolute inset-0 text-green-400 blur-sm opacity-30">Reserva tu Tatuaje</span>
              <span className="relative text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]">
                Reserva tu Tatuaje
              </span>
            </h1>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-60 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm opacity-60"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Envíanos tu idea y te ayudamos a convertirla en el tatuaje perfecto. Comparte tu diseño y recibe una cotización personalizada.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Cada idea tiene su momento, cada diseño su historia"
            </p>
          </div>
        </div>

        {/* Services Comparison Table */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 mb-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-green-600/20 p-6 border-b border-purple-500/30">
            <h2 className="text-2xl font-bold text-white text-center">Envíame tu diseño</h2>
            <p className="text-gray-300 text-center mt-2">Completa las medidas para recibir una cotización personalizada</p>
          </div>

          <div className="p-8">
            <div className="max-w-2xl mx-auto">
              {/* Imagen de referencia */}
              <div className="text-center mb-8">
                <img
                  src="/tatuajes/IMG-20250614-WA0043.jpg"
                  alt="Tatuaje de referencia"
                  className="w-full max-w-md mx-auto h-64 object-cover rounded-lg border border-purple-500/30"
                />
              </div>

              {/* Formulario de dimensiones */}
              <div className="bg-black/40 rounded-xl p-6 border border-gray-700/50 mb-6">
                <h3 className="text-white font-semibold mb-4 text-center">Dimensiones del Tatuaje</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Ancho (cm) *
                    </label>
                    <input
                      type="number"
                      name="widthCm"
                      value={formData.widthCm}
                      onChange={handleInputChange}
                      min="1"
                      max="50"
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="ej: 10"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Alto (cm) *
                    </label>
                    <input
                      type="number"
                      name="heightCm"
                      value={formData.heightCm}
                      onChange={handleInputChange}
                      min="1"
                      max="50"
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="ej: 15"
                    />
                  </div>
                </div>

                {/* Mostrar categoría automática */}
                {currentTattooInfo && (
                  <div className="bg-gradient-to-r from-purple-900/40 to-green-900/40 rounded-lg p-4 border border-purple-500/30 mb-4">
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        Categoría: {currentTattooInfo.type}
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">{currentTattooInfo.description}</p>
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 font-medium">{currentTattooInfo.duration}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Botón para continuar */}
              <div className="text-center">
                <button
                  onClick={() => handleServiceSelect(tattooServices[0])}
                  disabled={!formData.widthCm || !formData.heightCm}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail className="h-5 w-5" />
                  <span>Enviar Consulta</span>
                </button>
                
                {(!formData.widthCm || !formData.heightCm) && (
                  <p className="text-gray-400 text-sm mt-2">
                    Completa las dimensiones para continuar
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && selectedService && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full border border-purple-500/30 max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <span>Consultar: {selectedService.title}</span>
                </h2>
                <button
                  onClick={() => {
                    setShowBookingForm(false);
                    setSelectedService(null);
                    setUploadedImage(null);
                    setImagePreview(null);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Service Info */}
                <div>
                  <img
                    src="/tatuajes/IMG-20250614-WA0043.jpg"
                    alt={selectedService.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="text-white font-semibold mb-2">Detalles del Servicio</h3>
                    <p className="text-gray-300 text-sm mb-4">{selectedService.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Tamaño:</span>
                        <span className="text-white">{selectedService.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Duración:</span>
                        <span className="text-green-400">{selectedService.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Precio estimado:</span>
                        <span className="text-purple-400 font-bold">{selectedService.estimatedPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Booking Form */}
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                    <h3 className="text-white font-semibold mb-4">Información Personal</h3>
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
                      
                      <div className="grid grid-cols-2 gap-4">
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
                            placeholder="+598 99 123 456"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Upload Section */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">
                      Diseño de Referencia
                    </label>
                    
                    {!imagePreview ? (
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-300 mb-2">Haz clic para subir tu diseño</p>
                          <p className="text-gray-500 text-sm">JPG, PNG hasta 5MB</p>
                        </label>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                    
                    <div className="mt-3">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="hasReference"
                          checked={formData.hasReference}
                          onChange={handleInputChange}
                          className="rounded border-gray-600 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-gray-300 text-sm">No tengo diseño, quiero que me ayuden a crearlo</span>
                      </label>
                    </div>
                  </div>

                  {/* Body Zone Selection */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Zona del Cuerpo *
                    </label>
                    <select
                      name="bodyZone"
                      value={formData.bodyZone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar zona</option>
                      {bodyZones.map((zone) => (
                        <option key={zone} value={zone}>{zone}</option>
                      ))}
                    </select>
                  </div>

                  {/* Size Inputs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Ancho aproximado (cm)
                      </label>
                      <input
                        type="number"
                        name="widthCm"
                        value={formData.widthCm}
                        onChange={handleInputChange}
                        min="1"
                        max="50"
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="ej: 10"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Alto aproximado (cm)
                      </label>
                      <input
                        type="number"
                        name="heightCm"
                        value={formData.heightCm}
                        onChange={handleInputChange}
                        min="1"
                        max="50"
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="ej: 15"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
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
                      placeholder="Detalles adicionales sobre tu tatuaje, colores preferidos, estilo, etc..."
                    />
                  </div>

                  {/* Consultation Info */}
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="text-blue-400 font-semibold mb-2">📧 Información de Consulta</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      • Te enviaremos un presupuesto personalizado por email
                    </p>
                    <p className="text-gray-300 text-sm mb-2">
                      • Nos contactaremos contigo en menos de 24 horas
                    </p>
                    <p className="text-gray-300 text-sm">
                      • La consulta inicial es completamente gratuita
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleBookingSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Consulta</span>
                      </>
                    )}
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