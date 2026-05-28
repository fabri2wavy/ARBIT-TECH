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
    'w-full rounded-xl bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#1E293B] placeholder-[#94A3B8] outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-[#059669]/20 focus:shadow-[0_0_0_1px_#059669]'

  return (
    <section id="contacto" className="relative py-32 sm:py-40">
      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#059669] mb-4`}
          >
            Contacto
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Hagamos{' '}
            <span className="text-[#059669]">realidad</span> tu proyecto
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-5 mx-auto max-w-xl text-[#64748B] text-sm sm:text-base font-normal`}
            style={{ transitionDelay: '150ms' }}
          >
            Contanos tu idea y te mostramos cómo podemos transformarla en una
            solución de software real.
          </p>
        </div>

        {/* Form card */}
        <div
          className={`reveal ${isVisible ? 'visible' : ''} bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200 p-8 sm:p-12`}
          style={{ transitionDelay: '250ms' }}
        >
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#F0FDF4]">
                <CheckCircle className="w-8 h-8 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-sm text-[#64748B] max-w-sm">
                Gracias por contactarnos. Nos pondremos en contacto contigo en
                las próximas 24 horas.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', company: '', projectType: '', message: '' })
                }}
                className="mt-8 text-sm text-[#059669] hover:text-[#10B981] font-semibold transition-colors cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wide">
                  Nombre *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={`${inputClasses} ${errors.name ? 'ring-2 ring-red-400/30 shadow-[0_0_0_1px_#ef4444]' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wide">
                  Empresa <span className="text-[#94A3B8]">(opcional)</span>
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
                <label htmlFor="projectType" className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wide">
                  Tipo de Proyecto *
                </label>
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={handleChange('projectType')}
                  className={`${inputClasses} ${!form.projectType ? 'text-[#94A3B8]' : ''} ${errors.projectType ? 'ring-2 ring-red-400/30 shadow-[0_0_0_1px_#ef4444]' : ''}`}
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-white text-[#1E293B]">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.projectType}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#475569] mb-2 uppercase tracking-wide">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describí brevemente tu proyecto o idea..."
                  value={form.message}
                  onChange={handleChange('message')}
                  className={`${inputClasses} resize-none ${errors.message ? 'ring-2 ring-red-400/30 shadow-[0_0_0_1px_#ef4444]' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" className="w-full mt-3">
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
