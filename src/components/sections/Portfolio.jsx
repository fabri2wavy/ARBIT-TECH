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
    <section id="portafolio" className="relative py-32 sm:py-40">
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#059669] mb-4`}
          >
            Portafolio
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Proyectos que{' '}
            <span className="text-[#059669]">hablan</span> por sí solos
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-5 mx-auto max-w-xl text-[#64748B] text-sm sm:text-base font-normal`}
            style={{ transitionDelay: '150ms' }}
          >
            Cada solución fue construida desde cero para resolver necesidades
            específicas de nuestros clientes.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal ${isVisible ? 'visible' : ''} group relative bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200 overflow-hidden`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                />
                {/* Real image layer — replace placeholder by adding actual images to public/projects/ */}
                {/* <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/60 text-sm font-medium tracking-wide">
                    {project.title}
                  </span>
                </div>
                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-[#1E293B]/50 flex items-center justify-center transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-xs text-[#94A3B8] font-medium tracking-wide mb-1">
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#64748B] font-normal leading-relaxed mb-5">
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
