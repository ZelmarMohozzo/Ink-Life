import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-red-900/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Inked Life" 
                className="h-20 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-4 font-['Cinzel']">
                Inked Life Academia
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Más de 15 años transformando pasiones en arte. Especialistas en tatuajes, 
                cursos profesionales y remoción láser con la más alta calidad y seguridad.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-red-500" />
                  <span className="text-red-400 font-semibold">500+</span>
                </div>
                <p className="text-gray-400 text-sm">Estudiantes Formados</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-red-500" />
                  <span className="text-red-400 font-semibold">15+</span>
                </div>
                <p className="text-gray-400 text-sm">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-['Cinzel']">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300 group">
                <MapPin className="h-5 w-5 text-red-500 mt-1 group-hover:text-red-400 transition-colors" />
                <div>
                  <p className="font-medium">Av. Principal 123</p>
                  <p className="text-sm text-gray-400">Ciudad, País</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-red-400 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-red-400 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors" />
                <span>info@inklifeacademia.com</span>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-900/30 rounded-lg border border-red-500/10">
              <h4 className="text-white font-semibold mb-2">Horarios</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Lun - Vie: 10:00 - 20:00</p>
                <p>Sábados: 10:00 - 18:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-['Cinzel']">Servicios</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Cursos de Tatuaje',
                'Tatuajes Profesionales', 
                'Remoción Láser',
                'Galería de Arte',
                'Consultas Personalizadas'
              ].map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-3">
              {[
                { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
                { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
                { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.name}
                  className="bg-gray-900/50 p-3 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-red-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Inked Life Academia. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;