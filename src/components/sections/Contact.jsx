// src/components/sections/Contact.jsx
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'

const projectTypes = [
  'Landing Page',
  'Sistema CRM/ERP',
  'Aplicación Móvil',
  'E-commerce',
  'Integración de APIs',
  'Otro',
]

export default function Contact() {
  const [ref, isVisible] = useReveal(0.1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!form.projectType) newErrors.projectType = 'Seleccioná un tipo de proyecto'
    if (!form.message.trim()) newErrors.message = 'Escribí un mensaje'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const inputClasses =
    'w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#0066FF]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#0066FF]/30'

  return (
    <section id="contacto" className="relative py-28 sm:py-36">
      {/* Orb decoration */}
      <div className="orb orb-blue w-[500px] h-[500px] bottom-0 -left-40" />
      <div className="orb orb-cyan w-[300px] h-[300px] top-20 -right-20" />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#00D4FF]/70 mb-3`}
          >
            Contacto
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Hagamos{' '}
            <span className="gradient-text">realidad</span> tu proyecto
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-4 mx-auto max-w-xl text-white/40 text-sm sm:text-base`}
            style={{ transitionDelay: '150ms' }}
          >
            Contanos tu idea y te mostramos cómo podemos transformarla en una
            solución de software real.
          </p>
        </div>

        {/* Form card */}
        <div
          className={`reveal ${isVisible ? 'visible' : ''} rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10`}
          style={{ transitionDelay: '250ms' }}
        >
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-sm text-white/40 max-w-sm">
                Gracias por contactarnos. Nos pondremos en contacto contigo en
                las próximas 24 horas.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', company: '', projectType: '', message: '' })
                }}
                className="mt-6 text-sm text-[#00D4FF] hover:text-white transition-colors cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wide">
                  Nombre *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wide">
                  Empresa <span className="text-white/30">(opcional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={form.company}
                  onChange={handleChange('company')}
                  className={inputClasses}
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wide">
                  Tipo de Proyecto *
                </label>
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={handleChange('projectType')}
                  className={`${inputClasses} ${!form.projectType ? 'text-white/30' : ''} ${errors.projectType ? 'border-red-500/50' : ''}`}
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a1628] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-400">{errors.projectType}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wide">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describí brevemente tu proyecto o idea..."
                  value={form.message}
                  onChange={handleChange('message')}
                  className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" className="w-full mt-2">
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
