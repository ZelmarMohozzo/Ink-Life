import React, { useState } from 'react';
import { ArrowLeft, CreditCard, User, Mail, Phone, MapPin } from 'lucide-react';

interface CheckoutFormProps {
  onNavigate: (page: string) => void;
  cartItems: any[];
  totalPrice: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onNavigate, cartItems, totalPrice }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Uruguay'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Aquí integrarías con Stripe
    try {
      // Simular procesamiento
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirigir a Stripe Checkout
      window.location.href = 'https://checkout.stripe.com/pay/your_stripe_session_id';
    } catch (error) {
      console.error('Error processing payment:', error);
      setIsProcessing(false);
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
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8 transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Volver</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario de Datos Personales */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Datos Personales</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
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
                  <Phone className="inline h-4 w-4 mr-2" />
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

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  <MapPin className="inline h-4 w-4 mr-2" />
                  Dirección *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Tu dirección completa"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Ciudad"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="12345"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    País *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="Uruguay">Uruguay</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>
                  {isProcessing ? 'Procesando...' : 'Continuar al Pago'}
                </span>
              </button>
            </form>
          </div>

          {/* Resumen del Pedido */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Resumen del Pedido</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-black/40 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.duration}</p>
                    <p className="text-purple-400 font-bold">{item.price}</p>
                  </div>
                  <div className="text-white font-semibold">
                    x{item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-white">Total:</span>
                <span className="text-green-400">${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/20 to-green-900/20 rounded-lg border border-purple-500/30">
              <h4 className="text-white font-semibold mb-2">Métodos de Pago Aceptados</h4>
              <div className="flex space-x-4 text-gray-300">
                <span>💳 Tarjetas</span>
                <span>🏦 Transferencia</span>
                <span>📱 PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;