// src/components/ui/Button.jsx
import { ArrowRight } from 'lucide-react'

export default function Button({ children, variant = 'primary', href, icon, className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'border border-white/[0.12] text-white/90 hover:bg-white/[0.06] hover:border-white/20 active:scale-[0.98]',
    ghost:
      'text-white/70 hover:text-white hover:bg-white/[0.04]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} {...props}>
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </a>
    )
  }

  return (
    <button className={`group ${classes}`} {...props}>
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  )
}
