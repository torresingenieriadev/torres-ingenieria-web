import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Skills = () => {
  const domains = [
    {
      title: 'Backend & Arquitectura',
      skills: ['Node.js / Express', 'Python (FastAPI)', 'PostgreSQL / SQL', 'Microservicios', 'System Design']
    },
    {
      title: 'Frontend & UX',
      skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'State Management']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker / Containers', 'CI/CD Pipelines', 'AWS (Básico)', 'Git / GitHub Flows', 'Linux Admin']
    },
    {
      title: 'Estrategia & Soft Skills',
      skills: ['Liderazgo Técnico', 'Metodologías Ágiles', 'Mentoría de Juniors', 'Comunicación Cliente', 'Product Scope']
    }
  ]

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Intro Text */}
          <div className="lg:col-span-4">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Stack Tecnológico
            </h2>
            <h3 className="text-3xl font-bold mb-6">
              Herramientas elegidas con propósito
            </h3>
            <p className="text-slate-400 leading-relaxed">
              No me caso con tecnologías, elijo la herramienta correcta para cada problema. 
              Mi foco actual está en el ecosistema JavaScript/TypeScript moderno y arquitecturas serverless.
            </p>
          </div>

          {/* Grid Skills */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {domains.map((domain, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors"
                >
                  <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2">
                    {domain.title}
                  </h4>
                  <ul className="space-y-3">
                    {domain.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills

