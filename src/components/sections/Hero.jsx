// src/components/sections/Hero.jsx
import { useEffect, useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { useReveal } from '../../hooks/useReveal'

const stats = [
  { value: 10, suffix: '+', label: 'Proyectos' },
  { value: 3, suffix: '', label: 'Industrias' },
  { value: 100, suffix: '%', label: 'A Medida' },
]

function AnimatedCounter({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const intervalTime = duration / steps

    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, intervalTime)

    return () => clearInterval(interval)
  }, [isVisible, target])

  return (
    <span className="text-3xl sm:text-4xl font-black text-[#059669] tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className={`reveal ${isVisible ? 'visible' : ''} mb-10`}>
          <Badge>Agencia de Software · Bolivia</Badge>
        </div>

        {/* Title */}
        <h1
          className={`reveal ${isVisible ? 'visible' : ''} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-[#1E293B] mb-8`}
          style={{ transitionDelay: '100ms' }}
        >
          Desarrollo de Software{' '}
          <span className="text-[#059669]">a Medida</span> para Escalar tu
          Negocio.
        </h1>

        {/* Subtitle */}
        <p
          className={`reveal ${isVisible ? 'visible' : ''} mx-auto max-w-2xl text-base sm:text-lg text-[#64748B] font-normal leading-relaxed mb-14`}
          style={{ transitionDelay: '200ms' }}
        >
          En Arbit Tech construimos CRMs, ERPs, Landing Pages y Aplicaciones
          Móviles que resuelven problemas reales. Transformamos tu lógica
          operativa en tecnología eficiente.
        </p>

        {/* CTAs */}
        <div
          className={`reveal ${isVisible ? 'visible' : ''} flex flex-col sm:flex-row items-center justify-center gap-4 mb-24`}
          style={{ transitionDelay: '300ms' }}
        >
          <Button href="#contacto" variant="primary" icon>
            Cotizar mi Proyecto
          </Button>
          <Button href="#portafolio" variant="secondary">
            Ver Portafolio
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`reveal ${isVisible ? 'visible' : ''} grid grid-cols-3 gap-6 sm:gap-12 border-t border-[#E2E8F0] pt-12`}
          style={{ transitionDelay: '400ms' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className="text-xs sm:text-sm text-[#94A3B8] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
