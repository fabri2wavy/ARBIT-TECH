// src/components/ui/Card.jsx
export default function Card({ children, className = '', delay = 0, revealed = true }) {
  return (
    <div
      className={`reveal bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200 p-8 ${revealed ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
