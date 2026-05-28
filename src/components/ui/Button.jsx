// src/components/ui/Button.jsx
import { ArrowRight } from 'lucide-react'

export default function Button({ children, variant = 'primary', href, icon, className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-600/15 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-[#F0FDF4] text-[#059669] hover:bg-[#DCFCE7] active:scale-[0.98]',
    ghost:
      'text-[#475569] hover:text-[#1E293B] hover:bg-[#F1F5F9]',
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
