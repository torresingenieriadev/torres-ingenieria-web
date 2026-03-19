import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Award, GraduationCap, MapPin, Code } from 'lucide-react'

const Experience = () => {
  const jobs = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Wolkvox',
      location: 'Medellín, CO',
      period: 'Mayo 2024 — Presente',
      description: 'Ingeniería de producto para la plataforma SaaS/CCaaS líder en LATAM. Responsable del desarrollo de funcionalidades core y de la calidad arquitectural del sistema.',
      achievements: [
        'Promovido de Developer Analyst Middle a Software Engineer por impacto técnico demostrado.',
        'Diseño e implementación de módulos críticos del producto Wolkvox.',
        'Aplicación de patrones de diseño para mejorar mantenibilidad y escala del código base.'
      ],
      tech: ['SaaS', 'CCaaS', 'Cloud Architecture']
    },
    {
      id: 2,
      role: 'Full-stack Developer',
      company: 'Pratech Group / SURA',
      location: 'Remoto (LATAM)',
      period: 'Ago 2021 — Oct 2023',
      description: 'Consultor técnico en el Centro de Protección Digital. Lideré la reingenieria de cotizadores de seguros de vida críticos para SURA México.',
      achievements: [
        'Modernización completa de los cotizadores Sura Vida y Vida Grupo (méxico).',
        'Integración de pasarelas de pago y microservicios sobre Azure.',
        'Migración de sistemas legados a stack moderno React/Node.js.'
      ],
      tech: ['Azure', 'React', 'Node.js', 'Microservicios']
    },
    {
      id: 3,
      role: 'Admin de Redes & Web',
      company: 'SmartCastle Domótica',
      location: 'Medellín, CO',
      period: 'Ago 2020 — Ago 2021',
      description: 'Liderazgo técnico en transformación digital e infraestructura de red para empresa del sector domótico.',
      achievements: [
        'Reingeniería web con Clean Architecture desde cero.',
        'Implementación de sistema de tickets y gestión interna.',
        'Soporte especializado en redes y seguridad perimetral.'
      ],
      tech: ['Clean Arch', 'React', 'Azure']
    }
  ]

  const education = [
    {
      degree: 'Ingeniería de Software y Datos',
      school: 'IU Digital de Antioquia',
      icon: Code
    },
    {
      degree: 'Formación en Ingeniería Eléctrica',
      school: 'Universidad Nacional de Colombia',
      period: '2016 — 2021',
      icon: GraduationCap
    }
  ]

  return (
    <section id="experiencia" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trayectoria <span className="text-emerald-400">Profesional</span>
          </motion.h3>
          <p className="text-slate-400 max-w-xl">
             Evolución constante a través de retos técnicos y de negocio en entornos Enterprise y SaaS.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-3 md:ml-0 space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Meta Info */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 1 ? 'text-left' : 'text-right'} mt-1`}>
                   <h4 className="text-xl font-bold text-white">{job.company}</h4>
                   <div className="text-slate-500 text-sm mt-1">{job.period}</div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] mt-2.5 z-10" />
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] md:hidden" />

                {/* Card */}
                <div className="md:w-5/12 w-full">
                  <div className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
                    <div className="md:hidden mb-4">
                       <h4 className="text-lg font-bold text-white">{job.company}</h4>
                       <div className="text-emerald-400 text-sm">{job.period}</div>
                    </div>

                    <h4 className="hidden md:block text-lg font-bold text-emerald-400 mb-2">{job.role}</h4>
                    <h4 className="md:hidden text-lg font-bold text-emerald-400 mb-2">{job.role}</h4>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-slate-800/50 text-slate-300 text-[10px] uppercase font-bold tracking-wider rounded border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24 pt-12 border-t border-slate-800/50">
           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <GraduationCap className="text-emerald-500" /> Formación & Certificaciones
           </h3>
           <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                 {education.map((edu, idx) => (
                   <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                        <edu.icon size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-200">{edu.degree}</h5>
                        <p className="text-slate-500 text-sm">{edu.school}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="flex flex-wrap content-start gap-3">
                 {['Scrum Foundation', 'Cloud Computing', 'React Advanced', 'Mobile Dev', 'Communication'].map((cert, i) => (
                   <div key={i} className="px-3 py-2 bg-slate-900/30 border border-slate-800 rounded-lg text-sm text-slate-400 hover:text-white transition-colors">
                     {cert}
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
