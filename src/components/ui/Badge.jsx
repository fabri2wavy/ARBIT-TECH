// src/components/ui/Badge.jsx
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm animate-pulse-slow ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />
      {children}
    </span>
  )
}
