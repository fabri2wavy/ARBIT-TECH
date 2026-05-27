// src/components/sections/Services.jsx
import { services } from '../../data/services'
import { useReveal } from '../../hooks/useReveal'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

export default function Services() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      {/* Orb decoration */}
      <div className="orb orb-cyan w-[500px] h-[500px] top-0 -left-64" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#00D4FF]/70 mb-3`}
          >
            Servicios
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Soluciones que{' '}
            <span className="gradient-text">impulsan</span> resultados
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-4 mx-auto max-w-xl text-white/40 text-sm sm:text-base`}
            style={{ transitionDelay: '150ms' }}
          >
            Cada proyecto es una pieza de ingeniería diseñada para resolver un
            problema real de tu negocio.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card key={service.id} delay={i * 120} revealed={isVisible}>
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed mb-5">
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
