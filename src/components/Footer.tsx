import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-red-500" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-red-500" />
                <span>info@inklifeacademia.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Cursos', 'Galería', 'Precios', 'Sobre Nosotros'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="h-6 w-6" />, href: '#' },
                { icon: <Facebook className="h-6 w-6" />, href: '#' },
                { icon: <Twitter className="h-6 w-6" />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                © 2025 Ink Life Academia. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;