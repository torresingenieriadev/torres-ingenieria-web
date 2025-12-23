import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="min-h-[90vh] flex items-center justify-center bg-slate-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-4">
                Ingeniero de Software & Consultor Técnico
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                Ingeniería de Software <br />
                de <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Alto Impacto</span>.
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 max-w-2xl leading-relaxed"
            >
              Transformo ideas complejas en infraestructuras robustas y aplicaciones eficientes. 
              Especializado en <span className="font-semibold text-slate-900">arquitecturas distribuidas</span>, 
              <span className="font-semibold text-slate-900"> optimización de rendimiento</span> y desarrollo de producto estratégico.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button 
                onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg shadow-slate-900/20"
              >
                Ver Arquitecturas
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                Hablemos
              </button>
            </motion.div>

            {/* Social Proof Mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 flex items-center gap-6 text-slate-400"
            >
              <a href="https://github.com/santiagotorres" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/santiagotorresdiaz" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:santiago@torresingenieria.dev" className="hover:text-emerald-600 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Columna de Imagen (Minimalista) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 relative z-10">
                 <img 
                  src={profileImage} 
                  alt="Santiago Torres"
                  className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-white grayscale hover:grayscale-0 transition-all duration-500 ease-out"
                />
                {/* Badge de Experiencia */}
                <div className="absolute -bottom-2 -right-2 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900">4+ Años Exp.</span>
                </div>
              </div>
              {/* Elementos decorativos de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob animation-delay-2000" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
