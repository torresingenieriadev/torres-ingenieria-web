import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lightbulb, Target, Zap, Shield, GitBranch } from 'lucide-react'

const About = () => {
  const principles = [
    {
      icon: Target,
      title: 'Orientado a Resultados',
      description: 'Cada línea de código tiene un propósito. Construyo con impacto de negocio como norte, no solo con elegancia técnica.'
    },
    {
      icon: Shield,
      title: 'Sistemas Resilientes',
      description: 'Diseño arquitecturas que soportan fallos, escalan bajo presión y minimizan el tiempo de inactividad en producción.'
    },
    {
      icon: GitBranch,
      title: 'Criterio Técnico Sólido',
      description: 'Tomo decisiones de arquitectura basadas en evidencia: benchmarks, trazabilidad y ciclos de feedback reales.'
    }
  ]

  const values = [
    { icon: Brain, text: 'Pensamiento Sistémico' },
    { icon: Lightbulb, text: 'Estrategia de Producto' },
    { icon: Zap, text: 'Velocidad con Calidad' },
  ]

  return (
    <section id="sobre-mi" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre <span className="text-emerald-400">Mí</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Soy <span className="text-white font-semibold">Santiago Torres Díaz</span>, ingeniero de software con raíces en
            Medellín. Mi perfil integra la <span className="text-emerald-400">rigurosidad técnica</span> y las bases analíticas de la ingeniería
            con la agilidad del desarrollo de software moderno — una combinación que me permite abordar problemas complejos con una visión de sistema integral.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {principles.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon size={22} />
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Values Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 text-sm transition-all group cursor-default">
                <Icon size={16} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{value.text}</span>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default About
