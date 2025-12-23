import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, Award, GraduationCap, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const jobs = [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Wolkvox',
      location: 'Medellín, CO',
      period: 'Mayo 2024 - Presente',
      description: 'Ingeniería de software para plataforma SaaS/CCaaS líder en la nube. Desarrollo de soluciones escalables y optimización de producto.',
      achievements: [
        'Ascendido de Developer Analyst Middle a Software Engineer por desempeño técnico.',
        'Desarrollo de nuevas funcionalidades core para el producto wolkvox.',
        'Implementación de mejores prácticas de código y patrones de diseño para mantenibilidad.'
      ],
      tech: ['SaaS', 'CCaaS', 'Cloud Architecture']
    },
    {
      id: 2,
      role: 'Full-stack Developer',
      company: 'Pratech Group / SURA',
      location: 'Remoto (Proyectos LATAM)',
      period: 'Ago 2021 - Oct 2023',
      description: 'Consultor clave en el Centro de Protección Digital (CPD). Lideré la reingeniería de cotizadores críticos para SURA México (Productos: Sura Vida, Vida Grupo).',
      achievements: [
        'Desarrollo y modernización de cotizadores de seguros de vida para el mercado mexicano.',
        'Integración de pasarelas de pago y servicios core mediante microservicios en Azure.',
        'Migración de procesos legacy a flujos digitales optimizados usando React y Node.js.'
      ],
      tech: ['Azure', 'React', 'Node.js', 'SharePoint', 'Microservicios']
    },
    {
      id: 3,
      role: 'Administrador de Redes & Web',
      company: 'SmartCastle Domótica',
      location: 'Medellín, CO',
      period: 'Ago 2020 - Ago 2021',
      description: 'Transformación digital y liderazgo técnico en la modernización de infraestructura.',
      achievements: [
        'Reingeniería completa del sitio web bajo principios de Clean Architecture.',
        'Implementación de sistema de tickets y gestión interna.',
        'Soporte especializado en redes y domótica.'
      ],
      tech: ['Clean Arch', 'React', 'Azure Functions']
    }
  ]

  const education = [
    {
      degree: 'Ingeniería de Software y Datos',
      school: 'IU Digital de Antioquia',
      period: '2023 - Presente',
      icon: Code
    },
    {
      degree: 'Ingeniería Eléctrica',
      school: 'Universidad Nacional de Colombia',
      period: '2016 - 2021',
      icon: GraduationCap
    }
  ]
  
  // Icono helper
  function Code(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }

  return (
    <section id="experiencia" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Briefcase size={14} /> Trayectoria
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Experiencia Profesional
          </motion.h3>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-0 space-y-16">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot (Mobile) / Line Connector */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white bg-emerald-500 md:hidden" />
              
              <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date & Company Info (Side) */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 1 ? 'text-left' : 'text-right'} mt-2`}>
                   <h4 className="text-xl font-bold text-slate-900">{job.company}</h4>
                   <div className="flex items-center gap-2 text-slate-500 text-sm mt-1 justify-end">
                      {index % 2 === 1 ? null : <><Calendar size={14}/> {job.period}</>}
                      {index % 2 === 1 ? <><Calendar size={14}/> {job.period}</> : null}
                   </div>
                   <div className="flex items-center gap-2 text-slate-400 text-xs mt-1 justify-end">
                      {index % 2 === 1 ? null : <><MapPin size={12}/> {job.location}</>}
                      {index % 2 === 1 ? <><MapPin size={12}/> {job.location}</> : null}
                   </div>
                </div>

                {/* Center Dot (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-emerald-500 shadow-md mt-3 z-10" />

                {/* Content Card */}
                <div className="md:w-5/12 w-full">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 group">
                    {/* Mobile Header (Visible only on mobile) */}
                    <div className="md:hidden mb-4 border-b border-slate-100 pb-4">
                       <h4 className="text-lg font-bold text-slate-900">{job.company}</h4>
                       <div className="text-emerald-600 font-medium text-sm">{job.role}</div>
                       <div className="text-slate-500 text-xs mt-1">{job.period}</div>
                    </div>

                    {/* Desktop Role Title */}
                    <h4 className="hidden md:block text-lg font-bold text-emerald-700 mb-3">{job.role}</h4>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100 transition-colors">
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

        {/* Education Section Modernized */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <GraduationCap className="text-emerald-600" /> Formación & Certificaciones
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic */}
            <div className="space-y-4">
               <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Academia</h4>
               {education.map((edu, idx) => (
                 <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                      <edu.icon size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">{edu.degree}</h5>
                      <p className="text-slate-600 text-sm">{edu.school}</p>
                      <p className="text-slate-400 text-xs mt-1">{edu.period}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Certs */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Certificaciones</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Scrum Foundation (SFPC)', 
                  'Cloud Computing Certified', 
                  'React Full Course', 
                  'Mobile App Dev', 
                  'Comunicación Asertiva'
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-blue-300 hover:shadow-sm transition-all">
                    <Award size={14} className="text-blue-500" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
