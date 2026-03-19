import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible para nuevos retos
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                Software que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  escala.
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-2xl leading-relaxed"
            >
              Ingeniero de Software con experiencia en <span className="text-slate-100 font-medium">arquitecturas distribuidas</span>, productos SaaS y migraciones críticas.
              Diseño sistemas que resisten la presión y crecen con el negocio.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button 
                onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 group shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
              >
                Ver Trabajo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-4 items-center pl-4">
                <a href="https://github.com/torresingenieriadev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700/50">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/santiagotorresdiaz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700/50">
                    <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-emerald-500/20 to-transparent blur-3xl -z-10" />
             
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
               <div className="absolute -left-20 bottom-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-2xl z-20 hidden md:block w-48 font-mono text-xs">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-slate-500">$ whoami</div>
                  <div className="text-emerald-400">Software Engineer</div>
                  <div className="text-slate-500 mt-1">$ location</div>
                  <div className="text-blue-400">Medellín, CO</div>
               </div>

               <img 
                 src={profileImage} 
                 alt="Santiago Torres"
                 className="w-full h-full object-cover rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border border-slate-700/50 grayscale hover:grayscale-0"
               />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
