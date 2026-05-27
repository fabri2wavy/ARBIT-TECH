// src/components/sections/Navbar.jsx
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'
import Button from '../ui/Button'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#050A14]/95 backdrop-blur-md border-b border-white/[0.06]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-white">Arbit</span>
          <span className="text-[#00D4FF]">Tech</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 font-medium hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contacto" variant="primary" className="text-xs px-5 py-2.5">
            Cotizar Proyecto
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                mobileOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                mobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pt-4 pb-6 flex flex-col gap-4 border-t border-white/[0.06]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 font-medium hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contacto" variant="primary" className="text-xs mt-2 w-full">
            Cotizar Proyecto
          </Button>
        </div>
      </div>
    </nav>
  )
}
