// src/components/ui/Card.jsx
export default function Card({ children, className = '', delay = 0, revealed = true }) {
  return (
    <div
      className={`reveal rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 card-glow ${revealed ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
