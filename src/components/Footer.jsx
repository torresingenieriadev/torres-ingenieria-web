import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/santiagotorres',
      color: 'hover:text-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/santiagotorresdiaz',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:santiago@torresingenieria.dev',
      color: 'hover:text-red-600',
    },
  ]

  return (
    <footer id="contacto" className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <span className="text-navy-deep font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-semibold">Torres Ingeniería</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ingeniería de Software con Precisión y Propósito. Transformando ideas en soluciones técnicas elegantes.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={18} />
              <span>Medellín, Colombia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Conectemos</h3>
            <p className="text-gray-300">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/10 rounded-lg ${social.color} transition-all hover:bg-white/20`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
            <a
              href="mailto:santiago@torresingenieria.dev"
              className="inline-block mt-4 px-6 py-3 bg-white text-navy-deep rounded-lg font-medium hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              santiago@torresingenieria.dev
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              © {currentYear} Torres Ingeniería. Hecho con <Heart size={16} className="text-red-500" fill="currentColor" /> en Medellín.
            </p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

