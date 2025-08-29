import React, { useState } from 'react';
import { ArrowLeft, Upload, X, Mail, Send, Palette, Ruler, MapPin, Clock, Star, CheckCircle, Camera, User, Phone, MessageSquare } from 'lucide-react';

interface TatuateProps {
  onNavigate: (page: string) => void;
}

const Tatuate: React.FC<TatuateProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
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
    hasReference: false,
    style: '',
    colors: '',
    budget: ''
  });

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

  const tattooStyles = [
    'Realismo',
    'Blackwork',
    'Black & Gray',
    'Tradicional',
    'Geométrico',
    'Mandala',
    'Floral',
    'Lettering',
    'Minimalista',
    'No estoy seguro'
  ];

  const colorOptions = [
    'Solo negro',
    'Negro y gris',
    'Con algunos colores',
    'Muchos colores',
    'No estoy seguro'
  ];

  const budgetRanges = [
    'Hasta $3,000',
    '$3,000 - $6,000',
    '$6,000 - $10,000',
    '$10,000 - $15,000',
    'Más de $15,000',
    'Necesito cotización'
  ];

  // Función para determinar el tipo de tatuaje según las dimensiones
  const getTattooType = (width: number, height: number) => {
    const maxDimension = Math.max(width, height);
    const area = width * height;
    
    if (maxDimension <= 5) {
      return { 
        type: 'Pequeño', 
        duration: '1-2 horas', 
        description: 'Perfecto para diseños simples, letras o símbolos pequeños',
        estimatedPrice: '$2,000 - $4,000'
      };
    } else if (maxDimension <= 15) {
      return { 
        type: 'Mediano', 
        duration: '2-4 horas', 
        description: 'Ideal para diseños con más detalle y complejidad',
        estimatedPrice: '$4,000 - $8,000'
      };
    } else if (maxDimension <= 25 || area <= 400) {
      return { 
        type: 'Grande', 
        duration: '4-8 horas', 
        description: 'Para diseños complejos, mangas o piezas grandes',
        estimatedPrice: '$8,000 - $15,000'
      };
    } else {
      return { 
        type: 'Sesión Completa', 
        duration: '6-10 horas', 
        description: 'Sesión completa para proyectos grandes o múltiples tatuajes',
        estimatedPrice: '$15,000+'
      };
    }
  };

  const currentTattooInfo = formData.widthCm && formData.heightCm 
    ? getTattooType(parseFloat(formData.widthCm), parseFloat(formData.heightCm))
    : null;

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
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen válido (JPG, PNG, etc.)');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        alert('El archivo es demasiado grande. Máximo 5MB permitido.');
        return;
      }

      setUploadedImage(file);
      
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

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.bodyZone || !formData.widthCm || !formData.heightCm) {
        alert('Por favor completa la zona del cuerpo y las dimensiones');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.style) {
        alert('Por favor selecciona un estilo de tatuaje');
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor completa todos los campos obligatorios (nombre, email y teléfono)');
      return;
    }

    if (!uploadedImage && !formData.hasReference) {
      alert('Por favor sube una imagen de referencia o marca que no tienes referencia');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Datos del formulario:', {
        clientData: formData,
        hasImage: !!uploadedImage,
        imageFile: uploadedImage,
        tattooInfo: currentTattooInfo
      });

      alert('¡Información enviada correctamente! Te contactaremos pronto para coordinar tu tatuaje y enviarte el presupuesto detallado.');
      
      // Reset form
      setFormData({
        bodyZone: '',
        widthCm: '',
        heightCm: '',
        name: '',
        email: '',
        phone: '',
        notes: '',
        hasReference: false,
        style: '',
        colors: '',
        budget: ''
      });
      setUploadedImage(null);
      setImagePreview(null);
      setCurrentStep(1);
      
    } catch (error) {
      alert('Error al enviar la información. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'Ubicación y Tamaño';
      case 2: return 'Estilo y Colores';
      case 3: return 'Diseño de Referencia';
      case 4: return 'Información Personal';
      default: return '';
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
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
          
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-2xl mb-12">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Convierte tu idea en una obra de arte única. Trabajamos contigo para crear el tatuaje perfecto que refleje tu personalidad.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Cada tatuaje cuenta una historia, cada línea tiene un propósito"
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <img
              src="/tatuajes/cursos.jpg"
              alt="Proceso de Tatuaje"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-purple-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold mb-2">Arte Personalizado</h3>
              <p className="text-gray-200">Cada diseño es único y creado especialmente para ti</p>
            </div>
          </div>
        </div>

        {/* Multi-step Form */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step <= currentStep 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 md:w-24 h-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? 'bg-gradient-to-r from-purple-600 to-purple-700' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Paso {currentStep}: {getStepTitle(currentStep)}
              </h2>
              <p className="text-gray-400">
                Completa la información para recibir tu cotización personalizada
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
            
            {/* Step 1: Location and Size */}
            {currentStep === 1 && (
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                      <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <MapPin className="h-5 w-5 text-purple-400" />
                        <span>Zona del Cuerpo</span>
                      </h3>
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

                    <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                      <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <Ruler className="h-5 w-5 text-green-400" />
                        <span>Dimensiones Aproximadas</span>
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
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
                            className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
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
                            className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                            placeholder="ej: 15"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Preview */}
                  <div className="space-y-6">
                    {currentTattooInfo && (
                      <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl p-6 border border-blue-500/30">
                        <h4 className="text-white font-semibold text-xl mb-4 flex items-center space-x-2">
                          <Star className="h-5 w-5 text-blue-400" />
                          <span>Información del Tatuaje</span>
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-300">Categoría:</span>
                            <span className="text-blue-400 font-semibold">{currentTattooInfo.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Duración estimada:</span>
                            <span className="text-green-400 font-semibold">{currentTattooInfo.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">Precio estimado:</span>
                            <span className="text-yellow-400 font-semibold">{currentTattooInfo.estimatedPrice}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mt-4 p-3 bg-black/30 rounded-lg">
                          {currentTattooInfo.description}
                        </p>
                      </div>
                    )}

                    <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 p-6 rounded-xl border border-gray-500/30">
                      <h4 className="text-white font-semibold mb-3">💡 Consejos</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Las medidas son aproximadas, las ajustaremos en la consulta</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Considera el crecimiento natural de la zona</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>Podemos adaptar el diseño al espacio disponible</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Style and Colors */}
            {currentStep === 2 && (
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                      <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <Palette className="h-5 w-5 text-purple-400" />
                        <span>Estilo de Tatuaje</span>
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {tattooStyles.map((style) => (
                          <button
                            key={style}
                            onClick={() => setFormData(prev => ({ ...prev, style }))}
                            className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                              formData.style === style
                                ? 'bg-purple-600 text-white border border-purple-400'
                                : 'bg-black/40 text-gray-300 border border-gray-600 hover:border-purple-500/50 hover:text-white'
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                      <h3 className="text-white font-semibold mb-4">Colores</h3>
                      <div className="space-y-2">
                        {colorOptions.map((color) => (
                          <label key={color} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="colors"
                              value={color}
                              checked={formData.colors === color}
                              onChange={handleInputChange}
                              className="text-green-500 focus:ring-green-500"
                            />
                            <span className="text-gray-300">{color}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-500/30">
                      <h3 className="text-white font-semibold mb-4">Presupuesto Aproximado</h3>
                      <div className="space-y-2">
                        {budgetRanges.map((budget) => (
                          <label key={budget} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={budget}
                              checked={formData.budget === budget}
                              onChange={handleInputChange}
                              className="text-blue-500 focus:ring-blue-500"
                            />
                            <span className="text-gray-300">{budget}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 p-6 rounded-xl border border-yellow-500/30">
                      <h4 className="text-white font-semibold mb-3">ℹ️ Información</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Los precios son estimados y pueden variar según la complejidad</li>
                        <li>• Incluyen consulta inicial y diseño personalizado</li>
                        <li>• Aceptamos diferentes métodos de pago</li>
                        <li>• Retoque gratuito incluido</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Reference Design */}
            {currentStep === 3 && (
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                      <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <Camera className="h-5 w-5 text-purple-400" />
                        <span>Diseño de Referencia</span>
                      </h3>
                      
                      {!imagePreview ? (
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="image-upload"
                          />
                          <label htmlFor="image-upload" className="cursor-pointer">
                            <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-300 mb-2 text-lg">Sube tu diseño de referencia</p>
                            <p className="text-gray-500 text-sm">JPG, PNG hasta 5MB</p>
                          </label>
                        </div>
                      ) : (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <button
                            onClick={removeImage}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                      
                      <div className="mt-4">
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
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                      <h4 className="text-white font-semibold mb-3">🎨 Proceso Creativo</h4>
                      <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                          <span>Analizamos tu idea y referencias</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
                          <span>Creamos un diseño personalizado</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
                          <span>Ajustamos hasta que sea perfecto</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
                          <span>Realizamos tu tatuaje único</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-500/30">
                      <h4 className="text-white font-semibold mb-3">📋 Tipos de Referencia</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Fotos de tatuajes que te gusten</li>
                        <li>• Dibujos o bocetos propios</li>
                        <li>• Imágenes de internet</li>
                        <li>• Fotografías personales</li>
                        <li>• Combinación de varias ideas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Personal Information */}
            {currentStep === 4 && (
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/30">
                      <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <User className="h-5 w-5 text-purple-400" />
                        <span>Información Personal</span>
                      </h3>
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

                    <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/30">
                      <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <MessageSquare className="h-5 w-5 text-green-400" />
                        <span>Notas Adicionales</span>
                      </h3>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntanos más sobre tu idea: inspiración, significado, detalles especiales, fechas importantes, etc..."
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Summary Card */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl p-6 border border-blue-500/30">
                      <h4 className="text-white font-semibold text-xl mb-4">📋 Resumen de tu Tatuaje</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Zona:</span>
                          <span className="text-white font-medium">{formData.bodyZone || 'No especificada'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Tamaño:</span>
                          <span className="text-white font-medium">
                            {formData.widthCm && formData.heightCm 
                              ? `${formData.widthCm}cm x ${formData.heightCm}cm` 
                              : 'No especificado'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Estilo:</span>
                          <span className="text-white font-medium">{formData.style || 'No especificado'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Colores:</span>
                          <span className="text-white font-medium">{formData.colors || 'No especificado'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Presupuesto:</span>
                          <span className="text-white font-medium">{formData.budget || 'No especificado'}</span>
                        </div>
                        {currentTattooInfo && (
                          <>
                            <div className="border-t border-gray-600 pt-3 mt-3">
                              <div className="flex justify-between">
                                <span className="text-gray-300">Categoría:</span>
                                <span className="text-blue-400 font-semibold">{currentTattooInfo.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-300">Duración:</span>
                                <span className="text-green-400 font-semibold">{currentTattooInfo.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-300">Precio estimado:</span>
                                <span className="text-yellow-400 font-semibold">{currentTattooInfo.estimatedPrice}</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-6 rounded-xl border border-green-500/30">
                      <h4 className="text-green-400 font-semibold mb-3">✅ Próximos Pasos</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Te enviaremos un presupuesto detallado</li>
                        <li>• Coordinaremos una consulta presencial</li>
                        <li>• Crearemos el diseño personalizado</li>
                        <li>• Agendaremos la sesión de tatuaje</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="bg-black/40 px-8 py-6 border-t border-gray-700/50">
              <div className="flex justify-between items-center">
                {currentStep > 1 ? (
                  <button
                    onClick={prevStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Anterior</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 ? (
                  <button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Siguiente</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
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
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-2xl p-8 border border-green-500/30 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-500 p-4 rounded-full">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">¿Prefieres hablar directamente?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contáctanos por WhatsApp para discutir tu idea, ver referencias o resolver cualquier duda sobre tu futuro tatuaje.
            </p>
            
            <a
              href="https://api.whatsapp.com/send/?phone=59892153567&text=Hola,%20me%20interesa%20hacerme%20un%20tatuaje%20y%20me%20gustaría%20recibir%20más%20información&type=phone_number&app_absent=0"
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