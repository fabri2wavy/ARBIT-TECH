// src/components/sections/Footer.jsx
import { Github, Linkedin, Phone } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Phone, href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1 text-lg font-bold tracking-tight">
            <span className="text-[#1E293B]">Arbit</span>
            <span className="text-[#059669]">Tech</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#94A3B8] text-center order-3 sm:order-2">
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
                  className="p-2.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] hover:bg-[#E2E8F0] transition-all duration-300"
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
