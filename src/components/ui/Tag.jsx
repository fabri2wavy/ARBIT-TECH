// src/components/ui/Tag.jsx
export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded-md bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/50 tracking-wide ${className}`}
    >
      {children}
    </span>
  )
}
