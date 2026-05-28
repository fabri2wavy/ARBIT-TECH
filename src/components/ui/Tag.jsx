// src/components/ui/Tag.jsx
export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded-md bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-medium text-[#64748B] tracking-wide ${className}`}
    >
      {children}
    </span>
  )
}
