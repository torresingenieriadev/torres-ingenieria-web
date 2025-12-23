import React from 'react'
import { motion } from 'framer-motion'
import { Server, ShoppingCart, BrainCircuit, ArrowUpRight, Database, Cloud, Code } from 'lucide-react'

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
            Ingeniería aplicada a problemas reales
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl">
            Más allá del código, mi enfoque es la <span className="text-slate-900 font-medium">eficiencia operativa</span> y la escalabilidad del negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 hover:border-slate-200"
              >
                {/* Header Card */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${exp.bg} ${exp.color}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 group-hover:text-slate-900 transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wider">Case Study</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-slate-900 mb-1">{exp.project}</h4>
                <p className="text-sm font-medium text-emerald-600 mb-4">{exp.role} • {exp.metric}</p>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
