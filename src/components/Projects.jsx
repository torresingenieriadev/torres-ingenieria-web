import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Brain, Network } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Migración de Sistemas Distribuidos',
      subtitle: 'Chat01/Chat02',
      description:
        'Migración crítica de infraestructura de sockets e instancias IP para sistemas de mensajería masiva. Reducción de latencia y mejora en la estabilidad del sistema distribuido.',
      tags: ['Backend', 'Distributed Systems', 'Sockets', 'PHP', 'Database Migration'],
      icon: Network,
      gradient: 'from-navy-deep to-black',
    },
    {
      id: 2,
      title: 'Aurum & Co.',
      subtitle: 'E-Commerce',
      description:
        'Plataforma de comercio digital para joyería de alta gama. Enfoque en UX minimalista y conversión directa vía API de WhatsApp.',
      tags: ['React', 'Frontend', 'UX/UI', 'Business Logic'],
      icon: ShoppingBag,
      gradient: 'from-navy-deep to-black',
    },
    {
      id: 3,
      title: 'Gemini Financial Advisor',
      subtitle: 'IA Financiera',
      description:
        'Desarrollo de una "Gem" personalizada de IA para asesoría financiera automatizada y gestión de gastos personales.',
      tags: ['AI', 'Prompt Engineering', 'FinTech', 'Automation'],
      icon: Brain,
      gradient: 'from-navy-deep to-black',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="proyectos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones técnicas que combinan arquitectura robusta con impacto real en el negocio.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-navy-deep/25 hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] [background-size:18px_18px]" />
                  <IconComponent size={64} className="text-white z-10" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-deep mb-1 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-navy-deep/5 text-navy-deep text-xs font-medium rounded-full border border-navy-deep/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

