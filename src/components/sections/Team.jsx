// src/components/sections/Team.jsx
import { Linkedin, Github, Phone } from 'lucide-react'
import { team } from '../../data/team'
import { useReveal } from '../../hooks/useReveal'

export default function Team() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section id="equipo" className="relative py-32 sm:py-40">
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#059669] mb-4`}
          >
            Equipo
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Las personas detrás del{' '}
            <span className="text-[#059669]">código</span>
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-5 mx-auto max-w-xl text-[#64748B] text-sm sm:text-base font-normal`}
            style={{ transitionDelay: '150ms' }}
          >
            Un equipo joven, ambicioso y apasionado por construir tecnología que
            transforma negocios.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`reveal ${isVisible ? 'visible' : ''} group bg-white border border-slate-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200 p-10 text-center`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Avatar con imagen real y filtro dinámico */}
              <div className="mx-auto mb-8 relative w-28 h-28">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shadow-sm">
                  <img
                    src={member.image}
                    alt={`Fotografía de ${member.name}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                    loading="lazy"
                  />
                </div>
                {/* Online dot ajustado al borde del círculo */}
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#10B981] border-[3px] border-white z-10" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-[#1E293B] mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#059669] mb-5">
                {member.role}
              </p>
              <p className="text-sm text-[#64748B] font-normal leading-relaxed mb-8">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="p-2.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] hover:bg-[#E2E8F0] transition-all duration-300"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials?.github && (
                  <a
                    href={member.socials.github}
                    className="p-2.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] hover:bg-[#E2E8F0] transition-all duration-300"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.socials?.whatsapp && (
                  <a
                    href={member.socials.whatsapp}
                    className="p-2.5 rounded-lg bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] hover:bg-[#E2E8F0] transition-all duration-300"
                    aria-label={`WhatsApp de ${member.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}