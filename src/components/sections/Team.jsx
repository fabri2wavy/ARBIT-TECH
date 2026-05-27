// src/components/sections/Team.jsx
import { Linkedin, Github } from 'lucide-react'
import { team } from '../../data/team'
import { useReveal } from '../../hooks/useReveal'

export default function Team() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section id="equipo" className="relative py-28 sm:py-36">
      {/* Orb decoration */}
      <div className="orb orb-cyan w-[400px] h-[400px] top-1/3 -right-32" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={`reveal ${isVisible ? 'visible' : ''} text-sm font-semibold uppercase tracking-widest text-[#00D4FF]/70 mb-3`}
          >
            Equipo
          </p>
          <h2
            className={`reveal ${isVisible ? 'visible' : ''} text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight`}
            style={{ transitionDelay: '100ms' }}
          >
            Las personas detrás del{' '}
            <span className="gradient-text">código</span>
          </h2>
          <p
            className={`reveal ${isVisible ? 'visible' : ''} mt-4 mx-auto max-w-xl text-white/40 text-sm sm:text-base`}
            style={{ transitionDelay: '150ms' }}
          >
            Un equipo joven, ambicioso y apasionado por construir tecnología que
            transforma negocios.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`reveal ${isVisible ? 'visible' : ''} group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center card-glow`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="mx-auto mb-6 relative">
                <div
                  className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto shadow-lg shadow-blue-500/10`}
                >
                  {/* Real image layer — replace placeholder by adding actual images to public/team/ */}
                  {/* <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" /> */}
                  <span className="text-2xl font-bold text-white/80 select-none">
                    {member.initials}
                  </span>
                </div>
                {/* Online dot */}
                <div className="absolute bottom-1 right-1/2 translate-x-[52px] w-4 h-4 rounded-full bg-emerald-400 border-[3px] border-[#050A14]" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold gradient-text mb-4">
                {member.role}
              </p>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.socials.linkedin}
                  className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.socials.github}
                  className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
