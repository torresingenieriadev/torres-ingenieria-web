import React from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para escalar tu proyecto?
            </h2>
            <p className="text-slate-400 max-w-md">
              Disponible para consultoría técnica, arquitectura de software y desarrollo full-stack. Hablemos de cómo optimizar tu negocio.
            </p>
          </div>

          <div className="flex md:justify-end gap-4">
            <a 
              href="mailto:santiago@torresingenieria.dev"
              className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
            >
              santiago@torresingenieria.dev
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Santiago Torres. Ingeniería de Software.</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/santiagotorres" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/santiagotorresdiaz" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:santiago@torresingenieria.dev" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
