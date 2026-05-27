// src/components/sections/Footer.jsx
import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1 text-lg font-bold tracking-tight">
            <span className="text-white">Arbit</span>
            <span className="text-[#00D4FF]">Tech</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/30 text-center order-3 sm:order-2">
            © 2026 Arbit Tech. Todos los derechos reservados.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2 order-2 sm:order-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
