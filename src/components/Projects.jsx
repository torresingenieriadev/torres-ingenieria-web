import React from 'react'
import { motion } from 'framer-motion'
import { Server, ShoppingCart, BrainCircuit, ArrowUpRight, FolderGit2 } from 'lucide-react'

const Projects = () => {
  const experiences = [
    {
      id: 1,
      project: 'Distributed Messaging Core',
      metric: '40% MENOS LATENCIA',
      description: 'Migración de monolito a microservicios con Sockets optimizados para concurrencia masiva.',
      tech: ['Node.js', 'Redis', 'Docker'],
      icon: Server,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      id: 2,
      project: 'Aurum & Co. Headless',
      metric: '30% CONVERSIÓN',
      description: 'E-commerce headless enfocado en Core Web Vitals y UX sin fricción.',
      tech: ['Next.js', 'Stripe', 'Tailwind'],
      icon: ShoppingCart,
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      id: 3,
      project: 'Gemini AI Advisor',
      metric: 'AUTO-AGENTE 24/7',
      description: 'Agente financiero autónomo integrando LLMs con datos de negocio en tiempo real.',
      tech: ['Python', 'LangChain', 'OpenAI'],
      icon: BrainCircuit,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    }
  ]

  return (
    <section id="proyectos" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos <span className="text-blue-400">Selectos</span>
          </h3>
          <p className="text-slate-400 max-w-xl">
             Soluciones técnicas que priorizan la arquitectura y el impacto.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${exp.bg} ${exp.color}`}>
                    <Icon size={24} />
                  </div>
                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{exp.project}</h4>
                <p className="text-[10px] font-bold text-emerald-400 mb-3 uppercase tracking-wider">{exp.metric}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 mt-auto">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] uppercase font-bold rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          <motion.a
            href="https://github.com/torresingenieriadev"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl hover:bg-slate-800/80 transition-all flex flex-col justify-between cursor-pointer group border-dashed border-slate-700"
          >
            <div>
                <div className="p-3 rounded-xl bg-slate-800 text-slate-300 w-fit mb-6">
                    <FolderGit2 size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Repositorio Completo</h4>
                <p className="text-slate-400 text-sm">
                    Explora proyectos y experimentos open source en mi perfil de GitHub.
                </p>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mt-6 group-hover:gap-3 transition-all">
                Ver GitHub <ArrowUpRight size={16} />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  )
}

export default Projects
