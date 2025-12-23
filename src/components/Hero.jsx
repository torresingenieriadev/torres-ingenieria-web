import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-gray-50 to-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-navy-deep/5 text-navy-deep text-sm font-medium rounded-full border border-navy-deep/10">
              Medellín, Colombia 🇨🇴
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-navy-deep leading-tight"
          >
            Ingeniería de Software
            <br />
            con <span className="text-black">Precisión</span> y{' '}
            <span className="text-black">Propósito</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl lg:max-w-none lg:mx-0 mx-auto leading-relaxed"
          >
            Transformando datos complejos en soluciones elegantes.
            <br />
            Especialista en migraciones críticas y desarrollo de producto.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-navy-deep text-white rounded-lg font-medium hover:bg-navy-deep/90 transition-all duration-300 flex items-center gap-2 hover:gap-3 shadow-lg hover:shadow-xl"
            >
              Ver Proyectos
              <ArrowRight size={20} className="transition-all" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-navy-deep rounded-lg font-medium border-2 border-navy-deep hover:bg-navy-deep hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactar
            </button>
          </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white ring-1 ring-navy-deep/25 shadow-lg">
                <img
                  src={profileImage}
                  alt="Foto profesional de Santiago Torres Díaz"
                  className="w-full h-full object-cover grayscale contrast-105"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" aria-hidden="true" />
                <div
                  className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_0)] [background-size:14px_14px]"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-navy-deep/15 text-[11px] font-medium text-navy-deep shadow-md whitespace-nowrap">
                Santiago Torres Díaz
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
              onClick={scrollToProjects}
            >
              <ChevronDown size={32} className="text-navy-deep/40" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

