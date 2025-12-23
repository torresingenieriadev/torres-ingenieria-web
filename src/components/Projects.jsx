import React from 'react'
import { motion } from 'framer-motion'
import { Server, ShoppingCart, BrainCircuit, ArrowUpRight, Github, FolderGit2 } from 'lucide-react'

const Projects = () => {
  const experiences = [
    {
      id: 1,
      role: 'Lead Backend Engineer',
      project: 'Distributed Messaging Core (Chat01/02)',
      metric: '40% reducción latencia',
      description: 'Lideré la migración crítica de una arquitectura monolítica heredada a un sistema distribuido de microservicios. Implementé protocolos de sockets optimizados para manejar concurrencia masiva.',
      tech: ['Node.js', 'Socket.io', 'Redis', 'Docker', 'System Design'],
      icon: Server,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      role: 'Full Stack Architect',
      project: 'Aurum & Co. E-Commerce',
      metric: '30% conversión directa',
      description: 'Diseño e implementación de una plataforma de comercio digital "headless". Enfoque en performance (Core Web Vitals) y una experiencia de usuario fluida que elimina fricción en el checkout.',
      tech: ['React', 'Next.js', 'Tailwind', 'Stripe API', 'UX Research'],
      icon: ShoppingCart,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 3,
      role: 'AI Solutions Engineer',
      project: 'Gemini Financial Advisor',
      metric: 'Automatización 24/7',
      description: 'Desarrollo de un agente autónomo de asesoría financiera. Integración de LLMs con contextos específicos de negocio para ofrecer recomendaciones personalizadas en tiempo real.',
      tech: ['Python', 'LangChain', 'OpenAI API', 'Vector DB', 'FinTech'],
      icon: BrainCircuit,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    }
  ]

  return (
    <section id="proyectos" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Trayectoria & Resultados
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">
            Proyectos Destacados
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl">
            Una selección de soluciones técnicas que combinan arquitectura robusta con impacto real en el negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 hover:border-slate-200 flex flex-col"
              >
                {/* Header Card */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${exp.bg} ${exp.color}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 group-hover:text-slate-900 transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{exp.project}</h4>
                <p className="text-xs font-bold text-emerald-600 mb-3 uppercase tracking-wide">{exp.metric}</p>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-sm flex-grow">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 mt-auto">
                  {exp.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold text-slate-500 uppercase">
                      {t}
                    </span>
                  ))}
                  {exp.tech.length > 3 && (
                    <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold text-slate-500 uppercase">
                      +{exp.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}

          {/* GitHub "More Projects" Card */}
          <motion.a
            href="https://github.com/santiagotorres?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-slate-900 rounded-2xl p-6 hover:bg-emerald-600 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
                <div className="p-3 rounded-xl bg-white/10 text-white w-fit mb-6 group-hover:bg-white/20 transition-colors">
                    <FolderGit2 size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Explorar más proyectos</h4>
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white/90">
                    Accede a mi repositorio completo en GitHub para ver +15 proyectos, contribuciones open source y experimentos técnicos.
                </p>
            </div>
            
            <div className="flex items-center gap-2 text-white font-bold mt-6">
                Ver Repositorio <ArrowUpRight size={18} />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  )
}

export default Projects
