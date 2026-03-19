import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-zinc-900 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
         <div>
            © {new Date().getFullYear()} <strong>TORRES INGENIERÍA</strong> · SANTIAGO TORRES. ALL SYSTEMS NORMAL.
         </div>
         <div className="flex gap-6 font-bold">
            <a href="https://github.com/torresingenieriadev" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GITHUB</a>
            <a href="https://linkedin.com/in/santiagotorresdiaz" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LINKEDIN</a>
            <a href="mailto:santiago@torresingenieria.dev" className="hover:text-accent">EMAIL</a>
         </div>
      </div>
    </footer>
  )
}

export default Footer
