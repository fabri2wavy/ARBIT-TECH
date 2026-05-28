// src/components/ui/Badge.jsx
export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-600 animate-pulse-slow ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
      {children}
    </span>
  )
}
