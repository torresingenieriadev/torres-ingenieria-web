import React from 'react'
import { motion } from 'framer-motion'
import { Server, Terminal, Globe, Cpu } from 'lucide-react'

const Skills = () => {
  const domains = [
    {
      title: 'Backend Core',
      icon: Server,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'Microservices', 'Redis'],
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    {
      title: 'Frontend & UX',
      icon: Globe,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer'],
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      title: 'DevOps & Cloud',
      icon: Terminal,
      skills: ['Docker', 'AWS / Azure', 'CI/CD', 'Linux', 'GitOps'],
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      title: 'Architecture',
      icon: Cpu,
      skills: ['System Design', 'Clean Arch', 'Serverless', 'Event-Driven', 'Scalability'],
      color: 'text-orange-400',
      bg: 'bg-orange-400/10'
    }
  ]

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Stack Tecnológico</h3>
            <p className="text-slate-400">Herramientas elegidas por rendimiento y escalabilidad.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, idx) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-slate-800/50 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl ${domain.bg} ${domain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-4">{domain.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                      {skill}
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

export default Skills
