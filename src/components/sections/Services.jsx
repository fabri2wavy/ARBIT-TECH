// src/components/sections/Services.jsx
import { services } from '../../data/services'
import { useReveal } from '../../hooks/useReveal'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

export default function Services() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section id="servicios" className="relative py-32 sm:py-40">
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#059669] mb-4`}
          >
            Servicios
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Soluciones que{' '}
            <span className="text-[#059669]">impulsan</span> resultados
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-5 mx-auto max-w-xl text-[#64748B] text-sm sm:text-base font-normal`}
            style={{ transitionDelay: '150ms' }}
          >
            Cada proyecto es una pieza de ingeniería diseñada para resolver un
            problema real de tu negocio.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card key={service.id} delay={i * 120} revealed={isVisible}>
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] font-normal leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
