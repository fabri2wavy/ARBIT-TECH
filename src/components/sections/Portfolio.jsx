// src/components/sections/Portfolio.jsx
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { projects } from '../../data/projects'
import { useReveal } from '../../hooks/useReveal'
import Tag from '../ui/Tag'

export default function Portfolio() {
  const [ref, isVisible] = useReveal(0.1)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section id="portafolio" className="relative py-28 sm:py-36">
      {/* Orb decoration */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-20 -right-48" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#00D4FF]/70 mb-3`}
          >
            Portafolio
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Proyectos que{' '}
            <span className="gradient-text">hablan</span> por sí solos
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-4 mx-auto max-w-xl text-white/40 text-sm sm:text-base`}
            style={{ transitionDelay: '150ms' }}
          >
            Cada solución fue construida desde cero para resolver necesidades
            específicas de nuestros clientes.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal ${isVisible ? 'visible' : ''} group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden card-glow`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                />
                {/* Real image layer — replace placeholder by adding actual images to public/projects/ */}
                {/* <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/30 text-sm font-medium tracking-wide">
                    {project.title}
                  </span>
                </div>
                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-[#050A14]/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-2 text-white text-sm font-semibold">
                    <ExternalLink className="w-4 h-4" />
                    Ver Proyecto
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-white/40 font-medium tracking-wide mb-1">
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
