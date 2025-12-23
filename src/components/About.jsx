import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Rocket, Brain, BookOpen, Sparkles } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Desarrollo Full Stack',
      description: 'React, Node.js, PHP y arquitectura de sistemas escalables.',
    },
    {
      icon: Database,
      title: 'Migraciones Críticas',
      description: 'Especialista en transformación de infraestructura legacy.',
    },
    {
      icon: Rocket,
      title: 'Arquitectura de Software',
      description: 'Diseño de soluciones robustas y mantenibles a largo plazo.',
    },
  ]

  const interests = [
    { icon: Brain, text: 'Filosofía y pensamiento sistémico' },
    { icon: BookOpen, text: 'Aprendizaje continuo' },
    { icon: Sparkles, text: 'Astrología simbólica y negocios' },
  ]

  return (
    <section id="sobre-mi" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-navy-deep mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Soy <span className="font-semibold text-navy-deep">Santiago Torres Díaz</span>, ingeniero de software con base en{' '}
                <span className="font-semibold">Medellín, Colombia</span>. Mi enfoque combina precisión técnica
                con una visión estratégica del negocio.
              </p>
              <p>
                Actualmente curso Ingeniería de Software y Datos en IUDigital de Antioquia, donde profundizo
                en arquitecturas distribuidas y análisis de sistemas complejos.
              </p>
              <p>
                Mi trabajo se centra en resolver problemas críticos: desde migrar infraestructuras de mensajería
                masiva hasta diseñar experiencias de e-commerce que convierten. Creo en el código como herramienta
                de transformación, donde cada línea debe tener un propósito claro.
              </p>
              <p>
                Más allá del código, me apasiona entender los sistemas —tanto técnicos como humanos—. La filosofía,
                el aprendizaje continuo y el análisis simbólico me dan perspectivas únicas para resolver problemas
                de formas no convencionales.
              </p>
            </div>

            {/* Interests */}
            <div className="pt-8 space-y-3">
              <h3 className="text-xl font-semibold text-navy-deep">Más allá del código</h3>
              <div className="space-y-2">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon
                  return (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <IconComponent size={20} className="text-navy-deep" />
                      <span>{interest.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-navy-deep mb-8">Áreas de Especialización</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-navy-deep/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-navy-deep rounded-lg">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-navy-deep mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-gray-600">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-navy-deep/5 rounded-lg">
                <div className="text-3xl font-bold text-navy-deep">27</div>
                <div className="text-sm text-gray-600 mt-1">Años</div>
              </div>
              <div className="text-center p-4 bg-navy-deep/5 rounded-lg">
                <div className="text-3xl font-bold text-navy-deep">3+</div>
                <div className="text-sm text-gray-600 mt-1">Proyectos</div>
              </div>
              <div className="text-center p-4 bg-navy-deep/5 rounded-lg">
                <div className="text-3xl font-bold text-navy-deep">∞</div>
                <div className="text-sm text-gray-600 mt-1">Aprendizaje</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

